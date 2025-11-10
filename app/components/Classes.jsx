"use client";

import Image from "next/image";
import Link from "next/link";

export default function Classes() {
  return (
    <section className="flex flex-col md:flex-row items-start justify-between px-8 py-16 w-full max-w-6xl mx-auto gap-10">
      {/* Left Column */}
      <div className="md:w-1/2 space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
          Proud <br /> Cooking Class Packages
        </h1>

        <p className="italic text-gray-700 mb-6 max-w-[400px]">
          Our classes are held daily at{" "}
          <span className="font-semibold bg-[#B9DAF5] text-black hover:scale-105 transition" style={{ borderRadius: "12px" }}>12PM, 2PM </span>, 
          and <span className="font-semibold bg-[#B9DAF5] text-black hover:scale-105 transition" style={{ borderRadius: "12px" }}>5PM </span>,
          lasting <span className="font-semibold bg-[#F7E8C9] text-black hover:scale-105 transition" style={{ borderRadius: "12px" }}>2–4 hours </span>. You’ll get
          to choose your favorite recipes from soups, salads, curries,
          stir-fries, and desserts — all made from scratch with love. We also
          offer{" "}
          <span className="font-semibold bg-[#B9F5BB] text-black hover:scale-105 transition" style={{ borderRadius: "12px" }}>
            gluten-free, vegetarian, and vegan
          </span>{" "}
          options, plus an optional local market tour (extra 200–300฿) for
          guests with their own transport.
        </p>

        <p className="text-lg font-semibold text-gray-900 mb-6 max-w-[420px]">
          Select a{" "}
          <span style={{ borderRadius: "12px" }}
            className="bg-[#f4b466] text-(--color-text-dark) font-bold hover:scale-105 transition">class</span> to see
          full details and choose your favorite cooking experience.
        </p>
      </div>

      {/* Right Column - Image Grid */}
      <div className="md:w-1/2 grid grid-cols-2 gap-6 justify-center">
        {/* Class A */}
        <Link
          href="/classes/class-A"
          className="hover:scale-105 transition-transform duration-300 "
        >
          <Image
            src="/assets/packageA.png"
            alt="Class A"
            width={346}
            height={433}
            className="rounded-md shadow-md object-cover"
          />
        </Link>

        {/* Class B */}
        <Link
          href="/classes/class-B"
          className="hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/assets/packageB.png"
            alt="Class B"
            width={346}
            height={433}
            className="rounded-md shadow-md object-cover"
          />
        </Link>

        {/* Class C */}
        <Link
          href="/classes/class-C"
          className="hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/assets/packageC.png"
            alt="Class C"
            width={346}
            height={433}
            className=" rounded-md shadow-md object-cover"
          />
        </Link>

        {/* Class D */}
        <Link
          href="/classes/class-D"
          className="hover:scale-105 transition-transform duration-300"
        >
          <Image
            src="/assets/packageD.png"
            alt="Class D"
            width={346}
            height={433}
            className=" rounded-md shadow-md object-cover"
          />
        </Link>
      </div>
    </section>
  );
}