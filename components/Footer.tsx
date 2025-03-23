import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">AkGasProjects</h3>
            <p className="text-gray-400 mb-4">
              Your trusted partner in Gas Pipeline IT Services & Industrial Solutions
            </p>
            <div className="flex gap-4">
              <Link href="#" className="hover:text-primary transition-colors">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                <Linkedin className="w-6 h-6" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-gray-400 hover:text-white transition-colors">
                  Certificates
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">High Pressure Gas Manifold</li>
              <li className="text-gray-400">LPG Tank Installation</li>
              <li className="text-gray-400">PNG Pipeline</li>
              <li className="text-gray-400">Gas Leak Detection</li>
              <li className="text-gray-400">Industrial Piping</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <p className="text-gray-400">
                  123 Industrial Area,<br />
                  New Delhi, India
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <p className="text-gray-400">+91 98765 43210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <p className="text-gray-400">info@akgasprojects.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} AkGasProjects. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}