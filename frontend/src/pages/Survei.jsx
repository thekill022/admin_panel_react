import { useState, useEffect } from 'react';
import api from '../utils/api';
import toast from 'react-hot-toast';
import { PieChart, BarChart3, List, CheckCircle } from 'lucide-react';
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
} from 'recharts';

const Survei = () => {
    const [rawData, setRawData] = useState([]);
    const [chartData, setChartData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchSurveys();
    }, []);

    const normalizeForChart = (raw) => {
        const allowed = ['instagram', 'influencer', 'teman'];

        const result = {
            instagram: 0,
            influencer: 0,
            teman: 0,
            lainnya: 0,
        };

        raw.forEach((item) => {
            const key = item.keterangan?.toLowerCase?.() ?? 'lainnya';
            const jumlah = Number(item.jumlah);
            const safeJumlah = Number.isFinite(jumlah) ? jumlah : 0;

            if (allowed.includes(key)) {
                result[key] += safeJumlah;
            } else {
                result.lainnya += safeJumlah;
            }
        });

        return Object.entries(result)
            .filter(([, jumlah]) => jumlah > 0)
            .map(([keterangan, jumlah]) => ({ keterangan, jumlah }));
    };

    const fetchSurveys = async () => {
        try {
            const response = await api.get('/survei');
            const apiData = Array.isArray(response.data) ? response.data : [];

            setRawData(apiData);
            setChartData(normalizeForChart(apiData));
        } catch (error) {
            toast.error('Failed to fetch survey data');
            console.error('Fetch survei error:', error);
        } finally {
            setLoading(false);
        }
    };

    const totalRespon = rawData.reduce(
        (acc, cur) => acc + (Number.isFinite(cur.jumlah) ? cur.jumlah : 0),
        0
    );

    if (loading) {
        return (
            <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex items-center gap-3">
                <PieChart className="text-blue-600" size={32} />
                <div>
                    <h1 className="text-3xl font-bold text-gray-900">Statistik Survei Pengguna</h1>
                    <p className="text-gray-600 mt-1">Sumber pengguna mengetahui Merz Store</p>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="card flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="text-green-600" size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Total Respon</p>
                        <p className="text-2xl font-bold text-gray-900">{totalRespon}</p>
                    </div>
                </div>

                <div className="card flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <BarChart3 className="text-blue-600" size={24} />
                    </div>
                    <div>
                        <p className="text-sm text-gray-500">Kategori</p>
                        <p className="text-2xl font-bold text-gray-900">{chartData.length}</p>
                    </div>
                </div>
            </div>

            {/* Chart */}
            <div className="card">
                <div className="flex items-center gap-2 mb-6">
                    <BarChart3 className="text-blue-600" size={20} />
                    <h2 className="text-lg font-semibold text-gray-900">Distribusi Survei</h2>
                </div>

                <div className="w-full h-72">
                    {chartData.length > 0 ? (
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                                <XAxis
                                    dataKey="keterangan"
                                    tick={{ fill: '#6b7280' }}
                                    style={{ textTransform: 'capitalize' }}
                                />
                                <YAxis
                                    allowDecimals={false}
                                    tick={{ fill: '#6b7280' }}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#fff',
                                        border: '1px solid #e5e7eb',
                                        borderRadius: '0.5rem',
                                        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                                    }}
                                    labelStyle={{ textTransform: 'capitalize', fontWeight: 600 }}
                                />
                                <Bar
                                    dataKey="jumlah"
                                    fill="#3b82f6"
                                    radius={[8, 8, 0, 0]}
                                    name="Jumlah"
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    ) : (
                        <div className="flex items-center justify-center h-full">
                            <p className="text-gray-400">Tidak ada data untuk ditampilkan</p>
                        </div>
                    )}
                </div>
            </div>

            {/* List */}
            <div className="card">
                <div className="flex items-center gap-2 mb-6">
                    <List className="text-blue-600" size={20} />
                    <h2 className="text-lg font-semibold text-gray-900">Daftar Hasil Survei</h2>
                </div>

                {rawData.length > 0 ? (
                    <ul className="divide-y divide-gray-200">
                        {rawData.map((item, i) => (
                            <li
                                key={`${item.keterangan}-${i}`}
                                className="py-4 flex justify-between items-center"
                            >
                                <span className="text-gray-700 capitalize font-medium">
                                    {item.keterangan}
                                </span>
                                <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-sm rounded-full font-semibold">
                                    {item.jumlah}
                                </span>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="text-center py-8">
                        <p className="text-gray-400">Belum ada data survei</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Survei;
