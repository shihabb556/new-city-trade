import React from 'react';

const MissionVision = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface-container-low p-10 rounded-xl space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-on-tertiary-container"></div>
            <span
              className="material-symbols-outlined text-4xl text-on-tertiary-container"
              data-icon="construction"
            >
              construction
            </span>
            <h3 className="text-2xl font-headline font-bold text-primary">Our Mission</h3>
            <p className="text-secondary leading-relaxed">
              To empower the construction and industrial sectors of Bangladesh by providing world-class hardware solutions that meet the highest standards of safety and efficiency.
            </p>
          </div>
          <div className="bg-primary p-10 rounded-xl space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-1 h-full bg-on-tertiary-container"></div>
            <span
              className="material-symbols-outlined text-4xl text-on-tertiary-container"
              data-icon="trending_up"
            >
              trending_up
            </span>
            <h3 className="text-2xl font-headline font-bold text-white">Our Vision</h3>
            <p className="text-surface-variant leading-relaxed">
              To become the leading B2B supply hub in South Asia, known for digital-first logistics and an unwavering commitment to industrial excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
