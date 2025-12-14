import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { User, Mail, LogOut } from 'lucide-react';
import Header from '../components/Header';

const ProfilePage = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-netflix-black">
      <Header />
      
      <div className="pt-24 px-8 md:px-16 max-w-4xl mx-auto pb-20">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="bg-netflix-darkGray rounded-lg p-8"
        >
          <h1 className="text-4xl font-bold mb-8">Account</h1>

          <div className="space-y-6">
            <div className="flex items-center gap-4 pb-6 border-b border-netflix-gray">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-netflix-red to-red-700 flex items-center justify-center">
                <User size={40} />
              </div>
              <div>
                <h2 className="text-2xl font-semibold">{user?.name}</h2>
                <p className="text-netflix-lightGray">Member since 2024</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-lg">
                <Mail size={20} className="text-netflix-lightGray" />
                <span>{user?.email}</span>
              </div>
            </div>

            <div className="pt-6 border-t border-netflix-gray">
              <h3 className="text-xl font-semibold mb-4">Plan Details</h3>
              <div className="bg-netflix-gray rounded-lg p-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg">Premium</span>
                  <span className="px-3 py-1 bg-netflix-red rounded text-sm font-semibold">Ultra HD</span>
                </div>
                <p className="text-netflix-lightGray">4 screens at a time in Ultra HD</p>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleLogout}
              className="w-full mt-8 px-6 py-3 bg-netflix-red text-white font-semibold rounded hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <LogOut size={20} />
              Sign Out
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;
