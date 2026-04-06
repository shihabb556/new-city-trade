

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 dark:bg-slate-950/80 backdrop-blur-md shadow-sm dark:shadow-none transition-all duration-300 ease-in-out h-20">
      <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 h-full">

        <a className="flex flex-col leading-none group cursor-pointer hover:scale-105 hover:opacity-90 transition-all duration-300 ease-in-out " href="#home">
          <span className="text-2xl sm:text-3xl font-black text-primary dark:text-white tracking-tighter transition-colors ">
            NCT
          </span>
          <span className="text-[8px] sm:text-[10px] font-bold text-on-tertiary-container dark:text-on-tertiary-container/80 uppercase tracking-[0.25em] ml-0.5">
            New City Trade
          </span>
        </a>
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
        <button className="industrial-gradient text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-bold transition-transform scale-98 active:scale-95 hover:opacity-90 text-xs sm:text-sm cursor-pointer">
          Get Quote
        </button>
      </nav>
    </header>
  );
};

export default Header;
