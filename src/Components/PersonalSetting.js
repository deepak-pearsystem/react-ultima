import React, { Component } from 'react';
import {BASE_URL} from '../baseUrl';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faLock, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
//import { faLock } from '@fortawesome/free-brands-svg-icons';
import {Link} from 'react-router-dom';
import {Form, OverlayTrigger, Tooltip} from 'react-bootstrap';
import $ from 'jquery';
class PersonalSetting extends Component {
  componentDidMount() {
    $('.custom-profile-tabs li').click(function(e) {
      e.preventDefault();
      $('li').removeClass('active');
      $(this).addClass('active');
  });
  }
  render() {
    
    return (
      <section className="personalsetting-section">
        <div className="container">
          <div className="row">
            <div className="profile-mask">
                <div className="profile-left-section">
                  <div className="profile-setup-status">
                    <p>Please first continue with the profile setup and verify your identity.</p>
                    <h2>Profile Setup Pending</h2>
                    <p>17 more minutes to go!</p>
                    <div className="progress">
                      <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>25%</span></div>
                    </div>
                    <p><span>Next:</span>Email Verifications</p>
                  </div>
                  <ul class="nav nav-tabs tabs-left custom-profile-tabs">
                    <li className="active"><a href="#personalsettings" data-toggle="tab">Personal Settings</a> <FontAwesomeIcon icon={faExclamationTriangle} className="socail-icons"/></li>
                    <li><a href="#validatecontract" data-toggle="tab">Validate Contract Signing Method</a></li>
                    <li><a href="#identifyverification" data-toggle="tab">Identify Verification</a></li>
                    <li><a href="#investmentaccount" data-toggle="tab">Investment Account Information</a></li>
                  </ul>
                </div> 
                <div className="profile-right-section">
                  <div class="tab-content custom-profile-tabs-content">
                      <div class="tab-pane active" id="personalsettings">

                        <div className="tab-page-title">
                          <h2>Personal Settings</h2>
                          <p>We will use this information to send all account related updates</p>
                        </div>

                        <div className="tab-profile-image">
                          <div className="profile-image">
                            <div className="profile-short">AL</div>
                          {/*<img src={require('../Images/best-review.png')} alt=""/>*/}
                          </div>
                          <div className="tab-profile-name">
                            <h2>Upload your photo</h2>
                            <p>An image of the person, <br/> it's best if it has the same length and height</p>
                          </div>
                        </div>

                        <div className="profile-language">
                            <div className="pro-language">Language</div>
                              <div className="form-radio-mask">
                                <div className="form-radio">
                                  <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                    <label class="form-check-label" for="exampleRadios1">English</label>
                                  </div>
                                </div>
                                <div className="form-radio">
                                  <div class="form-check">
                                    <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                      <label class="form-check-label" for="exampleRadios2">Chinese</label>
                                    </div>
                                  </div>
                              </div>
                          </div>

                          <div className="frofile-form">
                              <form>
                                <div className="row">
                                  <div  className="col-md-6">
                                    <div class="form-group">
                                      <label for="email">Email ID <span>Verify Now</span></label>
                                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                    </div>
                                  </div>
                                  <div  className="col-md-6">
                                    <div class="form-group">
                                      <label for="username">Username <span>Not available</span></label>
                                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username"/>
                                    </div>
                                  </div>
                                  <div  className="col-md-6">
                                    <div class="form-group">
                                      <label for="firstname">First Name</label>
                                      <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="First Name"/>
                                    </div>
                                  </div>
                                  <div  className="col-md-6">
                                    <div class="form-group">
                                      <label for="lastname">Last Name</label>
                                      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Last Name"/>
                                    </div>
                                  </div>
                                  <div  className="col-md-6">
                                    <div class="form-group">
                                      <label for="exampleInputEmail1">Change Password</label>
                                      <button className="changepassword-in-form"><FontAwesomeIcon icon={faLock} className="form-btn-aws"/>Change Password</button>
                                    </div>
                                  </div>
                                  <div className="form-submit-mask">
                                    <button className="form-submit-btn">Continue</button>
                                  </div>
                                </div>
                              </form>
                            
                          </div>

                      </div>
                      <div class="tab-pane" id="validatecontract">
                      <div className="tab-page-title">
                      <h2>Validate Contract Signing Method</h2>
                      <p>We will use this information to send all account related updates</p>
                    </div>

                    <div className="custom-country">
                      <label>Phone Number</label>
                      
                        <button type="button" class="btn btn-default dropdown-toggle country-btn" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <img src={`${BASE_URL}/Images/united-states.png`} alt=""/>
                          +91
                          <span class="glyphicon glyphicon-chevron-down"></span>
                        </button>
                        <div className="country-no-input">
                          <div class="form-group">
                          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="#Identity Number"/>
                          </div>
                        </div>
                        
                        <ul class="dropdown-menu">
                          <li>
                            <Link href="#" title="Select this card"><img src={`${BASE_URL}/Images/united-states.png`} alt=""/>+91</Link>
                          </li>
                          <li>
                            <Link href="#" title="Select this card"><img src={`${BASE_URL}/Images/united-states.png`} alt=""/>+91</Link>
                          </li>
                        </ul>
                      
                    </div>

                      <div className="frofile-form">
                          <form>
                            <div className="row">
                              <div className="col-md-6">
                              
                                <div class="form-group">
                                  <label for="idnumber">OTP</label>
                                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Code"/>
                                  <Form.Text className="text-muted">Didn't you received any code? <Link to="/">Resend</Link></Form.Text>
                                  <button className="verifynow-btn">Verify Now</button>
                                </div>
                              </div>
                              <div className="form-submit-mask">
                                <button className="form-submit-btn disable">Continue</button>
                              </div>
                            </div>
                          </form>
                        
                      </div>
                      </div>
                      <div class="tab-pane" id="identifyverification">
                      <div className="tab-page-title">
                      <h2>Identify Verification</h2>
                      <p>We will use this information to send all account related updates</p>
                    </div>
                    <div className="profile-language">
                        <div className="pro-language">Identity Type</div>
                        <div className="form-radio-mask">
                            <div className="form-radio">
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                <label class="form-check-label" for="exampleRadios1">ID Card</label>
                              </div>
                            </div>
                            <div className="form-radio">
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                <label class="form-check-label" for="exampleRadios2">Passport</label>
                              </div>
                            </div>
                            <div className="form-radio">
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                <label class="form-check-label" for="exampleRadios2">Driver's license</label>
                              </div>
                            </div>
                          </div>
                      </div>

                      <div className="frofile-form">
                          <form>
                            <div className="row">
                              <div className="col-md-6">
                              
                                <div class="form-group">
                                  <label for="idnumber">#Identity Number</label>
                                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="#Identity Number"/>
                                </div>
                                
                                
                              
                              <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Drag your file here to change the image.</Tooltip>}>
                                <span className="d-inline-block">
                                  <div class="profile-dummy-img" disabled style={{ pointerEvents: 'none' }}>
                                   
                                    <img src={`${BASE_URL}/Images/dummy-img.png`} alt=""/>
                                   
                                  </div>
                                </span>
                              </OverlayTrigger>
                              </div>
                              <div className="form-submit-mask">
                                <button className="form-submit-btn">Continue</button>
                              </div>
                            </div>
                          </form>
                        
                      </div>
                      </div>
                      <div class="tab-pane" id="investmentaccount">
                      <div className="tab-page-title">
                      <h2>Investment Account Information</h2>
                      <p>We will use this information to send all account related updates</p>
                    </div>

                    <div className="form-sections">
                      <h2>Bank Account information</h2>
                    </div>  
                    <div className="profile-language">
                        <div className="pro-language">Account Type</div>
                          <div className="form-radio-mask">
                            <div className="form-radio">
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                <label class="form-check-label" for="exampleRadios1">Individual</label>
                              </div>
                            </div>
                            <div className="form-radio">
                              <div class="form-check">
                                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2"/>
                                  <label class="form-check-label" for="exampleRadios2">Company</label>
                                </div>
                              </div>
                          </div>
                      </div>

                      <div className="frofile-form">
                          <form>
                            <div className="row">
                              <div  className="col-md-6">
                                <div class="form-group">
                                  <label for="email">Account Holder Name</label>
                                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Account Holder Name"/>
                                </div>
                              </div>
                              <div  className="col-md-6">
                                <div class="form-group">
                                  <label for="username">Bank Name</label>
                                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Bank Name"/>
                                </div>
                              </div>
                              <div  className="col-md-6">
                                <div class="form-group">
                                  <label for="firstname">Account Number</label>
                                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Account Number"/>
                                </div>
                              </div>
                              <div  className="col-md-6">
                                <div class="form-group">
                                  <label for="lastname">Bank Swift <FontAwesomeIcon icon={faInfoCircle} className="label-icons"/></label>
                                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Bank Swift"/>
                                </div>
                              </div>
                              <div  className="col-md-6">
                                <div class="form-group">
                                  <label for="sel1">Default Currency</label>
                                  <select class="form-control" id="sel1">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                  </select>
                                </div>
                              </div>
                              <div className="form-sections">
                                <h2>Company Info</h2>
                              </div> 
                              <div  className="col-md-6">
                                <div class="form-group">
                                  <label for="lastname">Company Name</label>
                                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company Name"/>
                                </div>
                              </div>
                              <div  className="col-md-6">
                                <div class="form-group">
                                  <label for="lastname">Company Registration Code</label>
                                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company Registration Code"/>
                                </div>
                              </div>
                              <div  className="col-md-6">
                                <div class="form-group">
                                  <label for="lastname">Company VAT No.</label>
                                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Company VAT No."/>
                                </div>
                              </div>
                              <div  className="col-md-6">
                                <div class="form-group">
                                  <label for="lastname">Authorized Person</label>
                                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Authorized Person"/>
                                </div>
                              </div>
                              <div  className="col-md-6">
                                <div class="form-group">
                                  <label for="lastname">Street Address</label>
                                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Street Address"/>
                                </div>
                              </div>
                              <div  className="col-md-6">
                                <div class="form-group">
                                  <label for="lastname">Zip Code</label>
                                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Zip Code"/>
                                </div>
                              </div>
                              <div  className="col-md-6">
                                <div class="form-group">
                                  <label for="lastname">City</label>
                                  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="City"/>
                                </div>
                              </div>
                              <div  className="col-md-6">
                                <div class="form-group">
                                  <label for="sel1">Country</label>
                                  <select class="form-control" id="sel1">
                                    <option>Country</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                  </select>
                                </div>
                              </div>
                              <div  className="col-md-6">
                                <div class="form-group">
                                  <label for="sel1">Tax Residency</label>
                                  <select class="form-control" id="sel1">
                                    <option>Tax Residency</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                  </select>
                                </div>
                              </div>
                              <div  className="col-md-6">
                                <div class="form-group">
                                  <div class="custom-file">
                                  <span className="upload-img-custom">Tax File</span>
                                    <input id="logo" type="file" class="custom-file-input"/>
                                    <label for="logo" class="custom-file-label text-truncate">Text file</label>
                                  </div>
                                </div>
                              </div>

                              <div className="form-submit-mask">
                                <button className="form-submit-btn disable">Continue</button>
                              </div>
                            </div>
                            
                            

                          
                          </form>
                        
                      </div>
                      </div>
                  </div>
                </div> 
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default PersonalSetting;