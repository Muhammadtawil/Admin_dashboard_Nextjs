import { useState } from 'react';

const YourComponentName = () => {
  const [menuActive, setMenuActive] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const sliderNav = (manual:any) => {
    setActiveSlide(manual);
  };

  return (
    <section className={`home ${menuActive ? 'menu-active' : ''}`}>
      <img
        data-lazyloaded="1"
        src="data:image/gif;base64,R0lGODdhAQABAPAAAMPDwwAAACwAAAAAAQABAAACAkQBADs="
        decoding="async"
        className={`img-slide ${activeSlide === 0 ? 'active' : ''}`}
        data-src="1.webp"
        alt="Slide 1"
      />
      {/* Repeat the above img element for each image, updating the source and alt attributes */}

      <div className={`content ${activeSlide === 0 ? 'active' : ''}`}>
        <h1>USSF-44.<br /><span>Mission</span></h1>
        <p>{/* Your content goes here */}</p>
        <a href="#">Read More</a>
      </div>
      {/* Repeat the above content div for each content section, updating the h1, p, and a tags */}

      <div className="media-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
      </div>

      <div className="slider-navigation">
        {Array.from({ length:2}).map((_, index) => (
          <div
            key={index}
            className={`nav-btn ${index === activeSlide ? 'active' : ''}`}
            onClick={() => sliderNav(index)}
          ></div>
        ))}
      </div>
    </section>
  );
};

export default YourComponentName;
