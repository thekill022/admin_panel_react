import { useState, useEffect } from 'react';
import api from '../utils/api';
import toast from 'react-hot-toast';
import { Plus, Edit, Trash2, Zap, Calendar, Percent } from 'lucide-react';

const FlashSale = () => {
    const [flashSales, setFlashSales] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        id: null,
        diskon: '',
        start_date: '',
        end_date: '',
    });

    useEffect(() => {
        fetchFlashSales();
    }, []);

    const fetchFlashSales = async () => {
        try {
            const response = await api.get('/flash-sale');
            setFlashSales(response.data);
        } catch (error) {
            toast.error('Failed to fetch flash sales');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.diskon || !formData.start_date || !formData.end_date) {
            toast.error('All fields are required');
            return;
        }

        if (formData.diskon < 1 || formData.diskon > 100) {
            toast.error('Discount must be between 1-100%');
            return;
        }

        try {
            if (editMode) {
                await api.put(`/flash-sale/${formData.id}`, formData);
                toast.success('Flash sale updated');
            } else {
                await api.post('/flash-sale', formData);
                toast.success('Flash sale created');
            }

            resetForm();
            fetchFlashSales();
        } catch (error) {
            toast.error(error.response?.data?.error || 'Failed to save flash sale');
        }
    };

    const handleEdit = (flashSale) => {
        setFormData({
            id: flashSale.id,
            diskon: flashSale.diskon,
            start_date: new Date(flashSale.start_date).toISOString().slice(0, 16),
            end_date: new Date(flashSale.end_date).toISOString().slice(0, 16),
        });
        setEditMode(true);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete this flash sale?')) return;
        try {
            await api.delete(`/flash-sale/${id}`);
            toast.success('Flash sale deleted');
            fetchFlashSales();
        } catch (error) {
            toast.error('Failed to delete flash sale');
        }
    };

    const resetForm = () => {
        setFormData({
            id: null,
            diskon: '',
            start_date: '',
            end_date: '',
        });
        setEditMode(false);
        setShowForm(false);
    };

    const isActive = (flashSale) => {
        const now = new Date();
        const start = new Date(flashSale.start_date);
        const end = new Date(flashSale.end_date);
        return now >= start && now <= end;
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleString('id-ID', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (loading) {
        return <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div></div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Flash Sale</h1>
                    <p className="text-gray-600 mt-1">Manage flash sale campaigns</p>
                </div>
                <button onClick={() => setShowForm(!showForm)} className="btn-primary inline-flex items-center gap-2">
                    <Plus size={20} />
                    Add Flash Sale
                </button>
            </div>

            {showForm && (
                <div className="card">
                    <h3 className="text-lg font-semibold mb-4">{editMode ? 'Edit' : 'New'} Flash Sale</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Discount (%) *
                            </label>
                            <div className="relative">
                                <input
                                    type="number"
                                    min="1"
                                    max="100"
                                    value={formData.diskon}
                                    onChange={(e) => setFormData({ ...formData, diskon: e.target.value })}
                                    className="input-field pr-10"
                                    placeholder="e.g., 50"
                                    required
                                />
                                <Percent className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Enter discount percentage (1-100)</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Start Date & Time *
                                </label>
                                <input
                                    type="datetime-local"
                                    value={formData.start_date}
                                    onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
                                    className="input-field"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    End Date & Time *
                                </label>
                                <input
                                    type="datetime-local"
                                    value={formData.end_date}
                                    onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
                                    className="input-field"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button type="submit" className="btn-primary">
                                {editMode ? 'Update' : 'Create'}
                            </button>
                            <button type="button" onClick={resetForm} className="btn-secondary">
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {/* Flash Sales List */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {flashSales.map((flashSale) => (
                    <div key={flashSale.id} className={`card relative ${isActive(flashSale) ? 'ring-2 ring-primary-500' : ''}`}>
                        {isActive(flashSale) && (
                            <div className="absolute top-4 right-4">
                                <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
                                    <Zap size={12} />
                                    Active
                                </span>
                            </div>
                        )}

                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                                <Percent className="text-primary-600" size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">{flashSale.diskon}%</h3>
                                <p className="text-sm text-gray-500">Discount</p>
                            </div>
                        </div>

                        <div className="space-y-2 mb-4">
                            <div className="flex items-start gap-2 text-sm">
                                <Calendar className="text-gray-400 flex-shrink-0 mt-0.5" size={16} />
                                <div>
                                    <p className="text-gray-500">Start:</p>
                                    <p className="text-gray-900 font-medium">{formatDate(flashSale.start_date)}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-2 text-sm">
                                <Calendar className="text-gray-400 flex-shrink-0 mt-0.5" size={16} />
                                <div>
                                    <p className="text-gray-500">End:</p>
                                    <p className="text-gray-900 font-medium">{formatDate(flashSale.end_date)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-2 pt-4 border-t border-gray-200">
                            <button
                                onClick={() => handleEdit(flashSale)}
                                className="flex-1 btn-secondary text-blue-600 hover:bg-blue-50 flex items-center justify-center gap-2"
                            >
                                <Edit size={16} />
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(flashSale.id)}
                                className="flex-1 btn-secondary text-red-600 hover:bg-red-50 flex items-center justify-center gap-2"
                            >
                                <Trash2 size={16} />
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {flashSales.length === 0 && (
                <div className="text-center py-12 card">
                    <Zap className="mx-auto text-gray-400 mb-4" size={48} />
                    <p className="text-gray-500">No flash sales found. Create your first flash sale!</p>
                </div>
            )}
        </div>
    );
};

export default FlashSale;
