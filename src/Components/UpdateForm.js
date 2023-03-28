import React, {useState} from 'react';

const UpdateForm = () => {

    const [addData, setAddData] = useState({});

    const updateAdd = (e) => {
            setAddData({
                ...addData,
                [e.target.name]: e.target.value,
            });
        }

    return (
        <>
            <form>
                <div className="profile-form">

                    <div className="inputs">
                        <span>Username</span>
                        <input type="text"  onKeyUp={updateAdd} name="username" />
                    </div>
                    <div className="inputs">
                        <span>Name</span>
                        <input type="text" onKeyUp={updateAdd} name="name" />
                    </div>
                    <div className="inputs">
                        <span>Email</span>
                        <input type="text" onKeyUp={updateAdd} name="email" />
                    </div>
                    <div className="inputs">
                        <span>Mobile</span>
                        <input type="text"  onKeyUp={updateAdd} name="mobile"/>
                    </div>
                    <div className="inputs">
                        <span>Designation</span>
                        <input type="text" onKeyUp={updateAdd} name="designation" />
                    </div>
                    <div className="inputs">
                        <span>Upload Profile Pic</span>
                        <input type="file"  name="profilePic"/>
                    </div>
                    <div className="inputs">
                        <span>Upload About Pic</span>
                        <input type="file" className="about-input" name="coverPic" />
                    </div>
                    <div className="inputs" >
                        <span>Reasume</span>
                        <input type="text" className="about-input" onKeyUp={updateAdd} name="cv" />
                    </div>
                    <div className="inputs" >
                        <span>About</span>
                        <input type="text" className="about-input" onKeyUp={updateAdd} name="about" />
                    </div>
                </div>
                <div className='update-btn'><button>Update Data</button></div>
            </form>
        </>
    );
}

export default UpdateForm;
