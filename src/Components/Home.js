import React, { Component } from 'react';
import OwlCarousel from 'react-owl-carousel2';
import Header from '../Components/Header';
class Home extends Component {
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

const options2 = {
  nav: false,
  dots: true,
  dotsEach: true,
  dotData: true,
  margin:40,
  loop:true,
  navText:false,
  rewind: true,
  autoplay: true,
  slideBy: 1,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2,
        margin:20
    },
    1000:{
        items:3
    }
}
}
    return (
      <div>
        <Header/>
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={require('../Images/web-banner.jpg')}  className="img-fluid" alt="Banner-One"/>
              <div className="carousel-caption d-none d-md-block">
                  <h2>There are many who own millions, but there are far few who can claim ownership to a champion race horse.</h2>
                  <p>ultima</p>
                  <button>about us</button>
              </div>
            </div>
            <div className="carousel-item">
            <img src={require('../Images/web-banner.jpg')}  className="img-fluid" alt="Banner-Two"/>
              <div className="carousel-caption d-none d-md-block">
                 <h2>There are many who own millions, but there are far few who can claim ownership to a champion race horse.</h2>
                 <p>ultima</p>
                 <button>about us</button>
              </div>
            </div>
            <div className="carousel-item">
            <img src={require('../Images/web-banner.jpg')}  className="img-fluid" alt="Banner-Three"/>
              <div className="carousel-caption d-none d-md-block">
                  <h2>There are many who own millions, but there are far few who can claim ownership to a champion race horse.</h2>
                  <p>ultima</p>
                  <button>about us</button>
              </div>
            </div>
          </div>
          <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
        <section className="co-ownership-mask">
          <div className="co-ownership">
            <div className="container">
              <div className="row">
              <div className="co-owner-left">
                <div className="co-owner-info">
                  <h2>Ultima Co-OWNERSHIP</h2>
                  <p>ULTIMA is a prestigious thoroughbred management company that makes its mark to be the first in Asia Pacific region to offer an unparalleled experience in the world of horse racing through the amalgamation of professional expertise and horse ownership involving Pinhooking, Racing and Breeding.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
              <div className="co-owner-right">
                <img src={require('../Images/co-owner.jpg')} className="img-fluid" alt="Co-owner-img"/>
              </div>
              </div>
            </div>
          </div>
          <div className="three-tiles">
              <div className="container">
              <div className="row">
                <div className="tiles-mask">
                  <div className="tiles-section">
                    <img src={require('../Images/tile-one.jpg')} className="img-fluid" alt="Co-owner-img"/>
                  </div>
                  <div className="tiles-section">
                    <img src={require('../Images/tile-two.jpg')} className="img-fluid" alt="Co-owner-img"/>
                  </div>
                  <div className="tiles-section">
                    <img src={require('../Images/tile-three.jpg')} className="img-fluid" alt="Co-owner-img"/>
                  </div>
                </div>
                </div>
              </div>
          </div>
          <div className="our-stable">
            <div className="container">
              <div className="ourstable-carousel">
                  <h2>Our stable</h2>
                  <p>Meet our ultima special family member</p>
                  <OwlCarousel ref="gallery" options={options} >
                      <div>
                        <img src={require('../Images/small-slider-one.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../Images/small-slider-two.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../Images/small-slider-three.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../Images/small-slider-four.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../Images/small-slider-one.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../Images/small-slider-two.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                        <h3>Siam Warrior</h3>
                        <h4>5/Gelding</h4>
                        <h4>Bay</h4>
                      </div>  </div>
                      <div>
                        <img src={require('../Images/small-slider-three.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../Images/small-slider-four.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../Images/small-slider-one.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../Images/small-slider-two.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../Images/small-slider-three.jpg')} alt="Banner-Three"/>
                        <div className="carousel-bottom-info">
                          <h3>Siam Warrior</h3>
                          <h4>5/Gelding</h4>
                          <h4>Bay</h4>
                        </div>
                      </div>
                      <div>
                        <img src={require('../Images/small-slider-four.jpg')} alt="Banner-Three"/>
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



          <div className="latest-auction">
          <div className="overlay-mask">
          <img  className="overla-img" src={require('../Images/auction-background.png')} alt="overlay"/>
            <div className="container-fluid">
              <div className="auction-info-left">
                <div className="auction-info">
                  <h2>Latest Auction & Recent Event</h2>
                  <p>Our latest running events, horse selling events and other events</p>
                  <button>View All</button>
                </div>
              </div>
              <div className="auction-slider-right">
                  <img src={require('../Images/slider-shadow.png')} className="img-fluid slider-shadow" alt="Slider-top-img"/>
                  <div className="custom-right-carousel">
                  <OwlCarousel ref="gallery" options={options1} >
                    <div>
                      <img src={require('../Images/auction-one.jpg')} alt="Banner-Three"/>
                      <div className="carousel-bottom-info">
                        <h2>Second win from Siam War...</h2>
                        <p><span>Feb 01, 2020 Bullingerhpf, Zurich</span></p>
                        <p>Second win from SIAM WARRIOR in Singapore on Saturday 1 February 2020 in the $70,000 Class 3 race over 1200m Turf Track course.</p>
                        <h3>Read More</h3>
                      </div>
                    </div>
                    <div>
                      <img src={require('../Images/auction-two.jpg')} alt="Banner-Three"/>
                      <div className="carousel-bottom-info">
                        <h2>Second win from Siam War...</h2>
                        <p><span>Feb 01, 2020 Bullingerhpf, Zurich</span></p>
                        <p>Second win from SIAM WARRIOR in Singapore on Saturday 1 February 2020 in the $70,000 Class 3 race over 1200m Turf Track course.</p>
                        <h3>Read More</h3>
                      </div>
                    </div>
                    <div>
                      <img src={require('../Images/auction-three.jpg')} alt="Banner-Three"/>
                      <div className="carousel-bottom-info">
                        <h2>Second win from Siam War...</h2>
                        <p><span>Feb 01, 2020 Bullingerhpf, Zurich</span></p>
                        <p>Second win from SIAM WARRIOR in Singapore on Saturday 1 February 2020 in the $70,000 Class 3 race over 1200m Turf Track course.</p>
                        <h3>Read More</h3>
                      </div>
                    </div>
                    <div>
                      <img src={require('../Images/auction-one.jpg')} alt="Banner-Three"/>
                      <div className="carousel-bottom-info">
                        <h2>Second win from Siam War...</h2>
                        <p><span>Feb 01, 2020 Bullingerhpf, Zurich</span></p>
                        <p>Second win from SIAM WARRIOR in Singapore on Saturday 1 February 2020 in the $70,000 Class 3 race over 1200m Turf Track course.</p>
                        <h3>Read More</h3>
                      </div>
                    </div>
                    <div>
                      <img src={require('../Images/auction-two.jpg')} alt="Banner-Three"/>
                      <div className="carousel-bottom-info">
                        <h2>Second win from Siam War...</h2>
                        <p><span>Feb 01, 2020 Bullingerhpf, Zurich</span></p>
                        <p>Second win from SIAM WARRIOR in Singapore on Saturday 1 February 2020 in the $70,000 Class 3 race over 1200m Turf Track course.</p>
                        <h3>Read More</h3>
                      </div>
                    </div>
                    <div>
                      <img src={require('../Images/auction-three.jpg')} alt="Banner-Three"/>
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

          <div className="winner-mask">
          <div className="overlay-mask">
            <img  className="overla-img" src={require('../Images/auction-background.png')} alt="overlay"/>
            <div className="container">
              
             
                  <div className="winner-section">
                    <div className="winner-image">
                      <img src={require('../Images/prestige-award.png')} alt="prestige-award"/>
                    </div>
                    <div className="winner-info">
                        <div className="winner-info-inner">
                          <h2>Winner of SME Prestige
                          Award and ASEAN Outstanding
                          Business Award 2019.</h2>
                          <button>View All Achievement</button>
                        </div>
                    </div>
                  </div>
               
             
            </div>
            </div>
          </div>

          <div className="best-views-mask">
          <div className="container">
            
              <h2>best views</h2>
              <p>What our horse co-owners say about us</p>
            
          </div>
            
            <OwlCarousel ref="gallery" options={options2} >
            <div>
            <div className="carousel-bottom-info">
            <div className="review-client-image">
              <div className="client-review-avatar">
                <img className="client-avtar" src={require('../Images/best-review.png')} alt="best-review"/>
              </div>
              <div className="client-review-rating">
                <h2>Sam & Toni</h2>
                <ul className="client-rating">
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                </ul> 
              </div>
            </div>
             <p>We stumbled across this business with an opportunity. An opportunities to a greater lifestyle experience. The strategy and the lifestyle of ULTIMA are beyond my expectation.   We have been represented with an excellent and reliable principles, and assured to invest in ULTIMA will maximize return on becoming a co-owner.  This has presented us a privilege to learn from the enthusiast expertise and the professionals from the industry, and taking the back seat at the ease of enjoying the most luxurious exciting sports in the world. It is our privilege to be part of</p>
             <h3>ULTIMA.</h3>
            </div>
           </div>
           <div>
           <div className="carousel-bottom-info">
           <div className="review-client-image">
              <div className="client-review-avatar">
                <img className="client-avtar" src={require('../Images/best-review.png')} alt="best-review"/>
              </div>
              <div className="client-review-rating">
                <h2>Sam & Toni</h2>
                <ul className="client-rating">
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                </ul> 
              </div>
            </div>
            <p>We stumbled across this business with an opportunity. An opportunities to a greater lifestyle experience. The strategy and the lifestyle of ULTIMA are beyond my expectation.   We have been represented with an excellent and reliable principles, and assured to invest in ULTIMA will maximize return on becoming a co-owner.  This has presented us a privilege to learn from the enthusiast expertise and the professionals from the industry, and taking the back seat at the ease of enjoying the most luxurious exciting sports in the world. It is our privilege to be part of</p>
            <h3>ULTIMA.</h3>
            </div>
          </div>
          <div>
          <div className="carousel-bottom-info">
          <div className="review-client-image">
              <div className="client-review-avatar">
                <img className="client-avtar" src={require('../Images/best-review.png')} alt="best-review"/>
              </div>
              <div className="client-review-rating">
                <h2>Sam & Toni</h2>
                <ul className="client-rating">
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                </ul> 
              </div>
            </div>
           <p>We stumbled across this business with an opportunity. An opportunities to a greater lifestyle experience. The strategy and the lifestyle of ULTIMA are beyond my expectation.   We have been represented with an excellent and reliable principles, and assured to invest in ULTIMA will maximize return on becoming a co-owner.  This has presented us a privilege to learn from the enthusiast expertise and the professionals from the industry, and taking the back seat at the ease of enjoying the most luxurious exciting sports in the world. It is our privilege to be part of</p>
           <h3>ULTIMA.</h3>
           </div>
         </div>
         <div>
         <div className="carousel-bottom-info">
         <div className="review-client-image">
              <div className="client-review-avatar">
                <img className="client-avtar" src={require('../Images/best-review.png')} alt="best-review"/>
              </div>
              <div className="client-review-rating">
                <h2>Sam & Toni</h2>
                <ul className="client-rating">
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                </ul> 
              </div>
            </div>
          <p>We stumbled across this business with an opportunity. An opportunities to a greater lifestyle experience. The strategy and the lifestyle of ULTIMA are beyond my expectation.   We have been represented with an excellent and reliable principles, and assured to invest in ULTIMA will maximize return on becoming a co-owner.  This has presented us a privilege to learn from the enthusiast expertise and the professionals from the industry, and taking the back seat at the ease of enjoying the most luxurious exciting sports in the world. It is our privilege to be part of</p>
          <h3>ULTIMA.</h3>
          </div>
        </div>
        <div>
        <div className="carousel-bottom-info">
        <div className="review-client-image">
              <div className="client-review-avatar">
                <img className="client-avtar" src={require('../Images/best-review.png')} alt="best-review"/>
              </div>
              <div className="client-review-rating">
                <h2>Sam & Toni</h2>
                <ul className="client-rating">
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                </ul> 
              </div>
            </div>
         <p>We stumbled across this business with an opportunity. An opportunities to a greater lifestyle experience. The strategy and the lifestyle of ULTIMA are beyond my expectation.   We have been represented with an excellent and reliable principles, and assured to invest in ULTIMA will maximize return on becoming a co-owner.  This has presented us a privilege to learn from the enthusiast expertise and the professionals from the industry, and taking the back seat at the ease of enjoying the most luxurious exciting sports in the world. It is our privilege to be part of</p>
         <h3>ULTIMA.</h3>
         </div>
       </div><div>
       <div className="carousel-bottom-info">
       <div className="review-client-image">
              <div className="client-review-avatar">
                <img className="client-avtar" src={require('../Images/best-review.png')} alt="best-review"/>
              </div>
              <div className="client-review-rating">
                <h2>Sam & Toni</h2>
                <ul className="client-rating">
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                </ul> 
              </div>
            </div>
        <p>We stumbled across this business with an opportunity. An opportunities to a greater lifestyle experience. The strategy and the lifestyle of ULTIMA are beyond my expectation.   We have been represented with an excellent and reliable principles, and assured to invest in ULTIMA will maximize return on becoming a co-owner.  This has presented us a privilege to learn from the enthusiast expertise and the professionals from the industry, and taking the back seat at the ease of enjoying the most luxurious exciting sports in the world. It is our privilege to be part of</p>
        <h3>ULTIMA.</h3>
        </div>
      </div>
      <div>
      <div className="carousel-bottom-info">
      <div className="review-client-image">
              <div className="client-review-avatar">
                <img className="client-avtar" src={require('../Images/best-review.png')} alt="best-review"/>
              </div>
              <div className="client-review-rating">
                <h2>Sam & Toni</h2>
                <ul className="client-rating">
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                </ul> 
              </div>
            </div>
       <p>We stumbled across this business with an opportunity. An opportunities to a greater lifestyle experience. The strategy and the lifestyle of ULTIMA are beyond my expectation.   We have been represented with an excellent and reliable principles, and assured to invest in ULTIMA will maximize return on becoming a co-owner.  This has presented us a privilege to learn from the enthusiast expertise and the professionals from the industry, and taking the back seat at the ease of enjoying the most luxurious exciting sports in the world. It is our privilege to be part of</p>
       <h3>ULTIMA.</h3>
       </div>
     </div>
                      
     <div>
     <div className="carousel-bottom-info">
     <div className="review-client-image">
              <div className="client-review-avatar">
                <img className="client-avtar" src={require('../Images/best-review.png')} alt="best-review"/>
              </div>
              <div className="client-review-rating">
                <h2>Sam & Toni</h2>
                <ul className="client-rating">
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                  <li><img src={require('../Images/star.svg')} alt="review-star"/></li>
                </ul> 
              </div>
            </div>
      <p>We stumbled across this business with an opportunity. An opportunities to a greater lifestyle experience. The strategy and the lifestyle of ULTIMA are beyond my expectation.   We have been represented with an excellent and reliable principles, and assured to invest in ULTIMA will maximize return on becoming a co-owner.  This has presented us a privilege to learn from the enthusiast expertise and the professionals from the industry, and taking the back seat at the ease of enjoying the most luxurious exciting sports in the world. It is our privilege to be part of</p>
      <h3>ULTIMA.</h3>
      </div>
    </div>
    </OwlCarousel>
          </div>


    

        </section>
        
      </div>
    );
  }
}

export default Home;