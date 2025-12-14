import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroBackground from '../components/home/HeroBackground';
import HeroContent from '../components/home/HeroContent';
import FeaturesContainer from '../components/home/FeaturesContainer';

const HomePage = () => {
  const navigate = useNavigate();
  const { login, signup } = useAuth();
  const [showSignIn, setShowSignIn] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '', name: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    const result = isSignUp 
      ? await signup(formData.email, formData.password, formData.name)
      : await login(formData.email, formData.password);
    
    if (result.success) {
      navigate('/browse');
    } else {
      setError(result.error);
    }
  };

  const handleEmailChange = (email) => {
    setFormData({ ...formData, email });
  };

  const handleGetStarted = () => {
    setShowSignIn(true);
  };

  const handleToggleMode = () => {
    setIsSignUp(!isSignUp);
    setError('');
  };

  return (
    <div className="relative min-h-screen bg-netflix-black">
      <Header transparent />
      
      {/* Hero Section */}
      <div className="relative h-screen">
        <HeroBackground />
        <HeroContent
          showSignIn={showSignIn}
          isSignUp={isSignUp}
          formData={formData}
          error={error}
          onEmailChange={handleEmailChange}
          onFormChange={setFormData}
          onGetStarted={handleGetStarted}
          onSubmit={handleSubmit}
          onToggleMode={handleToggleMode}
        />
      </div>

      {/* Features Section */}
      <FeaturesContainer />

      <Footer />
    </div>
  );
};

export default HomePage;
