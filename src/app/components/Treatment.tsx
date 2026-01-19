import { Heart, Calendar, Users } from "lucide-react";

export function Treatment() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-6">
            Integrated <span className="text-orange-600">Treatment Approach</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Recovery and skill-building work hand in hand. We coordinate with professional treatment programs to ensure our participants get the support they need while building their futures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Heart className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl mb-4">Professional Treatment</h3>
            <p className="text-gray-600">
              We align our participants with existing alcohol and drug treatment programs, ensuring they receive care from qualified healthcare professionals.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Calendar className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl mb-4">Integrated Schedules</h3>
            <p className="text-gray-600">
              Treatment schedules are seamlessly integrated with trade training obligations, creating a balanced approach that supports both recovery and skill development.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-2xl mb-4">Collaborative Care</h3>
            <p className="text-gray-600">
              Healthcare professionals focus on what they do best—treatment—while our program integrates their care with hands-on trades training and employment preparation.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white p-10 rounded-lg text-center">
          <h3 className="text-3xl mb-4">A Holistic Path Forward</h3>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            By partnering with established treatment providers, we ensure participants receive comprehensive support while learning valuable trade skills. This collaborative approach allows everyone to focus on their strengths, creating the best outcomes for those we serve.
          </p>
        </div>
      </div>
    </section>
  );
}
