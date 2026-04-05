

const About = () => {
  return (
    <section className="py-24 bg-surface-container-low" id="about">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-on-tertiary-container font-label">
              About NCT Bangladesh
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-primary leading-tight">
              Decades of Excellence in Industrial Supply Logistics
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-secondary leading-relaxed">
              Established to bridge the gap in high-precision hardware supply, NCT New City Trade has grown into a cornerstone for Bangladesh's burgeoning infrastructure sector. We don't just supply tools; we provide the foundation for growth.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="p-6 bg-surface-container-lowest rounded-xl shadow-sm">
                <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-1">500+</span>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-secondary">Projects Served</span>
              </div>
              <div className="p-6 bg-surface-container-lowest rounded-xl shadow-sm">
                <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary mb-1">1000+</span>
                <span className="text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider text-secondary">Clients</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <img
                alt="Warehouse Operations"
                className="rounded-xl object-cover h-64 w-full shadow-lg"
                data-alt="Interior of a modern high-tech warehouse with organized shelving and logistics equipment in a clean industrial setting"
                src="/images/warehouse-ops.jpg"
              />
              <div className="bg-primary p-6 rounded-xl text-white">
                <p className="text-sm italic font-light">
                  "Precision in every shipment, reliability in every tool."
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <img
                alt="Team Collaboration"
                className="rounded-xl object-cover h-80 w-full shadow-lg"
                data-alt="Professional engineers and project managers in safety gear reviewing blueprints at a construction site in bright daylight"
                src="/images/team-collaboration.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
