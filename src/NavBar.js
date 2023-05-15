import React from 'react'
import { NavLink} from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <div className='nav'>
        <p>The</p>
        <h1>Siren</h1>

        <h2>
          <div><NavLink to="/" className={({ isActive }) => (isActive ? "Active" : "NotActive")}>Home</NavLink> </div>
          <div><NavLink to='/Bollywood'  className={({ isActive }) => (isActive ? "Active" : "NotActive")}>Bollywood</NavLink></div>
          <div><NavLink to='/Technology' className={({ isActive }) => (isActive ? "Active" : "NotActive")}>Technology</NavLink> </div>
          <div><NavLink to='/Hollywood' className={({ isActive }) => (isActive ? "Active" : "NotActive")}>Hollywood</NavLink></div>
          <div><NavLink to='/Fitness' className={({ isActive }) => (isActive ? "Active" : "NotActive")}>Fitness</NavLink>  </div>
          <div><NavLink to='/Food'  className={({isActive}) => (isActive ? "Active" : "NotActive")}>Food</NavLink>  </div>
        </h2>
        <hr></hr>
      </div>
    </>
  )
}

export default NavBar