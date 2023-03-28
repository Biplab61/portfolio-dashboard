import axios from 'axios';
import React, { useState } from 'react';
import { baseURL } from '../baseURL';
import { useLocation } from 'react-router-dom';

const AddForm = (props) => {

    const location = useLocation();
    const pathname = location.pathname;

    const [addData, setAddData] = useState({
        status: "Pending"
    });
    const [addEdu, setAddEdu] = useState({});
    const [addExp, setAddExp] = useState({});

    console.log(location.state.value)

    const updateAdd = (e) => {
        if (pathname === '/add-project') {
            setAddData({
                ...addData,
                [e.target.name]: e.target.value,
            });
        }
        if (location.state.value === "Education") {
            setAddEdu({
                ...addEdu,
                [e.target.name]: e.target.value,
            });
        }
        if (location.state.value === "Experience") {
            setAddExp({
                ...addExp,
                [e.target.name]: e.target.value,
            });
        }
    }

    const AddtoDB = async (e) => {
        e.preventDefault();

        if (pathname === '/add-project') {
            await axios.post(`${baseURL}/pro/addproject`, addData)
                .then((res) => {
                    props.data.Project.push(res.data);
                })
                .catch((err) => {
                })
        }
        if (location.state.value === "Experience") {
            await axios.post(`${baseURL}/exp/addexp`, addExp)
                .then((res) => {
                    props.data.Expriences.push(res.data);
                })
                .catch((err) => {
                })
        }

        if (location.state.value === "Education") {
            await axios.post(`${baseURL}/edu/addedu`, addEdu)
                .then((res) => {
                    props.data.Educations.push(res.data);
                })
                .catch((err) => {
                })
        }
    }

    return (
        <>

            <form style={{ margin: "5rem 1rem" }}>
                {pathname === '/add-project' ?
                    <>
                        <div className="profile-form">
                            <div className="inputs">
                                <span>client Name</span>
                                <input type="text" name='clientName' onKeyUp={updateAdd} autoComplete='off' />
                            </div>
                            <div className="inputs">
                                <span>Project Name</span>
                                <input type="text" name='projectName' onKeyUp={updateAdd} autoComplete='off' />
                            </div>
                            <div className="inputs">
                                <span>Deadline</span>
                                <input type="text" name='deadline' onKeyUp={updateAdd} autoComplete='off' placeholder='example: 01-05-2002' />
                            </div>
                            <div className="inputs">
                                <span>Amount</span>
                                <input type="text" name='amount' onKeyUp={updateAdd} autoComplete='off' />
                            </div>
                            <div className="inputs">
                                <span>Technology</span>
                                <input type="text" name='technology' onKeyUp={updateAdd} autoComplete='off' />
                            </div>
                            <div className="inputs">
                                <span>Role</span>
                                <input type="text" name='role' onKeyUp={updateAdd} />
                            </div>
                            <div className="inputs">
                                <span>Link</span>
                                <input type="text" name='link' onKeyUp={updateAdd} autoComplete='off' />
                            </div>
                            <div className="inputs">
                                <span>Image</span>
                                <input type="file" name='image' onChange={updateAdd} />
                            </div>
                            <div className="inputs">
                                <span>Status</span>
                                <input type="text" name='status' defaultValue={addData.status} onKeyUp={updateAdd} />
                            </div>
                        </div>
                    </>
                    : null
                }

                {/* Education */}
                {
                    location.state.value === 'Education' ?
                        <>
                            <div className="profile-form">
                                <div className="inputs">
                                    <span>Degree</span>
                                    <input type="text" name='Degree' onKeyUp={updateAdd} autoComplete='off' />
                                </div>
                                <div className="inputs">
                                    <span>School</span>
                                    <input type="text" name='School' onKeyUp={updateAdd} autoComplete='off' />
                                </div>
                                <div className="inputs">
                                    <span>From</span>
                                    <input type="text" name='From' onKeyUp={updateAdd} autoComplete='off' placeholder='example: 2013' />
                                </div>
                                <div className="inputs">
                                    <span>To</span>
                                    <input type="text" name='To' onKeyUp={updateAdd} autoComplete='off' placeholder='example: 2018' />
                                </div>
                                <div className="inputs">
                                    <span>Desc</span>
                                    <input type="text" name='Desc' onKeyUp={updateAdd} autoComplete='off' />
                                </div>
                            </div>
                        </>
                        : null
                }

                {
                    location.state.value === 'Experience' ?
                        <>
                            <div className="profile-form">
                                <div className="inputs">
                                    <span>Designation</span>
                                    <input type="text" name='Designation' onKeyUp={updateAdd} autoComplete='off' />
                                </div>
                                <div className="inputs">
                                    <span>Company</span>
                                    <input type="text" name='Company' onKeyUp={updateAdd} autoComplete='off' />
                                </div>
                                <div className="inputs">
                                    <span>From</span>
                                    <input type="text" name='From' onKeyUp={updateAdd} autoComplete='off' placeholder='example: Sep,2021' />
                                </div>
                                <div className="inputs">
                                    <span>To</span>
                                    <input type="text" name='To' onKeyUp={updateAdd} autoComplete='off' placeholder='example: Feb,2022' />
                                </div>
                                <div className="inputs">
                                    <span>Desc</span>
                                    <input type="text" name='Desc' onKeyUp={updateAdd} autoComplete='off' />
                                </div>
                            </div>
                        </>
                        : null
                }





                <div className='add-btn'><button onClick={AddtoDB}>Add Data</button></div>
            </form>
        </>
    );
}

export default AddForm;
