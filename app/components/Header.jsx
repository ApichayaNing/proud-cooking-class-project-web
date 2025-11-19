import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main id="top" className="w-full bg-white text-gray-800 flex flex-col items-center">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 w-full max-w-6xl">
        {/* Left Column */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Proud<br />Cooking Class
          </h1>

          <p className="text-lg text-gray-700">
            ยินดีต้อนรับสู่เกาะพะงันค่ะ 🙏 <br />
            <span className="text-xl font-medium">Welcome to Koh Pha-ngan 🇹🇭</span>
          </p>

          <p className="italic text-gray-700 mb-6 max-w-sm">
            Nestled in the heart of Koh Pha-ngan, 
            our classes invite you to experience{" "}
            <span 
              className=" bg-[#B9DAF5] text-black hover:scale-105 transition"
              style={{ borderRadius: "25px", padding: '3px' }}>
              authentic Thai
            </span>cooking in a cozy, hands-on setting. Whether 
            you’re a curious traveler or a passionate foodie, 
            you’ll learn to create traditional Thai dishes 
            using fresh, local ingredients with a few secret tips 
            passed down through generations.
          </p>

          <p className="font-semibold">
            Cook, laugh, and share a meal you’ll never forget — 
            <br/>just <span className=" bg-[#B9F5BB] text-black hover:scale-105 transition"
              style={{ borderRadius: "25px", padding: '3px' }}> Thai families </span> do. 🌿
          </p>

          <div className="pt-2">
            <p className="font-medium text-lg mb-2">Ready to join us in the kitchen?</p>
            <p className=" text-gray-700 leading-relaxed">
              Click{" "}
              <Link
                href="/booking"
                className="inline-block bg-[#f4b466] text-black font-extrabold hover:scale-105 transition"
                style={{ borderRadius: "25px", padding: '3px' }}
              >
                Book Now
              </Link>{" "}
              to reserve your spot! 💛
            </p>
          </div>
        </div>

        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center hover:scale-105 transition-transform duration-300">
          <Image
            src="/assets/mango-sticky-rice.png"
            alt="Mango Sticky Rice"
            width={620}
            height={777}
            className=" shadow-md object-cover p-4 rounded-2xl"
          />
        </div>
      </section>
    </main>
  );
}