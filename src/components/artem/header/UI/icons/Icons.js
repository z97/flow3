import React from 'react'
import Diamond from './Diamond'
import Parcel from './Parcel'
import Bell from './Bell'
export default function Icons() {
  return (
    <div style={{display: "flex", justifyContent: "space-between", width: "130px", alignItems: "center"}}>
        <Diamond/>
        <Parcel/>
        <Bell/>
    </div>
  )
}
