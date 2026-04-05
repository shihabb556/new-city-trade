import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300 ease-in-out h-20">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">
        <div className="text-xl font-extrabold text-[#1B365D] dark:text-white uppercase tracking-wider font-headline">
          NCT New City Trade
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a
            className="text-[#1B365D] dark:text-white border-b-2 border-[#f77d03] pb-1 font-headline font-bold tracking-tight transition-all duration-300 ease-in-out"
            href="#home"
          >
            Home
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 font-medium hover:text-[#1B365D] dark:hover:text-white transition-all duration-300 ease-in-out"
            href="#about"
          >
            About
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 font-medium hover:text-[#1B365D] dark:hover:text-white transition-all duration-300 ease-in-out"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 font-medium hover:text-[#1B365D] dark:hover:text-white transition-all duration-300 ease-in-out"
            href="#products"
          >
            Products
          </a>
          <a
            className="text-slate-600 dark:text-slate-400 font-medium hover:text-[#1B365D] dark:hover:text-white transition-all duration-300 ease-in-out"
            href="#contact"
          >
            Contact
          </a>
        </div>
        <button className="industrial-gradient text-white px-6 py-2.5 rounded-lg font-bold transition-transform scale-98 active:scale-95 hover:opacity-90">
          Get Quote
        </button>
      </nav>
    </header>
  );
};

export default Header;
