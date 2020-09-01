import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Login extends Component {
  render() {
    return (
      <div>
      <section className="login-section">
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
                    <h2>Log In.</h2>
                    <p>Log in with your data that you entered during your registration.</p>
                  </div>
                  <div className="social-media-btn">
                    <button type="button" class="btn custom-btn-forms login-gmail">Continue with Google</button>
                    <button type="button" class="btn custom-btn-forms login-facebook">Continue with Facebook</button>
                    <div className="other-login-opt">or</div>
                  </div>
                  <div className="login-form-mask">
                    <form className="custom-form">
                      <div className="form-field-mask">
                        <label>Email ID/Username</label>
                        <input type="text" name="name"  className="form-inputs" placeholder="Email ID/Username"/>
                      </div>
                      <div className="form-field-mask">
                        <label>Password</label>
                        <input type="text" name="name"  className="form-inputs" placeholder="Password"/>
                      </div>
                     
                        <div className="form-chcek-left">
                          <div className="form-checkbox">
                            <input type="checkbox"  className="custom-checkbox"/>{' '}
                            Keep me logged in  
                          </div>
                        </div>
                        <div className="form-chcek-right">
                          <Link to="forgotpassword" className="form-cant-login">Can't log in?</Link>
                        </div>
                      
                      <input type="submit" value="Submit" className="form-submit-btn"/>
                    </form>
                  </div>
                  <div className="other-login-links">
                    <div className="form-bottom-text">Don't have an account? <Link to="signup" className="">Sign up</Link></div>
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
        </section>
      </div>
    );
  }
}

export default Login;