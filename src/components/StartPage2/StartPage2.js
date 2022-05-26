import React from 'react'
import './StartPage2.css'
import Logo from './header/UI/Logo'
import Search from './header/UI/Search'
import SignInButton from './header/UI/SignInButton'
import Icons from './header/UI/icons/Icons'
import Navbar from './header/UI/nav/Navbar'
import BigImage from './bigImage/BigImage'
import Account from './bottom/Account'
import AboutUs from './bottom/AboutUs'
import Help from './bottom/Help'
import FollowUs from './bottom/FollowUs'
import LogoBottom from './bottom/LogoBottom'
import CopyRight from './bottom/CopyRight'
import Term from './bottom/Term'

export default function StartPage2() {
    return (
        <div className="container">
            <div className="Header">
                <div className="Logo"><Logo/></div>
                <div className="Search"><Search/></div>
                <div className="SignIn"><SignInButton/></div>
                <div className="Icons"><Icons/></div>
                <div className="Navbar"><Navbar/></div>
            </div>
            <div className="BigImage"><BigImage/></div>
            <div className="Bottom">
                <div className="Account"><Account/></div>
                <div className="AboutUs"><AboutUs/></div>
                <div className="Help"><Help/></div>
                <div className="FollowUs"><FollowUs/></div>
            </div>
            <div className="CR">
                <div className="LogoBottom"><LogoBottom/></div>
                <div className="CopyRight"><CopyRight/></div>
                <div className="Terms"><Term/></div>
            </div>
        </div>
    )
}
