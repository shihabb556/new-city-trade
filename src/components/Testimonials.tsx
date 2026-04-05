import { useEffect, useState } from 'react';

const testimonialsData = [
  {
    quote: "NCT has been our primary hardware partner for the last five major residential projects. Their delivery speed and tool quality are unmatched in the Bangladesh market.",
    author: "Project Lead",
    company: "Elite Real Estate Group",
    image: "/images/client/testimonial-1.png"
  },
  {
    quote: "Finding reliable industrial-grade electrical components in bulk used to be a challenge until we started working with NCT New City Trade. Highly recommended.",
    author: "Operations Head",
    company: "Dhaka Construction Hub",
    image: "/images/client/testimonial-2.png"
  },
  {
    quote: "The technical support team at NCT is exceptional. They helped us specify the exact building materials needed for our high-rise project.",
    author: "Chief Engineer",
    company: "Navana Real Estate",
    image: "/images/client/testimonial-1.png"
  }
];

const clientLogos = ["SHANTA", "CONCORD", "NAVANA", "ASSURANCE", "BUILDING", "GLAXO", "BEXIMCO", "AKIJ"];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-surface overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-on-tertiary-container mb-4 font-label">
            Trusted Partners
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-primary">What Our Clients Say</h3>
        </div>

        <div className="relative h-[400px] mb-20 flex items-center justify-center">
          {testimonialsData.map((testimonial, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out transform flex items-center justify-center ${idx === activeIndex
                ? 'opacity-100 translate-x-0 scale-100'
                : 'opacity-0 translate-x-12 scale-95 pointer-events-none'
                }`}
            >
              <div className="max-w-3xl w-full bg-surface-container-low p-8 rounded-xl relative shadow-lg">
                <span
                  className="material-symbols-outlined text-6xl text-primary/10 absolute top-4 right-8"
                  data-icon="format_quote"
                >
                  format_quote
                </span>
                <p className="text-base sm:text-lg text-primary font-medium leading-relaxed mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-14 h-14 rounded-full object-cover border-2 border-primary/20"
                  />
                  <div>
                    <p className="font-bold text-primary text-sm sm:text-base">{testimonial.author}</p>
                    <p className="text-xs sm:text-sm text-secondary">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${idx === activeIndex ? 'bg-primary w-8' : 'bg-primary/20'
                  }`}
              />
            ))}
          </div>
        </div>

        <div className="relative mt-32 py-10">
          {/* Desktop/Large View: Single Static Row */}
          <div className="hidden lg:flex flex-wrap justify-center gap-16 items-center opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {clientLogos.map((logo, idx) => (
              <span
                key={idx}
                className="text-2xl md:text-3xl lg:text-4xl font-black text-primary font-headline tracking-tighter hover:text-primary transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </div>

          {/* Mobile/Small View: Two Static Rows */}
          <div className="flex lg:hidden flex-col gap-10 items-center opacity-40">
            {/* Row 1: First half of logos */}
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {clientLogos.slice(0, 4).map((logo, idx) => (
                <span
                  key={idx}
                  className="text-xl sm:text-2xl font-black text-primary font-headline tracking-tighter"
                >
                  {logo}
                </span>
              ))}
            </div>

            {/* Row 2: Second half of logos */}
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {clientLogos.slice(4).map((logo, idx) => (
                <span
                  key={idx}
                  className="text-xl sm:text-2xl font-black text-primary font-headline tracking-tighter"
                >
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
