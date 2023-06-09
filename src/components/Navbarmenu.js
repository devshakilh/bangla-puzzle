import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from "react-icons/fi";
import '../App.css'


const Navbarmenu = () => {

    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ["main-menu menu-right menuq1"];
    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }

    const [isMenuSubMenu, setMenuSubMenu] = useState(false);

    const toggleSubmenu = () => {
        setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };

    let boxClassSubMenu = ["sub__menus"];
    if (isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    } else {
        boxClassSubMenu.push('');
    }



    return (
        <header className="header__middl flex  bg-[#115c8f] py-4">
            <div className="container bg-[#115c8f] text-white">
                <div className="row bg">

                    {/* Add Logo  */}
                    <div className="header__middle__logo">
                        <NavLink exact activeClassName='is-active' to="/">

                            <h1 className='text-4xl text-white font-bold'>BanglarPu</h1>
                        </NavLink>
                    </div>

                    <div className="header__middle__menus">
                        <nav className="main-nav " >

                            {/* Responsive Menu Button */}
                            {isResponsiveclose === true ? <>
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                            </> : <>
                                <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                            </>}


                            <ul className={boxClass.join(' ')}>

                                <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}> Events </NavLink> </li>
                                <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}> News </NavLink> </li>
                                <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Media <FiChevronDown className='lg:ml-[58px] text-3xls font-bold' /> </Link>
                                    <ul className={boxClassSubMenu.join(' ')} >
                                        <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}> Press </NavLink> </li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}> Interview </NavLink> </li>
                                    </ul>
                                </li>
                                <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> Gallery <FiChevronDown className='lg:ml-16 text-3xls font-bold' /> </Link>
                                    <ul className={boxClassSubMenu.join(' ')} >
                                        <li> <NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}> Photo Gallery </NavLink> </li>
                                        <li><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}> Video Gallery </NavLink> </li>
                                    </ul>
                                </li>
                                <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}> Publication </NavLink> </li>


                                <li className="menu-item " ><NavLink onClick={toggleClass} activeClassName='is-active' to={`/`}> Contact </NavLink> </li>

                            </ul>


                        </nav>
                    </div>





                </div>
            </div>
        </header>
    )
}

export default Navbarmenu
