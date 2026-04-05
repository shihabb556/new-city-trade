

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
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-on-tertiary-container mb-4 font-label">
            Leadership
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-primary">The Minds Behind the Precision</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadershipData.map((leader, index) => (
            <div key={index} className="bg-surface-container-lowest p-6 rounded-xl text-center group">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 border-4 border-surface-container transition-all group-hover:border-on-tertiary-container">
                <img
                  alt={leader.role}
                  className="w-full h-full object-cover"
                  src={leader.image}
                />
              </div>
              <h4 className="text-lg sm:text-xl font-bold text-primary">{leader.name}</h4>
              <p className="text-on-tertiary-container font-semibold text-xs sm:text-sm mb-4">{leader.role}</p>
              <p className="text-secondary text-xs sm:text-sm leading-relaxed">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
