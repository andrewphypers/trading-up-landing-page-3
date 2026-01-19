import { Scale } from "lucide-react";

export function CourtOrders() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
            <Scale className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-4xl mb-4">Court Orders</h2>
          <p className="text-xl text-gray-600">
            Probation, Community Corrections, and Integrity
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 border-l-4 border-blue-600">
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            The efficacy of our program relies on a truthful and frank
            relationship with community corrections. We believe that
            accountability and transparency are fundamental to successful
            rehabilitation and reintegration.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If there are conditions imposed by the Courts, we enforce them.{" "}
            <strong>This is a must.</strong>
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our commitment to working collaboratively with probation officers
            and community corrections ensures that participants receive the
            structure and support they need while meeting their legal
            obligations.
          </p>
        </div>
      </div>
    </section>
  );
}
