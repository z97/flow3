import React from 'react'
import Icons from './UI/icons/Icons'
import Logo from './UI/Logo'
import Nanbar from './UI/nav/Navbar'
import Search from './UI/Search'
import Test from './UI/Test'
import SignInButton from './UI/SignInButton'
import './Header.css'

export default function Header() {
  return (
    <div className="container" style={{paddingTop:"50px"}}>
      <div className="Search"><Search/></div>
      <div className="SignIn"><SignInButton/></div>
      <div className="Icons"><Icons/></div>
      <div className="Logo"><Logo/></div>
      <div className="Nav"><Nanbar/></div>
    </div>

  )
}
