import React from 'react';

const Contact = () => {
  return (
    <section className="py-24 bg-surface" id="contact">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-on-tertiary-container mb-4 font-label">
                Contact Us
              </h2>
              <h3 className="text-4xl font-headline font-bold text-primary mb-6">
                Let's Build Something Great Together
              </h3>
              <p className="text-secondary leading-relaxed">
                Our headquarters in Dhaka serve as the central hub for logistics and support. Reach out for technical inquiries or quote requests.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center rounded-lg flex-shrink-0">
                  <span className="material-symbols-outlined text-primary" data-icon="location_on">
                    location_on
                  </span>
                </div>
                <div>
                  <p className="font-bold text-primary">Visit Our Office</p>
                  <p className="text-sm text-secondary">Plot 12, Road 4, Sector 7, Uttara, Dhaka - 1230, Bangladesh</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center rounded-lg flex-shrink-0">
                  <span className="material-symbols-outlined text-primary" data-icon="call">
                    call
                  </span>
                </div>
                <div>
                  <p className="font-bold text-primary">Call Us</p>
                  <p className="text-sm text-secondary">
                    +880 2 1234 5678<br />
                    +880 1711 000 000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-surface-container-low flex items-center justify-center rounded-lg flex-shrink-0">
                  <span className="material-symbols-outlined text-primary" data-icon="mail">
                    mail
                  </span>
                </div>
                <div>
                  <p className="font-bold text-primary">Email Support</p>
                  <p className="text-sm text-secondary">
                    info@nctbangladesh.com<br />
                    sales@nctbangladesh.com
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden h-[300px] shadow-sm">
              <img
                alt="Map Placeholder"
                className="w-full h-full object-cover"
                data-alt="Stylized map showing urban city grid of Dhaka, Bangladesh with an icon marking the office location"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYyZDxhFTJ1Lj0K4QOpb0Q--uE9TyjcJBZExL2S_JzcKOhYls8UQXTufagkz6nmA0yMheW9xWpvqCNGeuNUbLndYzqrrFxibr-cJdbStjnmY-uRf67aeXWugF-7SeCwsCHJByao2H2grLs5tmiyTgp_Usf6CWBGgkad0yfQ74w5kuigr3nD8ZTahflcwAIqcJt0D_iaNst9-9MdiHzrTaaggJduuJCKSdgT2PKo-yv73K6oDz96JWy_Ni4lXBdxD9f_PJ3_zLoFN9C"
              />
            </div>
          </div>
          <div className="bg-surface-container-low p-10 rounded-xl shadow-sm">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-secondary">Full Name</label>
                  <input
                    className="w-full bg-surface-container-lowest border-outline-variant/20 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 text-sm outline-none"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-secondary">Email Address</label>
                  <input
                    className="w-full bg-surface-container-lowest border-outline-variant/20 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 text-sm outline-none"
                    placeholder="john@company.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-secondary">Phone Number</label>
                <input
                  className="w-full bg-surface-container-lowest border-outline-variant/20 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 text-sm outline-none"
                  placeholder="+880"
                  type="tel"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-secondary">Inquiry Type</label>
                <select className="w-full bg-surface-container-lowest border-outline-variant/20 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 text-sm outline-none cursor-pointer">
                  <option>Product Quote</option>
                  <option>Bulk Order Inquiry</option>
                  <option>Partnership Proposal</option>
                  <option>Technical Support</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-wider text-secondary">Message</label>
                <textarea
                  className="w-full bg-surface-container-lowest border-outline-variant/20 rounded-lg focus:ring-primary focus:border-primary px-4 py-3 text-sm outline-none"
                  placeholder="How can we help with your project?"
                  rows={4}
                ></textarea>
              </div>
              <button
                className="w-full industrial-gradient text-white font-bold py-4 rounded-lg transition-transform active:scale-95 shadow-lg shadow-primary/20"
                type="submit"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
