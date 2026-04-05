

const Testimonials = () => {
  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-on-tertiary-container mb-4 font-label">
            Trusted Partners
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-primary">What Our Clients Say</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-surface-container-low p-8 rounded-xl relative">
            <span
              className="material-symbols-outlined text-6xl text-primary/10 absolute top-4 right-8"
              data-icon="format_quote"
            >
              format_quote
            </span>
            <p className="text-base sm:text-lg text-primary font-medium leading-relaxed mb-6 italic">
              "NCT has been our primary hardware partner for the last five major residential projects. Their delivery speed and tool quality are unmatched in the Bangladesh market."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-300"></div>
              <div>
                <p className="font-bold text-primary text-sm sm:text-base">Project Lead</p>
                <p className="text-xs sm:text-sm text-secondary">Elite Real Estate Group</p>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low p-8 rounded-xl relative">
            <span
              className="material-symbols-outlined text-6xl text-primary/10 absolute top-4 right-8"
              data-icon="format_quote"
            >
              format_quote
            </span>
            <p className="text-base sm:text-lg text-primary font-medium leading-relaxed mb-6 italic">
              "Finding reliable industrial-grade electrical components in bulk used to be a challenge until we started working with NCT New City Trade. Highly recommended."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-slate-300"></div>
              <div>
                <p className="font-bold text-primary text-sm sm:text-base">Operations Head</p>
                <p className="text-xs sm:text-sm text-secondary">Dhaka Construction Hub</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-700">
          <span className="text-xl sm:text-2xl md:text-3xl font-black text-primary font-headline">SHANTA</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-black text-primary font-headline">CONCORD</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-black text-primary font-headline">NAVANA</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-black text-primary font-headline">ASSURANCE</span>
          <span className="text-xl sm:text-2xl md:text-3xl font-black text-primary font-headline">BUILDING</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
