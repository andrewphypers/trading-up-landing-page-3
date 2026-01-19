export function About() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl mb-6">
              Breaking Cycles, Building Careers
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Trading Up is more than a program—it's a pathway to transformation. We provide comprehensive day programming that addresses the root causes of recidivism while equipping participants with valuable trade skills.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Through a combination of addiction recovery support and hands-on trades training, we help individuals rebuild their confidence, earn respect for themselves, and establish real employability in high-demand industries.
            </p>
            <p className="text-lg text-gray-700">
              Our holistic approach recognizes that true rehabilitation requires addressing both the immediate challenges of addiction and the long-term need for stable, fulfilling employment.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524391697575-8ea102803604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGNhdmF0b3IlMjBkaWdnaW5nJTIwZ3JhdmVsJTIwcGl0fGVufDF8fHx8MTc2ODgzNDAzNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Excavator digging in a gravel pit"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-orange-600 text-white p-6 rounded-lg shadow-xl max-w-xs">
              <p className="text-3xl mb-1">Second Chances</p>
              <p className="text-sm">Building futures one skill at a time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}