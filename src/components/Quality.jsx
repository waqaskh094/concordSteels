const Quality = () => {
  return (
    <section id="quality" className="py-32 bg-[#0d1b2a] px-6 md:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">

        {/* Left Column - Content */}
        <div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight text-[#e5e2dd] mb-8">
            Uncompromising <br />
            <span className="text-[#FFB786]">Standards</span>
          </h2>

          <div className="space-y-6 text-[#c4c6cc] text-lg leading-relaxed mb-12">
            <p>
              Quality isn't just a department at Concord Steel — it's the
              foundation of our existence. Our Quality Management System (QMS)
              ensures that every coil processed meets or exceeds the industry's
              most rigorous benchmarks.
            </p>
            <p>
              We prioritize a culture of safety above all else. Our facility
              operates under strict OHSA guidelines to protect our team and
              ensure seamless operation for our clients.
            </p>
            <p>
              Every employee is empowered to identify risks and recommend
              improvements — because we believe safety is everyone's
              responsibility, not just management's.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-col sm:flex-row gap-8">

            {/* ISO Badge */}
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-[#e5e2dd] flex items-center justify-center p-3 shrink-0">
                <span className="font-black text-[#131411] text-xs text-center uppercase tracking-tighter leading-tight">
                  ISO 9001:2015 Registered
                </span>
              </div>
              <div>
                <h4 className="font-black text-[#e5e2dd] uppercase tracking-widest text-sm mb-1">
                  Certified Quality
                </h4>
                <p className="text-[#c4c6cc] text-xs">
                  Standardized Excellence
                </p>
              </div>
            </div>

            {/* Safety Badge */}
            <div className="flex items-center gap-6">
              <div className="w-24 h-24 bg-[#FFB786] flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-[#502400] text-4xl">
                  verified_user
                </span>
              </div>
              <div>
                <h4 className="font-black text-[#e5e2dd] uppercase tracking-widest text-sm mb-1">
                  Safety First
                </h4>
                <p className="text-[#c4c6cc] text-xs">
                  Zero-Incident Goal
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative group">
          <img
            src="https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800&auto=format&fit=crop"
            alt="Quality inspection at Concord Steel"
            className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 border-8 border-[#FFB786] opacity-10 group-hover:opacity-30 transition-opacity pointer-events-none" />
        </div>

      </div>
    </section>
  )
}

export default Quality