import React from 'react';
import { NavLink } from 'react-router';

const NaveBer = () => {
    const LinksColoreClass=({isActive})=>
        isActive?"btn bg-[#23BE0A] text-white"
    :"btn text-[#4B5563]]"

    const Links=<>

    <NavLink to="/" className={LinksColoreClass}>Home</NavLink>
    <NavLink to="/book" className={LinksColoreClass}>Listed Books</NavLink>

    <NavLink to="/reade" className={LinksColoreClass}>Pages to Read</NavLink>
    
    </>

    
    return (
        <div className="navbar bg-base-100 shadow-sm ">
           
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                       <div className='flex gap-4'> {Links}</div>
                    </ul>
                </div>
                <a className="font-bold text-[28px] ml-12">fs</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                  <div className='flex gap-4'>{Links}</div>
                </ul>
            </div>
            <div className="navbar-end">
                <button className="btn mr-5 font-semibold text-[18px] text-[#FFFFFF] bg-[#23BE0A]">Sign In</button>
                <button className='btn mr-12 font-semibold text-[18px] text-[#FFFFFF] bg-[#59C6D2]'>Sign Up</button>

            </div>
            </div>
        
    );
};

export default NaveBer;