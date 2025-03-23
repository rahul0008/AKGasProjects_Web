'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070',
    title: 'Industrial Gas Installation',
    category: 'Installation',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2070',
    title: 'High Pressure Gas Manifold',
    category: 'Manifold',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?q=80&w=2070',
    title: 'PNG Pipeline Setup',
    category: 'Pipeline',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092160562-46d825775edd?q=80&w=2070',
    title: 'LPG Tank Installation',
    category: 'Installation',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092161734-7ef55295d5b0?q=80&w=2070',
    title: 'Gas Leak Detection System',
    category: 'Safety',
  },
  {
    src: 'https://images.unsplash.com/photo-1581092192574-40187da6ef91?q=80&w=2070',
    title: 'Industrial Piping Project',
    category: 'Pipeline',
  },
];

const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory);

  const handlePrevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
  };

  const handleNextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
  };

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070"
            alt="Gallery Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-6">Project Gallery</h1>
          <p className="text-xl">
            Explore our completed projects and installations
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                    <p>{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={handlePrevImage}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ArrowLeft className="w-8 h-8" />
          </button>
          <button
            onClick={handleNextImage}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ArrowRight className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-4xl h-[80vh] mx-4">
            <Image
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white p-4 text-center">
              <h3 className="text-xl font-semibold">{filteredImages[selectedImage].title}</h3>
              <p>{filteredImages[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}