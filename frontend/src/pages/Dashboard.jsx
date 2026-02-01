import { useState, useEffect } from 'react';
import api from '../utils/api';
import { Package, DollarSign, TrendingUp, ShoppingCart } from 'lucide-react';

const Dashboard = () => {
    const [analytics, setAnalytics] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAnalytics();
    }, []);

    const fetchAnalytics = async () => {
        try {
            const response = await api.get('/dashboard/analytics');
            setAnalytics(response.data);
        } catch (error) {
            console.error('Failed to fetch analytics:', error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    const stats = [
        {
            title: 'Total Products',
            value: analytics?.totalProducts || 0,
            icon: Package,
            color: 'bg-blue-500',
        },
        {
            title: 'Active Products',
            value: analytics?.activeProducts || 0,
            icon: ShoppingCart,
            color: 'bg-green-500',
        },
        {
            title: 'Sold Products',
            value: analytics?.soldProducts || 0,
            icon: TrendingUp,
            color: 'bg-purple-500',
        },
        {
            title: 'Total Revenue',
            value: `Rp ${(analytics?.totalRevenue || 0).toLocaleString('id-ID')}`,
            icon: DollarSign,
            color: 'bg-yellow-500',
        },
    ];

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                <p className="text-gray-600 mt-1">Welcome back! Here's your overview.</p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="card">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                                </div>
                                <div className={`${stat.color} p-3 rounded-lg`}>
                                    <Icon className="text-white" size={24} />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Recent Products */}
            <div className="card">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Recent Products</h2>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Product</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Price</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Rank</th>
                                <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {analytics?.recentProducts?.map((product) => (
                                <tr key={product.id} className="border-b hover:bg-gray-50">
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-3">
                                            {product.produkimg?.[0] && (
                                                <img
                                                    src={product.produkimg[0].link}
                                                    alt={product.nama}
                                                    className="w-12 h-12 object-cover rounded"
                                                />
                                            )}
                                            <span className="font-medium text-gray-900">{product.nama}</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-gray-700">
                                        Rp {product.harga_rupiah.toLocaleString('id-ID')}
                                    </td>
                                    <td className="py-3 px-4">
                                        <span className="px-2 py-1 bg-primary-100 text-primary-700 rounded text-sm">
                                            {product.rank}
                                        </span>
                                    </td>
                                    <td className="py-3 px-4">
                                        <span
                                            className={`px-2 py-1 rounded text-sm ${product.status
                                                    ? 'bg-green-100 text-green-700'
                                                    : 'bg-red-100 text-red-700'
                                                }`}
                                        >
                                            {product.status ? 'Active' : 'Sold'}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
