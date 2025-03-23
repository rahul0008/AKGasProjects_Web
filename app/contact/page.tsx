"use client";

import { Card } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get in touch with our team of experts for consultation and solutions tailored to your needs.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Phone className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-muted-foreground">+91 123 456 7890</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Mail className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-muted-foreground">info@akgasprojects.com</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <MapPin className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Address</h3>
            <p className="text-muted-foreground">Mumbai, Maharashtra, India</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-lg transition-shadow">
            <Clock className="h-8 w-8 text-primary mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Working Hours</h3>
            <p className="text-muted-foreground">Mon-Fri: 9:00 AM - 6:00 PM</p>
            <p className="text-muted-foreground">Sat: 9:00 AM - 1:00 PM</p>
          </Card>
        </div>

        {/* Contact Form */}
        <Card className="max-w-2xl mx-auto p-8">
          <h2 className="text-2xl font-bold mb-6 text-center">Send us a Message</h2>
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="How can we help?"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-colors"
            >
              Send Message
            </button>
          </form>
        </Card>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-muted h-[400px] rounded-lg flex items-center justify-center">
            <p className="text-muted-foreground">Google Maps integration will be added here</p>
          </div>
        </div>
      </div>
    </div>
  );
}