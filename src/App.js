import React from 'react';
import './App.scss';
import { HashRouter as Router, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Forgotpassword from './Components/Forgotpassword'
import Footer from './Components/Footer';
import ResetPasswordLink from './Components/ResetPasswordLink';
import NewPassword from './Components/NewPassword';
import PersonalSetting from './Components/PersonalSetting';
function App() {
  return (
    <React.Fragment>
        <Router>
          <Header/>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
          <Route path="/forgotpassword">
            <Forgotpassword/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/reset">
            <ResetPasswordLink/>
          </Route>
          <Route path="/newpassword">
            <NewPassword/>
          </Route>
          <Route path="/profile">
            <PersonalSetting/>
          </Route>
          
          <Footer/>
				</Router>
			</React.Fragment>
  );
}

export default App;
