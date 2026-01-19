import { Award, Users, Briefcase } from "lucide-react";

const goals = [
  {
    icon: Briefcase,
    title: "Establish Employability",
    description: "We equip participants with industry-recognized certifications and practical skills that employers actively seek.",
  },
  {
    icon: Award,
    title: "Encourage Self-Respect",
    description: "Through achievement and personal growth, participants rediscover their worth and rebuild their identity.",
  },
  {
    icon: Users,
    title: "Earn Confidence",
    description: "Mastering new skills and overcoming challenges builds the confidence needed to succeed in life and work.",
  },
];

export function Impact() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.unsplash.com/photo-1619759247130-4e7a70f2fe27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwZW50ZXIlMjB3b29kd29ya2luZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3Njg4MzM1Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Carpenter working with wood"
              className="rounded-lg shadow-2xl"
            />
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl mb-8">Our Goals</h2>
            <div className="space-y-8">
              {goals.map((goal, index) => {
                const Icon = goal.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="bg-orange-600 w-12 h-12 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl mb-2">{goal.title}</h3>
                      <p className="text-gray-700 text-lg">{goal.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mt-20 pt-20 border-t">
          <div className="text-center">
            <div className="text-5xl md:text-6xl text-orange-600 mb-2">100%</div>
            <p className="text-xl text-gray-600">Committed to Success</p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl text-orange-600 mb-2">5+</div>
            <p className="text-xl text-gray-600">Trade Disciplines</p>
          </div>
          <div className="text-center">
            <div className="text-5xl md:text-6xl text-orange-600 mb-2">∞</div>
            <p className="text-xl text-gray-600">Opportunities</p>
          </div>
        </div>
      </div>
    </section>
  );
}