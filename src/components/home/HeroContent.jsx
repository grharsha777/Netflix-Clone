import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import EmailForm from './EmailForm';
import AuthForm from './AuthForm';

const HeroContent = ({ 
  showSignIn, 
  isSignUp, 
  formData, 
  error, 
  onEmailChange,
  onFormChange,
  onGetStarted,
  onSubmit,
  onToggleMode
}) => {
  return (
    <div className="relative z-10 h-full flex items-center justify-center px-4">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow">
          Unlimited movies, TV shows, and more
        </h1>
        <p className="text-xl md:text-2xl mb-4 text-shadow">
          Watch anywhere. Cancel anytime.
        </p>
        <p className="text-lg md:text-xl mb-8 text-shadow">
          Ready to watch? Enter your email to create or restart your membership.
        </p>

        <AnimatePresence mode="wait">
          {!showSignIn ? (
            <EmailForm
              email={formData.email}
              onEmailChange={onEmailChange}
              onGetStarted={onGetStarted}
            />
          ) : (
            <AuthForm
              isSignUp={isSignUp}
              formData={formData}
              error={error}
              onFormChange={onFormChange}
              onSubmit={onSubmit}
              onToggleMode={onToggleMode}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default HeroContent;
