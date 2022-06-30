import React, { useState } from 'react'

import ProfilePopUp from './ProfilePopUp'
import SignInPopUp from './SignInPopUp'

export default function SignInButton() {
  const [login, setLogin] = useState(true)
  return (
    (login == false)
      ? <SignInPopUp/>
      : <ProfilePopUp/>
  )
}
