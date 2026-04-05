import React from 'react';

const productsData = [
  {
    category: 'Power Tools',
    title: 'Industrial Impact Drill',
    description: 'Brushless motor technology for heavy-duty concrete and steel drilling operations.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzQ3GYQrD9TVIlDAhgKafawvxkXmETemNt5FIyxjgpCiUU4BBrA-VmGgwy-DE7xb-Z_4bsbBJTROe9V4sFQdsl7GWyR71Zgn9B-RmW1KQRiNDSqPAADrFtifJJMIgfppvV3Qp_WX_T_PQtgdS02Y-18E5Add6ulpy3sEd3QB_nwhk7tZRXXacVoAvVv9SvSCk04d2R-DPIGb3CAShDpQijODrXmO1bELMOCpbFVqGjaIN-CysQPQ3GeLtuqXbSYy5OOrripwQZORNv',
  },
  {
    category: 'Safety Gear',
    title: 'Pro-Guard Safety Helmet',
    description: 'Ventilated design with 6-point suspension for maximum onsite comfort and protection.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVgqg_fbZs7gnVw7_mVD88ZepYHHvAGbk8GBMTNEtENO0oUsZgXdnj0viMItXGyQe6JHTk-VxOOx_koknWxW1N-1LbBUzZHro6s4K1VrhdIh4lQTRQjGHhaH1tTSCizQ0EbNxHLPztvA2ydy3FPljOZfjF-KuaRCGbUbhNemGpL4YDHpb6r_JNX18UaWKVsnM2KosBlJsp4195y3Mtcrm4phUyzEffkN7gr_bzUElnDV8lGyEJ1xO0EwBOsAEG_wCUPiCaSy_RzKvZ',
  },
  {
    category: 'Electrical',
    title: 'Heavy-Duty MCB Unit',
    description: 'Multi-pole miniature circuit breakers designed for industrial electrical panels.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB53UDecbsI3ULkhtVqS2Rj_BURmzgcUeM81IEGYiOgnUC93Wy1wuP3rrFTFhEDDBKKtGg8rix4FrH4P27hSlVH20Zm0LXxhtlefXrptMfHfLLK1HUqXacBGAztGz6zkmAw8tCh4j_G5qU6_p-H0Ds5hvVD2Ixw_SiJGUnimRzmkHjO7S6E1bIhuXdhfAQVhHyeSIE1kEbaOtzinaDowKPyxWFW1OUvoKIVY5zRumCkKMkLOQCE1PCWm_zA7VBOfmDtuIqOx4q0JlY4',
  },
  {
    category: 'Building Materials',
    title: 'Galvanized Steel Pipes',
    description: 'Corrosion-resistant steel piping available in various industrial gauges.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANycpa19na9L0Sy6Zv-9qlo8jAfOi-jdUFiejkEXAzYdE0WytnvhOZqTJLztMTmteZdDTXqgafRO_W891vk5-rP5oBn-AF6yAhZd0b9_cCO0qJrom-WJ1X92Gw2KsDiU6mIWaXh62IIhjwjOnyxtCz_UwNHPs57hxQbpcR8aCgN2NXIRsviHPEnneYFvsMIBzuyZ_55OiDb9PWlg1uZNXLPCUcX02YCZeJQsG9GJTUVWOB5NCLVNcSN9fLlsl10CgcJF3k4CakKxib',
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
            <h3 className="text-4xl font-headline font-bold text-primary">High-Performance Inventory</h3>
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
                <span className="text-[10px] font-bold uppercase tracking-widest text-on-tertiary-container mb-2 block">
                  {product.category}
                </span>
                <h4 className="text-lg font-bold text-primary mb-2">{product.title}</h4>
                <p className="text-secondary text-xs mb-6 line-clamp-2 leading-relaxed">
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
