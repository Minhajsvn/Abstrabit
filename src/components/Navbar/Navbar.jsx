import '../Navbar/Navbar.css'
import Logo from '../../assets/logo-rackext-svgrepo-com.png'
import menuUser from '../../assets/menu-user.png'
import menuFd from '../../assets/menu-fd.png'
import menuTrans from '../../assets/menu-trans.png'
import menuLogout from '../../assets/menu-logout.png'
import phnImg from '../../assets/phone-calling.png'
import mailImg from '../../assets/mail.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  const onMouseOver = () => {
    setOpen(true)
  }
  const onMouseOverSpt = () => {
    setSupportOpen((prevOpen) => !prevOpen)
  }

  const onMouseLeave = () => {
    setOpen(false)
  }


  return (
    <nav className='nav'>
      <div><img src={Logo} alt="logo" /></div>
      <div className="navItems">
        <button className='btn'>Dashboard</button>
        <button className='btn'>FAQs</button>
        <button className='btn' onClick={onMouseOverSpt}>Support</button>
        <button className='iconBtn' onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            <FontAwesomeIcon icon={faUserAlt} />
            {open 
              ? <FontAwesomeIcon icon={faAngleUp} className='space-left' />
              : <FontAwesomeIcon icon={faAngleDown} className='space-left'  />}
        </button>
      </div>
      {open 
      ? <div className='menu'>
            <li>
              <ul className='menuItems'><img  className='space-right' src={menuUser} alt="" /> My Profile</ul>
              <ul className='menuItems'><img  className='space-right' src={menuFd} alt="" />My FDs</ul>
              <ul className='menuItems'><img  className='space-right' src={menuTrans} alt="" />My Transactions</ul>
              <ul className='menuItems'><img  className='space-right' src={menuLogout} alt="" />Logout</ul>
            </li>
        </div>
      : ""}
      {supportOpen 
        ? <div className='support'>
              <div className='phone'>
                <div className='icon'>
                  <img src={phnImg} alt="" />
                </div>
                <div className='phoneText'>
                  <p>+91 88777 37777</p>
                  <p>+91 88777 5666</p>
                </div>
              </div>
              <div className='mail'>
                <div className='icon'>
                  <img src={mailImg} alt="" />
                </div>
                <div className='mailText'>
                  <p>support@silverbullet.in</p>
                  <p>info@silverbullet.in</p>
                </div>
              </div>
          </div>
        : ""}
    </nav>
  )
}
