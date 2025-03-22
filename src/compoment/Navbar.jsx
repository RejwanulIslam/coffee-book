import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
              
                <NavLink to='/'><button className="btn btn-ghost text-xl">Coffee Book</button></NavLink>
            </div>
            <div className="navbar-end  lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                  <NavLink to='/'><li>Home</li></NavLink>
                  <NavLink to='/coffee'><li>Coffees</li></NavLink>
                  <NavLink to='/dashbord'><li>Dashbord</li></NavLink>
                </ul>
            </div>
           
        </div>
    )
}
