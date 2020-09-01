import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
class OurStable extends Component {
  render() {
    const options = {
      nav: true,
      loop:true,
      rewind: true,
      autoplay: true,
      slideBy: 1,
      responsive:{
        0:{
            items:1,
            margin:20
        },
        600:{
            items:3,
            margin:20
        },
        1000:{
            items:4,
            margin:40
        }
    }
  }
    return (
      <div>
        <section className="ourstable-section">
            <div className="our-stable">
            <div className="container">
              <div className="ourstable-carousel">
                  <h2>Our stable</h2>
                  <p>Meet our ultima special family member</p>
                  <OwlCarousel ref="gallery" options={options} >
                      <div>
                        <img src={require('../../Images/small-slider-one.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../../Images/small-slider-two.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../../Images/small-slider-three.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../../Images/small-slider-four.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../../Images/small-slider-one.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../../Images/small-slider-two.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                        <h3>Siam Warrior</h3>
                        <h4>5/Gelding</h4>
                        <h4>Bay</h4>
                      </div>  </div>
                      <div>
                        <img src={require('../../Images/small-slider-three.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../../Images/small-slider-four.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../../Images/small-slider-one.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../../Images/small-slider-two.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../../Images/small-slider-three.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../../Images/small-slider-four.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                  </OwlCarousel>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default OurStable;