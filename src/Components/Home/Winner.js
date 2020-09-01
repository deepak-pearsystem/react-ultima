import React, { Component } from 'react';

class Winner extends Component {
  render() {
    return (
      <div>
        <section className="winner-section">
          <div className="winner-mask">
            <div className="overlay-mask">
              <img  className="overla-img" src={require('../../Images/auction-background.png')} alt="overlay"/>
              <div className="container">
                <div className="winner-section">
                      <div className="winner-image">
                        <img src={require('../../Images/prestige-award.png')} className="img-fluid" alt="prestige-award"/>
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
        </section>
      </div>
    );
  }
}

export default Winner;