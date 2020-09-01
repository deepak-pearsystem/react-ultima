import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
class LatestAuction extends Component {
  render() {
    const options1 = {
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
            items:2,
            margin:20
        },
        1000:{
            items:3,
            margin:40
        }
    }
  }
    return (
      <div>
        <section className="latestauction-section">
        <div className="latest-auction">
        <div className="overlay-mask">
        <img  className="overla-img" src={require('../../Images/auction-background.png')} alt="overlay"/>
          <div className="container-fluid">
            <div className="auction-info-left">
              <div className="auction-info">
                <h2>Latest Auction & Recent Event</h2>
                <p>Our latest running events, horse selling events and other events</p>
                <button>View All</button>
              </div>
            </div>
            <div className="auction-slider-right">
                <img src={require('../../Images/slider-shadow.png')} className="img-fluid slider-shadow" alt="Slider-top-img"/>
                <div className="custom-right-carousel">
                <OwlCarousel ref="gallery" options={options1} >
                  <div>
                    <img src={require('../../Images/auction-one.jpg')} alt="Banner-Three"/>
                    <div className="carousel-bottom-info">
                      <h2>Second win from Siam War...</h2>
                      <p><span>Feb 01, 2020 Bullingerhpf, Zurich</span></p>
                      <p>Second win from SIAM WARRIOR in Singapore on Saturday 1 February 2020 in the $70,000 Class 3 race over 1200m Turf Track course.</p>
                      <h3>Read More</h3>
                    </div>
                  </div>
                  <div>
                    <img src={require('../../Images/auction-two.jpg')} alt="Banner-Three"/>
                    <div className="carousel-bottom-info">
                      <h2>Second win from Siam War...</h2>
                      <p><span>Feb 01, 2020 Bullingerhpf, Zurich</span></p>
                      <p>Second win from SIAM WARRIOR in Singapore on Saturday 1 February 2020 in the $70,000 Class 3 race over 1200m Turf Track course.</p>
                      <h3>Read More</h3>
                    </div>
                  </div>
                  <div>
                    <img src={require('../../Images/auction-three.jpg')} alt="Banner-Three"/>
                    <div className="carousel-bottom-info">
                      <h2>Second win from Siam War...</h2>
                      <p><span>Feb 01, 2020 Bullingerhpf, Zurich</span></p>
                      <p>Second win from SIAM WARRIOR in Singapore on Saturday 1 February 2020 in the $70,000 Class 3 race over 1200m Turf Track course.</p>
                      <h3>Read More</h3>
                    </div>
                  </div>
                  <div>
                    <img src={require('../../Images/auction-one.jpg')} alt="Banner-Three"/>
                    <div className="carousel-bottom-info">
                      <h2>Second win from Siam War...</h2>
                      <p><span>Feb 01, 2020 Bullingerhpf, Zurich</span></p>
                      <p>Second win from SIAM WARRIOR in Singapore on Saturday 1 February 2020 in the $70,000 Class 3 race over 1200m Turf Track course.</p>
                      <h3>Read More</h3>
                    </div>
                  </div>
                  <div>
                    <img src={require('../../Images/auction-two.jpg')} alt="Banner-Three"/>
                    <div className="carousel-bottom-info">
                      <h2>Second win from Siam War...</h2>
                      <p><span>Feb 01, 2020 Bullingerhpf, Zurich</span></p>
                      <p>Second win from SIAM WARRIOR in Singapore on Saturday 1 February 2020 in the $70,000 Class 3 race over 1200m Turf Track course.</p>
                      <h3>Read More</h3>
                    </div>
                  </div>
                  <div>
                    <img src={require('../../Images/auction-three.jpg')} alt="Banner-Three"/>
                    <div className="carousel-bottom-info">
                      <h2>Second win from Siam War...</h2>
                      <p><span>Feb 01, 2020 Bullingerhpf, Zurich</span></p>
                      <p>Second win from SIAM WARRIOR in Singapore on Saturday 1 February 2020 in the $70,000 Class 3 race over 1200m Turf Track course.</p>
                      <h3>Read More</h3>
                    </div>
                  </div>
                </OwlCarousel>
                </div>
            </div>
        </div>
        </div>
        </div>
        </section>
      </div>
    );
  }
}

export default LatestAuction;