import React, { useEffect } from 'react'
import './Menu.css'
import Logo from "../../assets/logo.webp"
import { FaChartPie, FaChartColumn, FaCashRegister, FaChildReaching, FaCalendarDays } from "react-icons/fa6";
import { FaSignOutAlt, FaWhmcs } from "react-icons/fa";

function Menu() {
    useEffect(() => {
        const mainMenuLi = document
            .getElementById("mainMenu")
            .querySelectorAll("li");

        function changeActive() {
            mainMenuLi.forEach(n => n.classList.remove("active"));
            this.classList.add("active");
        }
        mainMenuLi.forEach(n => n.addEventListener('click', changeActive));
    }, [])

    return (
        <menu>
            <img src={Logo} alt=''></img>
            <ul id="mainMenu">
                <Icon icon={<FaChartColumn />} />
                <Icon icon={<FaChartPie />} />
                <Icon icon={<FaCashRegister />} />
                <Icon icon={<FaChildReaching />} />
                <Icon icon={<FaCalendarDays />} />
            </ul>
            <ul className='lastMenu'>
                <Icon icon={<FaWhmcs />} />
                <Icon icon={<FaSignOutAlt />} />
            </ul>
        </menu>
    )
}

const Icon = ({ icon }) => (
    <li>
        <a href="#!">{icon}</a>
    </li>
)

export default Menu