import React, { useState } from 'react';

import CTA from '../components/cta';
import { Link } from 'react-router-dom';


function Login(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmitLogin = () => {

        if (username === "" || password === "") {
            alert("thong tin trong");
            return;
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "username": username,
            "password": password,
            "faCode": ""
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://dae5-113-161-32-195.ngrok-free.app/api/user/validation", requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result === "success") {
                    var formdata = new FormData();
                    formdata.append("username", "leftside");
                    formdata.append("password", "123");

                    var requestOptions = {
                        method: 'POST',
                        body: formdata,
                        redirect: 'follow'
                    };

                    fetch("https://dae5-113-161-32-195.ngrok-free.app/api/login", requestOptions)
                        .then(response => response.json())
                        .then(result => {
                            console.log(result.access_token)
                        })
                        .catch(error => console.log('error', error));
                } else {
                    alert(result)
                }
            })
            .catch(error => console.log('error', error));


    }


    return (
        <div className='inner-page'>
            <section className="page-title">
                <div className="overlay"></div>
            </section>

            <section className="tf-section project-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <form action="#">
                                <div className="project-info-form form-login">
                                    <h6 className="title">Login</h6>
                                    <h6 className="title show-mobie"><Link to="/register">Register</Link></h6>
                                    <h6 className="title link"><Link to="/register">Register</Link></h6>
                                    <p>Enter your credentials to access your account</p>
                                    <div className="form-inner">
                                        <fieldset>
                                            <label>
                                                Username *
                                            </label>
                                            <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Your username" required />
                                        </fieldset>
                                        <fieldset>
                                            <label>
                                                Password *
                                            </label>
                                            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Your password" required />
                                        </fieldset>
                                    </div>

                                    <div className="password-section">
                                        <Link to="/forgetPass" className="fogot-pass">Forgot Password</Link>
                                        <Link to="/project_v1" className="resend-active">Resend Active Code</Link>


                                    </div>

                                </div>

                                <div className="wrap-btn">
                                    <button type="submit" onClick={() => { handleSubmitLogin() }} className="tf-button style2">
                                        Login
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>




            {<CTA />}

        </div>
    );
}

export default Login;