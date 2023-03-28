import React from 'react';
import IMG from '../images/Screenshot from 2023-03-08 11-24-42.png'
import { useParams, useNavigate } from 'react-router-dom'

const ProjectDetails = (props) => {

    const id = useParams();
    const navigate = useNavigate();
    console.log(props.data.Project.find((e) => id.id === e._id))

    return (
        <>
            <main>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                <h1>Project Details</h1>
                <h2 style={{cursor:"pointer", padding:"5px", border:"1px solid black", borderRadius: "10px",background:"white",margin:"1px"}}
                onClick={()=> {navigate("/")}}
                >Go Back</h2>
                </div>
                <div className="project-details">
                    {// eslint-disable-next-line
                        props.data.Project.map((pro) => {
                            if (id.id === pro._id) {
                                return (
                                    <div key={pro._id}>
                                        <div className="pro-img">
                                            <img src={IMG} alt="" />
                                        </div>
                                        <div className="project-info">
                                            <h1>{pro.projectName}</h1>
                                            <h2>Client Name: {pro.clientName}</h2>
                                            <h2>Total Fund: {pro.amount}</h2>
                                            <h2>Deadline: {pro.deadline}</h2>
                                            <h2>Status: {pro.status}</h2>
                                            <h2>Role: {pro.role}</h2>
                                            <h2>Technology: {pro.technology}</h2>
                                            <h2>URL: {pro.link}</h2>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }

                </div>
            </main>
        </>
    );
}

export default ProjectDetails;
