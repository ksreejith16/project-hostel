import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Home.css';
import h1 from './images/h1.png';
import h2 from './images/h2.jpg';
import h3 from './images/h3.png';
import h4 from './images/h4.png';
import h5 from './images/h5.png';

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#007BFF", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "#007BFF", borderRadius: "50%" }}
      onClick={onClick}
    />
  );
}

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  return (
    <div className="homepage">
      <header className="hero-section">
        <div className="hero-content">
          <h1>Welcome to VNR Vignana Jyothi Hostels</h1>
          <p>Your home away from home</p>
          
        </div>
      </header>
      <section className="slider-section">
        <center>
          <Slider {...sliderSettings}>
            <div>
              <img src={h1} alt="Hostel 1" />
            </div>
            <div>
              <img src={h2} alt="Hostel 2" />
            </div>
            <div>
              <img src={h3} alt="Hostel 3" />
            </div>
            <div>
              <img src={h4} alt="Hostel 4" />
            </div>
            <div>
              <img src={h5} alt="Hostel 5" />
            </div>
          </Slider>
        </center>
      </section>
      <section className="about-section">
        <h2>About Us</h2>
        <p>Learn more about our hostel facilities, values, and the community we foster.</p>
        <button className="learn-more-button">Learn More</button>
      </section>
      <section className="facilities-section">
        <h2>Facilities</h2>
        <div className="facilities-cards">
          <div className="facility-card">
            <h3>Comfortable Rooms</h3>
            <p>Our rooms are designed to provide a comfortable and conducive environment for students.</p>
          </div>
          <div className="facility-card">
            <h3>Dining Services</h3>
            <p>Enjoy nutritious and delicious meals prepared by our experienced chefs.</p>
          </div>
          <div className="facility-card">
            <h3>Sports and Recreation</h3>
            <p>We offer a variety of sports and recreational facilities to keep you active and healthy.</p>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <h2>What Our Students Say</h2>
        <div className="testimonials">
          <div className="testimonial">
            <p>"Living in the hostel has been an amazing experience. I've made lifelong friends and the facilities are top-notch."</p>
            <p>- Suraj</p>
          </div>
          <div className="testimonial">
            <p>"The hostel environment is very supportive and the staff are always ready to help."</p>
            <p>- Vishnu</p>
          </div>
        </div>
      </section> 
    </div>
  );
}

export default Home;
