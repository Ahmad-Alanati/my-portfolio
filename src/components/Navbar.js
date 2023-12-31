
import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const NavBar = () => {
    return (
        <div className='center'>
            <ul className='navbar'>
                <li>
                    <Link to="#home">Home</Link>
                </li>
                <li>
                    <Link to="#profile">Profile</Link>
                </li>
                <li>
                    <Link to="#projects">Projects</Link>
                </li>
                <li>
                    <Link to="#contact">Contact</Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
