import React, { useState } from 'react'
import './Navbar.css'
import { menu } from './menu'
import { Link } from 'react-router-dom';
const Navbar = () => {

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
   <nav className='Navbar'>
      <h1 className='logo'>Trip</h1>
      <div className='menu-icons' onClick={handleClick}>
      <i className={clicked?"fas fa-times": "bx bx-menu"}></i>
      </div>
        <ul className={clicked? "menu active":"menu"}>
          {menu.map((item,index)=>{
            return(
              <li key={index}>
              <Link className={item.cName} to={item.url}><i class={item.icon}></i>{item.title}</Link>
          </li>
            )
          })}
           <button className='btn nav-links-mobile'>Signup</button>
        </ul>

   </nav>
  )
}

export default Navbar
