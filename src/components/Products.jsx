import { useState } from 'react';
import { products } from '../data/brandData';
import './Products.css';

const Products = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const categories = ['All', ...new Set(products.map(p => p.type))];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.type === activeFilter);

  return (
    <section className="products section" id="products">
      <div className="container">
        <div className="section-title">
          <h2>Our Collection</h2>
          <p>Discover our curated selection of trendy streetwear pieces</p>
        </div>

        <div className="product-filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="products-grid grid grid-4">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="product-card"
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="product-image-wrapper">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="product-image"
                  loading="lazy"
                />
                <div className={`product-overlay ${hoveredProduct === product.id ? 'active' : ''}`}>
                  <a href="#contact" className="btn btn-primary quick-view">
                    Order Now
                  </a>
                </div>
                <span className="product-badge">{product.style.split(',')[0]}</span>
              </div>
              <div className="product-info">
                <span className="product-type">{product.type}</span>
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <div className="product-colors">
                  {product.colors.slice(0, 4).map((color, index) => (
                    <span 
                      key={index} 
                      className="color-dot" 
                      style={{ backgroundColor: getColorCode(color) }}
                      title={color}
                    />
                  ))}
                  {product.colors.length > 4 && (
                    <span className="more-colors">+{product.colors.length - 4}</span>
                  )}
                </div>
                <div className="product-footer">
                  <span className="product-price">{product.price}</span>
                  <div className="product-sizes">
                    {product.sizes.slice(0, 3).map((size, index) => (
                      <span key={index} className="size-tag">{size}</span>
                    ))}
                    {product.sizes.length > 3 && <span className="size-tag">...</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="products-cta">
          <a href="#contact" className="btn btn-accent">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

// Helper function to convert color names to hex codes
const getColorCode = (colorName) => {
  const colorMap = {
    'Black': '#1a1a1a',
    'White': '#ffffff',
    'Gray': '#808080',
    'Grey': '#808080',
    'Navy Blue': '#000080',
    'Navy': '#000080',
    'Burgundy': '#800020',
    'Khaki': '#c3b091',
    'Olive Green': '#556b2f',
    'Olive': '#556b2f',
    'Light Blue': '#add8e6',
    'Dark Blue': '#00008b',
    'Cream': '#fffdd0',
    'Forest Green': '#228b22'
  };
  return colorMap[colorName] || '#cccccc';
};

export default Products;
