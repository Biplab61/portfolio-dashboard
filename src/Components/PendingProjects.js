import React from 'react';
import UserIcon from './images/icons/user.png'

const PendingProjects = (props) => {
    let count = 0;
    return (
        <>

            {/* Recent Projects */}
            <div className="projects-updates">
                <h1>Pending Projects</h1>
                <div className="updates">
                    {// eslint-disable-next-line
                        props.data.Project.map((project, i) => {
                            if (project.status === "Pending") {
                                count += 1;
                                if (count <= 3) {
                                    return (
                                        <div className="update" key={i}>
                                            <div className="profile-photo">
                                                <img src={UserIcon} alt="" />
                                            </div>
                                            <div className="message">
                                                <p><b>{project.clientName}</b>
                                                    <span>Status: <span
                                                        className={project.status === "Working" ? "warning" : project.status === "Pending" ? "danger" : "success"}>
                                                        {project.status}
                                                    </span></span></p>
                                                <small className="text-muted">Deadline: <span>{project.deadline}</span></small>
                                            </div>
                                        </div>
                                    )
                                }
                            }

                        })
                    }
                </div>
            </div>
        </>
    );
}

export default PendingProjects;
