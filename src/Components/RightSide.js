import React from 'react';
import Logo from './images/tp.png'
import Menu from './images/icons/menu.png'
import { useLocation } from "react-router-dom";
import PendingProjects from './PendingProjects';
// import Add from './images/icons/add.png'

const RightSide = (props) => {

    const location = useLocation();
    const pathname = location.pathname;

    return (
        <>
            <div className="right">
                {/* Top Bar */}
                <div className="top">
                    <button id="menu-btn">
                        <img src={Menu} alt="" onClick={() => { props.setToggle(!props.toggle) }} />
                    </button>
                    {/* <div class="theme-toggle">
                    <i class="fa-solid fa-sun active"></i>
                    <i class="fa-solid fa-moon"></i>
                </div> */}
                    <div className="profile">
                        <div className="info">
                            <p>Hey, <b>{props.data.profile[0].name}</b></p>
                            <small className="text-muted">Admin</small>
                        </div>
                        <div className="profile-photo">
                            <img src={Logo} alt="" />
                        </div>
                    </div>
                </div>


                {
                    pathname === '/' ?
                     <PendingProjects data={props.data} /> : null
                }

            </div>
        </>
    );
}

export default RightSide;
