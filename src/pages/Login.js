import React, {useState} from 'react'
import "../css/login.css";
import bgimg from "../assets/Rectangle1.png";
import hdimg from "../assets/amzon.jpg";
import group9 from "../assets/Group9.png";
import rect17 from "../assets/Rectangle17.png";
import group2 from "../assets/Group2.svg";
import bdimg from "../assets/Rectangle4.png";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email && !password) setMsg("Email and Password fields required.");
        else if (!email) setMsg("Email field is required");
        else if(!password) setMsg("Password field is required");
    }
    return (
        <div className="login-page">
            {/* <div className="bg-picture"></div> */}
            <img src={bgimg} className="bg-picture" />
            <div className="login-card">
                <div className="login-header">
                    {/* <div className="hd-picture"></div> */}
                    <div><img src={hdimg} className="hd-picture" /></div>
                    <h3>Login</h3>
                </div>
                <div className="login-body">
                    {/* <div className="bd-picture"></div> */}
                    <img src={bdimg} className="bd-picture" />
                    <form onSubmit={e => handleSubmit(e)}>
                        <input type="email" value={email} onChange={e => {setEmail(e.target.value); setMsg("")}} placeholder="Email"/>
                        <input type="password" value={password} onChange={e => {setPassword(e.target.value); setMsg("")}} placeholder="Password" />
                        <p className={msg ? "error-message" : "no-error"}><img src={group2}/>{msg}</p>
                        <button>Sign In</button>
                    </form>
                    <div className="new-user">
                        <p>Forgot Password?</p>
                        <p>New User? Sign Up</p>
                    </div>
                    <div>or</div>
                    <div className="google">
                        <img src={group9}/>
                        <p>CONTINUE WITH GOOGLE</p>
                    </div>
                    <div className="facebook">
                        <img src={rect17}/>
                        <p>CONTINUE WITH FACEBOOK</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
