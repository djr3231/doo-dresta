import React from 'react'
import { Link } from 'react-router-dom'

const Navbaroo = () => {
  return (
    <div className="navbar bg-base-100">
  <div className="flex-1">
    <Link to='/' className="btn btn-ghost normal-case text-xl">Doo-D</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/Counter'>Counter</Link></li>
      <li><Link to='/SingUp'>SingUp</Link></li>
      <li><Link to='/LogIn'>LogIn</Link></li>
      <li><Link to='/Admin'>Admin</Link></li>
    </ul>
  </div>
</div>
  )
}

export default Navbaroo