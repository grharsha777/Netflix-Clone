import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Header = ({ transparent = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !transparent ? 'bg-netflix-black' : 'bg-gradient-to-b from-black/80 to-transparent'
      }`}
    >
      <div className="flex items-center justify-between px-8 md:px-16 py-4">
        <div className="flex items-center gap-8">
          <Link to={user ? '/browse' : '/'}>
            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-netflix-red text-3xl font-bold cursor-pointer"
            >
              NETFLIX
            </motion.h1>
          </Link>

          {user && (
            <nav className="hidden md:flex items-center gap-6">
              <Link
                to="/browse"
                className={`hover:text-white transition-colors ${
                  isActive('/browse') ? 'text-white font-semibold' : 'text-netflix-lightGray'
                }`}
              >
                Home
              </Link>
              <Link
                to="/browse"
                className="text-netflix-lightGray hover:text-white transition-colors"
              >
                TV Shows
              </Link>
              <Link
                to="/browse"
                className="text-netflix-lightGray hover:text-white transition-colors"
              >
                Movies
              </Link>
              <Link
                to="/my-list"
                className={`hover:text-white transition-colors ${
                  isActive('/my-list') ? 'text-white font-semibold' : 'text-netflix-lightGray'
                }`}
              >
                My List
              </Link>
            </nav>
          )}
        </div>

        {user && (
          <div className="flex items-center gap-6">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => navigate('/search')}
              className="text-white hover:text-netflix-lightGray transition-colors"
            >
              <Search size={24} />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white hover:text-netflix-lightGray transition-colors"
            >
              <Bell size={24} />
            </motion.button>

            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-2"
              >
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-8 h-8 rounded"
                />
                <ChevronDown
                  size={20}
                  className={`transition-transform ${showProfileMenu ? 'rotate-180' : ''}`}
                />
              </motion.button>

              {showProfileMenu && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 bg-netflix-black/95 backdrop-blur-md border border-white/10 rounded-md overflow-hidden"
                >
                  <Link
                    to="/profile"
                    onClick={() => setShowProfileMenu(false)}
                    className="block px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    Account
                  </Link>
                  <button
                    onClick={() => {
                      setShowProfileMenu(false);
                      navigate('/profile');
                    }}
                    className="w-full text-left px-4 py-3 hover:bg-white/10 transition-colors"
                  >
                    Settings
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
