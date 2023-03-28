import React, { useState } from 'react';
import axios from 'axios';
import { baseURL } from '../../baseURL';
import { useNavigate } from 'react-router-dom';

const Education = (props) => {

    // eslint-disable-next-line
    const [update, setUpdate] = useState(null);
    const navigate = useNavigate();

    // const updateEdu = async (id) => {

    //     await axios.patch(`${baseURL}/pro/updateproject`, { School: "Hii", id: id })
    //         .then((response) => { // eslint-disable-next-line
    //             props.data.Educations.find((edu) => {
    //                 if (edu._id === id) {
    //                     edu.School = response.data.School;
    //                 }
    //             })
    //             setUpdate(id);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }

    const deleteEdu = async (id) => {
        await axios.delete(`${baseURL}/edu/deleteedu/${id}`)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    props.data.Educations.forEach((element) => {
                        if (element._id === id) {
                            let index = props.data.Educations.indexOf(element);
                            if (index > -1) {
                                props.data.Educations.splice(index, 1);
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
                    <h1>Education</h1>
                    <table>
                        <thead>
                            <tr>
                                {/* <th>Sl.No</th> */}
                                <th>Degree</th>
                                <th>School</th>
                                <th>Time</th>
                                <th>Update</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                props.data.Educations.map((edu, i) => {
                                    return (
                                        <tr key={edu._id}>
                                            {/* <td>{i + 1}</td> */}
                                            <td>{edu.Degree}</td>
                                            <td>{edu.School}</td>
                                            <td>{edu.From} - {edu.To}</td>
                                            <td className='warning'><span>Modify</span></td>
                                            <td className='danger'><span onClick={() => { deleteEdu(edu._id) }}>Delete</span></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div className="add-btn">
                    <button onClick={() =>{navigate("/add", {state: { value: "Education"}})}}>Add Education</button>
                </div>
            </main>
        </>
    );
}

export default Education;
