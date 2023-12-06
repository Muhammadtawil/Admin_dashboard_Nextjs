import React from 'react';

const officesComponent = () => {
  return (
    <section className="banner banner--mena is-ready">
      {/* Background Slider */}
      <div className="bg-slider js-mena-bg-slider slick-initialized slick-slider" style={{ height: '709.5px' }}>
        <div className="slick-list draggable">
          <div className="slick-track" style={{ opacity: 1, width: '10900px' }}>
            {/* ... (Background Slider content) ... */}
          </div>
        </div>
      </div>

      {/* Background Art Slider */}
      <div className="bg-artslider">
        <div className="container">
          <div className="js-mena-artslider slick-initialized slick-slider">
            {/* ... (Background Art Slider content) ... */}
          </div>
        </div>
      </div>

      {/* Mena Content */}
      <div className="banner-mena-content">
        {/* Mena Info */}
        <div className="banner-info">
          <div className="slider-custom-dots js-slickIndicator">
            <ul className="slick-dots" role="tablist">
              {/* ... (Slider Dots content) ... */}
            </ul>
          </div>
          <p>Drag to change location</p>
        </div>

        {/* Title Slider */}
        <div className="title-slider js-title-slider slick-initialized slick-slider slick-dotted">
          {/* ... (Title Slider content) ... */}
        </div>

        {/* CTA Slider */}
        <div className="cta-slider js-cta-slider slick-initialized slick-slider">
          {/* ... (CTA Slider content) ... */}
        </div>
      </div>
    </section>
  );
};

export default officesComponent;
