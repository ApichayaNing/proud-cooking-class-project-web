"use client";
import { FaWhatsapp, FaPhone, FaInstagram } from "react-icons/fa";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Load Instagram embed script dynamically after render
    const loadInstagramEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      } else {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        script.onload = () => window.instgrm?.Embeds?.process();
        document.body.appendChild(script);
      }
    };

    // Delay slightly to allow React to finish painting
    const timer = setTimeout(loadInstagramEmbed, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center text-gray-800 px-6 py-16 text-center"
    >
      <h2 className="text-4xl font-bold mb-6 text-black">Get in Touch</h2>

      <p className="italic leading-relaxed mb-10 max-w-2xl">
        We’d love to hear from you! Whether you’d like to book a class,
        ask a question, or just say hi — feel free to reach out through
        any of the channels below 🌸
      </p>

      {/* Contact Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center mb-16">
        <a
          href="https://wa.me/66935355589"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform p-6 rounded-2xl w-56"
        >
          <FaWhatsapp className="text-green-500 w-12 h-12 mb-3" />
          <p className="font-semibold text-lg">Chat on WhatsApp</p>
          <span className="text-gray-600 mt-1">(+66) 93 535 5589</span>
        </a>

        <a
          href="tel:+66935355589"
          className="flex flex-col items-center justify-center bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform p-6 rounded-2xl w-56"
        >
          <FaPhone className="text-orange-500 w-12 h-12 mb-3" />
          <p className="font-semibold text-lg">Call Us</p>
          <span className="text-gray-600 mt-1">(+66) 93 535 5589</span>
        </a>

        <a
          href="https://www.instagram.com/proudhomecookingclass/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center bg-white shadow-md hover:shadow-lg hover:scale-105 transition-transform p-6 rounded-2xl w-56"
        >
          <FaInstagram className="text-pink-500 w-12 h-12 mb-3" />
          <p className="font-semibold text-lg">Instagram</p>
          <span className="text-gray-600 mt-1">@proudhomecookingclass</span>
        </a>
      </div>

      {/* Instagram Posts Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-center items-stretch w-full ">
        {[
          "https://www.instagram.com/p/DHGsIIqTHJG/",
          "https://www.instagram.com/p/DGYHrRVTOBW/",
          "https://www.instagram.com/p/DPoHqedjzuT/",
        ].map((link, index) => (
          <div
            key={index}
            className="flex justify-center items-center bg-white rounded-xl overflow-hidden shadow-md w-full max-w-[340px] aspect-[4/5] hover:scale-105 transition-transform duration-300"
            dangerouslySetInnerHTML={{
              __html: `
                <blockquote class="instagram-media"
                  data-instgrm-permalink="${link}"
                  data-instgrm-version="14"
                  style="background:#FFF;border:0;border-radius:3px;
                        box-shadow:0 0 1px 0 rgba(0,0,0,0.5),
                                   0 1px 10px 0 rgba(0,0,0,0.15);
                        margin:0;max-width:340px;min-width:280px;padding:0;">
                </blockquote>
              `,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
