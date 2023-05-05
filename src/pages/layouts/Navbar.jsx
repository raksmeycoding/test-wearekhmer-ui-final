import React from 'react'
import logo from '../../assets/logo.svg'
import { DropDrown } from '../../components/ui/DropDrown'

function Navbar() {
  return (
    <div className=" flex flex-row gap-4 w-full  justify-between items-center">
      <span>
        <img src={logo} alt="" />
      </span>
      <div>
        <ul className="flex flex-row gap-8 font-medium">
          <li>Home</li>
          <li>Temple</li>
          <li>Aspara</li>
          <li>
            <DropDrown />
          </li>
        </ul>
      </div>

      <div className="flex flex-row gap-4">
        <span>Search Icon</span>
        <span>Sign Up btn</span>
      </div>
    </div>
  )
}

export default Navbar
