import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialMediaLinks = () => {
  const socialLinks = [
    {
      icon: <FaFacebookF />,
      link: 'https://www.facebook.com/Eventura',
      name: 'Facebook',
    },
    {
      icon: <FaTwitter />,
      link: 'https://www.twitter.com/Eventura',
      name: 'Twitter',
    },
    {
      icon: <FaInstagram />,
      link: 'https://www.instagram.com/Eventura',
      name: 'Instagram',
    },
    {
      icon: <FaLinkedinIn />,
      link: 'https://www.linkedin.com/company/Eventura',
      name: 'LinkedIn',
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-3xl font-bold text-accent mb-8">Follow Us</h2>
        <div className="flex justify-center space-x-8">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-accent transition duration-300 ease-in-out text-3xl"
              aria-label={social.name}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaLinks;
