import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../../baseURL';

const LoginPage = (props) => {

    let isLogin = localStorage.getItem("token");
    const navigate = useNavigate();
    const today = new Date();
    const shortDate = `B$${today.getDate()}I${today.getMonth() + 1}@P${today.getFullYear()}&LA*B%`;
    if (isLogin || isLogin === shortDate) {
        navigate('/');
    }

    const [verify, setVerify] = useState({});
    const [wrongId, setWrongId] = useState(false);

    // Function to add form data in variable

    const updateData = (e) => {
        setVerify({
            ...verify,
            [e.target.name]: e.target.value,
        });
        setWrongId(false);
    };


    const loginUser = async (e) => {
        e.preventDefault();
        await axios.post(`${baseURL}/auth/login`, verify)
            .then((res) => {
                if (res.status === 200) {
                    const today = new Date();
                    const shortDate = `B$${today.getDate()}I${today.getMonth() + 1}@P${today.getFullYear()}&LA*B%`;
                    localStorage.setItem("token", shortDate);
                    props.setIsLogin(!props.isLogin);
                    navigate('/');
                }

            })
            .catch((err) => {
                setWrongId(true);
            })
    }


    return (
        <>
            <section className="login-container">
                <div className="drop">
                    <div className="content">
                        <h1>Sign In</h1>
                        <form>
                            <div className="inputBox">
                                <input type="text" placeholder='Username' name='username' autoComplete='off' onKeyUp={updateData} />
                            </div>
                            <div className="inputBox">
                                <input type="password" placeholder='Password' name='password' autoComplete='off' onKeyUp={updateData} />
                            </div>
                            {
                                wrongId ? <p style={{ color: "#ff0f5b" }}>Wrong username or password <br /> Please try Again</p> : null
                            }


                            <div className="inputBox">
                                <input type="submit" value='Login' onClick={loginUser} />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default LoginPage;
