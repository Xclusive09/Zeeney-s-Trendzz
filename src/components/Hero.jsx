import { brandIdentity, marketingCopy } from '../data/brandData';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay"></div>
      <div className="hero-content container">
        <div className="hero-text">
          <span className="hero-badge">New Collection 2024</span>
          <h1 className="hero-title">
            <span className="highlight">{brandIdentity.name}</span>
          </h1>
          <p className="hero-tagline">{brandIdentity.tagline}</p>
          <p className="hero-description">
            {marketingCopy.bio}
          </p>
          <div className="hero-cta">
            <a href="#products" className="btn btn-accent">
              Shop Collection
            </a>
            <a href="#about" className="btn btn-secondary hero-secondary-btn">
              Learn More
            </a>
          </div>
          <div className="hero-hashtags">
            {marketingCopy.hashtags.slice(0, 4).map((tag, index) => (
              <span key={index} className="hashtag">{tag}</span>
            ))}
          </div>
        </div>
        <div className="hero-image-wrapper">
          <div className="hero-image-container">
            <img 
              src="https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=600" 
              alt="Streetwear Fashion Model"
              className="hero-image"
            />
            <div className="hero-image-badge">
              <span className="badge-label">Trending</span>
              <span className="badge-text">Streetwear</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span>Scroll Down</span>
        <div className="scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 10l5 5 5-5"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
