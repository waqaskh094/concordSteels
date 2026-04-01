const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex flex-col overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/steel.png"
          alt="Steel processing facility"
          className="w-full h-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#131411]/90 via-[#131411]/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-6 md:px-24 mt-20">
        <div className="max-w-4xl">

          {/* Eyebrow */}
          <span className="text-[#FFB786] uppercase tracking-[0.3em] text-sm mb-6 block">
            Steel Processing Solutions Since 1976
          </span>

          {/* Headline */}
          <h1 className="text-5xl md:text-8xl font-black tracking-tight leading-none uppercase text-[#e5e2dd] mb-6">
            For All Your <br />
            <span className="text-[#FFB786]">Flat Rolled</span> <br />
            Needs
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-[#c4c6cc] font-light max-w-xl mb-10">
            Precision engineering and high-capacity processing serving the
            Greater Toronto Area with uncompromising industrial standards.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-[#FFB786] text-[#502400] font-black px-10 py-4 uppercase tracking-widest text-center hover:brightness-110 transition-all active:scale-95"
            >
              Get In Touch
            </a>
            <a
              href="#services"
              className="border border-[#44474c] text-[#e5e2dd] font-black px-10 py-4 uppercase tracking-widest text-center hover:bg-[#2a2a27] transition-all"
            >
              Explore Services
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="relative z-10 w-full bg-[#20201d] h-12 flex items-center px-6 md:px-12 justify-between shrink-0">
        <span className="text-[10px] uppercase tracking-widest font-bold text-[#c4c6cc]">
          GPS: 43.7915° N, 79.5414° W
        </span>
        <span className="text-[10px] uppercase tracking-widest font-bold text-[#c4c6cc]">
          Operational 24/5
        </span>
        <span className="text-[10px] uppercase tracking-widest font-bold text-[#c4c6cc]">
          ISO 9001:2015 Registered
        </span>
      </div>

    </section>
  )
}

export default Hero