'use client';

import { Award, CheckCircle, FileCheck, Shield, Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const certificates = [
  {
    title: 'IGL Authorization',
    icon: <Shield className="w-12 h-12 text-primary" />,
    description: 'Official authorization from Indraprastha Gas Limited (IGL) for gas pipeline installations and services.',
    validFrom: '2010',
    certNumber: 'IGL/2010/AUTH/1234',
    benefits: [
      'Authorized to install PNG connections',
      'Certified for industrial gas pipeline setup',
      'Qualified for high-pressure gas systems',
      'Regular compliance audits',
    ],
  },
  {
    title: 'MSME Certification',
    icon: <Award className="w-12 h-12 text-primary" />,
    description: 'Ministry of Micro, Small and Medium Enterprises (MSME) certification for business excellence.',
    validFrom: '2015',
    certNumber: 'MSME/2015/REG/5678',
    benefits: [
      'Government recognized enterprise',
      'Quality management standards',
      'Professional service delivery',
      'Standardized business practices',
    ],
  },
  {
    title: 'ISO 9001:2015',
    icon: <CheckCircle className="w-12 h-12 text-primary" />,
    description: 'International certification for Quality Management System implementation.',
    validFrom: '2018',
    certNumber: 'ISO/9001/2018/9012',
    benefits: [
      'Quality management system',
      'Process standardization',
      'Customer satisfaction focus',
      'Continuous improvement',
    ],
  },
  {
    title: 'Safety Compliance Certificate',
    icon: <FileCheck className="w-12 h-12 text-primary" />,
    description: 'Certification for adherence to industrial safety standards and protocols.',
    validFrom: '2020',
    certNumber: 'SAFETY/2020/CERT/3456',
    benefits: [
      'Safety protocol compliance',
      'Regular safety audits',
      'Emergency response readiness',
      'Staff safety training',
    ],
  },
];

const recognitions = [
  {
    year: '2019',
    title: 'Excellence in Service',
    organization: 'Industrial Safety Association',
    description: 'Recognized for outstanding service quality and safety standards in industrial gas installations.',
  },
  {
    year: '2020',
    title: 'Best Gas Infrastructure Company',
    organization: 'Gas & Energy Council',
    description: 'Awarded for excellence in gas infrastructure development and innovative solutions.',
  },
  {
    year: '2021',
    title: 'Safety Excellence Award',
    organization: 'National Safety Council',
    description: 'Honored for maintaining exceptional safety standards in industrial installations.',
  },
];

export default function CertificatesPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=2070"
            alt="Certificates Banner"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl font-bold mb-6">Our Certifications</h1>
          <p className="text-xl max-w-2xl">
            Industry-recognized certifications and authorizations that demonstrate our commitment to excellence
          </p>
        </div>
      </section>

      {/* Certificates Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    {cert.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-2">{cert.title}</h2>
                    <p className="text-gray-600 mb-4">{cert.description}</p>
                    <div className="flex gap-4 text-sm text-gray-500 mb-6">
                      <span>Valid from: {cert.validFrom}</span>
                      <span>Cert No: {cert.certNumber}</span>
                    </div>
                    <div className="space-y-2">
                      {cert.benefits.map((benefit, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-primary" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Awards & Recognition</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {recognitions.map((recognition, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary font-semibold mb-2">{recognition.year}</div>
                <h3 className="text-xl font-bold mb-2">{recognition.title}</h3>
                <div className="text-sm text-gray-500 mb-4">{recognition.organization}</div>
                <p className="text-gray-600">{recognition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to Work with Us?</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Experience our certified expertise in gas infrastructure solutions
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>
    </main>
  );
}