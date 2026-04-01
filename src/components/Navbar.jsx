import { useState } from 'react'
import { NAV_LINKS } from '../constants/data'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#131411] border-b border-[#44474c]/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" className="text-xl md:text-2xl font-black tracking-tighter text-[#e5e2dd] uppercase">
          Concord <span className="text-[#FFB786]">Steel</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="text-sm font-bold uppercase tracking-widest text-[#e5e2dd] hover:text-[#FFB786] transition-colors duration-150">
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <a href="#contact" className="hidden md:block bg-[#FFB786] text-[#502400] text-sm font-black px-6 py-3 uppercase tracking-widest hover:brightness-110 transition-all">
          Get Quote
        </a>

        {/* Hamburger - Mobile */}
        <button className="md:hidden text-[#e5e2dd] focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`w-6 h-0.5 bg-[#e5e2dd] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <div className={`w-6 h-0.5 bg-[#e5e2dd] my-1.5 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-[#e5e2dd] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#131411] border-t border-[#44474c]/30 px-6 py-6 flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="text-sm font-bold uppercase tracking-widest text-[#e5e2dd] hover:text-[#FFB786] transition-colors duration-150">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-[#FFB786] text-[#502400] text-sm font-black px-6 py-3 uppercase tracking-widest text-center hover:brightness-110 transition-all">
            Get Quote
          </a>
        </div>
      )}
    </nav>
  )
}

export default Navbar