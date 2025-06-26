'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

const formSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters'),
  email: z.string().email('Please enter a valid email address').refine(
    (email) => {
      const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
      const domain = email.split('@')[1];
      return !commonDomains.includes(domain);
    },
    {
      message: 'Please use a business email for faster verification',
    }
  ),
  phone: z.string().min(10, 'Phone number is required'),
  companyName: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().min(1, 'Please select a budget range'),
  preferredTime: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters').max(500),
  agreeToPrivacy: z.boolean().refine(val => val === true, {
    message: 'You must agree to the privacy policy',
  }),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showEmailWarning, setShowEmailWarning] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
  });

  const watchedEmail = watch('email');

  // Check for personal email domains
  useEffect(() => {
    if (watchedEmail) {
      const commonDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'outlook.com'];
      const domain = watchedEmail.split('@')[1];
      setShowEmailWarning(commonDomains.includes(domain));
    }
  }, [watchedEmail]);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 2000));

      toast.success('Message sent successfully! We\'ll get back to you within 24 hours.');
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Let's <span className="gradient-text">Get Started</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your digital presence? Get in touch with our experts
            and let's discuss your growth strategy.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 mb-8">
                Our team is here to answer your questions and help you achieve your marketing goals.
                Reach out to us through any of the channels below.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Office Address</h4>
                  <p className="text-gray-600">KPHB 7th Phase</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone Number</h4>
                  <p className="text-gray-600">+91 7659995858</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email Address</h4>
                  <p className="text-gray-600">info@vkinnovations.in</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Business Hours</h4>
                  <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

              {/* Full Name */}
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input id="fullName" {...register('fullName')} placeholder="Enter your full name" />
                {errors.fullName && <p className="text-red-600 text-sm mt-1">{errors.fullName.message}</p>}
              </div>

              {/* Email */}
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input id="email" type="email" {...register('email')} placeholder="Enter your business email" />
                {showEmailWarning && <p className="text-yellow-600 text-sm mt-1">⚠️ Use a business email for faster verification.</p>}
                {errors.email && <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>}
              </div>

              {/* Phone */}
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input id="phone" type="tel" {...register('phone')} placeholder="Enter your phone number" />
                {errors.phone && <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>}
              </div>

              {/* Company Name */}
              <div>
                <Label htmlFor="companyName">Company Name</Label>
                <Input id="companyName" {...register('companyName')} placeholder="Your company (optional)" />
              </div>

              {/* Service Interested In */}
              <div>
                <Label htmlFor="service">Service Interested In *</Label>
                <Select onValueChange={(val) => setValue('service', val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="website">Website Development</SelectItem>
                    <SelectItem value="app">App Development</SelectItem>
                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                    <SelectItem value="branding">Branding</SelectItem>
                    <SelectItem value="ecommerce">E-Commerce</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-red-600 text-sm mt-1">{errors.service.message}</p>}
              </div>

              {/* Budget */}
              <div>
                <Label htmlFor="budget">Your Budget Range *</Label>
                <Select onValueChange={(val) => setValue('budget', val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your budget range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<25000">&lt; ₹25,000</SelectItem>
                    <SelectItem value="25000-50000">₹25,000 – ₹50,000</SelectItem>
                    <SelectItem value="50000-100000">₹50,000 – ₹1,00,000</SelectItem>
                    <SelectItem value="100000+">₹1,00,000+</SelectItem>
                  </SelectContent>
                </Select>
                {errors.budget && <p className="text-red-600 text-sm mt-1">{errors.budget.message}</p>}
              </div>

              {/* Description */}
              <div>
                <Label htmlFor="message">Project Description / Requirements *</Label>
                <Textarea id="message" {...register('message')} placeholder="Tell us briefly what you’re looking for..." className="min-h-[120px]" />
                <div className="flex justify-between mt-1">
                  {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
                  <p className="text-gray-500 text-sm">{watch('message')?.length || 0}/500</p>
                </div>
              </div>

              {/* Preferred Contact Time */}
              <div>
                <Label htmlFor="preferredTime">Preferred Contact Time</Label>
                <Select onValueChange={(val) => setValue('preferredTime', val)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Choose time (optional)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="morning">Morning</SelectItem>
                    <SelectItem value="afternoon">Afternoon</SelectItem>
                    <SelectItem value="evening">Evening</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Privacy Agreement */}
              <div className="flex items-start gap-3">
                <Checkbox id="agreeToPrivacy" onCheckedChange={(checked) => setValue('agreeToPrivacy', !!checked)} />
                <Label htmlFor="agreeToPrivacy" className="text-sm text-gray-600">
                  I agree to the{' '}
                  <a href="/privacy" className="text-indigo-600 hover:underline">privacy policy</a>{' '}
                  and consent to being contacted about our services.
                </Label>
              </div>
              {errors.agreeToPrivacy && <p className="text-red-600 text-sm">{errors.agreeToPrivacy.message}</p>}

              {/* Submit Button */}
              <Button type="submit" disabled={!isValid || isSubmitting} className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 text-lg font-semibold">
                {isSubmitting ? 'Sending...' : 'Get Free Consultation'}
              </Button>

              {/* Note */}
              <p className="text-xs text-gray-500 text-center pt-3">🔒 We respect your privacy. Your information is 100% safe with us.</p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}