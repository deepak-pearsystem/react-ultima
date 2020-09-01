import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Threelayout extends Component {
  render() {
    return (
      <div>
        <section className="three-section">
          <div className="container">
            <div className="row">
              <div className="container">
                <div className="row">
                  <div className="col-12 col-md-4 col-lg-4 pl-lg-0">
                    <figure class="effect-oscar">
                      <img src={require('../../Images/tile-one.jpg')} className="img-fluid" alt="Co-owner-img"/>
                      <figcaption>
                        <h2>Pinhooking</h2>
                      </figcaption>			
                    </figure>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4">
                    <figure class="effect-oscar">
                      <img src={require('../../Images/tile-two.jpg')} className="img-fluid" alt="Co-owner-img"/>
                      <figcaption>
                        <h2>Racing</h2>
                      </figcaption>			
                    </figure>
                  </div>
                  <div className="col-12 col-md-4 col-lg-4 pr-lg-0">
                    <figure class="effect-oscar">
                      <img src={require('../../Images/tile-three.jpg')} className="img-fluid" alt="Co-owner-img"/>
                      <figcaption>
                        <h2>Breeding</h2>
                      </figcaption>			
                    </figure>
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

export default Threelayout;