import React from 'react'
import logo from '../../assets/logo.svg'
import { DropDrown } from '../../components/ui/DropDrown'
import searchIcon from '../../assets/icons/Search.png'
import Button from '../../components/ui/Button'

function Navbar() {
  return (
    <div className="z-20 flex flex-row gap-4 w-full  justify-between items-center fixed bg-white left-0 global-padding-x">
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
        <button>
          <svg
            className="w-6"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </svg>
        </button>
        <Button title="Sign Up" />
      </div>
    </div>
  )
}

export default Navbar
