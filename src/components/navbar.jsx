import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from "../image/fav-icon.svg";

function Navbar() {
    return (
            <div className="flex flex-row justify-between lg:space-x-20 md:space-x-10 sm:space-x-5 bg-slate-300 p-9">
                <div className="">
                    <Logo />
                </div>
                <nav className='flex flex-row lg:space-x-20 md:space-x-10 sm:space-x-5 basis-1/4'>
                    <ul className="nav-links  flex flex-row gap-4">
                        <Link to="/users">
                            <li>Users</li>
                        </Link>
                        <Link to="/posts">
                            <li>Posts</li>
                        </Link>
                    </ul>
                </nav>
            </div>

    );
}

export default Navbar;
