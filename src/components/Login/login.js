import React from "react";
import './login.scss';
import '../../img/themify-icons-font/themify-icons/themify-icons.css';
import '../../img/fontawesome-free-6.1.0-web/css/all.min.css';
import { Link } from "react-router-dom";
const Login = () => {
    return (
        <div className="login">
            <div className="login-container">
                <form>
                    <div className="username">
                        <i class="fa-solid fa-user"></i>
                        <input type='text' placeholder="UserName"></input>
                    </div>
                    <div className="password">
                        <i class="fa-solid fa-lock"></i>
                        <input type='password' placeholder="Password"></input>
                    </div>
                    <div className="summit">
                        <Link to="/home"><button>SIGN IN</button></Link>
                    </div>
                    <span>Not a member?<a href="">Sign up now <i class="fa-solid fa-arrow-right"></i></a></span>
                </form>
            </div>
        </div>
    )
}

export default Login;