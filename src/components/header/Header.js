import React from 'react'
import Icons from './UI/icons/Icons'
import Logo from './UI/Logo'
import Search from './UI/Search'

export default function Header() {
  return (
      <div style={{display: "flex"}}>
    <div><Logo/></div>
    <div><Search/></div>
    <Icons/>
      </div>

  )
}
