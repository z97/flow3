import React from 'react'
import Icons from './UI/icons/Icons'
import Logo from './UI/Logo'
import Search from './UI/Search'
import SignInButton from './UI/signInButton/SignInButton'
import './Header.css'

export default function Header() {
  return (
    <div className="container">
      <div className="logo"><Logo/></div>
      <div className="search"><Search/></div>
      <div className="signIn"><SignInButton/></div>
      <div className="Icons"><Icons/></div>
    </div>
  )
}
