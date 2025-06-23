import { useEffect, useState } from "react";
import { Manrope, Playfair_Display } from "next/font/google";
import RouteTransition from "./RouteTransition"; 

const manrope = Manrope({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const playfair = Playfair_Display({
  weight: ["700", "900"],
  subsets: ["latin"],
  variable: "--font-playfair"
});

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFade(true), 2000);
    const hideTimer = setTimeout(() => setLoading(false), 2600); // fade out for 600ms
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (loading) {
    return (
      <div
        className={`relative w-screen h-screen overflow-hidden bg-white dark:bg-dark ${
          fade ? "fade-out" : ""
        }`}
      >
        {/* Loader Video */}
        <video
          src="/loader.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
        />

        {/* Overlay Content */}
        <div
          className="absolute inset-0 backdrop-blur-md flex flex-col items-center"
          style={{
            justifyContent: "flex-start",
            paddingTop: "20vh",
            background: "linear-gradient(120deg, rgba(10,23,78,0.92) 0%, rgba(15,23,42,0.85) 60%, rgba(0,0,0,0.7) 100%)"
          }}
        >
          {/* Main Title */}
          <h1
            className={`text-6xl md:text-8xl font-extrabold tracking-tight drop-shadow-2xl mb-4 ${playfair.className}`}
            style={{
              textShadow: "0px 6px 20px rgba(0,0,0,0.5)",
              letterSpacing: "0.08em",
              color: "#fff"
            }}
          >
            <span className="text-primary" style={{ fontFamily: "var(--font-playfair), serif" }}>LENI</span>{" "}
            <span className="text-white" style={{ fontFamily: "var(--font-playfair), serif" }}>Wheels</span>
          </h1>

          {/* Subtitle */}
          <span className={`block text-xl md:text-2xl font-medium text-white/80 tracking-wider animate-pulse ${manrope.className}`}>
            Premium Rides. Unmatched Experience.
          </span>
        </div>
      </div>
    );
  }


  return (
    <div className={`min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white transition-colors duration-300 ${manrope.className}`}>
      {/* Navbar */}
      <nav className="flex items-center justify-between h-16 px-6 shadow-md bg-primary text-white dark:bg-dark relative">
        {/* Logo */}
        <div className="text-lg sm:text-xl font-extrabold tracking-wide whitespace-nowrap">
          LENI Wheels
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden flex items-center justify-center p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open navigation menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Nav Links (Desktop) */}
        <ul className="hidden md:flex gap-10 font-medium text-sm sm:text-base items-center">
          <li><a href="#hero" className="hover:underline transition-opacity hover:opacity-80">Home</a></li>
          <li>
            <RouteTransition href="/cars">
              <span className="hover:underline cursor-pointer transition-opacity hover:opacity-80">Cars</span>
            </RouteTransition>
          </li>
          <li><a href="#sell" className="hover:underline transition-opacity hover:opacity-80">Sell Your Car</a></li>
          <li><a href="#how" className="hover:underline transition-opacity hover:opacity-80">How It Works</a></li>
          <li><a href="#reviews" className="hover:underline transition-opacity hover:opacity-80">Reviews</a></li>
        </ul>

        {/* Actions (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#login" className="hover:underline font-semibold text-sm sm:text-base">Sign In</a>
          <button id="theme-toggle" className="text-xl">🌙</button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-primary text-white dark:bg-dark z-50 shadow-lg animate-fade-in">
            <ul className="flex flex-col gap-6 font-medium text-base p-6">
              <li>
                <a href="#hero" className="hover:underline block" onClick={() => setMenuOpen(false)}>Home</a>
              </li>
              <li>
                <RouteTransition href="/cars">
                  <span className="hover:underline cursor-pointer block" onClick={() => setMenuOpen(false)}>Cars</span>
                </RouteTransition>
              </li>
              <li>
                <a href="#sell" className="hover:underline block" onClick={() => setMenuOpen(false)}>Sell Your Car</a>
              </li>
              <li>
                <a href="#how" className="hover:underline block" onClick={() => setMenuOpen(false)}>How It Works</a>
              </li>
              <li>
                <a href="#reviews" className="hover:underline block" onClick={() => setMenuOpen(false)}>Reviews</a>
              </li>
              <li>
                <a href="#login" className="hover:underline font-semibold block" onClick={() => setMenuOpen(false)}>Sign In</a>
              </li>
              <li>
                <button id="theme-toggle" className="text-xl mt-2">🌙</button>
              </li>
            </ul>
          </div>
        )}
      </nav>

      {/* Hero */}
<section
  id="hero"
  className="relative h-screen flex flex-col justify-center items-center bg-gradient-to-r from-gray-200 to-white dark:from-gray-800 dark:to-gray-900 text-center px-4 overflow-hidden"
>
  <img
    src="/highlander.jpeg"
    alt="Highlander high class"
    className="absolute inset-0 w-full h-full object-cover opacity-80"
  />
  <div className="relative z-10 text-black dark:text-white">
    <h2 className="text-5xl font-bold mb-4">Your Ride, Your Rules</h2>
    <p className="text-lg mb-6 max-w-xl">
      Explore sleek, reliable, and powerful cars at unbeatable prices. Welcome to LENI Wheels — where your dream car awaits.
    </p>
    <RouteTransition href="/cars">
      <button className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-black transition duration-300">
        Browse Cars
      </button>
    </RouteTransition>
  </div>
</section>


      {/* Stats */}
      <div className="flex justify-center gap-8 text-center mt-6">
        <div>
          <h3 className="text-2xl font-bold text-primary">250+</h3>
          <p className="text-gray-600 dark:text-gray-300">Cars Sold</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary">5+</h3>
          <p className="text-gray-600 dark:text-gray-300">Years in Business</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-primary">98%</h3>
          <p className="text-gray-600 dark:text-gray-300">Customer Satisfaction</p>
        </div>
      </div>
      <section className="bg-white dark:bg-gray-900 py-10 px-6 text-center">
  <h3 className="text-2xl font-bold mb-4">Our Impact in Numbers</h3>
  <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
    Our track record speaks volumes. Here’s how we’ve been making a difference.
  </p>
  <img
    src="/stats.png"
    alt="LENI Wheels Stats"
    className="mx-auto rounded-lg shadow-md w-full max-w-4xl"
  />
</section>


{/* Featured Cars */}
{/* Featured Cars */}
<section id="cars" className="p-10 bg-gray-50 dark:bg-gray-800">
  <h3 className="text-3xl font-bold mb-6 text-center">Featured Cars</h3>
  <div className="grid md:grid-cols-3 gap-6">

    {/* Range Rover */}
    <RouteTransition href="/range-rover">
      <div className="cursor-pointer bg-white dark:bg-gray-900 rounded-lg shadow p-4 hover:scale-105 transition-transform duration-300">
        <img src="/evoque.jpg" alt="Range Rover Evoque" className="rounded mb-4 w-full h-48 object-cover" />
        <h4 className="text-xl font-semibold mb-2">2023 Range Rover Evoque</h4>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          A stylish and fuel-efficient SUV perfect for luxury and off-road comfort.
        </p>
        <span className="font-bold text-lg text-primary">$78,900</span>
      </div>
    </RouteTransition>

    {/* Honda CR-V */}
    <RouteTransition href="/honda-crv">
      <div className="cursor-pointer bg-white dark:bg-gray-900 rounded-lg shadow p-4 hover:scale-105 transition-transform duration-300">
        <img src="/honda.jpeg" alt="Honda CR-V" className="rounded mb-4 w-full h-48 object-cover" />
        <h4 className="text-xl font-semibold mb-2">2024 Honda CR-V</h4>
        <p className="text-gray-600 dark:text-gray-300 mb-2">
          Reliable compact SUV with modern tech and safety.
        </p>
        <span className="font-bold text-lg text-primary">$27,400</span>
      </div>
    </RouteTransition>

    {/* Tesla Model 3 */}
    <RouteTransition href="/tesla-model3">
  <div className="block bg-white dark:bg-gray-900 rounded-lg shadow p-4 hover:scale-105 transition-transform duration-300 cursor-pointer">
    <img
      src="/tesla.jpg"
      alt="Tesla Model 3"
      className="rounded mb-4 w-full h-48 object-cover"
    />
    <h4 className="text-xl font-semibold mb-2">2024 Tesla Model 3</h4>
    <p className="text-gray-600 dark:text-gray-300 mb-2">
      Sleek, fast and electric. Premium autopilot experience.
    </p>
    <span className="font-bold text-lg text-primary">$39,990</span>
  </div>
</RouteTransition>


  </div>
</section>




{/* Why Choose Us */}
<section className="p-10 bg-gray-100 dark:bg-gray-700">
  <h3 className="text-3xl font-bold mb-6 text-center">Why Choose LENI Wheels?</h3>
  <div className="grid md:grid-cols-3 gap-6">
    
    {/* Card 1 */}
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <h4 className="text-xl font-semibold mb-2">Quality Assurance</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Every car undergoes rigorous inspection to ensure top-notch quality and reliability.
      </p>
      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
        <li>Certified Pre-Owned</li>
        <li>Warranty Options</li>
        <li>Expert Inspections</li>
      </ul>
    </div>

    {/* Card 2 */}
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <h4 className="text-xl font-semibold mb-2">Flexible Financing</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        We offer a variety of financing options tailored to your budget and preferences.
      </p>
      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
        <li>Zero Down Payment</li>
        <li>Low Interest Rates</li>
        <li>Instant Loan Approval</li>
      </ul>
    </div>

    {/* Card 3 */}
    <div className="bg-white dark:bg-gray-900 rounded-lg shadow p-6">
      <h4 className="text-xl font-semibold mb-2">Exceptional Support</h4>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        Our dedicated team is here to assist you before, during, and after your purchase.
      </p>
      <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300">
        <li>24/7 Customer Service</li>
        <li>Roadside Assistance</li>
        <li>After-Sales Support</li>
      </ul>
    </div>

  </div>
</section>

{/* Testimonial */}
<section id="testimonial" className="bg-gray-100 dark:bg-gray-800 py-10 px-6 text-center">
  <h3 className="text-3xl font-bold mb-4">What Our Customers Say</h3>
  <p className="mb-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
    Real experiences from real drivers who chose LENI Wheels. See how we’ve made car buying smoother, smarter, and more satisfying.
  </p>

  <div className="max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden p-6">
    <p className="italic text-lg mb-4 text-gray-700 dark:text-gray-300">
      "This car changed my life. LENI Wheels delivered quality, affordability, and peace of mind!"
    </p>

    <video
      src="/testimonials.mp4"
      controls
      className="w-full rounded-md mb-4"
      poster="/testimonials.jpeg"
      preload="metadata"
    />

    <p className="font-semibold text-gray-800 dark:text-white">— Musa A., Abuja</p>
  </div>
</section>


      {/* Contact */}
      <section id="contact" className="p-10">
        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
        <p className="mb-2">Ready to drive? Let’s talk or schedule a visit.</p>
        <p>Email: <a className="text-primary hover:underline" href="mailto:sales@leniwheels.com">sales@leniwheels.com</a></p>
        <p>Phone: <a className="text-primary hover:underline" href="tel:+2349001234567">+234 900 123 4567</a></p>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white dark:bg-dark py-6 text-center">
        <div className="container mx-auto px-4">
          <p className="font-semibold">© {new Date().getFullYear()} LENI Wheels. All rights reserved.</p>
          <p className="text-sm mt-1">Designed with ❤️ for premium rides.</p>
        </div>
      </footer>
    </div>
  );
}

