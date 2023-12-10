import { useRef, useState, useEffect } from "react";
import CRUD from '../Home/CRUD';
import 'bootstrap/dist/css/bootstrap.min.css';
import appSettings from "../../appSettings.json";
import "../../CSS/Login.css";
import axios from "axios";

export default function Login(){
    const errRef = useRef();

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [eye,seteye]=useState(true);
    const [passwordtype,setpasswordtype]=useState("password");
    const [type,settype]=useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        setErrorMsg('');
    }, [userName, password]);

    const handleSignIn = async (e) => {
        e.preventDefault();

        const url = `${appSettings.backendBaseUrl}Authentication/`
        const data = {
        "Username": userName,
        "Password": password
        }

        axios.post(`${url}Login`, data)
        .then((result) => {
            sessionStorage.setItem('token', result.data.data.token);
            setSuccess(true);
        })
        .catch((error) => {
            setErrorMsg(errorMsg);
        });

    }

    const Eye=()=>{
        if(passwordtype=="password"){
            setpasswordtype("text");
            seteye(false);
            settype(true);
        }
        else{
            setpasswordtype("password");
            seteye(true);
            settype(false);
        }
    }

    return (
        <div>
        { success ? (
            <section className="App">
                <CRUD />
            </section>
        ) : (
        <section>
            {/*<p ref={errRef} className={errorMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errorMsg}</p>
            <div className="sign-in-box">
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
                <label>Username
                <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    placeholder="Email address or username"
                    required
                />
                </label>
                <label>Password
                    <div className="input-container">
                <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="********"
                    required
                />
                <span
            className="show-password-checkbox"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '👁️' : '👁️'}
          </span>
          </div>
                </label>
                <button>Sign In</button>
            </form>
            <p>
                Need an Account? <br/>
                <span className="line">
                    <a href="#">Sign Up</a>
                </span>
            </p>
            </div>
        */}
        <div className="container">
        <div className="card">
            <div className="text">
                <h3>Welcome Back</h3>
                <p>Enter your credentials to access your account.</p>
            </div>
            <form onSubmit={handleSignIn}>
                <div className="input-text">
                    {/*<input type="text" className={` ${warnemail ? "warning" : "" }`} placeholder="Enter your email" value={inputtext.email} onChange={inputEvent} name="email" />*/}
                    <input type="text" placeholder="Enter your email" value={userName} onChange={(e) => setUserName(e.target.value)} name="email" />
                    <i className="fa fa-envelope"></i>

                </div>
                <div className="input-text">
                    {/*<input type={password} className={` ${warnpassword ? "warning" : "" } ${type ? "type_password" : "" }`} placeholder="Enter your password" value={inputtext.password} onChange={inputEvent} name="password" />*/}
                    <input type={passwordtype} className={` ${type ? "type_password" : "" }`} placeholder="Enter your password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" />
                    <i className="fa fa-lock"></i>
                    <i onClick={Eye} className={`fa ${eye ? "fa-eye-slash" : "fa-eye" }`}></i>
                </div>
                <div className="buttons">
                    <button type="submit">Sign in</button>
                </div>
                <div className="forgot">
                     <p>Forgot your password? <a href="#">Reset Password</a></p>
                </div>
            </form>
        </div>
    </div>
        </section>
)}
        </div>
    );
}

