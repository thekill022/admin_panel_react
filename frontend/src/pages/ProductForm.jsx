import { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../utils/api';
import toast from 'react-hot-toast';
import { ArrowLeft, Save, Upload, Trash2, Scan, Plus, Minus } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

const RANK_OPTIONS = [
    "Warrior", "Elite", "Master", "Grandmaster", "Epic",
    "Legend", "Mythic", "Mythic Glory", "Mythical Honor",
    "Mythical Glory", "Mythical Immortal"
];

const ProductForm = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const isEdit = !!id;

    // Form State
    const [title, setTitle] = useState("");
    const [rank, setRank] = useState("");
    const [discount, setDiscount] = useState("0");
    const [description, setDescription] = useState("");

    // Credentials
    const [emailAkun, setEmailAkun] = useState("");
    const [passwordAkun, setPasswordAkun] = useState("");

    // Status
    const [status, setStatus] = useState(true);
    const [highlight, setHighlight] = useState(false);

    // Images & Data
    const [images, setImages] = useState([]);

    // Prices (Final override)
    const [finalPriceIDR, setFinalPriceIDR] = useState("");
    const [finalPriceMYR, setFinalPriceMYR] = useState("");
    const [finalPriceUSD, setFinalPriceUSD] = useState("");

    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(false);

    // Helper Utils
    const generateUUID = () => {
        if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
            return crypto.randomUUID();
        }
        // Fallback for non-secure contexts (HTTP)
        return Date.now().toString(36) + Math.random().toString(36).substring(2);
    };

    const extractNumberFromPriceText = (t) =>
        t?.match(/[\d.,]+/)?.[0]?.replace(/\./g, "").replace(/,/g, ".");

    const parsePrices = (p) => {
        const o = {};
        Object.keys(p || {}).forEach((k) => {
            const v = String(p[k] ?? "");
            if (/rp|idr/i.test(v)) o.idr = extractNumberFromPriceText(v);
            if (/myr|rm/i.test(v)) o.myr = extractNumberFromPriceText(v);
            if (/usd|\$/i.test(v)) o.usd = extractNumberFromPriceText(v);
        });
        return o;
    };

    const groupHeroSkin = (a) =>
        a ? a.reduce((r, _, i) => (i % 2 === 0 ? [...r, { hero: a[i], skin: a[i + 1] || "" }] : r), []) : [];

    // Fetch Data for Edit
    useEffect(() => {
        if (isEdit) {
            setFetching(true);
            api.get(`/produk/${id}`)
                .then(res => {
                    const data = res.data;
                    setTitle(data.nama);
                    setRank(data.rank);
                    setDescription(data.deskripsi || "");
                    setDiscount(String(data.diskon || 0));
                    setEmailAkun(data.email_akun || "");
                    setPasswordAkun(data.password_akun || "");
                    setStatus(data.status);
                    setHighlight(data.highlight);

                    setFinalPriceIDR(data.harga_rupiah || "");
                    setFinalPriceMYR(data.harga_ringgit || "");
                    setFinalPriceUSD(data.harga_dolar || "");

                    // Map images and nested hero-skin data
                    if (data.produkimg) {
                        const mappedImages = data.produkimg.map(img => ({
                            id: String(img.id), // Use backend ID
                            url: img.link,
                            urutan: img.urutan,
                            file: null, // Existing image, no file object
                            scanning: false,
                            result: {
                                prices: {}, // Can't recover scanned prices from backend unless stored
                                grouped: img.hero?.map(h => ({
                                    hero: h.nama,
                                    skin: h.skin?.nama || "",
                                    alias: h.skin?.alias_skin || ""
                                })) || []
                            }
                        }));
                        setImages(mappedImages);
                    }
                })
                .catch(err => {
                    toast.error("Failed to load product");
                    navigate('/products');
                })
                .finally(() => setFetching(false));
        }
    }, [id]);

    // Handlers
    const onFilesSelected = (files) => {
        const newImages = files.map((file, index) => ({
            id: generateUUID(),
            file,
            url: URL.createObjectURL(file), // Preview URL
            urutan: images.length + index + 1,
            scanning: false,
            result: {
                prices: {},
                grouped: []
            }
        }));
        setImages(prev => [...prev, ...newImages]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: { 'image/*': [] },
        onDrop: onFilesSelected
    });

    const removeImage = (id) => {
        setImages(prev => prev.filter(img => img.id !== id));
    };

    const handleUrutanChange = (id, newUrutan) => {
        setImages(prev => prev.map(img => img.id === id ? { ...img, urutan: parseInt(newUrutan) || 0 } : img));
    };

    // OCR Logic
    const scanImage = async (id) => {
        const targetImage = images.find(img => img.id === id);
        if (!targetImage || !targetImage.file) {
            toast.error("Cannot scan this image (might be an existing server image)");
            return;
        }

        setImages(prev => prev.map(img => img.id === id ? { ...img, scanning: true, error: null } : img));

        try {
            const formData = new FormData();
            formData.append("file", targetImage.file);

            const response = await fetch('https://superadmin.merzzmlbb.com/ocr', {
                method: "POST",
                body: formData
            });

            if (!response.ok) throw new Error("OCR Failed");

            const data = await response.json();

            setImages(prev => prev.map(img => {
                if (img.id !== id) return img;

                const parsedPrices = parsePrices(data.prices);

                // Auto-fill global prices if empty
                if (!finalPriceIDR && parsedPrices.idr) setFinalPriceIDR(parsedPrices.idr);
                if (!finalPriceMYR && parsedPrices.myr) setFinalPriceMYR(parsedPrices.myr);
                if (!finalPriceUSD && parsedPrices.usd) setFinalPriceUSD(parsedPrices.usd);

                return {
                    ...img,
                    scanning: false,
                    result: {
                        prices: parsedPrices,
                        grouped: groupHeroSkin(data.hero_skin)
                    }
                };
            }));

            toast.success("Scan completed!");

        } catch (error) {
            console.error(error);
            setImages(prev => prev.map(img => img.id === id ? {
                ...img,
                scanning: false,
                error: "Scan failed. Please try again."
            } : img));
            toast.error("Scan failed");
        }
    };

    // Hero/Skin Manipulation
    const updateHeroSkin = (imageId, index, field, value) => {
        setImages(prev => prev.map(img => {
            if (img.id !== imageId) return img;
            const newGrouped = [...(img.result.grouped || [])];
            newGrouped[index] = { ...newGrouped[index], [field]: value };
            return {
                ...img,
                result: { ...img.result, grouped: newGrouped }
            };
        }));
    };

    const addHeroSkinRow = (imageId) => {
        setImages(prev => prev.map(img => {
            if (img.id !== imageId) return img;
            return {
                ...img,
                result: {
                    ...img.result,
                    grouped: [...(img.result.grouped || []), { hero: "", skin: "", alias: "" }]
                }
            };
        }));
    };

    const removeHeroSkinRow = (imageId, index) => {
        setImages(prev => prev.map(img => {
            if (img.id !== imageId) return img;
            return {
                ...img,
                result: {
                    ...img.result,
                    grouped: img.result.grouped.filter((_, i) => i !== index)
                }
            };
        }));
    };

    // Submit Logic
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title.trim()) return toast.error("Product name is required");
        if (!rank) return toast.error("Rank is required");
        if (!finalPriceIDR) return toast.error("Price (IDR) is required");
        if (images.length === 0) return toast.error("At least one image is required");

        setLoading(true);

        try {
            // Upload new images first
            const uploadedRefObject = {}; // Temp map: tempId -> url

            // Filter new files
            const newFiles = images.filter(img => img.file);

            if (newFiles.length > 0) {
                const uploadFormData = new FormData();
                newFiles.forEach(img => {
                    uploadFormData.append('images', img.file);
                });

                // Debug logging
                console.log('Uploading files:', newFiles.length);
                console.log('FormData entries:');
                for (let pair of uploadFormData.entries()) {
                    console.log(pair[0], pair[1]);
                }

                const uploadRes = await api.post('/upload/multiple', uploadFormData, {
                    headers: {
                        'Content-Type': undefined // Let browser set the correct multipart/form-data with boundary
                    }
                });
                const urls = uploadRes.data.urls || (Array.isArray(uploadRes.data) ? uploadRes.data : []); // Adjust based on upload response

                // Map back to images (assuming order is preserved)
                newFiles.forEach((img, i) => {
                    uploadedRefObject[img.id] = urls[i];
                });
            }

            // Construct payload
            const payloadImages = images.map((img, index) => ({
                link: img.file ? uploadedRefObject[img.id] : img.url,
                urutan: parseInt(img.urutan) || index + 1
            }));

            // Construct hero_skins payload
            // Map original image index to hero data
            const heroSkinsPayload = images.map((img, index) => ({
                image_index: index,
                data: img.result.grouped || []
            }));

            const payload = {
                nama: title,
                rank,
                harga_rupiah: finalPriceIDR,
                harga_ringgit: finalPriceMYR,
                harga_dolar: finalPriceUSD,
                diskon: discount,
                deskripsi: description,
                email_akun: emailAkun,
                password_akun: passwordAkun,
                status,
                highlight,
                images: payloadImages,
                hero_skins: heroSkinsPayload
            };

            if (isEdit) {
                await api.put(`/produk/${id}`, payload);
                toast.success("Product updated successfully");
            } else {
                await api.post('/produk', payload);
                toast.success("Product created successfully");
            }
            navigate('/products');

        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.error || "Failed to save product");
        } finally {
            setLoading(false);
        }
    };

    if (fetching) return <div className="p-10 text-center">Loading product data...</div>;

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-4">
                <button onClick={() => navigate('/products')} className="p-2 hover:bg-gray-100 rounded-lg">
                    <ArrowLeft size={24} />
                </button>
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">{isEdit ? 'Edit Product' : 'Add New Product'}</h1>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column: Form Fields */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="card space-y-4">
                        <h3 className="text-lg font-semibold">Basic Information</h3>
                        <div>
                            <label className="label">Title *</label>
                            <input value={title} onChange={e => setTitle(e.target.value)} className="input-field" placeholder="e.g. Akun Sultan Mythic" />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="label">Rank *</label>
                                <select value={rank} onChange={e => setRank(e.target.value)} className="input-field">
                                    <option value="">Select Rank</option>
                                    {RANK_OPTIONS.map(r => <option key={r} value={r}>{r}</option>)}
                                </select>
                            </div>
                            <div>
                                <label className="label">Discount (%)</label>
                                <input type="number" value={discount} onChange={e => setDiscount(e.target.value)} className="input-field" placeholder="0" />
                            </div>
                        </div>


                        {/* Final Prices */}
                        <div className="grid grid-cols-3 gap-4">
                            <div>
                                <label className="label">Price (IDR) *</label>
                                <input type="number" value={finalPriceIDR} onChange={e => setFinalPriceIDR(e.target.value)} className="input-field" placeholder="Rp" />
                            </div>
                            <div>
                                <label className="label">Price (MYR)</label>
                                <input type="number" value={finalPriceMYR} onChange={e => setFinalPriceMYR(e.target.value)} className="input-field" placeholder="RM" />
                            </div>
                            <div>
                                <label className="label">Price (USD)</label>
                                <input type="number" value={finalPriceUSD} onChange={e => setFinalPriceUSD(e.target.value)} className="input-field" placeholder="$" />
                            </div>
                        </div>
                    </div>

                    <div className="card space-y-4">
                        <h3 className="text-lg font-semibold">Account Credentials</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="label">Email</label>
                                <input value={emailAkun} onChange={e => setEmailAkun(e.target.value)} className="input-field" />
                            </div>
                            <div>
                                <label className="label">Password</label>
                                <input value={passwordAkun} onChange={e => setPasswordAkun(e.target.value)} className="input-field" />
                            </div>
                        </div>
                        <div className="flex gap-6 pt-2">
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" checked={status} onChange={e => setStatus(e.target.checked)} className="w-5 h-5 rounded text-primary-600" />
                                <span>Active</span>
                            </label>
                            <label className="flex items-center gap-2 cursor-pointer">
                                <input type="checkbox" checked={highlight} onChange={e => setHighlight(e.target.checked)} className="w-5 h-5 rounded text-primary-600" />
                                <span>Highlight</span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Right Column: Upload */}
                <div className="lg:col-span-1 space-y-6">
                    <div className="card">
                        <h3 className="text-lg font-semibold mb-4">Upload Images</h3>
                        <div {...getRootProps()} className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition ${isDragActive ? 'border-primary-500 bg-primary-50' : 'border-gray-300 hover:border-primary-400'}`}>
                            <input {...getInputProps()} />
                            <Upload className="mx-auto h-10 w-10 text-gray-400 mb-2" />
                            <p className="text-sm text-gray-600">Drag & drop images here, or click to select</p>
                            <p className="text-xs text-gray-400 mt-1">Allowed formats: JPG, PNG, WEBP</p>
                        </div>
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="btn-primary w-full flex justify-center items-center gap-2 py-3 text-lg"
                    >
                        <Save size={20} />
                        {loading ? 'Saving...' : 'Save Product'}
                    </button>
                </div>
            </div>

            {/* Bottom: Image Table & OCR Results */}
            {images.length > 0 && (
                <div className="card overflow-hidden">
                    <h3 className="text-lg font-semibold mb-4">Image Details & OCR Scan</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-gray-50 border-b">
                                    <th className="p-3 w-40">Image</th>
                                    <th className="p-3 w-40">Scan</th>
                                    <th className="p-3">Hero & Skin Details</th>
                                    <th className="p-3 w-24">Order</th>
                                    <th className="p-3 w-20">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {images.map((img, index) => (
                                    <tr key={img.id} className="align-top">
                                        <td className="p-3">
                                            <div className="w-32 h-40 bg-gray-100 rounded overflow-hidden border">
                                                <img src={img.url} alt="" className="w-full h-full object-cover" />
                                            </div>
                                        </td>
                                        <td className="p-3">
                                            {img.file ? (
                                                <button
                                                    onClick={() => scanImage(img.id)}
                                                    disabled={img.scanning}
                                                    className="btn-secondary w-full flex items-center justify-center gap-2 text-sm"
                                                >
                                                    <Scan size={14} />
                                                    {img.scanning ? 'Scanning...' : 'Scan AI'}
                                                </button>
                                            ) : (
                                                <span className="text-xs text-gray-400 italic">Existing Image</span>
                                            )}
                                            {img.error && <p className="text-xs text-red-500 mt-1">{img.error}</p>}
                                        </td>
                                        <td className="p-3">
                                            <div className="space-y-2">
                                                {/* Header for detail columns */}
                                                <div className="grid grid-cols-12 gap-2 text-xs font-semibold text-gray-500 mb-1">
                                                    <div className="col-span-4">Hero</div>
                                                    <div className="col-span-4">Skin</div>
                                                    <div className="col-span-3">Alias</div>
                                                    <div className="col-span-1"></div>
                                                </div>

                                                {(img.result.grouped || []).map((item, i) => (
                                                    <div key={i} className="grid grid-cols-12 gap-2 mb-1">
                                                        <input
                                                            className="col-span-4 input-field py-1 px-2 text-sm"
                                                            placeholder="Hero"
                                                            value={item.hero}
                                                            onChange={e => updateHeroSkin(img.id, i, 'hero', e.target.value)}
                                                        />
                                                        <input
                                                            className="col-span-4 input-field py-1 px-2 text-sm"
                                                            placeholder="Skin"
                                                            value={item.skin}
                                                            onChange={e => updateHeroSkin(img.id, i, 'skin', e.target.value)}
                                                        />
                                                        <input
                                                            className="col-span-3 input-field py-1 px-2 text-sm"
                                                            placeholder="Alias"
                                                            value={item.alias}
                                                            onChange={e => updateHeroSkin(img.id, i, 'alias', e.target.value)}
                                                        />
                                                        <button
                                                            onClick={() => removeHeroSkinRow(img.id, i)}
                                                            className="col-span-1 text-red-500 hover:bg-red-50 rounded p-1 flex items-center justify-center"
                                                        >
                                                            <Minus size={14} />
                                                        </button>
                                                    </div>
                                                ))}
                                                <button
                                                    onClick={() => addHeroSkinRow(img.id)}
                                                    className="text-xs text-primary-600 flex items-center gap-1 hover:underline mt-2"
                                                >
                                                    <Plus size={12} /> Add Row
                                                </button>
                                            </div>
                                        </td>
                                        <td className="p-3">
                                            <input
                                                type="number"
                                                value={img.urutan}
                                                onChange={e => handleUrutanChange(img.id, e.target.value)}
                                                className="input-field w-16 text-center"
                                            />
                                        </td>
                                        <td className="p-3 text-center">
                                            <button
                                                onClick={() => removeImage(img.id)}
                                                className="text-red-600 hover:bg-red-50 p-2 rounded"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductForm;
