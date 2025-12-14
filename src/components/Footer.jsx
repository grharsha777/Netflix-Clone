import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-netflix-black border-t border-netflix-gray py-12 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex gap-6 mb-8">
          <a href="#" className="text-netflix-lightGray hover:text-white transition-colors">
            <Facebook size={24} />
          </a>
          <a href="#" className="text-netflix-lightGray hover:text-white transition-colors">
            <Instagram size={24} />
          </a>
          <a href="#" className="text-netflix-lightGray hover:text-white transition-colors">
            <Twitter size={24} />
          </a>
          <a href="#" className="text-netflix-lightGray hover:text-white transition-colors">
            <Youtube size={24} />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 text-sm text-netflix-lightGray">
          <div className="space-y-2">
            <a href="#" className="block hover:underline">Audio Description</a>
            <a href="#" className="block hover:underline">Investor Relations</a>
            <a href="#" className="block hover:underline">Legal Notices</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">Help Center</a>
            <a href="#" className="block hover:underline">Jobs</a>
            <a href="#" className="block hover:underline">Cookie Preferences</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">Gift Cards</a>
            <a href="#" className="block hover:underline">Terms of Use</a>
            <a href="#" className="block hover:underline">Corporate Information</a>
          </div>
          <div className="space-y-2">
            <a href="#" className="block hover:underline">Media Center</a>
            <a href="#" className="block hover:underline">Privacy</a>
            <a href="#" className="block hover:underline">Contact Us</a>
          </div>
        </div>

        <p className="text-sm text-netflix-lightGray">© 2024 Netflix Clone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
