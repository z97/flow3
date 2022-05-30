import React, { useState } from 'react'

export default function Test() {
    const [login, setLogin] = useState(false)
  return (
        (login == false)
          ? <div> Something went wrong </div> 
          : <div> Everything in the world is fine </div> 

  )
}
