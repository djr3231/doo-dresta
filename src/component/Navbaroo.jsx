import React from 'react'
import { Link } from 'react-router-dom'

const Navbaroo = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/SingUp'>SingUp</Link></li>
      <li><Link to='/LogIn'>SingIn</Link></li>
    </ul>
  </div>
</div>
  )
}

export default Navbaroo