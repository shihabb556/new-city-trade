import { useState } from 'react';

const faqData = [
  {
    question: 'How do I place a bulk order for construction sites?',
    answer: 'You can place bulk orders directly through our sales team via the "Get Quote" button. We offer customized pricing for large volume contracts and scheduled site deliveries.',
  },
  {
    question: 'What is your delivery timeline for outside Dhaka?',
    answer: 'Delivery timelines depend on the volume and exact location, but generally we deliver to major divisions within 3-5 business days.',
  },
  {
    question: 'Do the industrial tools come with a warranty?',
    answer: 'Yes, most of our heavy-duty industrial tools come with manufacturer-backed warranties ranging from 1 to 3 years.',
  },
  {
    question: 'What payment methods are accepted for B2B contracts?',
    answer: 'We accept bank transfers, letter of credit (LC) for large imports, and standard corporate checks subject to verification.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm md:text-base font-bold uppercase tracking-[0.2em] text-on-tertiary-container mb-4 font-label">
            Support
          </h2>
          <h3 className="text-md sm:text-lg md:text-xl font-headline font-bold text-primary">Frequently Asked Questions</h3>
        </div>
        <div className="space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
              <button
                className="w-full px-8 py-6 text-left flex justify-between items-center group"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-bold text-primary text-sm sm:text-base">{faq.question}</span>
                <span
                  className={`material-symbols-outlined text-primary transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                >
                  expand_more
                </span>
              </button>
              {openIndex === index && (
                <div className="px-8 pb-6 text-secondary text-xs sm:text-sm leading-relaxed border-t border-surface-container pt-4">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
