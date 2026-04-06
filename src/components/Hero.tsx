

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary" id="home">
      <div className="absolute inset-0 z-0">
        <img
          alt="Industrial Construction"
          className="w-full h-full object-cover opacity-30"
          data-alt="Wide angle shot of a large scale construction site at twilight with cranes and structural steel framing in deep blues and atmospheric lighting"
          src="/images/hero-bg.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-on-tertiary-container/10 text-on-tertiary-container font-bold text-xs tracking-widest uppercase font-label">
            Premium B2B Supply Partner
          </span>
          <h1 className="text-2xl  md:text-5xl lg:text-3xl  font-headline font-extrabold text-white leading-[1.1] tracking-tight">
            Trusted B2B Hardware &amp; Construction <span className="text-on-tertiary-container">Supplier</span> in Bangladesh
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-surface-variant max-w-xl leading-relaxed">
            Delivering high-quality industrial tools, building materials, and power tools to contractors and developers nationwide with precision and reliability.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="industrial-gradient text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-xs sm:text-base md:text-lg hover:opacity-90 transition-all">
              Explore Products
            </button>
            <button className="border border-outline-variant/30 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-bold text-xs sm:text-base md:text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
              Contact Us
            </button>
          </div>
        </div>
        <div className="hidden lg:block relative">
          <div className="aspect-square bg-surface-container-low/10 rounded-xl p-4 backdrop-blur-md">
            <img
              alt="Precision Engineering"
              className="rounded-lg object-cover w-full h-full shadow-2xl"
              data-alt="Close up of high quality industrial metal tools and hardware components arranged neatly on a dark technical blueprint background"
              src="/images/hero-precision.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
