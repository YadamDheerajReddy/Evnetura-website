import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialMediaLinksNL = () => {
  const socialPlatforms = [
    {
      icon: <FaFacebookF />,
      name: 'Facebook',
      link: '#',
    },
    {
      icon: <FaTwitter />,
      name: 'Twitter',
      link: '#',
    },
    {
      icon: <FaInstagram />,
      name: 'Instagram',
      link: '#',
    },
    {
      icon: <FaLinkedinIn />,
      name: 'LinkedIn',
      link: '#',
    },
  ];

  return (
    <section className="py-8 bg-gray-50 text-center">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <p className="text-gray-700 mb-6 text-lg">Follow Us on Social Media</p>
        <div className="flex justify-center space-x-6">
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              className="text-gray-700 hover:text-accent text-3xl transition duration-300 ease-in-out"
              aria-label={`Follow us on ${platform.name}`}
            >
              {platform.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaLinksNL;
