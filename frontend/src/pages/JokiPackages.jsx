import { useState, useEffect } from "react";
import axios from "axios";
import {
  Plus,
  Trash2,
  Edit3,
  X,
  Package,
  AlertCircle,
  RefreshCw,
} from "lucide-react";

const JokiPackages = () => {
  const [packages, setPackages] = useState([]);
  const [ranks, setRanks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPackage, setCurrentPackage] = useState({
    nama_paket: "",
    harga_rupiah: "",
    harga_ringgit: "",
    harga_dolar: "",
    deskripsi: "",
    image: "",
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPackages();
    fetchRanks();
  }, []);

  const fetchRanks = async () => {
    try {
      const response = await axios.get("http://localhost:3300/api/joki/ranks");
      setRanks(response.data);
    } catch (err) {
      console.error("Failed to fetch ranks:", err);
    }
  };

  const fetchPackages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:3300/api/joki/packages",
      );
      setPackages(response.data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch packages");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      if (currentPackage.id) {
        await axios.put(
          `http://localhost:3300/api/joki/packages/${currentPackage.id}`,
          currentPackage,
        );
      } else {
        await axios.post(
          "http://localhost:3300/api/joki/packages",
          currentPackage,
        );
      }
      setIsEditing(false);
      setCurrentPackage({
        nama_paket: "",
        harga_rupiah: "",
        harga_ringgit: "",
        harga_dolar: "",
        deskripsi: "",
        image: "",
      });
      fetchPackages();
    } catch (err) {
      setError("Failed to save package");
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this package?"))
      return;
    try {
      await axios.delete(`http://localhost:3300/api/joki/packages/${id}`);
      fetchPackages();
    } catch (err) {
      setError("Failed to delete package");
    }
  };

  const startEdit = (pkg) => {
    setCurrentPackage(pkg);
    setIsEditing(true);
  };

  const startAdd = () => {
    setCurrentPackage({
      nama_paket: "",
      harga_rupiah: "",
      harga_ringgit: "",
      harga_dolar: "",
      deskripsi: "",
      image: "",
    });
    setIsEditing(true);
  };

  if (loading)
    return (
      <div className="flex justify-center p-12">
        <RefreshCw className="animate-spin text-primary-600" />
      </div>
    );

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">
          Manajemen Paket Joki
        </h1>
        <button
          onClick={startAdd}
          className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
        >
          <Plus size={20} />
          Tambah Paket
        </button>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg flex items-center gap-3">
          <AlertCircle size={20} />
          <p>{error}</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow"
          >
            <div className="h-32 bg-gray-100 relative">
              {pkg.image ? (
                <img
                  src={pkg.image}
                  alt={pkg.nama_paket}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <Package size={48} />
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="font-bold text-lg text-gray-900 mb-2">
                {pkg.nama_paket}
              </h3>

              <div className="space-y-1 mb-4">
                <p className="text-primary-600 font-bold">
                  Rp {parseInt(pkg.harga_rupiah).toLocaleString()}
                </p>
                <div className="flex gap-3 text-xs text-gray-500">
                  {pkg.harga_ringgit && (
                    <span>
                      RM {parseInt(pkg.harga_ringgit).toLocaleString()}
                    </span>
                  )}
                  {pkg.harga_dolar && (
                    <span>$ {parseInt(pkg.harga_dolar).toLocaleString()}</span>
                  )}
                </div>
              </div>

              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                {pkg.deskripsi}
              </p>

              <div className="flex gap-2">
                <button
                  onClick={() => startEdit(pkg)}
                  className="flex-1 flex items-center justify-center gap-2 bg-gray-50 hover:bg-gray-100 text-gray-700 py-2 rounded-lg transition-colors border border-gray-200"
                >
                  <Edit3 size={16} />
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(pkg.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors border border-transparent hover:border-red-100"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Form */}
      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-200 shadow-2xl">
            <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-b">
              <h2 className="text-xl font-bold text-gray-800">
                {currentPackage.id ? "Edit Paket" : "Tambah Paket Baru"}
              </h2>
              <button
                onClick={() => setIsEditing(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <form
              onSubmit={handleSave}
              className="p-6 space-y-4 max-h-[80vh] overflow-y-auto"
            >
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Nama Paket
                </label>
                <input
                  type="text"
                  required
                  value={currentPackage.nama_paket}
                  onChange={(e) =>
                    setCurrentPackage({
                      ...currentPackage,
                      nama_paket: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                />
              </div>

              <div className="space-y-3 p-4 bg-primary-50 rounded-xl">
                <p className="text-xs font-bold text-primary-700 uppercase tracking-wider">
                  Pengaturan Harga
                </p>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Harga Rupiah (IDR)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                      Rp
                    </span>
                    <input
                      type="number"
                      required
                      value={currentPackage.harga_rupiah}
                      onChange={(e) =>
                        setCurrentPackage({
                          ...currentPackage,
                          harga_rupiah: e.target.value,
                        })
                      }
                      className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ringgit (MYR)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                        RM
                      </span>
                      <input
                        type="number"
                        step="0.01"
                        value={currentPackage.harga_ringgit}
                        onChange={(e) =>
                          setCurrentPackage({
                            ...currentPackage,
                            harga_ringgit: e.target.value,
                          })
                        }
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Dollar (USD)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">
                        $
                      </span>
                      <input
                        type="number"
                        step="0.01"
                        value={currentPackage.harga_dolar}
                        onChange={(e) =>
                          setCurrentPackage({
                            ...currentPackage,
                            harga_dolar: e.target.value,
                          })
                        }
                        className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Deskripsi
                </label>
                <textarea
                  rows="3"
                  value={currentPackage.deskripsi}
                  onChange={(e) =>
                    setCurrentPackage({
                      ...currentPackage,
                      deskripsi: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                ></textarea>
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Pilih Gambar Rank
                </label>
                <select
                  value={currentPackage.image}
                  onChange={(e) =>
                    setCurrentPackage({
                      ...currentPackage,
                      image: e.target.value,
                    })
                  }
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 outline-none"
                >
                  <option value="">-- Pilih Rank --</option>
                  {ranks.map((rank) => (
                    <option key={rank.id} value={rank.image}>
                      {rank.nama}
                    </option>
                  ))}
                </select>
                {currentPackage.image && (
                  <div className="mt-3 p-3 bg-gray-50 rounded-lg flex items-center gap-3 border border-gray-200">
                    <img
                      src={import.meta.env.VITE_IMG_URL + currentPackage.image}
                      alt="Preview"
                      className="h-12 w-12 object-contain"
                    />
                    <span className="text-sm text-gray-600">Preview</span>
                  </div>
                )}
              </div>

              <div className="pt-2 flex gap-3">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="flex-1 px-4 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg font-bold transition-all"
                >
                  Simpan Paket
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default JokiPackages;
