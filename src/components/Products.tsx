

const productsData = [
  {
    category: 'Power Tools',
    title: 'Industrial Impact Drill',
    description: 'Brushless motor technology for heavy-duty concrete and steel drilling operations.',
    image: '/images/impact-drill.jpg',
  },
  {
    category: 'Safety Gear',
    title: 'Pro-Guard Safety Helmet',
    description: 'Ventilated design with 6-point suspension for maximum onsite comfort and protection.',
    image: '/images/safety-helmet.jpg',
  },
  {
    category: 'Electrical',
    title: 'Heavy-Duty MCB Unit',
    description: 'Multi-pole miniature circuit breakers designed for industrial electrical panels.',
    image: '/images/circuit-breaker.jpg',
  },
  {
    category: 'Building Materials',
    title: 'Galvanized Steel Pipes',
    description: 'Corrosion-resistant steel piping available in various industrial gauges.',
    image: '/images/steel-pipes.jpg',
  },
];

const Products = () => {
  return (
    <section className="py-24 bg-surface" id="products">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-on-tertiary-container mb-4 font-label">
              Product Catalog
            </h2>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-primary">High-Performance Inventory</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-2 rounded-lg bg-primary text-white font-semibold text-sm">All</button>
            <button className="px-5 py-2 rounded-lg bg-surface-container-high text-primary font-semibold text-sm hover:bg-surface-container transition-colors">Tools</button>
            <button className="px-5 py-2 rounded-lg bg-surface-container-high text-primary font-semibold text-sm hover:bg-surface-container transition-colors">Electrical</button>
            <button className="px-5 py-2 rounded-lg bg-surface-container-high text-primary font-semibold text-sm hover:bg-surface-container transition-colors">Safety Gear</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {productsData.map((product, idx) => (
            <div
              key={idx}
              className="group bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={product.image}
                />
              </div>
              <div className="p-6">
                <span className="text-[8px] sm:text-[10px] font-bold uppercase tracking-widest text-on-tertiary-container mb-2 block">
                  {product.category}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-primary mb-2">{product.title}</h4>
                <p className="text-secondary text-[10px] sm:text-xs mb-6 line-clamp-2 leading-relaxed">
                  {product.description}
                </p>
                <button className="w-full py-3 bg-surface-container text-primary font-bold rounded-lg group-hover:bg-on-tertiary-container group-hover:text-white transition-colors text-sm">
                  Request Quote
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
