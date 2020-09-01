import React, { Component } from 'react';

class Carousel extends Component {
  render() {
    return (
      <div>
      <section class="carousel-section">
        <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
            <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
            <img src={require('../../Images/web-banner.jpg')}  className="img-fluid" alt="Banner-One"/>
              <div className="carousel-caption d-none d-md-block">
                  <h2>There are many who own millions, but there are far few who can claim ownership to a champion race horse.</h2>
                  <p>ultima</p>
                  <button>about us</button>
              </div>
            </div>
            <div className="carousel-item">
            <img src={require('../../Images/web-banner.jpg')}  className="img-fluid" alt="Banner-Two"/>
              <div className="carousel-caption d-none d-md-block">
                <h2>There are many who own millions, but there are far few who can claim ownership to a champion race horse.</h2>
                <p>ultima</p>
                <button>about us</button>
              </div>
            </div>
            <div className="carousel-item">
            <img src={require('../../Images/web-banner.jpg')}  className="img-fluid" alt="Banner-Three"/>
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
      </section>
      </div>
    );
  }
}

export default Carousel;