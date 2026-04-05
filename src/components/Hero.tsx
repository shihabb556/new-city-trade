import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-primary" id="home">
      <div className="absolute inset-0 z-0">
        <img
          alt="Industrial Construction"
          className="w-full h-full object-cover opacity-30"
          data-alt="Wide angle shot of a large scale construction site at twilight with cranes and structural steel framing in deep blues and atmospheric lighting"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2Zk2tamvrAvR-GOvfpQP0CgEcCn1aKhAFdRQj2rMzchj7sqpsIIZ8HBlJgNAFhJPlCHfEWAF2IVDZQkvncG1EpCJCU8BemlsFFYTpb7KGUUtAvJngRFvWJkid0aVqt8lGCva7RNZ-1lIc8WueTj5PC5B4YgrFgBtsh64FhvMvgAD-R7cTArfOq_eu4QHLtSZcfAz2YFDF5wxrP_caS65fDUnHVi3fMNdWp2VCJvfbw-jCl1j5sZC-KIUbvtMMtlfXb_axFfZEZIIx"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <span className="inline-block px-4 py-1.5 rounded-full bg-on-tertiary-container/10 text-on-tertiary-container font-bold text-xs tracking-widest uppercase font-label">
            Premium B2B Supply Partner
          </span>
          <h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-white leading-[1.1] tracking-tight">
            Trusted B2B Hardware &amp; Construction <span className="text-on-tertiary-container">Supplier</span> in Bangladesh
          </h1>
          <p className="text-xl text-surface-variant max-w-xl leading-relaxed">
            Delivering high-quality industrial tools, building materials, and power tools to contractors and developers nationwide with precision and reliability.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="industrial-gradient text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition-all">
              Explore Products
            </button>
            <button className="border border-outline-variant/30 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
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
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBIPSG3S-r5x7Get2MYfrI3MzBMawCHmkEjvwAGhhrYDtlUPMTtzrodhV6oIsVaAZtpO8ZL114lFbLcYYSa0cvegKbPHtj0WH2PhlS-rrljPBsPZMDoTtH4s_-csv10ZdDiOrtIinVcLdRHxy-_N5eJfut86wTPRLzDcVOI3n3kgOwu7SmxRtsxNAr-71j8LEBgHZ_TNnq6V1il5ZRkEomG2qqW9zx1hXMLEO6rd2J3YT3ylrGzlIDqjjK9OXWek0XVHmiaRThM8PNY"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
