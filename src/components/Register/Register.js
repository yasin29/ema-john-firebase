import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit="">
                    <input type="email" name="" id="" placeholder="Your email" />
                    <br />
                    <input type="password" name="" id="" placeholder="your password" />
                    <br />
                    <input type="password" name="" id="" placeholder="re-enter your password" />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
                <p>Already have an account? <Link to="/login">Sign in</Link></p>
                <div>---------or-------</div>
                <button className="btn-regular">Google sign up</button>
            </div>
        </div>
    );
};

export default Register;