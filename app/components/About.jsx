
const About = () => {
return (
    <main className="min-h-screen bg-transparent text-gray-800 flex flex-col items-center">
 
    <section id="about" className="max-w-5xl px-6 py-16 text-center space-y-6">
        <h2 className="text-4xl font-bold text-black">About Us...</h2>
        <p className="italic leading-relaxed"> 
          Welcome to <span className="font-bold bg-(--color-cream) text-(--color-text-dark)" style={{ borderRadius: '12px' }}>
          Proud Home Cooking Class</span> a local gem nestled in the heart of Koh Phangan, Thailand,
          where authentic Thai flavors meet warm island hospitality.Here, cooking isn’t just about recipes — it’s about  
          <span className="font-bold bg-[#B9F5BB] text-(--color-text-dark)" style={{ borderRadius: '12px' }}>stories, smiles, and sharing food made with love.</span>,
          Each class invites you to roll up your sleeves, grind fresh curry paste, and discover the secrets behind Thailand’s most beloved dishes. From fragrant herbs 
          to spicy chili pastes, everything we make celebrates the colors and flavors of <span className="font-bold bg-[#B9DAF5] text-(--color-text-dark)" style={{ borderRadius: '12px' }}>Thai culture</span>. 🌶️🍋
        </p>
    </section>
      
    <section className="max-w-6xl mx-auto px-6 pt-2 pb-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Image 1 */}
        <div className="p-4 rounded-2xl shadow-sm flex justify-center hover:scale-105 transition-transform duration-300 ">
            <img
                src="/assets/Class02.png"
                alt="Thai cooking ingredients"
                className="rounded-lg object-cover w-[344px] h-[430px]"
            />
        </div>

        {/* Image 2 */}
        <div className="p-4 rounded-2xl shadow-sm flex justify-center hover:scale-105 transition-transform duration-300 ">
            <img
                src="/assets/class01.png"
                alt="Cooking class group"
                className="rounded-lg object-cover w-[344px] h-[430px]"
            />
        </div>

        {/* Image 3 */}
        <div className="p-4 rounded-2xl shadow-sm flex justify-center hover:scale-105 transition-transform duration-300 ">

            <img
                src="/assets/House.png"
                alt="Koh Phangan cooking space"
                className="rounded-lg object-cover w-[344px] h-[430px]"
            />
        </div>
        </section>

    </main>
  );
}
export default About;