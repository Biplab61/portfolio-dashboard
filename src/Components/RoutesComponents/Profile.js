import React, { useState } from 'react';
import IMG from '../images/tp.png'
import UpdateForm from '../UpdateForm';

const Profile = (props) => {

    const [update, setUpdate] = useState(false);
    console.log(props.data.skills)

    return (
        <>
            <main>
                <div className="recent-project">
                    <h1>Profile Details</h1>
                    <div className='profile-img'>
                        <div>
                            <img src={IMG} alt="" />
                        </div>
                        <h3>designation: {props.data.profile[0].designation}</h3>
                        {/* <p>Last Update: {props.data.profile[0].updatedAt}</p> */}
                    </div>

                    {
                        update ? null :
                            <>
                                <div className="profile-form">
                                    <div className="profile-info">
                                        <h3>Username: <span>{props.data.profile[0].username}</span></h3>
                                    </div>
                                    <div className="profile-info">
                                        <h3>Name: <span>{props.data.profile[0].name}</span></h3>
                                    </div>
                                    <div className="profile-info">
                                        <h3>Mobile No.: <span>{props.data.profile[0].mobile}</span></h3>
                                    </div>
                                    <div className="profile-info">
                                        <h3>Email: <span>{props.data.profile[0].email}</span></h3>
                                    </div>
                                    <div className="profile-info">
                                        <h3>Designation: <span>{props.data.profile[0].designation}</span></h3>
                                    </div>
                                    <div className="profile-info">
                                        <h3>Last Update: <span>{props.data.profile[0].updatedAt}</span></h3>
                                    </div>
                                </div>
                                <div className='about'>
                                    <h3>About:</h3>
                                    <p>{props.data.profile[0].about}</p>

                                    <h3>Skills:
                                    {
                                        props.data.skills.map((skills)=>{
                                            return (<span key={skills._id}>   {skills.skillName} , </span>)
                                        })
                                    }
                                    </h3>
                                    <div><button onClick={() => setUpdate(true)}>Modify Data</button></div>
                                </div>
              
                            </>
                    }

                    {update ? <UpdateForm /> : null}
                </div>
            </main>
        </>
    );
}

export default Profile;
