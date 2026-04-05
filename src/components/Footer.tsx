

const Footer = () => {
  return (
    <footer className="bg-[#f0f3ff] dark:bg-slate-900 w-full py-12 px-8 font-['Inter'] text-sm leading-relaxed">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="flex flex-col leading-none group cursor-pointer">
            <span className="text-2xl sm:text-3xl font-black text-primary dark:text-white tracking-tighter transition-colors group-hover:text-on-tertiary-container">
              NCT
            </span>
            <span className="text-[8px] sm:text-[10px] font-bold text-on-tertiary-container dark:text-on-tertiary-container/80 uppercase tracking-[0.25em] ml-0.5">
              New City Trade
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Bangladesh's premier B2B supplier for high-end construction materials and industrial grade hardware solutions.
          </p>
          <div className="flex gap-4">
            <span
              className="material-symbols-outlined text-slate-500 hover:text-primary cursor-pointer"
              data-icon="public"
            >
              public
            </span>
            <span
              className="material-symbols-outlined text-slate-500 hover:text-primary cursor-pointer"
              data-icon="hub"
            >
              hub
            </span>
            <span
              className="material-symbols-outlined text-slate-500 hover:text-primary cursor-pointer"
              data-icon="share"
            >
              share
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h5 className="text-[#1B365D] dark:text-white font-bold mb-4 uppercase text-xs tracking-widest">
              Quick Links
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-[#1B365D] dark:hover:text-white hover:underline decoration-[#f77d03] underline-offset-4 transition-opacity opacity-90 hover:opacity-100"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-[#1B365D] dark:hover:text-white hover:underline decoration-[#f77d03] underline-offset-4 transition-opacity opacity-90 hover:opacity-100"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-[#1B365D] dark:hover:text-white hover:underline decoration-[#f77d03] underline-offset-4 transition-opacity opacity-90 hover:opacity-100"
                  href="#"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-[#1B365D] dark:hover:text-white hover:underline decoration-[#f77d03] underline-offset-4 transition-opacity opacity-90 hover:opacity-100"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-[#1B365D] dark:text-white font-bold mb-4 uppercase text-xs tracking-widest">
              Policies
            </h5>
            <ul className="space-y-2">
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-[#1B365D] dark:hover:text-white hover:underline decoration-[#f77d03] underline-offset-4 transition-opacity opacity-90 hover:opacity-100"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-[#1B365D] dark:hover:text-white hover:underline decoration-[#f77d03] underline-offset-4 transition-opacity opacity-90 hover:opacity-100"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-slate-500 dark:text-slate-400 hover:text-[#1B365D] dark:hover:text-white hover:underline decoration-[#f77d03] underline-offset-4 transition-opacity opacity-90 hover:opacity-100"
                  href="#"
                >
                  Shipping Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="space-y-6">
          <h5 className="text-[#1B365D] dark:text-white font-bold uppercase text-xs tracking-widest">
            Newsletter
          </h5>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
            Get the latest product updates and industrial insights.
          </p>
          <div className="flex">
            <input
              className="flex-1 bg-surface-container-lowest border-none rounded-l-lg text-xs sm:text-sm px-4 focus:ring-primary outline-none"
              placeholder="Your email"
              type="email"
            />
            <button className="bg-[#1B365D] text-white px-4 py-2 rounded-r-lg hover:bg-opacity-90 transition-all font-bold text-xs sm:text-sm">
              Join
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 text-center text-slate-400 text-xs">
        © 2026 NCT New City Trade Bangladesh. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
