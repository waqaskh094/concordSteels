import { VALUES } from '../constants/data'

const Corporate = () => {
  return (
    <section id="corporate" className="py-32 bg-[#e5e2dd] text-[#131411] px-6 md:px-24">

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-20 items-start">

        {/* Left Column */}
        <div className="md:col-span-5">
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tight mb-12">
            Built on Trust
          </h2>

          <div className="space-y-6 text-lg leading-relaxed text-[#20201d]">
            <p className="font-bold">
              At Concord Steel Centre Ltd., we don't just process metal — we forge
              lasting partnerships through technical excellence and unwavering reliability.
            </p>
            <p>
              Founded in 1976, we have grown into one of the GTA's premier steel
              service centers. Our facility is equipped with state-of-the-art machinery
              designed to meet the most exacting specifications of the automotive,
              construction, and manufacturing sectors.
            </p>
            <p>
              Operating out of a 150,000 sq/ft facility centrally located in
              Woodbridge, Ontario, we serve clients across Canada with precision
              and speed.
            </p>
          </div>

          {/* CEO Quote */}
          <div className="mt-16 p-8 bg-[#131411] text-[#e5e2dd] border-l-8 border-[#FFB786]">
            <p className="italic text-lg mb-4 text-[#c4c6cc]">
              "Our commitment is to deliver quality that speaks for itself, precision
              that saves time, and service that builds businesses."
            </p>
            <span className="text-sm font-black uppercase tracking-widest text-[#FFB786]">
              — CEO, Concord Steel Centre Ltd.
            </span>
          </div>
        </div>

        {/* Right Column - Value Cards */}
        <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {VALUES.map((value) => (
            <div
              key={value.id}
              className="bg-[#20201d] p-8 h-64 flex flex-col justify-between group hover:bg-[#0d1b2a] transition-colors duration-300"
            >
              <span className="text-[#e5e2dd] text-xs font-black uppercase tracking-widest opacity-40">
                Value {value.id}
              </span>
              <div>
                <h3 className="text-[#FFB786] text-3xl font-black uppercase mb-2">
                  {value.title}
                </h3>
                <p className="text-[#c4c6cc] text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Corporate