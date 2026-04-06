

import { useState } from 'react';

const leadershipData = [
  {
    name: 'M. Rahman',
    role: 'Managing Director',
    description: 'Over 20 years of experience in international hardware trade and supply chain management.',
    image: '/images/managing-director.jpg',
  },
  {
    name: 'Sarah Ahmed',
    role: 'Operations Manager',
    description: 'Expert in logistics optimization and warehouse management systems for large-scale distribution.',
    image: '/images/operations-manager.jpg',
  },
  {
    name: 'Tarek Aziz',
    role: 'Sales Director',
    description: 'Driving client relationships and B2B partnerships with the largest construction firms in Dhaka.',
    image: '/images/sales-director.jpg',
  },
  {
    name: 'A. Karim',
    role: 'Warehouse Manager',
    description: 'Lead of inventory operations and logistics coordination at our primary distribution hub.',
    image: '/images/warehouse-ops.jpg',
  },
  {
    name: 'Nasrin Sultana',
    role: 'Technical Lead',
    description: 'Specialist in heavy machinery and industrial-grade tool specifications for large projects.',
    image: '/images/team-collaboration.jpg',
  },
  {
    name: 'Imran Khan',
    role: 'Customer Support Lead',
    description: 'Head of our B2B support division, ensuring seamless communication with all corporate clients.',
    image: '/images/profile.png',
  },
];

const Leadership = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedMembers = isExpanded ? leadershipData : leadershipData.slice(0, 3);

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden transition-all duration-700">
      <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
        <h2 className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.2em] text-on-tertiary-container mb-4 font-label">
          Leadership
        </h2>
        <h3 className="text-md sm:text-lg md:text-xl font-headline font-bold text-primary">The Minds Behind the Precision</h3>
      </div>

      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayedMembers.map((leader, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest p-8 rounded-2xl text-center group transition-all duration-500 hover:shadow-xl hover:-translate-y-1 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${(index % 3) * 100}ms` }}
            >
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-surface-container transition-all group-hover:border-on-tertiary-container group-hover:scale-105 shadow-md">
                <img
                  alt={leader.role}
                  className="w-full h-full object-cover"
                  src={leader.image}
                />
              </div>
              <h4 className="text-sm md:text-base font-bold text-primary">{leader.name}</h4>
              <p className="text-on-tertiary-container font-semibold text-sm mb-4">{leader.role}</p>
              <p className="text-secondary text-sm leading-relaxed max-w-xs mx-auto">
                {leader.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="px-8 py-3 bg-on-tertiary-container text-white font-bold rounded-lg hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-on-tertiary-container/20 group flex items-center gap-2 mx-auto"
          >
            {isExpanded ? (
              <>
                Show Less <span className="material-symbols-outlined text-sm">keyboard_arrow_up</span>
              </>
            ) : (
              <>
                View All Team Members <span className="material-symbols-outlined text-sm">keyboard_arrow_down</span>
              </>
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
