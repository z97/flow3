import React from 'react'
import Icons from './UI/icons/Icons'
import Logo from './UI/Logo'
import Nanbar from './UI/nav/Navbar'
import Search from './UI/Search'
import SignInButton from './UI/SignInButton'
import './Header.css'

export default function Header() {
  return (
    <div class="container" style={{paddingTop:"50px"}}>
      <div class="Search"><Search/></div>
      <div class="SignIn"><SignInButton/></div>
      <div class="Icons"><Icons/></div>
      <div class="Logo"><Logo/></div>
      <div class="Nav"><Nanbar/></div>
    </div>

  )
}
