import "./Login.css";
import React from 'react';
const Login = () => {
    return (
        <aside className="login-container">
            <div className="instagram-logo">
            </div>
            <form>
                <input type="text" placeholder="Phone number, username, or email" />
                <input type="password" placeholder="Password" />
            </form>
            <div className="login-button">
                <button>Log in</button>
            </div>
            <div className="line"></div>
            <div className="facebook">
                <a href="#">
                    <i class="fa-brands fa-square-facebook"></i>
                    <p>Login in with Facebook</p>
                </a>
            </div>
            <div className="forgot-password">
                <p>Forgot password?</p>
            </div>
        </aside>
    );
};


export default Login