import React from 'react';

export function Team() {
  const executives = [ // TODO: move this to a database OR separate file (easily editable)
    {
      name: 'Walid Aissa',
      role: 'Co-President',
    },
    {
      name: 'Anisha Mohapatra',
      role: 'Co-President',
    },
    {
      name: 'Gabriel Lacroix',
      role: 'VP Logistics',
    },
    {
      name: 'Alexander Trencan',
      role: 'Director of Logistics',
    },
    {
      name: 'Riana Dutta',
      role: 'Director of Logistics',
    },
    {
      name: 'Serena Elzein',
      role: 'VP Outreach',
    },
    {
      name: 'Jasmine Mao',
      role: 'Director of Outreach',
    },
    {
      name: 'Joseph Rouphana Ferghaly',
      role: 'Director of Outreach',
    },
    {
      name: 'Camille Paturel',
      role: 'VP Marketing',
    },
    {
      name: 'Xin Yu Zhang',
      role: 'Director of Marketing',
    },
    {
      name: 'Aidan Guerra',
      role: 'Director of Marketing',
    },
    {
      name: 'Phari Assah',
      role: 'VP Communications',
    },
    {
      name: 'Sophia Li',
      role: 'Director of Communications',
    },
    {
      name: 'Adrien Dock',
      role: 'VP Finance',
    },
    {
      name: 'Selma Bourahla',
      role: 'Director of Finance',
    }
  ];

  return (
    <section id="team" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-2xl">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Our executive team is dedicated to creating valuable experiences 
            and opportunities for all MPMA members.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {executives.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Profile Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                <div className="text-gray-400 text-6xl">{member.name.charAt(0)}</div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#ED1B2F] to-[#2563EB] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h4 className="text-gray-900 mb-2">{member.name}</h4>
                <p className={`${index % 2 === 0 ? 'text-[#ED1B2F]' : 'text-[#2563EB]'}`}>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
