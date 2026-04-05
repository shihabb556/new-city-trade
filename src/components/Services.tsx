import React from 'react';

const servicesData = [
  {
    icon: 'handyman',
    title: 'Industrial Tools Supply',
    description: 'Specialized heavy machinery tools and maintenance equipment for large-scale factories.',
  },
  {
    icon: 'apartment',
    title: 'Building Materials',
    description: 'Premium quality steel, cement additives, and structural components for durable builds.',
  },
  {
    icon: 'electric_bolt',
    title: 'Plumbing & Electrical',
    description: 'High-grade conduits, industrial wiring, and professional plumbing fixtures.',
  },
  {
    icon: 'health_and_safety',
    title: 'Safety Equipment',
    description: 'Personal Protective Equipment (PPE) compliant with international safety standards.',
  },
  {
    icon: 'power',
    title: 'Power Tools',
    description: 'Cordless and corded high-performance drills, saws, and grinders for contractors.',
  },
  {
    icon: 'local_shipping',
    title: 'Bulk Logistics',
    description: 'Nationwide distribution network ensuring timely delivery to remote project sites.',
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-surface-container-low" id="services">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-on-tertiary-container mb-4 font-label">
            Expertise
          </h2>
          <h3 className="text-4xl font-headline font-bold text-primary">Comprehensive Supply Solutions</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest p-8 rounded-xl shadow-sm transition-all hover:translate-y-[-4px] group"
            >
              <div className="w-14 h-14 bg-surface-container flex items-center justify-center rounded-lg mb-6 group-hover:bg-primary transition-colors">
                <span
                  className="material-symbols-outlined text-primary group-hover:text-white"
                  data-icon={service.icon}
                >
                  {service.icon}
                </span>
              </div>
              <h4 className="text-xl font-bold text-primary mb-3">{service.title}</h4>
              <p className="text-secondary text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
