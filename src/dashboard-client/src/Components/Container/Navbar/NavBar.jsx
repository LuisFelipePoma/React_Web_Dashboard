import React, { useEffect } from 'react'
import "./NavBar.css"
import { FaSearchengin, FaBell, FaChevronDown } from 'react-icons/fa'
import logo from '../../../assets/logo.jpeg'

function NavBar() {

    useEffect(() => {
        const menuTarget = document.getElementById('menuChevron');
        const menuContainer = document.getElementById('menuContainer');
        menuTarget.addEventListener("mouseenter", () => {
            menuTarget.style.transform = "rotate(180deg)";
            menuContainer.style.transform = "translateX(0px)";
        });
        menuTarget.addEventListener("mouseleave", () => {
            menuTarget.style.transform = "rotate(0deg)";
            menuContainer.style.transform = "translateX(300px)";
        });
    }, [])
    return (
        <div className='navbar'>
            <div className="inputBox">
                <input type='text' placeholder='Search item, collections'></input>
                <i>
                    <FaSearchengin />
                </i>
            </div>
            <div className="profileContainer">
                <i className="profileIcon">
                    <FaBell />
                </i>
                <div className="profileImage">
                    <img src={logo} alt="profile" />
                </div>
                <p className="profileName">Jhon Doe</p>
                <i className="menuChevron" id="menuChevron">
                    <FaChevronDown />
                </i>
                <div className="menuContainer" id="menuContainer">
                    <ul>
                        <li>Web Design</li>
                        <li>UI / UX</li>
                        <li>Form Design</li>
                        <li>UI Design</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default NavBar