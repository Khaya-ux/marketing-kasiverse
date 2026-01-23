import React from 'react';


 function Navbar() {
  return (
    //Fixed navbar with full width, shadow and deep pink background
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 ">
      {/* Centeres all items */}
      <div className="flex flex-wrap items-center justify-between px-6 py-4 gap-y-4">
        
        {/* Spacing between the logo and the navlinks */}
        <div className="shrink-0 text-xl font-semibold pr-4">Kasiverse</div>

        {/* Navlinks stay horizontal, centered, wrap if needed, no scroll */}
        <div className="flex flex-wrap  gap-x-4 md:gap-x-6 grow">
          {/* Each navlink leads to a different section, and they have got hover effects, rounded corners too */}
          <a 
            href="#home"
            className="text-white font-semibold no-underline transition-all duration-300 hover:bg-linear-to-l from-gray-800 via-blue-700 to-gray-900 px-3 py-1.5 rounded-lg"
          >
            Problems
          </a>
          <a
            href="#about"
            className="text-white font-semibold no-underline transition-all duration-300 hover:bg-linear-to-l from-gray-800 via-blue-700 to-gray-900 px-3 py-1.5 rounded-lg"
          >
            Ideas
          </a>
          <a
            href="#skills"
            className="text-white font-semibold no-underline transition-all duration-300 hover:bg-linear-to-l from-gray-800 via-blue-700 to-gray-900 hover:text-deep-pink px-3 py-1.5 rounded-lg"
          >
            Marketplace
          </a>
        </div>

       
      </div>
    </nav>
  );
}
export default Navbar;