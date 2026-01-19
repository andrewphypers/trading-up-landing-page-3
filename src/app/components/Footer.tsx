export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-1 gap-8 mb-8">
          <div>
            <h3 className="text-2xl text-white mb-4">Trading Up</h3>
            <p className="text-gray-400 mb-4">
              Empowering individuals in the criminal justice system to build meaningful careers through trades training and recovery support.
            </p>
            <p className="text-gray-400">
              Located in Creston, BC
            </p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; 2026 Trading Up. All rights reserved. Building futures, one skill at a time.</p>
        </div>
      </div>
    </footer>
  );
}