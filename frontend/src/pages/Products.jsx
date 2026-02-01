import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../utils/api';
import toast from 'react-hot-toast';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await api.get('/produk/all');
            setProducts(response.data);
        } catch (error) {
            toast.error('Failed to fetch products');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this product?')) return;

        try {
            await api.delete(`/produk/${id}`);
            toast.success('Product deleted successfully');
            fetchProducts();
        } catch (error) {
            toast.error('Failed to delete product');
        }
    };

    const filteredProducts = products.filter((product) =>
        product.nama.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Products</h1>
                    <p className="text-gray-600 mt-1">Manage your product inventory</p>
                </div>
                <Link to="/products/new" className="btn-primary inline-flex items-center gap-2">
                    <Plus size={20} />
                    Add Product
                </Link>
            </div>

            {/* Search */}
            <div className="card">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                    />
                </div>
            </div>

            {/* Products Table */}
            <div className="card overflow-hidden p-0">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Product</th>
                                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Price (IDR)</th>
                                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Rank</th>
                                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Status</th>
                                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Discount</th>
                                <th className="text-right py-3 px-6 text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {filteredProducts.map((product) => (
                                <tr key={product.id} className="hover:bg-gray-50">
                                    <td className="py-4 px-6">
                                        <div className="flex items-center gap-3">
                                            {product.produkimg?.[0] && (
                                                <img
                                                    src={product.produkimg[0].link}
                                                    alt={product.nama}
                                                    className="w-16 h-16 object-cover rounded-lg"
                                                />
                                            )}
                                            <div>
                                                <p className="font-medium text-gray-900">{product.nama}</p>
                                                {product.highlight && (
                                                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded mt-1 inline-block">
                                                        Highlighted
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </td>
                                    <td className="py-4 px-6 text-gray-700">
                                        Rp {product.harga_rupiah.toLocaleString('id-ID')}
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">
                                            {product.rank}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6">
                                        <span
                                            className={`px-2 py-1 rounded text-sm font-medium ${product.status
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-red-100 text-red-700'
                                                }`}
                                        >
                                            {product.status ? 'Active' : 'Sold'}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-gray-700">
                                        {product.diskon ? `${product.diskon}%` : '-'}
                                    </td>
                                    <td className="py-4 px-6">
                                        <div className="flex items-center justify-end gap-2">
                                            <Link
                                                to={`/products/edit/${product.id}`}
                                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                title="Edit"
                                            >
                                                <Edit size={18} />
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(product.id)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 size={18} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {filteredProducts.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No products found</p>
                </div>
            )}
        </div>
    );
};

export default Products;
