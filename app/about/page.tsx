'use client';

import { Award, CheckCircle, Clock, Shield, Target, Users } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { label: 'Years Experience', value: '18+' },
  { label: 'Projects Completed', value: '1000+' },
  { label: 'Team Members', value: '50+' },
  { label: 'Client Satisfaction', value: '100%' },
];

const values = [
  {
    icon: <Shield className="w-12 h-12 text-primary" />,
    title: 'Safety First',
    description: 'Maintaining the highest safety standards in every installation and service.',
  },
  {
    icon: <Target className="w-12 h-12 text-primary" />,
    title: 'Quality Excellence',
    description: 'Delivering precision-engineered solutions with zero compromise.',
  },
  {
    icon: <Users className="w-12 h-12 text-primary" />,
    title: 'Customer Focus',
    description: 'Building lasting relationships through exceptional service and support.',
  },
  {
    icon: <Clock className="w-12 h-12 text-primary" />,
    title: 'Timely Delivery',
    description: 'Meeting project deadlines with efficient execution and planning.',
  },
];

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070"
            alt="Industrial Factory"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-6">About AkGasProjects</h1>
          <p className="text-xl max-w-2xl">
            Leading the industry with innovative gas infrastructure solutions and unwavering commitment to quality since 2005.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2005, AkGasProjects has grown to become a leading provider of gas infrastructure solutions in India. With over 18 years of industry experience, we've established ourselves as an Authorized IGL Vendor and MSME-certified organization.
              </p>
              <p className="text-gray-600 mb-6">
                Our expertise spans across high-pressure gas manifold systems, LPG tank installations, and industrial piping solutions. We pride ourselves on delivering quality-driven solutions that meet the highest safety standards.
              </p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-primary" />
                  <span className="font-semibold">IGL Authorized</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <span className="font-semibold">MSME Certified</span>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1581092162384-8987c1d64926?q=80&w=2070"
                alt="Company Overview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Mission</h3>
              <p className="text-lg">
                To deliver innovative and sustainable gas infrastructure solutions that exceed client expectations while maintaining the highest standards of safety and quality.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-lg">
                To be the most trusted name in gas infrastructure solutions, recognized for our excellence, innovation, and commitment to creating safer industrial environments.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}