'use client';

import { motion } from 'framer-motion';
import { 
  Search, 
  Target, 
  Share2, 
  Palette, 
  Monitor, 
  Mail 
} from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Get seen by the right audience with data-backed SEO strategies that drive organic traffic and boost rankings.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Target,
    title: 'Google Ads (PPC)',
    description: 'Drive instant traffic with smart ad placements and optimized campaigns that maximize your ROI.',
    color: 'bg-green-50 text-green-600',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build loyal audiences on Instagram, LinkedIn & more with engaging content and strategic campaigns.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: Palette,
    title: 'Branding & Strategy',
    description: 'Define your voice and outshine your competitors with powerful brand identity and positioning.',
    color: 'bg-pink-50 text-pink-600',
  },
 {
  icon: Monitor,
  title: 'Lead Generation (B2B & B2C)',
  description: 'Attract quality leads and boost conversions with tailored strategies for businesses and consumers.',
  color: 'bg-pink-50 text-pink-600',
},
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Nurture leads with automated email funnels that drive conversions and build lasting relationships.',
    color: 'bg-orange-50 text-orange-600',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions tailored to grow your business 
            and maximize your online presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 glow-on-hover border border-gray-100">
                <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mt-6">
                  <button className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors duration-200 flex items-center gap-2 group">
                    Learn More
                    <motion.span
                      className="group-hover:translate-x-1 transition-transform duration-200"
                    >
                      →
                    </motion.span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}