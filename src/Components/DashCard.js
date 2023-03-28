import React from 'react';
import Project from './images/icons/project.png'
import Client from './images/icons/customer.png'
import Skills from './images/icons/skills.png'
import Ana from './images/icons/equalizer.png'

const DashCard = (props) => {
    
    return (
        <>
        
            <h1>Dashboard</h1>
            {/* <div class="date">
                <input type="date">
            </div> */}
            {/* Card Section Start */}
            <div className="insights">
                {/* Start Box */}
                <div className="card">
                    <div className="middle">
                        <img src={Project} alt="projects" />
                        <div className="left">
                            <h1>Projects</h1>
                            <h3>{props.data.Project.length}</h3>
                        </div>
                    </div>
                    <small className="text-muted">All Projects</small>
                </div>
                {/* End Box */}
                {/* Start Box */}
                <div className="card">
                    <div className="middle">
                        <img src={Client} alt="client" />
                        <div className="left">
                            <h1>Clients</h1>
                            <h3>00</h3>
                        </div>
                    </div>
                    <small className="text-muted">All Clients</small>
                </div>
                {/* End Box */}
                {/* Start Box */}
                <div className="card">
                    <div className="middle">
                        <img src={Skills} alt="skills" />
                        <div className="left">
                            <h1>Skills</h1>
                            <h3>{props.data.skills.length}</h3>
                        </div>
                    </div>
                    <small className="text-muted">All Skills</small>
                </div>
                {/* End Box */}
                {/* Start Box */}
                <div className="card">
                    <div className="middle">
                        <img src={Ana} alt="projects" />
                        <div className="left">
                            <h1>Jani Na</h1>
                            <h3>00</h3>
                        </div>
                    </div>
                    <small className="text-muted">All jani na</small>
                </div>
                {/* End Box */}
            </div>
        </>
    );
}

export default DashCard;
