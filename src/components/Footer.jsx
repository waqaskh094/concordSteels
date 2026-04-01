const Footer = () => {
  return (
    <footer className="bg-[#0d1b2a] px-6 md:px-12 py-10 border-t border-[#3f4a56]/20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <div className="text-lg font-black text-[#e5e2dd] uppercase tracking-tight">
          Concord <span className="text-[#FFB786]">Steel</span> Centre Ltd.
        </div>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-8 text-sm uppercase tracking-widest">
          <a href="#" className="text-[#e5e2dd]/70 hover:text-[#FFB786] transition-colors duration-150">
            Privacy Policy
          </a>
          <a href="#" className="text-[#e5e2dd]/70 hover:text-[#FFB786] transition-colors duration-150">
            Terms of Service
          </a>
          <a href="#" className="text-[#e5e2dd]/70 hover:text-[#FFB786] transition-colors duration-150">
            ISO Certification
          </a>
          <a href="#" className="text-[#e5e2dd]/70 hover:text-[#FFB786] transition-colors duration-150">
            Safety Standards
          </a>
        </div>

        {/* Copyright */}
        <div className="text-[#FFB786] text-[10px] uppercase tracking-widest">
          © 2026 Concord Steel Centre Ltd. All Rights Reserved.
        </div>

      </div>
    </footer>
  )
}

export default Footer