import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { PiPlantDuotone } from "react-icons/pi";
import { CiLogin } from 'react-icons/ci';
import { FaBars } from 'react-icons/fa'; 
import { GiPlantRoots } from "react-icons/gi";
import { HiMiniPencilSquare } from "react-icons/hi2";


function Header() {
  const [userLoginStatus, setUserLoginStatus] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  

  return (
    <div className="d-flex justify-content-between header" style={{ backgroundColor: '#cfe2d9' }}>  
       <div className="d-flex justify-content-start logo">
        <Link to="/">
          <img src="src\assets\images\vaidyavan-logo.png" alt="Logo Unavailable currently" className='p-3' width={150} height={150} />
        </Link>
        <h1 className="m-3" style={{ color: '#cfe2d9' }}>VaidyaVan</h1>
      </div>
        <nav className="navbar">
            <button className="navbar-toggler" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                <FaBars />
            </button>
            <ul className="nav fs-5 p-3" style={{ display: isMenuOpen ? 'block' : 'none' }}>  
                <li className="nav-item">
                    <Link to="/" className="nav-link" style={{ color: '#434343' }}> 
                        <AiOutlineHome /> Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="learn" className="nav-link" style={{ color: '#434343' }}>  
                    <PiPlantDuotone /> Learn
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="guided-tours" className="nav-link" style={{ color: '#434343' }}>  
                    <GiPlantRoots /> Guided Tours
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="register" className="nav-link" style={{ color: '#434343' }}>  
                    <HiMiniPencilSquare /> Register
                    </Link>
                </li>
                {userLoginStatus === false ? (
                    <li className="nav-item">
                        <Link to="login" className="nav-link" style={{ color: '#434343' }}>  
                            <CiLogin /> Login
                        </Link>
                    </li>
                ) : (
                    <li className="nav-item">
                        <Link to="login" className="nav-link" style={{ color: '#434343' }}>  
                            <CiLogin /> Logout
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    </div>
);
}

export default Header;