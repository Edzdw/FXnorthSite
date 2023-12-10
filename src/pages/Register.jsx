import React, { useState } from 'react';

import CTA from '../components/cta';
import { Link } from 'react-router-dom';


function Register(props) {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setconfirmPassword] = useState("")
    const [refferal, setRefferal] = useState("")



    

    const handleSubmitRegister = () => {
        if (email === "" || username === "" || password === "" || confirmpassword === "") {
            alert("vui long dien day du thong tin");
            return;
        }

        else if (password != confirmpassword) {
            alert("Vui long xac minh lai mat khau cua ban")
            return;
        }

        else if (username === refferal) {
            alert ("nhap ten nguoi gioi thieu cua ban")
        }

        else if (validateEmail(email) === "Invalid") {
            alert("email khong dung dinh dang");
            return;
        } 
        else {
            alert("Dang ky thanh cong");
        }
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": "abc",
            "username": "123",
            "password": "password",
            "email": "conbo@yopmail.com",
            "rootUsername": "admin"
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://99c2-113-161-32-195.ngrok-free.app/api/user/regis", requestOptions)
            .then(response => response.json())
            .then(result => console.log(result.message));

    }

    const validateEmail = (email) => {
        return (/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)) ? "Valid" : "Invalid";
       
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
                                <div className="project-info-form form-login style2">
                                    <h6 className="title">Register</h6>
                                    <h6 className="title show-mobie"><Link to="/login">Login</Link></h6>
                                    <h6 className="title link"><Link to="/login">Login</Link></h6>
                                    <p>Welcome to Risebot, please enter your details</p>
                                    <div className="form-inner">
                                        <fieldset>
                                            <label>
                                                Email address *
                                            </label>
                                            <input onChange={(e) => { setEmail(e.target.value) }} type="text" placeholder="Your email" required />
                                        </fieldset>

                                        <fieldset>
                                            <label>
                                                Username *
                                            </label>
                                            <input type="username" onChange={(e) => { setUsername(e.target.value) }} placeholder="Your username" required />
                                        </fieldset>
                                        <fieldset >
                                            <label>
                                                Your password *
                                            </label>
                                            <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Your password" required />
                                        </fieldset>

                                        <fieldset >
                                            <label>
                                                Confirm Password *
                                            </label>
                                            <input type="password" onChange={(e) => { setconfirmPassword(e.target.value) }} placeholder="Confirm Your password" required />
                                        </fieldset>

                                        <fieldset className="mb19" >
                                            <label>
                                                Your Refferal *
                                            </label>
                                            <input type="text" onChange={(e) => { setRefferal(e.target.value) }} placeholder="Your Refferal" required />
                                        </fieldset>


                                        <fieldset className="checkbox">
                                            <input type="checkbox" id="checkbox" name="checkbox" />
                                            <label htmlFor="checkbox" className="icon"></label>
                                            <label htmlFor="checkbox">
                                                I accept the Term of Conditions and Privacy Policy
                                            </label>
                                        </fieldset>
                                    </div>
                                </div>

                                <div className="wrap-btn">
                                    <button type="submit" className="tf-button style2" onClick={() => {handleSubmitRegister()}}>
                                        Register
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

export default Register;