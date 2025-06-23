import Link from "next/link";

export default function TeslaModel3() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">2024 Tesla Model 3</h1>

      <video
        src="/tesla.mp4"
        controls
        className="w-full max-w-4xl mb-6 rounded shadow mx-auto"
      />

      <p className="mb-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
        The 2024 Tesla Model 3 is a fully electric sedan built for performance, range, and safety. With futuristic tech like autopilot and a minimalist interior, it's a true game changer in the EV market.
      </p>

      <ul className="list-disc pl-6 mb-6 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
        <li>Range: 358 miles (Long Range model)</li>
        <li>0-60 mph: 3.1 seconds (Performance)</li>
        <li>Drive: Dual Motor All-Wheel Drive</li>
        <li>Charging: Supercharger Network</li>
        <li>Price: $39,990</li>
      </ul>

      <div className="text-center">
        <Link href="/">
          <span className="inline-block mt-6 px-6 py-2 bg-primary text-white rounded hover:bg-red-800 transition">
            ← Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
