import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cryptoData, getTopGainers, getNewListings } from "../data/cryptoData";

function Explore() {
  const [activeTab, setActiveTab] = useState("all");

  const getDisplayedData = () => {
    if (activeTab === "gainers") return getTopGainers();
    if (activeTab === "new") return getNewListings();
    return cryptoData;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4 lg:px-12">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-gray-900 mb-2"
        >
          Explore Assets
        </motion.h1>
        <p className="text-gray-500 mb-8">
          Browse and track top cryptocurrencies
        </p>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          {[
            { key: "all", label: "All Assets" },
            { key: "gainers", label: "Top Gainers" },
            { key: "new", label: "New Listings" },
          ].map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                activeTab === tab.key
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-600 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-semibold text-gray-400 uppercase border-b border-gray-100">
            <span>Name</span>
            <span className="text-right">Price</span>
            <span className="text-right">24h Change</span>
            <span className="text-right">Action</span>
          </div>

          {getDisplayedData().map((coin, index) => (
            <motion.div
              key={coin.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="grid grid-cols-4 px-6 py-4 items-center border-b border-gray-50 hover:bg-gray-50 transition-colors"
            >
              {/* Name */}
              <div className="flex items-center gap-3">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="w-9 h-9 rounded-full"
                />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{coin.name}</p>
                  <p className="text-xs text-gray-400">{coin.symbol}</p>
                </div>
              </div>

              {/* Price */}
              <p className="text-right font-medium text-gray-900 text-sm">
                ${coin.price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 6 })}
              </p>

              {/* Change */}
              <p className={`text-right font-semibold text-sm ${coin.change24h >= 0 ? "text-green-500" : "text-red-500"}`}>
                {coin.change24h >= 0 ? "+" : ""}{coin.change24h}%
              </p>

              {/* Action */}
              <div className="text-right">
                <Link
                  to={`/asset/${coin.id}`}
                  className="px-4 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-full hover:bg-blue-700 transition"
                >
                  View
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Explore;