import React from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-red-50">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <div className="space-y-8">
          {/* Title */}
          <h2 className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-[#ED1B2F] to-[#2563EB] bg-clip-text text-transparent leading-[1.2] pb-6">
            McGill Product Management Association
          </h2>

          {/* Main Heading */}
          <h2 className="max-w-4xl mx-auto text-gray-900 text-2xl">
            Empowering the Next Generation of{' '}
            <span className="bg-gradient-to-r from-[#ED1B2F] to-[#2563EB] bg-clip-text text-transparent">Product Leaders</span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-gray-600 text-lg">
            Join McGill's largest community of aspiring product managers. 
            Connect with industry leaders, build your skills, and launch your PM career.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button className="bg-[#ED1B2F] hover:bg-[#c41626] px-8 py-6">
              Become a Member
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="px-8 py-6">
              View Events
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div>
              <div className="bg-gradient-to-r from-[#ED1B2F] to-[#2563EB] bg-clip-text text-transparent">500+</div>
              <div className="text-gray-600 mt-2">Members</div>
            </div>
            <div>
              <div className="bg-gradient-to-r from-[#ED1B2F] to-[#2563EB] bg-clip-text text-transparent">50+</div>
              <div className="text-gray-600 mt-2">Events Annually</div>
            </div>
            <div>
              <div className="bg-gradient-to-r from-[#ED1B2F] to-[#2563EB] bg-clip-text text-transparent">30+</div>
              <div className="text-gray-600 mt-2">Partner Companies</div>
            </div>
            <div>
              <div className="bg-gradient-to-r from-[#ED1B2F] to-[#2563EB] bg-clip-text text-transparent">100%</div>
              <div className="text-gray-600 mt-2">Career Success</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-[#ED1B2F] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-[#2563EB] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
    </section>
  );
}
