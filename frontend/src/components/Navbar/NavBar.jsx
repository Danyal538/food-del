import React, { useContext, useState } from 'react'
import "./NavBar.css"
import { assets } from "../../assets/assets"
import searchIcon from "../../assets/search_icon.png"
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const NavBar = ({ setShowlogin }) => {
    const navigate = useNavigate()
    const [menu, setMenu] = useState("home")
    const { getTotalCartAmount, token, setToken } = useContext(StoreContext)
    const logout = () => {
     localStorage.removeItem("token");
     setToken("");
     navigate("/");
    }
    return (
        <div className='navbar'>
            <Link to="/"><img src={assets.logo_frontend} alt="" className="logo" /></Link>
            <ul className="navbarMenu">
                <Link to="/" className={menu === "home" ? "active" : ""} onClick={() => setMenu("home")}>home</Link>
                <a href='#explore-Menu' className={menu === "menu" ? "active" : ""} onClick={() => setMenu("menu")}>menu</a>
                <a href='#AppDownload' className={menu === "mobile-app" ? "active" : ""} onClick={() => setMenu("mobile-app")}>mobile-app</a>
                <a href='#footer' className={menu === "contact-us" ? "active" : ""} onClick={() => setMenu("contact-us")}>contact-us</a>
            </ul>
            <div className="navbarRight">
                <img src={assets.search_icon} alt="" />
                <div className="navbarSearchIcon">
                    <Link to="/cart">
                        <img src={assets.basket_icon} alt="" />
                    </Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                {!token ? <button onClick={() => setShowlogin(true)}>sign in</button>
                    : <div className='navbar-profile'>
                        <img src={assets.profile_icon} alt="" />
                        <ul className="nav-profile-dropdown">
                            <li onClick={() => navigate("/myorders")}><img src={assets.bag_icon} alt="" /> <p>Orders</p></li>
                            <hr />
                            <li onClick={logout}><img src={assets.logout_icon} alt="" /><p>Logout</p></li>
                        </ul>
                    </div>}

            </div>
        </div>
    )
}

export default NavBar