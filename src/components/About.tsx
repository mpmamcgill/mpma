import React from 'react';
import { Target, Users, Briefcase, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We\'re committed to bridging the gap between academia and industry, preparing students for PM careers.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building an inclusive community where students can learn, network, and grow together.',
    },
    {
      icon: Briefcase,
      title: 'Career-Focused',
      description: 'Providing hands-on experience and connections to help members land their dream PM roles.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Learning',
      description: 'Offering workshops, case competitions, and resources to develop essential PM skills.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-2xl">About MPMA</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The McGill Product Management Association is dedicated to fostering 
            the next generation of product leaders through education, networking, and hands-on experience.
          </p>
        </div>

        {/* Image and Text Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-gray-900">Who We Are</h3>
            <p className="text-gray-600">
              Founded in 2018, MPMA has grown to become McGill's largest product management 
              community, connecting students with industry professionals and providing 
              unparalleled opportunities for growth and development.
            </p>
            <p className="text-gray-600">
              We bring together students from all faculties who are passionate about 
              technology, innovation, and creating products that make a difference. 
              Through workshops, speaker events, case competitions, and mentorship programs, 
              we equip our members with the skills and network needed to succeed in PM roles.
            </p>
          </div>
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1530099486328-e021101a494a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHN0dWRlbnRzJTIwbWVldGluZ3xlbnwxfHx8fDE3NjE4NTcwNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="MPMA Team Meeting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all duration-300 group"
            >
              <div className={`w-12 h-12 ${index % 2 === 0 ? 'bg-red-50' : 'bg-blue-50'} rounded-lg flex items-center justify-center mb-4 group-hover:bg-gradient-to-r group-hover:from-[#ED1B2F] group-hover:to-[#2563EB] transition-all`}>
                <value.icon className={`w-6 h-6 ${index % 2 === 0 ? 'text-[#ED1B2F]' : 'text-[#2563EB]'} group-hover:text-white transition-colors`} />
              </div>
              <h4 className="text-gray-900 mb-2">{value.title}</h4>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
