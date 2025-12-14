import React from 'react';
import { motion } from 'framer-motion';

const AuthForm = ({ 
  isSignUp, 
  formData, 
  error, 
  onFormChange, 
  onSubmit, 
  onToggleMode 
}) => {
  return (
    <motion.form
      key="signin-form"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      onSubmit={onSubmit}
      className="max-w-md mx-auto bg-netflix-black/80 backdrop-blur-xl p-8 rounded-lg border border-white/10"
    >
      <h2 className="text-3xl font-bold mb-6">
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded text-sm">
          {error}
        </div>
      )}

      {isSignUp && (
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-3 mb-4 bg-netflix-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-netflix-red"
          value={formData.name}
          onChange={(e) => onFormChange({ ...formData, name: e.target.value })}
          required
        />
      )}

      <input
        type="email"
        placeholder="Email"
        className="w-full px-4 py-3 mb-4 bg-netflix-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-netflix-red"
        value={formData.email}
        onChange={(e) => onFormChange({ ...formData, email: e.target.value })}
        required
      />

      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-3 mb-6 bg-netflix-gray text-white rounded focus:outline-none focus:ring-2 focus:ring-netflix-red"
        value={formData.password}
        onChange={(e) => onFormChange({ ...formData, password: e.target.value })}
        required
      />

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full py-3 bg-netflix-red text-white font-semibold rounded hover:bg-red-700 transition-colors"
      >
        {isSignUp ? 'Sign Up' : 'Sign In'}
      </motion.button>

      <p className="mt-4 text-center text-netflix-lightGray">
        {isSignUp ? 'Already have an account?' : 'New to Netflix?'}{' '}
        <button
          type="button"
          onClick={onToggleMode}
          className="text-white hover:underline"
        >
          {isSignUp ? 'Sign In' : 'Sign Up'}
        </button>
      </p>
    </motion.form>
  );
};

export default AuthForm;
