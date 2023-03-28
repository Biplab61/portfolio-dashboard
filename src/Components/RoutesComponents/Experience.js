import React, { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../baseURL';
import { useNavigate } from 'react-router-dom';


const Experience = (props) => {

    // eslint-disable-next-line
    const [update, setUpdate] = useState(null);
    const navigate = useNavigate();



    const deleteExp = async (id) => {
        await axios.delete(`${baseURL}/exp/deleteexp/${id}`)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    props.data.Expriences.forEach((element) => {
                        if (element._id === id) {
                            let index = props.data.Expriences.indexOf(element);
                            if (index > -1) {
                                props.data.Expriences.splice(index, 1);
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
                <div className="recent-project">
                    <h1>Experience</h1>
                    <table>
                        <thead>
                            <tr>
                                <th>Designation</th>
                                <th>Company</th>
                                <th>Time</th>
                                <th>Update</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                props.data.Expriences.map((exp,i) => {
                                    return (
                                        <tr key={exp._id}>
                                            <td>{exp.Designation}</td>
                                            <td>{exp.Company}</td>
                                            <td>{exp.From} - {exp.To}</td>
                                            <td className='warning'><span>Modify</span></td>
                                            <td className='danger'><span onClick={()=> deleteExp(exp._id)}>Delete</span></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="add-btn">
                    <button onClick={() =>{navigate("/add", {state: { value: "Experience"}})}}>Add Experience</button>
                </div>
            </main>
        </>
    );
}

export default Experience;
