'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, TrendingUp } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const projects = [
  {
    id: 1,
    title: 'E-commerce Growth Campaign',
    category: 'SEO & PPC',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
    result: '+342% SEO Traffic in 3 Months',
    description: 'Complete digital transformation for a fashion e-commerce brand, including SEO optimization, Google Ads, and social media marketing.',
    metrics: {
      traffic: '+342%',
      conversions: '+89%',
      revenue: '+156%',
    },
    testimonial: 'This team completely transformed our online presence. We went from struggling to find customers to having more leads than we can handle.',
    client: 'Sarah Johnson, CEO of Fashion Forward',
  },
  {
    id: 2,
    title: 'SaaS Lead Generation',
    category: 'Content Marketing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop',
    result: '10x Lead Generation in 6 Months',
    description: 'Strategic content marketing and LinkedIn advertising campaign for a B2B SaaS company.',
    metrics: {
      leads: '+1000%',
      qualified: '+450%',
      cost: '-67%',
    },
    testimonial: 'Our lead quality improved dramatically. The team understood our target audience perfectly.',
    client: 'Mike Chen, CMO of TechFlow',
  },
  {
    id: 3,
    title: 'Local Business Domination',
    category: 'Local SEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=300&fit=crop',
    result: '#1 Local Rankings in 2 Months',
    description: 'Local SEO and Google My Business optimization for a chain of restaurants.',
    metrics: {
      rankings: '#1 Position',
      calls: '+234%',
      visits: '+178%',
    },
    testimonial: 'We dominate local search results now. Customer foot traffic has never been better.',
    client: 'David Rodriguez, Owner of Bella Vista Restaurants',
  },
  {
    id: 4,
    title: 'Brand Awareness Campaign',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
    result: '5M+ Impressions Generated',
    description: 'Multi-platform social media campaign for a lifestyle brand targeting millennials.',
    metrics: {
      impressions: '5.2M',
      engagement: '+890%',
      followers: '+456%',
    },
    testimonial: 'Our brand is now recognized nationwide. The creative campaigns were absolutely brilliant.',
    client: 'Emma Thompson, Brand Director',
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how we've helped businesses like yours achieve remarkable growth 
            and dominate their markets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      <span className="text-green-400 font-semibold">{project.result}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      Click to view detailed case study
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-indigo-600 font-medium bg-indigo-50 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    <span className="text-green-600 font-medium text-sm">
                      {project.result}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <div className="grid grid-cols-3 gap-4">
                    {Object.entries(selectedProject.metrics).map(([key, value]) => (
                      <div key={key} className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-2xl font-bold text-indigo-600">{value}</div>
                        <div className="text-sm text-gray-600 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {selectedProject.description}
                  </p>
                  
                  <div className="bg-indigo-50 p-6 rounded-lg">
                    <blockquote className="text-lg text-gray-800 italic mb-4">
                      "{selectedProject.testimonial}"
                    </blockquote>
                    <cite className="text-indigo-600 font-medium">
                      — {selectedProject.client}
                    </cite>
                  </div>
                  
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700">
                    Start Your Success Story
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}