'use client';

import { ArrowRight, Award, CheckCircle, Clock, Factory, Flame, Shield, Star, PenTool as Tool, Truck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import hero from './images/hero_image.png';

const services = [
  {
    title: 'High Pressure Specialty Gas Manifold',
    icon: <Flame className="w-10 h-10 text-primary" />,
    description: 'Expert solutions for specialty gas cylinder manifold systems in industrial setups & research labs',
  },
  {
    title: 'LPG Tank Installation',
    icon: <Factory className="w-10 h-10 text-primary" />,
    description: 'Professional LPG bulk installation services for hotels, plants & industries',
  },
  {
    title: 'Cylinder Manifold System',
    icon: <Tool className="w-10 h-10 text-primary" />,
    description: 'Comprehensive installation & maintenance of gas cylinder manifold systems',
  },
  {
    title: 'PNG Pipeline',
    icon: <Truck className="w-10 h-10 text-primary" />,
    description: 'Expert pipeline installation, maintenance & safety compliance for industries',
  },
  {
    title: 'Gas Leak Detection System',
    icon: <Shield className="w-10 h-10 text-primary" />,
    description: 'Advanced leak detection & safety mechanisms for PNG & LPG systems',
  },
  {
    title: 'Industrial Piping',
    icon: <Factory className="w-10 h-10 text-primary" />,
    description: 'Complete engineering solutions for industrial gas piping and installations',
  },
];

const testimonials = [
  {
    name: 'John Smith',
    company: 'Industrial Solutions Ltd',
    content: 'AkGasProjects delivered exceptional service in our factory setup. Their attention to safety and quality is remarkable.',
    rating: 5,
  },
  {
    name: 'Sarah Johnson',
    company: 'Research Labs Inc',
    content: "The team's expertise in high-pressure gas systems is unmatched. Highly recommended for critical installations.",
    rating: 5,
  },
  {
    name: 'Michael Brown',
    company: 'Hotel Grand',
    content: 'Professional LPG installation service with excellent after-sales support. Very satisfied with their work.',
    rating: 5,
  },
];

const achievements = [
  {
    year: '2005',
    title: 'Company Founded',
    description: 'Started with a vision to provide quality gas solutions',
  },
  {
    year: '2010',
    title: 'IGL Authorization',
    description: 'Became an authorized vendor for IGL',
  },
  {
    year: '2015',
    title: 'MSME Certification',
    description: 'Received MSME certification for excellence',
  },
  {
    year: '2023',
    title: 'Industry Leader',
    description: '1000+ successful installations across India',
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src= {hero}
            alt="Industrial Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Award className="w-8 h-8" />
            <span className="text-xl font-semibold">Authorized IGL Vendor</span>
            <span className="mx-2">|</span>
            <CheckCircle className="w-8 h-8" />
            <span className="text-xl font-semibold">MSME Certified</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            AkGasProjects
          </h1>
          <p className="text-2xl md:text-3xl mb-8">
            Excellence in All Gas Pipeline Services & Industrial Solutions
          </p>
          <p className="text-xl mb-12">0% Compromise, 100% Quality-Driven Productivity</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Get a Quote
            </Link>
            <Link
              href="/services"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-semibold transition-colors"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Client Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 p-8 rounded-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary"></div>
            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 md:pr-8">
                    <div className={`bg-white p-6 rounded-lg shadow-lg ${
                      index % 2 === 0 ? 'text-right' : 'text-left'
                    }`}>
                      <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </div>
                  <div className="relative flex items-center justify-center">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <span className="absolute -bottom-8 text-sm font-semibold">
                      {achievement.year}
                    </span>
                  </div>
                  <div className="flex-1 md:pl-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Get Started?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Contact us today for a consultation and let us help you with your gas infrastructure needs
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Contact Us <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}