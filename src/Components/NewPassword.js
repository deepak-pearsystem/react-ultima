import React, { Component } from 'react';

class NewPassword extends Component {
  render() {
    return (
      <div className="newpassword-section">
        <div className="container">
          <div className="row">
            <div className="newpassword-info">
              <form className="new-password-form">
              <h2>Please enter your new password</h2>
              <p>Please make sure your password has at least 8 characters</p>
                <div className="form-field-mask">
                  <label>Email ID/Username</label>
                  <input type="text" name="name"  className="form-inputs" placeholder="New Password"/>
                </div>
                <div className="form-field-mask">
                  <label>Confirm New Password</label>
                  <input type="password" name="password"  className="form-inputs" placeholder="Confirm New Password"/>
                </div>
                <input type="submit" value="Submit" className="form-submit-btn"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewPassword;