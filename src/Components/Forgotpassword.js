import React, { Component } from 'react';
import {Link} from "react-router-dom";
class Forgotpassword extends Component {
  render() {
    return (
      <div className="login-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md form-left-section">
              <div className="login-panel-mask">
                <div className="login-panel">
                  <div className="login-logo">
                    <h2>ultima</h2>
                    <h4>Where Champions Are Born</h4>
                  </div>
                  <div className="form-title-section">
                    <h2>Forgot Password?</h2>
                    <p className="forgot-password-text">Don't worry. Resetting your password is easy, just tell us the
                    email address you registered with Ultimaracingstable</p>
                  </div>
      
                  <div className="login-form-mask">
                    <form className="custom-form">
                    <div className="row">
                      <div className="col-md">
                        <div className="form-field-mask">
                          <label>Email ID/Username</label>
                          <input type="text" name="name"  className="form-inputs" placeholder="Email ID/Username"/>
                          <div className="form-error">That format doesn't look right. Make sure there aren't any typos.</div>
                        </div>
                      </div>
                    </div>
                      <input type="submit" value="Send" className="form-submit-btn"/>
                    </form>
                  </div>
                  <div className="other-login-links">
                    <div className="form-bottom-text">Click here back to login <Link to="login">Login Now</Link></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md form-right-section">
              <div className="login-img">
                <div className="image-footer-links">
                  <div className="container-fluid">
                  <div className="row">
                  <div className="col-md">
                      <div className="privacy-text"> <Link to="">Privacy Policy</Link>   |    <Link to="">Contact Us</Link></div>
                  </div>
                  <div className="col-md">
                    <div className="copyright-text">Copyright © 2020 Ultima Racing Stable</div>
                  </div>
                </div>
                  </div>
                  
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Forgotpassword;