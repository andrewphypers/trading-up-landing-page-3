import { Card } from "@/app/components/ui/card";
import { GraduationCap, Heart, Wrench, Target } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "Addiction Recovery Support",
    description: "Comprehensive day programming focused on drug and alcohol addiction recovery with professional counseling and peer support.",
  },
  {
    icon: Wrench,
    title: "Hands-On Training",
    description: "Practical, real-world experience in various trades including carpentry, welding, electrical, and construction.",
  },
  {
    icon: GraduationCap,
    title: "Academic Development",
    description: "Essential theory and certification preparation to ensure participants are fully qualified for trade careers.",
  },
  {
    icon: Target,
    title: "Employment Readiness",
    description: "Job placement support, resume building, interview preparation, and connections with industry employers.",
  },
];

export function ProgramPillars() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Our Program</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive approach to recovery and career development built on four essential pillars
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-xl transition-shadow border-t-4 border-t-orange-600">
                <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="text-xl mb-3">{pillar.title}</h3>
                <p className="text-gray-600">{pillar.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
