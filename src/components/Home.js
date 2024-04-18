import React, { useState } from 'react';


function Home() {
  const [vehicleRegistration, setVehicleRegistration] = useState('');
  const [serviceType, setServiceType] = useState('full-service');
  const [postcode, setPostcode] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews, setReviews] = useState([]); 
  const handleSubmit = (event) => {
    event.preventDefault();
    //  form submission logic
    console.log({ vehicleRegistration, serviceType, postcode });
  };
  

  return (
    <div className="home">
      <nav className="navbar">
        <div className="nav-brand">CheckMyCar</div>
        <div className="nav-links">
          <a href="#services">Services</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#about">About</a>
        </div>
      </nav>
      <header className="hero">
        <h1>Book a Car Service Near You</h1>
        <p>Join over 14 million drivers who have compared prices to book a car service</p>
        <div className="rating">
          <span>⭐⭐⭐⭐⭐ 4.7* on Trustpilot</span>
        </div>
        <form className="search-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Vehicle Registration"
            className="input-field"
            value={vehicleRegistration}
            onChange={e => setVehicleRegistration(e.target.value)}
          />
          <select
            className="input-field"
            value={serviceType}
            onChange={e => setServiceType(e.target.value)}
          >
            <option value="full-service">Full Service</option>
            <option value="major-service">Major Service</option>
            <option value="minor-service">Minor Service</option>
          </select>
          <input
            type="text"
            placeholder="Enter Your Postcode"
            className="input-field"
            value={postcode}
            onChange={e => setPostcode(e.target.value)}
          />
          <button type="submit" className="btn-primary">Compare Prices Instantly</button>
        </form>
        
      <section className="features">
        <article>
          <h2>Featured Services</h2>
          <p>Discover our premier services that guarantee the best care for your vehicle.</p>
          {/* list items for featured services */}
        </article>
      </section>

      <section className="how-it-works">
        <h2>How It Works</h2>
        <p>Simple steps to get your car serviced with us.</p>
        {/* step guide */}
      </section>

      <section className="customer-reviews">
        <h2>Customer Reviews</h2>
        <p>See what our customers have to say about our service.</p>
        {/*  customer reviews */}
      </section>

      <section className="blog-preview">
        <h2>From Our Blog</h2>
        <p>Read the latest articles and tips from our experts.</p>
        {/*  blog posts */}
      </section>
      </header>
      <section className="about">
        <h2>About Us</h2>
        <p>We're dedicated to providing the best car service experience with convenient online booking, transparent pricing, and top-notch customer service.</p>
      </section>
      <footer className="footer">
        <p>Connect with us:</p>
        <ul>
          <li><a href="https://twitter.com">Twitter</a></li>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
        </ul>
        <p>&copy; 2024 CheckMyCar. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;