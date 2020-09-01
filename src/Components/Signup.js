import React, { Component } from 'react';
import {Link} from "react-router-dom";
import CustomScroll from 'react-custom-scroll';
import $ from 'jquery';
class Signup extends Component {
 componentDidMount(){
  $(document).ready(function () {
    
        $('.wrapper').html('<p>Sorry! Non webkit users. :(</p>');
    
});
 }
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
                    <h2>Sign up.</h2>
                    <p>Join today and enjoy ultima's services such as horse racing,
                    pinhooking and breeding.</p>
                  </div>
                  
                    <div className="social-media-btn">
                      <button type="button" class="btn custom-btn-forms login-gmail">Continue with Google</button>
                      <button type="button" class="btn custom-btn-forms login-facebook">Continue with Facebook</button>
                      <div className="other-login-opt">or</div>
                    </div>
                    <div className="login-form-mask">
                      <form className="custom-form">
                      <div class="scrollbar" id="style-3">
      <div class="force-overflow">
    
                      
                      
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-field-mask">
                            <label>First Name</label>
                            <input type="text" name="name"  className="form-inputs" placeholder="First Name"/>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-field-mask">
                            <label>Last Name</label>
                            <input type="password" name="name"  className="form-inputs" placeholder="Last Name"/>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-field-mask">
                            <label>Email Address</label>
                            <input type="email" name="name"  className="form-inputs" placeholder="at least 8 characters, 1 capital"/>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-field-mask">
                            <label>Password</label>
                            <input type="password" name="name"  className="form-inputs" placeholder="Password: at least 8 characters, 1 capital"/>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-field-mask">
                            <label>Confirm Password</label>
                            <input type="password" name="name"  className="form-inputs" placeholder="Confirm Password"/>
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-field-mask">
                            <label>Referral Code (Optional)</label>
                            <input type="text" name="name"  className="form-inputs" placeholder="Referral Code (Optional)"/>
                          </div>
                        </div>
                      </div>
                      </div>
                      </div>
                        <div className="row">
                          <div className="col-md-12">
                            <div className="form-checkbox">
                              <input type="checkbox"  className="custom-checkbox"/>{' '}
                              <span className="chekbox-text">Creating an account means you're okay with our Terms of Service and Our Privacy Policy </span> 
                            </div>
                          </div>
                        </div>
                        <input type="submit" value="Login" className="form-submit-btn"/>
                      </form>
                    
                    </div>
                  <div className="other-login-links">
                    <div className="form-bottom-text">Already have an account? <Link to="login">Log in</Link></div>
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

export default Signup;