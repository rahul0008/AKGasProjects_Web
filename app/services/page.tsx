'use client';

import { ArrowRight, Factory, Flame, Shield, Star, PenTool as Tool, Truck, Wrench } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import highPressure from '../images/a_high-pressure_specialty_.png';
import lpgTank from '../images/an_LPG_tank_installation_a.png';
import gasManifold from '../images/gas_cylinder_manifold_sy.png';
import gasLeak from '../images/gas_leak_detec.png';
import pngPipe from '../images/a_PNG_(Piped_Natural_Gas).png';
import industrialGasPipe from '../images/industrial_gas_pipeline_system_with.png';
import serviceHero from '../images/service_hero.png';


const services = [
  {
    title: 'High Pressure Specialty Gas',
    icon: <Flame className="w-16 h-16 text-primary" />,
    description: 'Expert solutions for specialty gas cylinder manifold systems in industrial setups & research labs. We provide complete installation and maintenance services for high-pressure gas systems.',
    features: [
      'Custom manifold design',
      'Safety compliance',
      'Regular maintenance',
      'Emergency support',
      'Quality components',
    ],
    image: highPressure,
  },
  {
    title: 'LPG Tank Installation',
    icon: <Factory className="w-16 h-16 text-primary" />,
    description: 'Professional LPG bulk installation services for hotels, plants & industries. We ensure safe and efficient installation of LPG tanks with proper safety measures.',
    features: [
      'Site assessment',
      'Tank sizing',
      'Safety system installation',
      'Compliance certification',
      '24/7 support',
    ],
    image: lpgTank,
  },
  {
    title: 'Cylinder Manifold System',
    icon: <Tool className="w-16 h-16 text-primary" />,
    description: 'Comprehensive installation & maintenance of gas cylinder manifold systems for various industrial applications. We handle all types of gas cylinders and ensure proper setup.',
    features: [
      'System design',
      'Installation service',
      'Regular inspection',
      'Performance monitoring',
      'Technical support',
    ],
    image: gasManifold,
  },
  {
    title: 'PNG Pipeline',
    icon: <Truck className="w-16 h-16 text-primary" />,
    description: 'Expert pipeline installation, maintenance & safety compliance for industries. We provide end-to-end solutions for PNG pipeline systems.',
    features: [
      'Pipeline design',
      'Installation',
      'Safety testing',
      'Maintenance service',
      'Emergency response',
    ],
    image: pngPipe,
  },
  {
    title: 'Gas Leak Detection System',
    icon: <Shield className="w-16 h-16 text-primary" />,
    description: 'Advanced leak detection & safety mechanisms for PNG & LPG systems. We implement state-of-the-art detection systems to ensure maximum safety.',
    features: [
      'Sensor installation',
      'Monitoring setup',
      'Alert system',
      'Regular testing',
      'Safety training',
    ],
    image: gasLeak,
  },
  {
    title: 'Industrial Piping',
    icon: <Wrench className="w-16 h-16 text-primary" />,
    description: 'Complete engineering solutions for industrial gas piping and installations. We handle all aspects of industrial piping with precision and expertise.',
    features: [
      'System design',
      'Material selection',
      'Installation',
      'Testing',
      'Maintenance',
    ],
    image: industrialGasPipe,
  },
];

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={serviceHero}
            alt="Industrial Services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl">
            Comprehensive gas infrastructure solutions tailored to your industry needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="mb-6">{service.icon}</div>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Star className="w-5 h-5 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    Get Quote <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
                <div className={`relative h-[400px] rounded-lg overflow-hidden ${
                  index % 2 === 1 ? 'md:order-1' : ''
                }`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Need a Custom Solution?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Contact our team of experts to discuss your specific requirements and get a tailored solution for your business.
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