import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cryptoData } from "../data/cryptoData";

function AssetDetail() {
  const { id } = useParams();
  const coin = cryptoData.find((c) => c.id === parseInt(id));

  if (!coin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Asset not found</h2>
          <Link to="/explore" className="text-blue-600 hover:underline font-semibold">
            Back to Explore
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4 lg:px-12">
      <div className="max-w-3xl mx-auto">

        {/* Back */}
        <Link
          to="/explore"
          className="text-sm text-blue-600 hover:underline font-medium mb-6 inline-block"
        >
          ← Back to Explore
        </Link>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-sm p-8 mb-6"
        >
          <div className="flex items-center gap-4 mb-6">
            <img
              src={coin.image}
              alt={coin.name}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{coin.name}</h1>
              <p className="text-gray-400 font-medium">{coin.symbol}</p>
            </div>
          </div>

          <div className="flex items-end gap-4">
            <p className="text-5xl font-bold text-gray-900">
              ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
            </p>
            <p className={`text-xl font-semibold mb-1 ${coin.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
              {coin.change24h >= 0 ? "+" : ""}{coin.change24h}% today
            </p>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-2 gap-4 mb-6"
        >
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-sm text-gray-400 mb-1">Listed Since</p>
            <p className="text-lg font-bold text-gray-900">
              {new Date(coin.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <p className="text-sm text-gray-400 mb-1">24h Performance</p>
            <p className={`text-lg font-bold ${coin.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
              {coin.change24h >= 0 ? "Gaining 📈" : "Declining 📉"}
            </p>
          </div>
        </motion.div>

        {/* Trade Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-sm p-8"
        >
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Trade {coin.name}
          </h2>
          <div className="space-y-4">
            <input
              type="number"
              placeholder="Amount in USD"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition">
              Buy {coin.symbol}
            </button>
            <button className="w-full py-3 bg-white text-red-500 font-semibold rounded-full border border-red-300 hover:bg-red-50 transition">
              Sell {coin.symbol}
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center mt-4">
            🎓 Demo only — no real transactions are processed
          </p>
        </motion.div>

      </div>
    </div>
  );
}

export default AssetDetail;