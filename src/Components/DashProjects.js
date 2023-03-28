import React from 'react';
import { useLocation, Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const DashProjects = (props) => {

    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname;

    // const today = new Date();
    // const year = today.getFullYear();
    // const month = String(today.getMonth() + 1).padStart(2, '0');
    // const day = String(today.getDate()).padStart(2, '0');
    // const futureMonth = String(today.getMonth() + 3).padStart(2, '0');
    // const currentDate = `${day}-${month}-${year}`;
    // const futureDate = `${day}-${futureMonth}-${year}`;

    return (
        <>
            <div className="recent-project project">
                <h1>Projects</h1>
                <table>
                    {pathname === '/' ?
                        <>
                            <thead>
                                <tr>
                                    <th>Client Name</th>
                                    <th>Project</th>
                                    <th>Payment</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                { // eslint-disable-next-line
                                    props.data.Project.map((project, i) => {
                                        if (i <= 6) {
                                            return (

                                                <tr key={project._id}>
                                                    <td>{project.clientName}</td>
                                                    <td>{project.projectName}</td>
                                                    <td>{project.amount}</td>
                                                    <td>{project.deadline}</td>
                                                    <td className={project.status === "Working" ? "warning" : project.status === "Pending" ? "danger" : "success"}>
                                                        {project.status}</td>
                                                    <td className="primary"
                                                    onClick={()=> {navigate(`/project/${project._id}`)}}
                                                    >Details</td>
                                                </tr>
                                            )
                                        }
                                    })
                                }

                            </tbody>
                        </>
                        :
                        <>
                            <thead className='peoject-th'>
                                <tr>
                                    <th>Client Name</th>
                                    <th>Project</th>
                                    <th>Payment</th>
                                    <th>Deadline</th>
                                    <th>Status</th>
                                    <th>Change Status</th>
                                    <th>Remove Project</th>
                                </tr>
                            </thead>
                            <tbody className='peoject-tb'> 
                                {
                                    props.data.Project.map((project, i) => {

                                        return (

                                            <tr key={project._id} >
                                                <td>{project.clientName}</td>
                                                <td>{project.projectName}</td>
                                                <td>{project.amount}</td>
                                                <td>{project.deadline}</td>
                                                <td className={project.status === "Working" ? "warning" : project.status === "Pending" ? "danger" : "success"}>
                                                    {project.status}</td>
                                                <td style={{ height: "50px" }}>
                                                    {project.status === "Working" ?
                                                        <><span className='success' onClick={() => props.updateProject("Completed", project._id)}>Completed</span>
                                                            <span className='danger' onClick={() => props.updateProject("Pending", project._id)}>Pending</span></> :
                                                        project.status === "Pending" ?
                                                            <><span className='success' onClick={() => props.updateProject("Completed", project._id)}>Completed</span>
                                                                <span className='warning' onClick={() => props.updateProject("Working", project._id)}>Working</span></>
                                                            : project.status === "Maintain" ?
                                                                <span className='success' onClick={() => props.updateProject("Completed", project._id)}>Completed</span> :
                                                                <span className='warning' onClick={() => props.updateProject("Maintain", project._id)}>Maintain</span>
                                                    } </td>
                                                <td className='danger'><span onClick={() => props.deleteProject(project._id)}>Remove</span></td>
                                                <td onClick={()=> {navigate(`/project/${project._id}`)}}>Details</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </>
                    }

                </table>

                {pathname === '/' ? <Link to="/projects">Show All</Link> : null}

            </div>
        </>
    );
}

export default DashProjects;
