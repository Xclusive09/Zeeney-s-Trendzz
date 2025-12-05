import { socialProof, storeInfo } from '../data/brandData';
import './Reviews.css';

const Reviews = () => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <svg 
        key={index}
        className={`star ${index < rating ? 'filled' : ''}`}
        width="18" 
        height="18" 
        viewBox="0 0 24 24" 
        fill={index < rating ? 'currentColor' : 'none'}
        stroke="currentColor" 
        strokeWidth="2"
      >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ));
  };

  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <div className="section-title">
          <h2>What Our Customers Say</h2>
          <p>Real reviews from our amazing community</p>
        </div>

        <div className="reviews-grid grid grid-2">
          {socialProof.reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-avatar">
                  {review.name.charAt(0)}
                </div>
                <div className="reviewer-info">
                  <h4 className="reviewer-name">{review.name}</h4>
                  <span className="review-product">Purchased: {review.product}</span>
                </div>
              </div>
              <div className="review-rating">
                {renderStars(review.rating)}
              </div>
              <p className="review-text">"{review.comment}"</p>
              <div className="review-verified">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                </svg>
                Verified Purchase
              </div>
            </div>
          ))}
        </div>

        <div className="social-proof-banner">
          <div className="proof-content">
            <h3>Join Our Growing Community</h3>
            <p>Follow us on social media for exclusive updates, new arrivals, and special offers!</p>
            <div className="social-links">
              <a 
                href={storeInfo.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card instagram"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="social-name">Instagram</span>
                <span className="social-handle">@zeenytrends</span>
                <span className="social-followers">{socialProof.stats.instagramFollowers} Followers</span>
              </a>

              <a 
                href={storeInfo.tiktok} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card tiktok"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                </svg>
                <span className="social-name">TikTok</span>
                <span className="social-handle">@zeeny_trends</span>
                <span className="social-followers">{socialProof.stats.tiktokFollowers} Followers</span>
              </a>

              <a 
                href={storeInfo.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-card facebook"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span className="social-name">Facebook</span>
                <span className="social-handle">Zeeny Trends</span>
                <span className="social-followers">Growing Community</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
