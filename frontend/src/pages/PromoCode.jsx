import { useState, useEffect } from 'react';
import api from '../utils/api';
import toast from 'react-hot-toast';
import { Plus, Trash2 } from 'lucide-react';

const PromoCode = () => {
    const [promos, setPromos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        kode: '',
        diskon: '',
        start_date: '',
        end_date: '',
        max_claims: '',
        min_purchase: '',
        max_discount: '',
        active: true,
    });

    useEffect(() => {
        fetchPromos();
    }, []);

    const fetchPromos = async () => {
        try {
            const response = await api.get('/promo');
            setPromos(response.data);
        } catch (error) {
            toast.error('Failed to fetch promo codes');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/promo', formData);
            toast.success('Promo code created');
            setFormData({
                kode: '',
                diskon: '',
                start_date: '',
                end_date: '',
                max_claims: '',
                min_purchase: '',
                max_discount: '',
                active: true,
            });
            setShowForm(false);
            fetchPromos();
        } catch (error) {
            toast.error('Failed to create promo code');
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete this promo code?')) return;
        try {
            await api.delete(`/promo/${id}`);
            toast.success('Promo code deleted');
            fetchPromos();
        } catch (error) {
            toast.error('Failed to delete promo code');
        }
    };

    if (loading) {
        return <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div></div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Promo Codes</h1>
                    <p className="text-gray-600 mt-1">Manage discount promo codes</p>
                </div>
                <button onClick={() => setShowForm(!showForm)} className="btn-primary inline-flex items-center gap-2">
                    <Plus size={20} />
                    Add Promo Code
                </button>
            </div>

            {showForm && (
                <div className="card">
                    <h3 className="text-lg font-semibold mb-4">New Promo Code</h3>
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Code *</label>
                            <input
                                type="text"
                                value={formData.kode}
                                onChange={(e) => setFormData({ ...formData, kode: e.target.value })}
                                className="input-field"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Discount (%) *</label>
                            <input
                                type="number"
                                value={formData.diskon}
                                onChange={(e) => setFormData({ ...formData, diskon: e.target.value })}
                                className="input-field"
                                min="0"
                                max="100"
                                step="0.01"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                            <input
                                type="datetime-local"
                                value={formData.start_date}
                                onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                                className="input-field"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
                            <input
                                type="datetime-local"
                                value={formData.end_date}
                                onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                                className="input-field"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Max Claims</label>
                            <input
                                type="number"
                                value={formData.max_claims}
                                onChange={(e) => setFormData({ ...formData, max_claims: e.target.value })}
                                className="input-field"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Min Purchase</label>
                            <input
                                type="number"
                                value={formData.min_purchase}
                                onChange={(e) => setFormData({ ...formData, min_purchase: e.target.value })}
                                className="input-field"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Max Discount</label>
                            <input
                                type="number"
                                value={formData.max_discount}
                                onChange={(e) => setFormData({ ...formData, max_discount: e.target.value })}
                                className="input-field"
                            />
                        </div>
                        <div className="flex items-end">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={formData.active}
                                    onChange={(e) => setFormData({ ...formData, active: e.target.checked })}
                                    className="w-4 h-4 text-primary-600 rounded"
                                />
                                <span className="text-sm font-medium text-gray-700">Active</span>
                            </label>
                        </div>
                        <div className="md:col-span-2 flex gap-3">
                            <button type="submit" className="btn-primary">Create</button>
                            <button type="button" onClick={() => setShowForm(false)} className="btn-secondary">Cancel</button>
                        </div>
                    </form>
                </div>
            )}

            <div className="card overflow-hidden p-0">
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Code</th>
                                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Discount</th>
                                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Claims</th>
                                <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Status</th>
                                <th className="text-right py-3 px-6 text-sm font-semibold text-gray-700">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {promos.map((promo) => (
                                <tr key={promo.id} className="hover:bg-gray-50">
                                    <td className="py-4 px-6 font-medium text-gray-900">{promo.kode}</td>
                                    <td className="py-4 px-6 text-gray-700">{promo.diskon}%</td>
                                    <td className="py-4 px-6 text-gray-700">
                                        {promo.current_claims} / {promo.max_claims || '∞'}
                                    </td>
                                    <td className="py-4 px-6">
                                        <span className={`px-2 py-1 rounded text-sm ${promo.active ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                            {promo.active ? 'Active' : 'Inactive'}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 text-right">
                                        <button onClick={() => handleDelete(promo.id)} className="text-red-600 hover:bg-red-50 p-2 rounded">
                                            <Trash2 size={18} />
                                        </button>
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

export default PromoCode;
