import React, { useState } from 'react'
import './SideBar.css'
import logo from '../../assets/logo_white.svg'
import {
  FaChartPie,
  FaChartColumn,
  FaCashRegister,
  FaChildReaching,
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
        />
        <Icon
          icon={<FaChartPie />}
          isActive={activeIcon === 'chartPie'}
          onClick={() => handleIconClick('chartPie')}
        />
        <Icon
          icon={<FaCashRegister />}
          isActive={activeIcon === 'cashRegister'}
          onClick={() => handleIconClick('cashRegister')}
        />
        <Icon
          icon={<FaChildReaching />}
          isActive={activeIcon === 'childReaching'}
          onClick={() => handleIconClick('childReaching')}
        />
        <Icon
          icon={<FaCalendarDays />}
          isActive={activeIcon === 'calendarDays'}
          onClick={() => handleIconClick('calendarDays')}
        />
      </div>
      <div className='sidebar-logout'>
        <Icon icon={<FaWhmcs />} />
        <Icon icon={<FaSignOutAlt />} />
      </div>
    </aside>
  )
}

const Icon = ({ icon, isActive, onClick }) => (
  <a href='#!' className={`${isActive ? 'active' : ''}`} onClick={onClick}>
    {icon}
  </a>
)

export default SideBar
