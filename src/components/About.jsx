import { brandIdentity, socialProof } from '../data/brandData';
import './About.css';

const About = () => {
  const stats = [
    { number: socialProof.stats.happyCustomers, label: 'Happy Customers' },
    { number: socialProof.stats.productsSold, label: 'Products Sold' },
    { number: socialProof.stats.instagramFollowers, label: 'Instagram Followers' },
    { number: '100%', label: 'Quality Guaranteed' },
  ];

  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about-content">
          <div className="about-images">
            <div className="image-grid">
              <img 
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400" 
                alt="Fashion Style 1"
                className="about-img img-1"
              />
              <img 
                src="https://images.unsplash.com/photo-1523398002811-999ca8dec234?w=400" 
                alt="Fashion Style 2"
                className="about-img img-2"
              />
              <img 
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400" 
                alt="Fashion Style 3"
                className="about-img img-3"
              />
            </div>
            <div className="about-badge">
              <span className="badge-number">5+</span>
              <span className="badge-text">Years of Style</span>
            </div>
          </div>

          <div className="about-text">
            <span className="about-label">About Us</span>
            <h2 className="about-title">
              Where <span className="highlight">Street Style</span> Meets Quality
            </h2>
            <p className="about-description">
              {brandIdentity.description}
            </p>
            <p className="about-description">
              At Zeeny Trends, we believe fashion should be accessible, expressive, and bold. 
              Our carefully curated collection features the latest streetwear trends at prices 
              that won't break the bank, because looking good shouldn't cost a fortune.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <polyline points="22 4 12 14.01 9 11.01"/>
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Premium Quality</h4>
                  <p>Carefully sourced materials for lasting comfort</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 6v6l4 2"/>
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Fast Delivery</h4>
                  <p>Quick nationwide shipping across Nigeria</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                  </svg>
                </div>
                <div className="feature-text">
                  <h4>Customer Love</h4>
                  <p>Join thousands of satisfied customers</p>
                </div>
              </div>
            </div>

            <a href="#products" className="btn btn-primary">
              Explore Collection
            </a>
          </div>
        </div>

        <div className="about-stats">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <span className="stat-number">{stat.number}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
