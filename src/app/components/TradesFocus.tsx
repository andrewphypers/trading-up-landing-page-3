import { Card } from "@/app/components/ui/card";
import { Zap, Home, Truck, Trees } from "lucide-react";

const trades = [
  {
    icon: Zap,
    title: "Electrical",
    description: "Learn residential and commercial electrical systems, wiring, safety protocols, and prepare for electrical apprenticeship certification.",
  },
  {
    icon: Home,
    title: "Home Construction",
    description: "Master carpentry, framing, finishing, and general construction skills essential for building and renovating residential properties.",
  },
  {
    icon: Truck,
    title: "Heavy Equipment Operation",
    description: "Gain hands-on experience operating excavators, loaders, and other heavy machinery with proper safety certification.",
  },
  {
    icon: Trees,
    title: "Forestry",
    description: "Develop skills in sustainable forestry practices, equipment operation, and safety in outdoor working environments.",
  },
];

export function TradesFocus() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Trades We Focus On</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive training in high-demand trades, equipping you with the skills employers need
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {trades.map((trade, index) => {
            const Icon = trade.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-2xl transition-all duration-300 border-l-4 border-l-orange-600">
                <div className="flex items-start gap-6">
                  <div className="bg-orange-600 w-16 h-16 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl mb-3">{trade.title}</h3>
                    <p className="text-gray-600 text-lg">{trade.description}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
          <p className="text-lg text-gray-700">
            All programs include industry-recognized certifications and real-world experience to ensure you're job-ready from day one.
          </p>
        </div>
      </div>
    </section>
  );
}
