import React, { useState } from 'react';
import DashProjects from '../DashProjects';
import axios from 'axios';
import { baseURL } from '../../baseURL';
import { useNavigate } from 'react-router-dom';

const Projects = (props) => {

    const [search, setSearch] = useState("");
    // eslint-disable-next-line
    const [update, setUpdate] = useState(null);
    const navigate = useNavigate();

    const updateProject = async (statusName, id) => {

        await axios.patch(`${baseURL}/pro/updateproject`, { status: statusName, id: id })
            .then((response) => { // eslint-disable-next-line
                props.data.Project.find((pro) => {
                    if (pro._id === id) {
                        pro.status = response.data.status;
                    }
                })
                setUpdate(id);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const deleteProject = async(id) => {
        
        await axios.delete(`${baseURL}/pro/deleteproject/${id}`)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    props.data.Project.forEach((element) => {
                        if (element._id === id) {
                            let index = props.data.Project.indexOf(element);
                            if (index > -1) {
                                props.data.Project.splice(index, 1);
                            }
                        }
                        setUpdate(id);
                    })
                }
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <>
            <main>
                <div className="search">
                    <input type="text" placeholder='Search Here ......' value={search} onChange={(e) => setSearch(e.target.value)} />
                </div>

                <DashProjects data={props.data} updateProject={updateProject} deleteProject={deleteProject} />

                <div className="add-btn">
                    <button onClick={()=> {navigate("/add-project", {state: {value: "Project"}})}}>Add Project</button>
                </div>
            </main>
        </>
    );
}

export default Projects;
