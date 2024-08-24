import React from 'react';
import category1 from '../assets/category1.jpg';
import category2 from '../assets/category2.jpg';
import category3 from '../assets/category3.jpg';
import category4 from '../assets/category4.jpg';

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      image: category1,
      name: 'Music',
      link: '/categories/music',
    },
    {
      id: 2,
      image: category2,
      name: 'Sports',
      link: '/categories/sports',
    },
    {
      id: 3,
      image: category3,
      name: 'Conferences',
      link: '/categories/conferences',
    },
    {
      id: 4,
      image: category4,
      name: 'Art & Culture',
      link: '/categories/art-culture',
    },
  ];

  return (
    <section className="py-16 bg-neutral">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <h2 className="text-4xl font-poppins font-bold mb-12 text-dark">Popular Categories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {categories.map(category => (
            <div key={category.id} className="relative group bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition duration-300 ease-in-out">
              <img src={category.image} alt={category.name} className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-300 ease-in-out" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out">
                <h3 className="text-2xl font-semibold text-white">{category.name}</h3>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-90 text-center">
                <a href={category.link} className="text-accent font-semibold hover:underline">
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCategories;
