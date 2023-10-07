import './Header.css'
import logo from '../../assets/logo.jpeg'
import { FaSearchengin, FaBell } from 'react-icons/fa'

function Header () {
  return (
    <header className='header-grid'>
      <div className='header-search'>
        <i>
          <FaSearchengin />
        </i>
        <input type='text' placeholder='Search item, collections and more' />
      </div>
      <div className='header-profile'>
        <i className='header-profile-notify'>
          <FaBell />
        </i>
        <div className='header-profile-img'>
          <img src={logo} alt='profile image' />
        </div>
        <p className='header-profile-name'>Don Gato</p>
      </div>
    </header>
  )
}

export default Header
