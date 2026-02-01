import { useState, useEffect } from 'react';
import api from '../utils/api';
import toast from 'react-hot-toast';
import { Star, Search, Package } from 'lucide-react';

const HighlightProduk = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [updating, setUpdating] = useState(null);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await api.get('/produk');
            setProducts(response.data);
        } catch (error) {
            toast.error('Failed to fetch products');
        } finally {
            setLoading(false);
        }
    };

    const toggleHighlight = async (productId, currentStatus) => {
        // If trying to highlight a new product (currentStatus is false)
        if (!currentStatus) {
            const currentHighlightedCount = products.filter(p => p.highlight).length;
            if (currentHighlightedCount >= 8) {
                toast.error('Maksimal 8 Produk Untuk Highlight');
                return;
            }
        }

        setUpdating(productId);
        try {
            await api.put(`/produk/${productId}`, {
                highlight: !currentStatus
            });

            // Update local state
            setProducts(products.map(p =>
                p.id === productId ? { ...p, highlight: !currentStatus } : p
            ));

            toast.success(`Product ${!currentStatus ? 'highlighted' : 'unhighlighted'}`);
        } catch (error) {
            toast.error('Failed to update product');
        } finally {
            setUpdating(null);
        }
    };

    const filteredProducts = products.filter(product =>
        product.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.rank?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const highlightedCount = products.filter(p => p.highlight).length;

    if (loading) {
        return <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div></div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Highlight Produk</h1>
                    <p className="text-gray-600 mt-1">
                        Manage product highlights ({highlightedCount}/8 highlighted)
                    </p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="card">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search products by name or rank..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="input-field pl-10"
                    />
                </div>
            </div>

            {/* Products Table */}
            <div className="card overflow-hidden p-0">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-200">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Product
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Rank
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                                <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Highlight
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredProducts.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50 transition">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-3">
                                            {product.gambar ? (
                                                <img
                                                    src={product.gambar}
                                                    alt={product.nama}
                                                    className="w-12 h-12 object-cover rounded"
                                                />
                                            ) : (
                                                <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center">
                                                    <Package className="text-gray-400" size={20} />
                                                </div>
                                            )}
                                            <div>
                                                <p className="font-medium text-gray-900">{product.nama}</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="inline-block px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                                            {product.rank || 'N/A'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="font-medium text-gray-900">
                                            Rp {parseInt(product.harga_rupiah).toLocaleString('id-ID')}
                                        </p>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <button
                                            onClick={() => toggleHighlight(product.id, product.highlight)}
                                            disabled={updating === product.id}
                                            className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg transition ${product.highlight
                                                ? 'bg-yellow-100 text-yellow-700 hover:bg-yellow-200'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                } ${updating === product.id ? 'opacity-50 cursor-not-allowed' : ''}`}
                                        >
                                            <Star
                                                size={16}
                                                className={product.highlight ? 'fill-yellow-500' : ''}
                                            />
                                            {updating === product.id ? 'Updating...' : (product.highlight ? 'Highlighted' : 'Highlight')}
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-12 card">
                    <Package className="mx-auto text-gray-400 mb-4" size={48} />
                    <p className="text-gray-500">
                        {searchTerm ? 'No products found matching your search.' : 'No products available.'}
                    </p>
                </div>
            )}
        </div>
    );
};

export default HighlightProduk;
