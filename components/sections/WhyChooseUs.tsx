'use client';

import { motion } from 'framer-motion';
import { CheckCircle, Users, Award, Clock, BarChart } from 'lucide-react';

const features = [
  {
    icon: Users,
    title: '500+ Happy Clients',
    description: 'Trusted by businesses worldwide',
  },
  {
    icon: Award,
    title: 'Certified Google & Meta Experts',
    description: 'Official partnerships and certifications',
  },
  {
    icon: Clock,
    title: '24/7 Support & Reporting',
    description: 'Round-the-clock assistance and monitoring',
  },
  {
    icon: BarChart,
    title: 'Transparent Monthly Analytics',
    description: 'Detailed performance reports every month',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Why Choose <span className="gradient-text">Our Agency?</span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8">
              We're not just another marketing agency. We're your growth partners, 
              committed to delivering measurable results that transform your business.
            </p>

            <div className="space-y-6">
              {[
                'Data-driven strategies backed by proven methodologies',
                'Dedicated account managers for personalized service',
                'Cutting-edge tools and technologies',
                'ROI-focused campaigns with transparent reporting',
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-sm">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-600">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}