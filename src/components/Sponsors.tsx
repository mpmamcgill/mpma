import React from 'react';

export function Sponsors() {
  const sponsors = [
    { name: 'Meta', tier: 'Platinum' },
    { name: 'Google', tier: 'Platinum' },
    { name: 'Amazon', tier: 'Platinum' },
    { name: 'Microsoft', tier: 'Gold' },
    { name: 'Apple', tier: 'Gold' },
    { name: 'Shopify', tier: 'Gold' },
    { name: 'Uber', tier: 'Silver' },
    { name: 'Airbnb', tier: 'Silver' },
    { name: 'Netflix', tier: 'Silver' },
    { name: 'Stripe', tier: 'Silver' },
  ];

  return (
    <section id="sponsors" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-2xl">Companies We've Worked With</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We're proud to partner with leading companies that support our mission 
            and provide opportunities for our members and the McGill community.
          </p>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 flex items-center justify-center hover:shadow-lg transition-all duration-300 group cursor-pointer"
            >
              <div className="text-center">
                <div className={`text-2xl text-gray-400 transition-colors mb-2 ${index % 2 === 0 ? 'group-hover:text-[#ED1B2F]' : 'group-hover:text-[#2563EB]'}`}>
                  {sponsor.name}
                </div>
                <div className="text-xs text-gray-500">{sponsor.tier}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership CTA */}
        <div className="bg-red-50 rounded-2xl p-12 text-center border border-red-100">
          <h3 className="text-gray-900 mb-4 text-2xl">Interested in Partnering with MPMA?</h3>
          <p className="max-w-2xl mx-auto mb-8 text-gray-700">
            Partner with us to connect with talented McGill students passionate about 
            product management. We offer various sponsorship packages including workshops, 
            recruitment sessions, and brand visibility.
          </p>
          <button className="px-8 py-3 bg-[#ED1B2F] text-white rounded-lg hover:bg-[#c41626] transition-colors">
            Become a Sponsor
          </button>
        </div>
      </div>
    </section>
  );
}
