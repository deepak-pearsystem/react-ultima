import React, { Component } from 'react';
import {Link} from 'react-router-dom'
class ResetPasswordLink extends Component {
  render() {
    return (
      <div className="resetpassword-section">
        <div className="container">
          <div className="row">
            <div className="resetpassword-info">
              <h2>Reset Password Link Sent.</h2>
              <h4>We have sent a reset password email to email@domain.com. Please click the reset password link to set your new password.</h4>
              <p>Didn't receive the email yet?</p>
              <p>Please check your spam folder, or <Link>resend </Link> the email.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ResetPasswordLink;