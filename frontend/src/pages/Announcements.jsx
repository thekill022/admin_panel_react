import { useState, useEffect } from 'react';
import api from '../utils/api';
import toast from 'react-hot-toast';
import { Plus, Edit, Trash2, Megaphone, AlertCircle, CheckCircle, Info, Flame, MessageCircle, Instagram } from 'lucide-react';
import RichTextEditor from '../components/RichTextEditor';

const Announcements = () => {
    const [announcements, setAnnouncements] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
        id: null,
        pengumuman: '',
        icon: 'bullhorn',
        icon_position: 'start',
        highlight: false,
    });

    // Icon options matching Next.js
    const iconOptions = [
        { value: 'bullhorn', label: 'Megaphone', Icon: Megaphone },
        { value: 'warning', label: 'Warning', Icon: AlertCircle },
        { value: 'success', label: 'Success', Icon: CheckCircle },
        { value: 'info', label: 'Info', Icon: Info },
        { value: 'hot', label: 'Hot', Icon: Flame },
        { value: 'whatsapp', label: 'WhatsApp', Icon: MessageCircle },
        { value: 'instagram', label: 'Instagram', Icon: Instagram },
    ];

    const iconPositionOptions = [
        { value: 'start', label: 'Di Awal Saja' },
        { value: 'both', label: 'Di Awal & Akhir' },
        { value: 'end', label: 'Di Akhir Saja' },
    ];

    useEffect(() => {
        fetchAnnouncements();
    }, []);

    const fetchAnnouncements = async () => {
        try {
            const response = await api.get('/pengumuman');
            setAnnouncements(response.data);
        } catch (error) {
            toast.error('Failed to fetch announcements');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.pengumuman.trim()) {
            toast.error('Announcement text is required');
            return;
        }

        try {
            if (editMode) {
                await api.put(`/pengumuman/${formData.id}`, formData);
                toast.success('Announcement updated');
            } else {
                await api.post('/pengumuman', formData);
                toast.success('Announcement created');
            }

            resetForm();
            fetchAnnouncements();
        } catch (error) {
            toast.error('Failed to save announcement');
        }
    };

    const handleEdit = (announcement) => {
        setFormData({
            id: announcement.id,
            pengumuman: announcement.pengumuman,
            icon: announcement.icon || 'bullhorn',
            icon_position: announcement.icon_position || 'start',
            highlight: announcement.highlight || false,
        });
        setEditMode(true);
        setShowForm(true);
    };

    const handleDelete = async (id) => {
        if (!confirm('Delete this announcement?')) return;
        try {
            await api.delete(`/pengumuman/${id}`);
            toast.success('Announcement deleted');
            fetchAnnouncements();
        } catch (error) {
            toast.error('Failed to delete announcement');
        }
    };

    const resetForm = () => {
        setFormData({
            id: null,
            pengumuman: '',
            icon: 'bullhorn',
            icon_position: 'start',
            highlight: false,
        });
        setEditMode(false);
        setShowForm(false);
    };

    const renderIcon = (announcement, position) => {
        const iconOption = iconOptions.find(o => o.value === announcement.icon);
        const Icon = iconOption ? iconOption.Icon : Megaphone;

        const shouldShow =
            announcement.icon_position === 'both' ||
            (announcement.icon_position === 'start' && position === 'start') ||
            (announcement.icon_position === 'end' && position === 'end');

        if (!shouldShow) return null;

        return <Icon className="text-2xl flex-shrink-0 text-gray-600" />;
    };

    if (loading) {
        return <div className="flex justify-center py-12"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div></div>;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Announcements</h1>
                    <p className="text-gray-600 mt-1">Manage website announcements</p>
                </div>
                <button onClick={() => setShowForm(!showForm)} className="btn-primary inline-flex items-center gap-2">
                    <Plus size={20} />
                    Add Announcement
                </button>
            </div>

            {showForm && (
                <div className="card">
                    <h3 className="text-lg font-semibold mb-4">{editMode ? 'Edit' : 'New'} Announcement</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Announcement Text with Rich Text Editor */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Announcement Text *
                            </label>
                            <RichTextEditor
                                content={formData.pengumuman}
                                onChange={(html) => setFormData({ ...formData, pengumuman: html })}
                            />
                            <p className="text-xs text-gray-500 mt-2">
                                Select text and use toolbar to format (bold, italic, underline, highlight)
                            </p>
                        </div>

                        {/* Icon Selection */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">Select Icon</label>
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
                                {iconOptions.map(({ value, label, Icon }) => (
                                    <button
                                        key={value}
                                        type="button"
                                        onClick={() => setFormData({ ...formData, icon: value })}
                                        className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${formData.icon === value
                                            ? 'border-primary-500 bg-primary-50 shadow-md scale-105'
                                            : 'border-gray-300 hover:border-gray-400'
                                            }`}
                                    >
                                        <Icon size={32} className={formData.icon === value ? 'text-primary-600' : 'text-gray-600'} />
                                        <span className="text-xs font-medium text-gray-700">{label}</span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Icon Position */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-3">Icon Position</label>
                            <div className="space-y-2">
                                {iconPositionOptions.map(({ value, label }) => (
                                    <label key={value} className="flex items-center gap-3 cursor-pointer p-3 rounded-lg hover:bg-gray-50 transition">
                                        <input
                                            type="radio"
                                            name="iconPosition"
                                            value={value}
                                            checked={formData.icon_position === value}
                                            onChange={(e) => setFormData({ ...formData, icon_position: e.target.value })}
                                            className="w-4 h-4 text-primary-600 focus:ring-primary-500"
                                        />
                                        <span className="text-sm font-medium text-gray-700">{label}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Highlight Checkbox */}
                        <label className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                checked={formData.highlight}
                                onChange={(e) => setFormData({ ...formData, highlight: e.target.checked })}
                                className="w-4 h-4 text-primary-600 rounded"
                            />
                            <span className="text-sm font-medium text-gray-700">Highlight this announcement</span>
                        </label>

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

            {/* Announcements List */}
            <div className="space-y-4">
                {announcements.map((announcement) => (
                    <div key={announcement.id} className="card">
                        <div className="flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4 flex-1">
                                {renderIcon(announcement, 'start')}
                                <div
                                    className="flex-1 prose prose-sm max-w-none text-gray-800 [&_mark]:bg-yellow-200 [&_mark]:px-2 [&_mark]:py-1 [&_mark]:rounded [&_mark]:font-semibold [&_b]:text-gray-900 [&_strong]:text-gray-900 [&_i]:text-gray-700 [&_u]:text-gray-700"
                                    dangerouslySetInnerHTML={{ __html: announcement.pengumuman }}
                                />
                                {renderIcon(announcement, 'end')}
                            </div>

                            <div className="flex items-center gap-2">
                                {announcement.highlight && (
                                    <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded font-medium">
                                        Highlighted
                                    </span>
                                )}
                                <button
                                    onClick={() => handleEdit(announcement)}
                                    className="text-blue-600 hover:bg-blue-50 p-2 rounded"
                                    title="Edit"
                                >
                                    <Edit size={18} />
                                </button>
                                <button
                                    onClick={() => handleDelete(announcement.id)}
                                    className="text-red-600 hover:bg-red-50 p-2 rounded"
                                    title="Delete"
                                >
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {announcements.length === 0 && (
                <div className="text-center py-12 card">
                    <Megaphone className="mx-auto text-gray-400 mb-4" size={48} />
                    <p className="text-gray-500">No announcements found. Create your first announcement!</p>
                </div>
            )}
        </div>
    );
};

export default Announcements;
