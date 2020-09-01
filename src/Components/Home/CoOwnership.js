import React, { Component } from 'react';

class CoOwnership extends Component {
  render() {
    return (
      <div>
        <section className="co-ownership-section">
          <div className="overlay-mask">
                <img  className="overla-img img-fluid" src={require('../../Images/co-owner-bg.png')} alt="overlay"/>
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
                  <img src={require('../../Images/co-owner.jpg')} className="img-fluid" alt="Co-owner-img"/>
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

export default CoOwnership;