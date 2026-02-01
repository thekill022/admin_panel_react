import { useState, useEffect } from 'react';
import api from '../utils/api';
import toast from 'react-hot-toast';
import { Plus, Trash2, Image as ImageIcon } from 'lucide-react';
import ImageUpload from '../components/ImageUpload';

const Banners = () => {
    const [banners, setBanners] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [uploadedUrl, setUploadedUrl] = useState('');
    const [highlight, setHighlight] = useState(false);
    const [zoomImage, setZoomImage] = useState(null);

    const MAX_HIGHLIGHT = 5; // Maksimal banner yang bisa di-highlight

    useEffect(() => {
        fetchBanners();
    }, []);

    const fetchBanners = async () => {
        try {
            const response = await api.get('/banner');
            setBanners(response.data);
        } catch (error) {
            toast.error('Failed to fetch banners');
        } finally {
            setLoading(false);
        }
    };

    const handleImageUpload = (urls) => {
        if (urls && urls.length > 0) {
            setUploadedUrl(urls[0]);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!uploadedUrl) {
            toast.error('Please upload a banner image');
            return;
        }

        // Check highlight limit saat create
        if (highlight) {
            const activeCount = countActiveBanners();
            if (activeCount >= MAX_HIGHLIGHT) {
                toast.error(`Maksimal ${MAX_HIGHLIGHT} Banner Untuk Highlight`);
                return;
            }
        }

        try {
            await api.post('/banner', { url: uploadedUrl, highlight });
            toast.success('Banner created successfully');
            setUploadedUrl('');
            setHighlight(false);
            setShowForm(false);
            fetchBanners();
        } catch (error) {
            toast.error('Failed to create banner');
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete this banner?')) return;
        try {
            await api.delete(`/banner/${id}`);
            toast.success('Banner deleted');
            fetchBanners();
        } catch (error) {
            toast.error('Failed to delete banner');
        }
    };

    const updateHighlight = async (id, isActive) => {
        try {
            await api.put(`/banner/${id}`, { highlight: isActive });
            toast.success('Banner highlight updated');
            fetchBanners();
        } catch (error) {
            toast.error('Failed to update banner');
        }
    };

    // Hitung jumlah banner yang aktif (exclude banner tertentu)
    const countActiveBanners = (excludeId) => {
        return banners.filter(b => b.highlight && b.id !== excludeId).length;
    };

    if (loading) {
        return <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div></div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Banners</h1>
                    <p className="text-gray-600 mt-1">Manage website banners (Max {MAX_HIGHLIGHT} highlighted)</p>
                </div>
                <button onClick={() => setShowForm(!showForm)} className="btn-primary inline-flex items-center gap-2">
                    <Plus size={20} />
                    Add Banner
                </button>
            </div>

            {showForm && (
                <div className="card">
                    <h3 className="text-lg font-semibold mb-4">New Banner</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Banner Image *</label>
                            <ImageUpload
                                multiple={false}
                                existingImages={uploadedUrl ? [uploadedUrl] : []}
                                onUploadComplete={handleImageUpload}
                                onRemoveExisting={() => setUploadedUrl('')}
                            />
                        </div>

                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={highlight}
                                onChange={(e) => setHighlight(e.target.checked)}
                                className="w-4 h-4 text-primary-600 rounded"
                            />
                            <span className="text-sm font-medium text-gray-700">Highlight this banner</span>
                        </label>

                        <div className="flex gap-3">
                            <button type="submit" className="btn-primary">Create</button>
                            <button type="button" onClick={() => {
                                setShowForm(false);
                                setUploadedUrl('');
                                setHighlight(false);
                            }} className="btn-secondary">Cancel</button>
                        </div>
                    </form>
                </div>
            )}

            {/* Banners Table */}
            <div className="card overflow-hidden p-0">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Preview
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Highlight
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {banners.map((banner) => (
                                <tr key={banner.id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4">
                                        <img
                                            src={banner.url}
                                            alt="Banner"
                                            className="w-32 h-20 object-cover rounded cursor-pointer hover:opacity-80 transition"
                                            onClick={() => setZoomImage(banner.url)}
                                        />
                                    </td>
                                    <td className="px-6 py-4">
                                        <select
                                            value={banner.highlight ? 'aktif' : 'tidak-aktif'}
                                            onChange={(e) => {
                                                const newActive = e.target.value === 'aktif';

                                                // Cek limit jika mau set ke aktif
                                                if (newActive && !banner.highlight) {
                                                    const activeCount = countActiveBanners(banner.id);
                                                    if (activeCount >= MAX_HIGHLIGHT) {
                                                        toast.error(`Maksimal ${MAX_HIGHLIGHT} Banner Untuk Highlight`);
                                                        return;
                                                    }
                                                }

                                                updateHighlight(banner.id, newActive);
                                            }}
                                            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                                        >
                                            <option value="aktif">Aktif</option>
                                            <option value="tidak-aktif">Tidak Aktif</option>
                                        </select>
                                    </td>
                                    <td className="px-6 py-4">
                                        <button
                                            onClick={() => handleDelete(banner.id)}
                                            className="text-red-600 hover:bg-red-50 px-3 py-2 rounded transition inline-flex items-center gap-2"
                                        >
                                            <Trash2 size={18} />
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {banners.length === 0 && (
                <div className="text-center py-12 card">
                    <ImageIcon className="mx-auto text-gray-400 mb-4" size={48} />
                    <p className="text-gray-500">No banners found. Create your first banner!</p>
                </div>
            )}

            {/* Zoom Modal */}
            {zoomImage && (
                <div
                    className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 cursor-pointer p-4"
                    onClick={() => setZoomImage(null)}
                >
                    <img
                        src={zoomImage}
                        alt="Banner Preview"
                        className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
                    />
                </div>
            )}
        </div>
    );
};

export default Banners;
