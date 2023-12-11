import React, { useState } from 'react';

import { Link } from 'react-router-dom';


function Project1(props) {

    // const handleSubmitSencActivate = () => {

    //     var myHeaders = new Headers();
    //     myHeaders.append("Content-Type", "application/json");

    //     var raw = JSON.stringify({
    //         "username": "leftside",
    //         "password": "123",
    //         "faCode": ""
    //     });

    //     var requestOptions = {
    //         method: 'POST',
    //         headers: myHeaders,
    //         body: raw,
    //         redirect: 'follow'
    //     };

    //     fetch("https://dae5-113-161-32-195.ngrok-free.app/api/user/validation", requestOptions)
    //         .then(response => console.log(response))
    //     // .then(result => console.log(result.text))
    //     // .catch(error => console.log('error', error));


    // }






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
                                <div className="project-info-form forget-form">
                                    <h4 className="title">Resend Active Code</h4>
                                    <p>enter your email address in the form below and we will send you further instructions on how to active your account</p>
                                    <div className="form-inner">
                                        <fieldset>
                                            <label >
                                                Username
                                            </label>
                                            <input type="text" placeholder="Your username" required />
                                        </fieldset>
                                    </div>
                                    <div className="bottom">
                                        Nevermind.
                                        <Link to="/login">Sign in</Link>
                                    </div>
                                </div>

                                <div className="wrap-btn">
                                    <button type="submit" className="tf-button style1">
                                        Send Code
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>







        </div>
    );
}

export default Project1;