import React, {useState} from 'react'
import logo from '../navbar/images/logo-olivagarden.png'
import '../navbar/navbar.css'
import Button from '@mui/material/Button';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import PhoneIcon from '@mui/icons-material/Phone';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import {Link} from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';




export default function Navbar(){
  const [clicked,setClicked]= useState(false)
  function handleClick(){
    setClicked(!clicked)
  }
  console.log(clicked)
  
  return (
    <nav className='container-navbar' >
        <Link to='/'><img src={logo} width='120px' className='logo'/></Link>
        <div className='menu-icon' width='100px' >
            <Button onClick={handleClick}>{clicked ? <MenuIcon sx={{color:'white', height:'80%', width:'20px'}}></MenuIcon> : <ClearIcon sx={{color:'white', height:'80%', width:'20px'}}></ClearIcon>}</Button>
          </div>
        <div className={clicked ? 'buttons close':'buttons'} width='100px'>
          <Button component={Link} to='/menu' sx={{color: 'white', height:'80%'}} activeStyle><LocalDiningIcon sx={{fontSize:'medium'}}/>Menu</Button>
          <Button component={Link} to='/orders' sx={{color: 'white', height:'80%'}} activeStyle><DeliveryDiningIcon/>Pedido</Button>
          <Button component={Link} to='/contact' sx={{color: 'white', height:'80%'}} activeStyle><PhoneIcon sx={{fontSize:'medium'}}/>Contacto</Button>
        </div>
    </nav>
  )
}
