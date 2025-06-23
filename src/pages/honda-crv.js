import Link from "next/link";

export default function RangeRover() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white px-6 py-10">
      <h1 className="text-4xl font-bold mb-4">2023 Range Rover Evoque</h1>

      <video
        src="/evoque.mp4"
        controls
        className="w-full max-w-4xl mb-6 rounded shadow mx-auto"
      />

      <p className="mb-4 max-w-2xl mx-auto text-lg text-gray-700 dark:text-gray-300">
        The 2023 Range Rover Evoque is a luxury compact SUV that combines modern elegance with rugged capability. Featuring a sleek design, powerful engine options, and cutting-edge technology, it's perfect for city streets and adventurous roads alike.
      </p>

      <ul className="list-disc pl-6 mb-6 max-w-2xl mx-auto text-gray-700 dark:text-gray-300">
        <li>Engine: 2.0L Turbocharged Inline-4</li>
        <li>Horsepower: 246 hp</li>
        <li>Drive: All-Wheel Drive</li>
        <li>Infotainment: 10-inch touchscreen, Apple CarPlay & Android Auto</li>
        <li>Price: $78,900</li>
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
