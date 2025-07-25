import React, { useContext, useEffect, useState } from 'react'
import "./LoginPopup.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const LoginPopup = ({ setShowlogin }) => {
    const { url, setToken } = useContext(StoreContext)
    const [currState, setCurrState] = useState("Sign Up")
    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
    })
    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }
    const onLogin = async (event) => {
        event.preventDefault();
        let newUrl = url;
        if (currState === "Login") {
            newUrl += "/api/user/login"
        }
        else {
            newUrl += "/api/user/register"
        }
        const response = await axios.post(newUrl, data)
        if (response.data.success) {
            setToken(response.data.token);
            localStorage.setItem("token", response.data.token);
            setShowlogin(false);
        }
        else {
            alert(response.data.message)
        }
    }

    return (
        <div className='LoginPopup'>
            <form onSubmit={onLogin} className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowlogin(false)} src={assets.cross_icon} alt="" />
                </div>
                <div className="login-popup-input">
                    {currState === "Sign Up" ? <input name="name" onChange={onChangeHandler} value={data.value} type="text" placeholder='Your name' required /> : <></>}
                    <input name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Your email' required />
                    <input name='password' onChange={onChangeHandler} value={data.password} type="password" placeholder='Password' required />
                </div>
                <button type='submit'>{currState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Sign Up" ? <p>Already have an account? <span onClick={() => setCurrState("Login")}>login here</span></p>
                    : <p>Create a new Account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>}


            </form>
        </div>
    )
}

export default LoginPopup