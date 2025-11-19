export default function Team() {
  return (
    <main className="min-h-screen bg-transparent text-gray-800 flex flex-col items-center">
 
      <section id="team" className="max-w-5xl px-6 py-16 text-center space-y-6">
        <h2 className="text-4xl font-bold text-black">Meet Our Team...</h2>
        <p className="italic leading-relaxed">
          <span className="font-bold bg-(--color-cream) text-(--color-text-dark)" style={{ borderRadius: '12px' }}>Proud Home Cooking Class</span> 
          offers travelers and locals an authentic Thai culinary experience,
          <span className="font-bold bg-[#B9F5BB] text-(--color-text-dark)" style={{ borderRadius: '12px' }}> founded by Kik</span>, 
          a cheerful local from Koh Phangan who has years of experience teaching authentic Thai cuisine with love and laughter. 
          Kik isn’t your typical business owner. <span className="font-bold bg-[#B9DAF5] text-(--color-text-dark)" style={{ borderRadius: '12px' }}>She’s also a proud dog mom of five adorable rescues</span> who take their jobs as “class receptionists” very seriously. You might find them greeting guests, supervising your curry paste skills, 
          or politely requesting a tip — in the form of a little piece of chicken, of course. 🍗💛
        </p>
      </section>

      {/* Grid layout - Top */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 place-items-center mb-12 ">
        <div className="shadow-md p-2">
          <img src="/assets/Kik_polaroid.png" alt="Kik" className="w-[260px] h-[325px] object-cover hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Nancy */}
        <div className="shadow-md p-2" >
          <img src="/assets/Nancy_polaroid.png" alt="Nancy" className="w-[260px] h-[325px] object-cover rounded-sm mx-auto hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Pare */}
        <div className="shadow-md p-2" >
          <img src="/assets/Pare_polaroid.png" alt="Pare" className="w-[260px] h-[325px] object-cover rounded-sm mx-auto hover:scale-105 transition-transform duration-300" />
        </div>
        </div>

      {/* Grid Layout - Bottom */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center">

        {/* Berk */}
        <div className="shadow-md p-2" >
          <img src="/assets/Berk_polaroid.png" alt="Berk" className="w-[260px] h-[325px] object-cover rounded-sm mx-auto hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Samur */}
        <div className="shadow-md p-2">
          <img src="/assets/Samur_polaroid.png" alt="Samur" className="w-[260px] h-[325px] object-cover rounded-sm mx-auto hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Garlic */}
        <div className="shadow-md p-2">
          <img src="/assets/Garlic_polaroid.png" alt="Garlic" className="w-[260px] h-[325px] object-cover rounded-sm mx-auto hover:scale-105 transition-transform duration-300" />
        </div>

        {/* Pancake & Panda */}
        <div className="shadow-md p-2">
          <img src="/assets/Panda_Pancake_polaroid.png" alt="Pancake and Panda" className="w-[260px] h-[325px] object-cover rounded-sm mx-auto hover:scale-105 transition-transform duration-300" />
        </div>
      </div>

    </main>
  );
}