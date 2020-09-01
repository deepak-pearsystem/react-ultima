import React, { Component } from 'react';
import {BASE_URL} from '../../baseUrl';
import OwlCarousel from 'react-owl-carousel2';
class BestView extends Component {
  render() {
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
        <section className="bestview-section">
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
              <img src={require('../../Images/best-review.png')} alt="Best-review"/>
            </div>
            <div className="client-review-rating">
              <h2>Sam & Toni</h2>
              <ul className="client-rating">
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
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
              <img src={require('../../Images/best-review.png')} alt="Best-review"/>
            </div>
            <div className="client-review-rating">
              <h2>Sam & Toni</h2>
              <ul className="client-rating">
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
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
              <img src={require('../../Images/best-review.png')} alt="Best-review"/>
            </div>
            <div className="client-review-rating">
              <h2>Sam & Toni</h2>
              <ul className="client-rating">
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
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
              <img src={require('../../Images/best-review.png')} alt="Best-review"/>
            </div>
            <div className="client-review-rating">
              <h2>Sam & Toni</h2>
              <ul className="client-rating">
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
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
              <img src={require('../../Images/best-review.png')} alt="Best-review"/>
            </div>
            <div className="client-review-rating">
              <h2>Sam & Toni</h2>
              <ul className="client-rating">
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
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
              <img src={require('../../Images/best-review.png')} alt="Best-review"/>
            </div>
            <div className="client-review-rating">
              <h2>Sam & Toni</h2>
              <ul className="client-rating">
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
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
              <img src={require('../../Images/best-review.png')} alt="Best-review"/>
            </div>
            <div className="client-review-rating">
              <h2>Sam & Toni</h2>
              <ul className="client-rating">
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
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
              <img src={require('../../Images/best-review.png')} alt="Best-review"/>
            </div>
            <div className="client-review-rating">
              <h2>Sam & Toni</h2>
              <ul className="client-rating">
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
                <li><img src={require('../../Images/star.svg')} alt="review-star"/></li>
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

export default BestView;