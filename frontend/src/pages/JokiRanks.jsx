import { useState, useEffect } from "react";
import axios from "axios";
import { Save, RefreshCw, AlertCircle, ShieldCheck } from "lucide-react";

const JokiRanks = () => {
  const [ranks, setRanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updating, setUpdating] = useState(null);

  useEffect(() => {
    fetchRanks();
  }, []);

  const fetchRanks = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3300/api/joki/ranks");
      setRanks(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch ranks data");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handlePriceChange = (rankId, field, value) => {
    setRanks(
      ranks.map((r) =>
        r.id === rankId
          ? {
              ...r,
              joki_per_star: [
                {
                  ...r.joki_per_star[0],
                  [field]: value,
                },
              ],
            }
          : r,
      ),
    );
  };

  const savePrice = async (rank) => {
    const priceData = rank.joki_per_star[0];
    try {
      setUpdating(rank.id);
      await axios.put(`http://localhost:3300/api/joki/ranks/${rank.id}/price`, {
        harga_rupiah: priceData.harga_rupiah,
        harga_ringgit: priceData.harga_ringgit,
        harga_dolar: priceData.harga_dolar,
      });
      setError(null);
    } catch (err) {
      setError(`Failed to update price for ${rank.nama}`);
      console.error(err);
    } finally {
      setUpdating(null);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <RefreshCw className="animate-spin text-primary-600" size={32} />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Manajemen Harga Joki per Rank
        </h1>
        <button
          onClick={fetchRanks}
          className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
        >
          <RefreshCw size={20} />
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-3">
          <AlertCircle size={20} />
          <p>{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ranks.map((rank) => (
          <div
            key={rank.id}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center border border-gray-100">
                {rank.image ? (
                  <img
                    src={import.meta.env.VITE_IMG_URL + rank.image}
                    alt={rank.nama}
                    className="w-12 h-12 object-contain"
                  />
                ) : (
                  <ShieldCheck className="text-gray-300" size={32} />
                )}
              </div>
              <div>
                <h3 className="font-bold text-gray-900">{rank.nama}</h3>
                <p className="text-sm text-gray-500">
                  Tier {rank.urutan} • {rank.total_bintang} Bintang
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {/* Rupiah */}
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                  Harga Rupiah (IDR)
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                    Rp
                  </span>
                  <input
                    type="number"
                    value={rank.joki_per_star?.[0]?.harga_rupiah || 0}
                    onChange={(e) =>
                      handlePriceChange(rank.id, "harga_rupiah", e.target.value)
                    }
                    className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {/* Ringgit */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Ringgit (MYR)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                      RM
                    </span>
                    <input
                      type="number"
                      step="0.01"
                      value={rank.joki_per_star?.[0]?.harga_ringgit || ""}
                      onChange={(e) =>
                        handlePriceChange(
                          rank.id,
                          "harga_ringgit",
                          e.target.value,
                        )
                      }
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                      placeholder="-"
                    />
                  </div>
                </div>

                {/* Dollar */}
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
                    Dollar (USD)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm font-medium">
                      $
                    </span>
                    <input
                      type="number"
                      step="0.01"
                      value={rank.joki_per_star?.[0]?.harga_dolar || ""}
                      onChange={(e) =>
                        handlePriceChange(
                          rank.id,
                          "harga_dolar",
                          e.target.value,
                        )
                      }
                      className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none transition-all"
                      placeholder="-"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={() => savePrice(rank)}
                disabled={updating === rank.id}
                className="w-full flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white py-2.5 px-4 rounded-lg font-bold transition-all shadow-sm hover:shadow active:scale-95 disabled:opacity-50 mt-2"
              >
                {updating === rank.id ? (
                  <RefreshCw className="animate-spin" size={18} />
                ) : (
                  <Save size={18} />
                )}
                Simpan Semua Harga
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JokiRanks;
