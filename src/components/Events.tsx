import React from 'react';
import { Calendar, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader } from './ui/card';

export function Events() {
  const upcomingEvents = [
    {
      title: 'PM Speaker Series: Google PM',
      date: 'November 8, 2025',
      time: '6:00 PM - 8:00 PM',
      location: 'Bronfman Building, Room 151',
      spots: '45 spots left',
    },
    {
      title: 'Product Strategy Workshop',
      date: 'November 15, 2025',
      time: '5:30 PM - 7:30 PM',
      location: 'McConnell Building, Room 204',
      spots: '20 spots left',
    },
    {
      title: 'Case Competition Finals',
      date: 'November 22, 2025',
      time: '1:00 PM - 5:00 PM',
      location: 'Desautels Faculty of Management',
      spots: 'Registration Open',
    },
  ];

  const pastEvents = [
    {
      title: 'Product Analytics Bootcamp',
      attendees: 85,
      month: 'Oct',
    },
    {
      title: 'Meta PM Coffee Chat',
      attendees: 30,
      month: 'Oct',
    },
    {
      title: 'UX Research Workshop',
      attendees: 60,
      month: 'Sep',
    },
    {
      title: 'PM Career Fair',
      attendees: 150,
      month: 'Sep',
    },
  ];

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4 text-2xl">Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Join us for workshops, speaker panels, networking events, and more 
            throughout the academic year.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-gray-900 mb-8">Upcoming Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border-gray-200">
                <CardHeader>
                  <h4 className="text-gray-900">{event.title}</h4>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <Clock className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <span>{event.location}</span>
                  </div>
                  <div className="pt-4">
                    <p className="bg-gradient-to-r from-[#ED1B2F] to-[#2563EB] bg-clip-text text-transparent mb-3">{event.spots}</p>
                    <Button className="w-full bg-[#ED1B2F] hover:bg-[#c41626]">
                      Register Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-gray-900 mb-8">Past Events</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <div className={`${index % 2 === 0 ? 'text-[#ED1B2F]' : 'text-[#2563EB]'} mb-2`}>{event.month}</div>
                <h5 className="text-gray-900 mb-3">{event.title}</h5>
                <p className="text-gray-600">{event.attendees} attendees</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Button variant="outline" className="border-gray-300">
            View All Events
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
