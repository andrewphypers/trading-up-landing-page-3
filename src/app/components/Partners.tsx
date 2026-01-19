import { Button } from "@/app/components/ui/button";
import { Heart, Handshake, TrendingUp, Users } from "lucide-react";

const benefits = [
  {
    icon: Heart,
    title: "Make a Real Difference",
    description: "Transform lives by providing second chances and meaningful work opportunities.",
  },
  {
    icon: Users,
    title: "Skilled Workers",
    description: "Access motivated, trained individuals ready to contribute to your team.",
  },
  {
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Build a reliable workforce while addressing skilled trades shortages.",
  },
  {
    icon: Handshake,
    title: "Ongoing Support",
    description: "We provide continued mentorship and support for both you and your new hires.",
  },
];

export function Partners() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm mb-4">
            For Contractors & Employers
          </div>
          <h2 className="text-4xl md:text-5xl mb-6">
            Partner With Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Are you a contractor looking to provide meaningful employment and training? 
            Build your team while building futures. Do something with heart.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbG9zZSUyMHVwJTIwaGFuZHNoYWtlfGVufDF8fHx8MTc2ODgzMzg0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Close up handshake"
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl mb-6">Why Partner with Trading Up?</h3>
            <p className="text-lg text-gray-700">
              The skilled trades industry faces a critical shortage of qualified workers. 
              By partnering with Trading Up, you're not just filling positions—you're investing 
              in people who are determined to prove themselves and build lasting careers.
            </p>
            <p className="text-lg text-gray-700">
              Our graduates come equipped with hands-on experience, industry certifications, 
              and the resilience that comes from overcoming real challenges. They're ready to 
              work hard, learn, and grow with your company.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-orange-600" />
                </div>
                <h4 className="text-lg mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-orange-600 text-white rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl md:text-4xl mb-4">
            Ready to Make an Impact?
          </h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Join us in creating opportunities that change lives. Together, we can build stronger 
            communities and a more skilled workforce.
          </p>
          <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 text-lg px-8">
            Become a Partner
          </Button>
        </div>
      </div>
    </section>
  );
}