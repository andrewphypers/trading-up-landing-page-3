import { Button } from "@/app/components/ui/button";
import { Phone, MapPin } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Ready to Transform Your Life?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Trading Up is here to support you on your journey to recovery and a successful career in the trades. Take the first step today.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-orange-200">Phone</p>
                  <p className="text-lg">250-977-5392</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-6 w-6 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-sm text-orange-200">Location</p>
                  <p className="text-lg">Serving communities across Canada</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white text-gray-900 rounded-lg p-8 shadow-2xl">
            <h3 className="text-2xl mb-6">Get in Touch</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="(123) 456-7890"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Tell us about your situation..."
                />
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 py-6 text-lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}