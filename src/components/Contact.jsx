import { CONTACT_INFO } from '../constants/data'

const Contact = () => {
  return (
    <section id="contact" className="py-32 bg-[#131411] px-6 md:px-24">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tight text-[#e5e2dd] mb-20">
          Get In <br />
          <span className="text-[#FFB786]">Touch</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-[#44474c]/40">

          {/* Left - Contact Details */}
          <div className="p-12 md:p-20 bg-[#20201d]">
            <h3 className="text-2xl font-black uppercase tracking-tight text-[#e5e2dd] mb-12">
              Connect with our Sales Team
            </h3>

            <div className="space-y-10">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="flex gap-6 items-start">
                  <span className="material-symbols-outlined text-[#FFB786] text-3xl shrink-0">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="text-[#FFB786] font-black uppercase tracking-widest text-xs mb-2">
                      {item.label}
                    </h4>
                    <p className="text-[#e5e2dd] text-lg leading-snug whitespace-pre-line">
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="mt-16">
              <a
                href="mailto:sales@concordsteel.com"
                className="block w-full bg-[#FFB786] text-[#502400] font-black py-5 uppercase tracking-widest text-center hover:brightness-110 transition-all active:scale-95"
              >
                Request a Detailed Quote
              </a>
            </div>
          </div>

          {/* Right - Map */}
          <div className="min-h-[400px]">
            <iframe
              title="Concord Steel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2879.123456789!2d-79.617953!3d43.775032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDQ2JzMwLjEiTiA3OcKwMzcnMDQuNiJX!5e0!3m2!1sen!2sca!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(50%) contrast(1.2) brightness(0.7)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[400px] hover:filter-none transition-all duration-1000"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact