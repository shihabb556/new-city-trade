import React from 'react';

const leadershipData = [
  {
    name: 'M. Rahman',
    role: 'Managing Director',
    description: 'Over 20 years of experience in international hardware trade and supply chain management.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8lXbmwpSGjl327F8xTrAEo5AqmPLIEAGLoM-quJRVLJ9jQkN1iVQYevvvz-PKZMHpsWeFQ-nmx6BCROB0njanF1TVCSMQB5d5Y6A1z9HK-mJaTYE-JbL3GB-XGJsKPIlb-fYZ3F6zQFfh5jvY9-sJSHJJNlgLgDw2DscXaHdB0dijBEnmQFN2sp34Be92AdtgzxNucfKKo0662D55qo1BjZVgPI75FRLY79aPaIr3u44kEeWVJ8BqDGqLksfifWSXBhi1SWuyVhog',
  },
  {
    name: 'Sarah Ahmed',
    role: 'Operations Manager',
    description: 'Expert in logistics optimization and warehouse management systems for large-scale distribution.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-tYxTpXEtS5SLAhcAeHwX4ZPOkRlrAYoxIdAzSBG1MN0MpuriB_BXsX0-i7guNeZ3drGuCFdfrJWwz5lmdmmHModuFT3CAerHe_9q5YWHlmo0WWHtKe0M58hTHnH1E1ocE09aUWRhF8FtWbqhXVkeO6jJer5EkrQd4gR2eQDTeiYIzlCrQ_Cpjznmni9UxZebUMayfVU1DHJS4yi0NKKUoZp6N5AMFYYsHbYRbcy6Kjgvt-SANcFaplO96w9os8zaYPPRW-pDc3uK',
  },
  {
    name: 'Tarek Aziz',
    role: 'Sales Director',
    description: 'Driving client relationships and B2B partnerships with the largest construction firms in Dhaka.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR9qWCGMQhhD6oDi7EVUMmJmXkbKhe1Es5a-fjH0OYwRElr5KSeppr9S5TVetHP5ThE7ZWQu3r7E7Yjkrnq4RdZ80z2PzRK96DP3GNjIJ75MmcWWHkrYmJ0fyvI2BD1zvvVtXN5598ZSX4voZ8w7J7bOPq5EJqoxuyGW-PPeRqhhb_h6S1QrrImDIQyIjhLPxuq3WM490gexbVe9K5NzOAgSUC4HdOAUjvU24ibMxp94NsUp2x6z6KR_qmFnSqp77Vx50Mgq63lVKu',
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
          <h3 className="text-4xl font-headline font-bold text-primary">The Minds Behind the Precision</h3>
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
              <h4 className="text-xl font-bold text-primary">{leader.name}</h4>
              <p className="text-on-tertiary-container font-semibold text-sm mb-4">{leader.role}</p>
              <p className="text-secondary text-sm leading-relaxed">{leader.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
