import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    console.log("came from", location.state?.from)
    const history = useHistory();
    const redirect_uri = location.state?.from || '/';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }
    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="your password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>new to ema-john? <Link to="/register">create account</Link> </p>
                <div>---------or---------</div>
                <button
                    onClick={handleGoogleLogin}
                    className="btn-regular">Google Sign-in</button>
            </div>
        </div>
    );
};

export default Login;