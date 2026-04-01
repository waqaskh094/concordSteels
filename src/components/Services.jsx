import { SERVICES } from '../constants/data'

const Services = () => {
  return (
    <section id="services" className="py-32 bg-[#1c1c19] px-6 md:px-24">

      {/* Section Header */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tight text-[#e5e2dd]">
            Our <br />
            <span className="text-[#FFB786]">Services</span>
          </h2>
          <p className="text-[#c4c6cc] md:w-1/3 text-right mt-6 md:mt-0 pb-2">
            High-precision toll processing for cold rolled, galvanized, and
            pre-painted steel products from our 150,000 sq/ft GTA facility.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#131411] p-12 border border-transparent hover:border-[#FFB786] transition-all duration-300 relative group"
            >
              {/* Card Number */}
              <span className="absolute top-4 right-6 text-8xl font-black text-[#e5e2dd]/5 select-none">
                {service.id}
              </span>

              {/* Icon */}
              <span className="material-symbols-outlined text-[#FFB786] text-5xl mb-12 block">
                {service.icon}
              </span>

              {/* Title */}
              <h3 className="text-3xl font-black uppercase text-[#e5e2dd] mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#c4c6cc] leading-relaxed mb-8">
                {service.description}
              </p>

              {/* Specs List */}
              <ul className="space-y-2">
                {service.specs.map((spec) => (
                  <li
                    key={spec}
                    className="text-sm font-bold uppercase tracking-wider text-[#FFB786]"
                  >
                    • {spec}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>
      </div>

    </section>
  )
}

export default Services