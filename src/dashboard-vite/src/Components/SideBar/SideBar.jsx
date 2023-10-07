import React, { useState } from 'react'
import './SideBar.css'
import logo from '../../assets/logo_white.svg'
import {
  FaChartPie,
  FaChartColumn,
  FaCashRegister,
  FaCalendarDays
} from 'react-icons/fa6'
import { FaSignOutAlt, FaWhmcs } from 'react-icons/fa'

function SideBar () {
  const [activeIcon, setActiveIcon] = useState(null)

  const handleIconClick = iconName => {
    setActiveIcon(iconName)
  }

  return (
    <aside className='sidebar-grid'>
      <div className='sidebar-logo'>
        <img src={logo} alt='logo white' />
      </div>
      <div className='sidebar-icons'>
        <Icon
          icon={<FaChartColumn />}
          isActive={activeIcon === 'chartColumn'}
          onClick={() => handleIconClick('chartColumn')}
          iconName='Tables'
        />
        <Icon
          icon={<FaChartPie />}
          isActive={activeIcon === 'chartPie'}
          onClick={() => handleIconClick('chartPie')}
          iconName='Charts'
        />
        <Icon
          icon={<FaCashRegister />}
          isActive={activeIcon === 'cashRegister'}
          onClick={() => handleIconClick('cashRegister')}
          iconName='Cash'
        />
        <Icon
          icon={<FaCalendarDays />}
          isActive={activeIcon === 'calendarDays'}
          onClick={() => handleIconClick('calendarDays')}
          iconName='Calendar'
        />
      </div>
      <div className='sidebar-logout'>
        <Icon icon={<FaWhmcs />} iconName='Settings' />
        <Icon icon={<FaSignOutAlt />} iconName='Logout' />
      </div>
    </aside>
  )
}

const Icon = ({ icon, isActive, onClick, iconName }) => (
  <a href='#!' className={`${isActive ? 'active' : ''}`} onClick={onClick}>
    {icon}
    <span>{iconName}</span>
  </a>
)

export default SideBar
