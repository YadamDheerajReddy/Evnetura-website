import React from 'react';
import { FaFacebookF, FaGoogle, FaLinkedinIn } from 'react-icons/fa';

const SocialMediaOptions = () => {
  const socialPlatforms = [
    {
      icon: <FaFacebookF />,
      name: 'Facebook',
      link: '#',
    },
    {
      icon: <FaGoogle />,
      name: 'Google',
      link: '#',
    },
    {
      icon: <FaLinkedinIn />,
      name: 'LinkedIn',
      link: '#',
    },
  ];

  return (
    <section className="py-8 bg-none">
      <div className="container mx-auto text-center">
        <p className="text-gray-600 mb-4">Or sign in with your social account</p>
        <div className="flex justify-center space-x-4">
          {socialPlatforms.map((platform, index) => (
            <a
              key={index}
              href={platform.link}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out text-accent text-2xl"
              aria-label={`Continue with ${platform.name}`}
            >
              {platform.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaOptions;
