import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Eventura</h4>
            <ul>
              <li className="mb-2">
                <a href="/about" className="hover:underline">About Us</a>
              </li>
              <li className="mb-2">
                <a href="/careers" className="hover:underline">Careers</a>
              </li>
              <li className="mb-2">
                <a href="/blog" className="hover:underline">Blog</a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul>
              <li className="mb-2">
                <a href="/help-center" className="hover:underline">Help Center</a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">Contact Us</a>
              </li>
              <li className="mb-2">
                <a href="/faqs" className="hover:underline">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul>
              <li className="mb-2">
                <a href="/terms" className="hover:underline">Terms of Service</a>
              </li>
              <li className="mb-2">
                <a href="/privacy" className="hover:underline">Privacy Policy</a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="hover:text-white">
                <FaFacebookF />
              </a>
              <a href="https://twitter.com" className="hover:text-white">
                <FaTwitter />
              </a>
              <a href="https://instagram.com" className="hover:text-white">
                <FaInstagram />
              </a>
              <a href="https://linkedin.com" className="hover:text-white">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Eventura. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
