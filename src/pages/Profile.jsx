import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import API from "../api/axios";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await API.get('/auth/profile');
        setUser(res.data);
      } catch (error) {
        navigate('/signin');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [navigate]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500">Loading...</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-sm p-8"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">
                {user?.name?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{user?.name}</h1>
              <p className="text-gray-500">{user?.email}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-1">Full Name</p>
              <p className="font-semibold text-gray-900">{user?.name}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-1">Email Address</p>
              <p className="font-semibold text-gray-900">{user?.email}</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <p className="text-xs text-gray-400 mb-1">Member Since</p>
              <p className="font-semibold text-gray-900">
                {new Date(user?.createdAt).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
              </p>
            </div>
          </div>

          <button
            onClick={async () => {
              await API.post('/auth/logout');
              navigate('/signin');
            }}
            className="mt-8 w-full py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition"
          >
            Logout
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default Profile;