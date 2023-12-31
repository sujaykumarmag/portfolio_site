'use client';
import React, { useState } from 'react';


const Header = () => {

    return (
        <div className="navbar bg-black text-white p-4">
            <div className="navbar-start ">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden ">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm bg-black text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {/* <li><a href="/about" >About</a></li> */}
                        <li><a href="/cv">Bio+CV</a></li>
                        <li><a href="/blogs" className="hover:text-gray-500">Blogs
                    
                        <div className="indicator p-2"><span className="badge badge-error badge-xs  indicator-item p-1">On it</span></div></a></li>
                        <li><a href="/research">Research Publications</a></li>
                        <li><a href="/projects">Projects</a></li>
                        <li><a href="/experience">Experience</a></li>

                    </ul>
                </div>
                <a href="/" className="btn btn-ghost normal-case text-xl font-bold">SujayKumar Reddy M</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {/* <li><a href="/about" className="hover:text-gray-500">About</a></li> */}

                    <li><a href="/cv" className="hover:text-gray-500">Bio+CV</a></li>

                    <li><a href="/blogs" className="hover:text-gray-500">Blogs
                    <div className="indicator p-2"><span className="badge badge-error badge-xs  indicator-item p-1">On it</span></div></a></li>


                    <li><a href="/research" className="hover:text-gray-500">Research Publications</a>
                    </li>

                    <li><a href="/projects" className="hover:text-gray-500">Projects</a></li>
                    <li><a href="/experience" className="hover:text-gray-500">Experience</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
