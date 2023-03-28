import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import Logo from './images/tp.png'
import Dashboard from './images/icons/dashboard.png'
import Close from './images/icons/close.png'
import Project from './images/icons/project.png'
import Client from './images/icons/client.png'
import Education from './images/icons/college-graduation.png'
import Experience from './images/icons/work.png'
import Profile from './images/icons/user.png'
// import Add from './images/icons/add.png'
import Logout from './images/icons/logout.png'



const LeftSideBar = (props) => {

    const location = useLocation();
    const pathname = location.pathname;

    const logOut = ()=>{
        props.setIsLogin(!props.isLogin);
        localStorage.removeItem("token");
    }
  
    return (
        <>

            <aside style={props.toggle ? {display: "block"}: null}>
                {/* Sidebar top */}
                <div className="top">
                    {/* logo and Name */}
                    <div className="logo">
                        <img src={Logo} alt='profile'/>
                        <h2>Bip<span className="danger">lab</span></h2>
                    </div>
                    {/* cross icon */}
                    <div className="close" id="close-btn" onClick={()=> {props.setToggle(!props.toggle)}} >
                        <img src={Close} alt="close" />
                    </div>
                </div>
                {/* Side bar links */}
                <div className="sidebar">
                    <Link to="/" className={pathname === '/' ? "active" : null}>
                        <img src={Dashboard} alt="Dashboard" />
                        <h3>Dashboard</h3>
                    </Link>
                    <Link to="/projects" className={pathname === '/projects' ? "active" : null}>
                        <img src={Project} alt="projects" />
                        <h3>Projects</h3>
                    </Link>
                    <Link to="/clients" className={pathname === '/clients' ? "active" : null}>
                        <img src={Client} alt="client" />
                        <h3>Clients</h3>
                    </Link>
                    <Link to="/education" className={pathname === '/education' ? "active" : null}>
                        <img src={Education} alt="education" />
                        <h3>Education</h3>
                    </Link>
                    <Link to="/experience" className={pathname === '/experience' ? "active" : null}>
                        <img src={Experience} alt="Experience" />
                        <h3>Experience</h3>
                    </Link>
                    <Link to="/profile" className={pathname === '/profile' ? "active" : null}>
                        <img src={Profile} alt="profile" />
                        <h3>Profile</h3>
                    </Link>
                    {/* <Link to="/add-project" className={pathname === '/add-project' ? "active" : null} >
                        <img src={Add} alt="add" />
                        <h3>Add Project</h3>
                    </Link> */}
                    <Link to="/login" onClick={logOut}>
                        <img src={Logout} alt="logout" />
                        <h3>Logout</h3>
                    </Link>
                </div>
            </aside>

        </>
    );
}

export default LeftSideBar;
