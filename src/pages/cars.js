import { Poppins } from "next/font/google";
import RouteTransition from "./RouteTransition";

const poppins = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

const cars = [
  {
    name: "Toyota",
    href: "/toyota",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80",
    desc: "Reliable and efficient vehicles for every lifestyle.",
  },
  {
    name: "Range Rover",
    href: "/range-rover",
    img: "evoque.jpg",
    desc: "Luxury SUVs with off-road capabilities.",
  },
  {
    name: "Ford",
    href: "/ford",
    img: "https://images.unsplash.com/photo-1461632830798-3adb3034e4c8?auto=format&fit=crop&w=600&q=80",
    desc: "American engineering, performance, and style.",
  },
  {
    name: "Honda",
    href: "/honda",
    img: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=600&q=80",
    desc: "Innovative, safe, and fuel-efficient cars.",
  },
  {
    name: "Tesla",
    href: "/tesla",
    img: "tesla.jpg",
    desc: "Electric vehicles with cutting-edge technology.",
  },
  {
    name: "Mazda",
    href: "/mazda",
    img: "highlander.jpeg",
    desc: "Sporty design and fun-to-drive experience.",
  },
  {
    name: "Acura",
    href: "/acura",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80",
    desc: "Premium performance and advanced features.",
  },
  {
    name: "Subaru",
    href: "/subaru",
    img: "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=600&q=80",
    desc: "All-wheel drive and adventure-ready vehicles.",
  },
  {
    name: "Kia",
    href: "/kia",
    img: "tesla.jpg",
    desc: "Modern, affordable, and stylish cars.",
  },
];

export default function Cars() {
  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white ${poppins.className}`}>
      <header className="p-6 bg-primary text-white dark:bg-dark text-center">
        <h1 className="text-3xl font-bold">All Car Brands</h1>
        <p className="mt-2">Browse our full selection of brands</p>
      </header>
      <main className="p-8 grid md:grid-cols-3 gap-8">
        {cars.map((car) => (
          <RouteTransition href={car.href} key={car.name}>
            <div className="cursor-pointer bg-white dark:bg-gray-900 rounded-lg shadow p-4 hover:scale-105 transition-transform duration-300">
              <img src={car.img} alt={car.name} className="rounded mb-4 w-full h-48 object-cover" />
              <h2 className="text-xl font-semibold mb-2">{car.name}</h2>
              <p className="text-gray-600 dark:text-gray-300 mb-2">{car.desc}</p>
            </div>
          </RouteTransition>
        ))}
      </main>
    </div>
  );
}
