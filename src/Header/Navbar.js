import React from 'react'
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import './Navbar.css'


export default function NavbarSection() {
  return (
    <>

      <div className='main-div'>
       <div className='sub-div'>
       <div className='brand'>Kasuka</div>
        <div className='Menu'>
        <Link   to="/"  style={{marginLeft : 35} }>Home</Link>
            <Link   to="/temp"  style={{marginLeft : 35} }>About Us</Link>
            <Link   to="/temp"  style={{marginLeft : 35} }>Services</Link>
            <Link   to="/temp"  style={{marginLeft : 35} }>portfolios</Link>
            <Link   to="/temp"  style={{marginLeft : 35} }>Team</Link>
            <Link   to="/temp"  style={{marginLeft : 35} }>DropDownList</Link>
            <Link   to="/temp"  style={{marginLeft : 35} }>Contact Us</Link>
        </div>
        <div className='start'> <Button variant="outlined">Outlined</Button></div>
       </div>
      </div>
    </>
  )
}
