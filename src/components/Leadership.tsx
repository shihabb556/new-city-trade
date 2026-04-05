

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
];

const Leadership = () => {
  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-16 text-center">
        <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-on-tertiary-container mb-4 font-label">
          Leadership
        </h2>
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-primary">The Minds Behind the Precision</h3>
      </div>
      
      <div className="relative">
        {/* Added some gradients to fade out the edges for a more premium look */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface-container-low to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-container-low to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex animate-marquee-slow whitespace-nowrap gap-8 hover:[animation-play-state:paused]">
          {[...leadershipData, ...leadershipData, ...leadershipData].map((leader, index) => (
            <div key={index} className="flex-shrink-0 w-[300px] sm:w-[350px] bg-surface-container-lowest p-8 rounded-2xl text-center group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-surface-container transition-all group-hover:border-on-tertiary-container group-hover:scale-105">
                <img
                  alt={leader.role}
                  className="w-full h-full object-cover"
                  src={leader.image}
                />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-primary whitespace-normal">{leader.name}</h4>
              <p className="text-on-tertiary-container font-semibold text-xs sm:text-sm mb-4">{leader.role}</p>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed whitespace-normal max-w-xs mx-auto">
                {leader.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
