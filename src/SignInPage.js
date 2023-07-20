import React from 'react';
import './SignInPage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

const SignInPage = () => {
    const navigate = useNavigate();

    // ... rest of the component ...
    
    // Replace useHistory usage with useNavigate
    const handleSignIn = () => {
      // ... some logic ...
      navigate('/main'); // Replace '/dashboard' with the desired route
    };
    return (<div className="signup">
    <div className="signup-connect">
      <h1>Create your account</h1>
      <a href="#" className="btn btn-social btn-facebook"><i className="fab fa-facebook"></i> Sign in with Facebook</a>
      <a href="#" className="btn btn-social btn-twitter"><i className="fab fa-twitter"></i> Sign in with Twitter</a>
      <a href="#" className="btn btn-social btn-google"><i className="fab fa-google"></i> Sign in with Google</a>
      <a href="#" className="btn btn-social btn-linkedin"><i className="fab fa-linkedin"></i> Sign in with Linkedin</a>
    </div>
    <div className="signup-classic">
      <h2>Or Sign up manually!</h2>
      <form className="form">
        <fieldset className="username">
          <input type="text" placeholder="username" />
        </fieldset>
        <fieldset className="email">
          <input type="email" placeholder="email" />
        </fieldset>
        <fieldset className="password">
          <input type="password" placeholder="password" />
        </fieldset>
        <button onClick = {handleSignIn} className="btn">sign up</button>
      </form>
    </div>
  </div>);
}

export default SignInPage;
