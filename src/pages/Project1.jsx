import React, { useState } from 'react';

import CTA from '../components/cta';
import { Link } from 'react-router-dom';
import { elements } from 'chart.js';


function Project1(props) {
    const [email,setEmail] = useState("")
    
       

    const handleSubmitRegister = () => {
        if(email === "") {
            alert ("vui long nhap email:");
            return;
        }

        else if (validateEmail(email) === "Invalid" ) {
            alert ("Email khong dung dinh dang");
            return;
        }

        else {
            changeText()
        }
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
                        <div className="project-info-form forget-form">
                            <h4 className="title">Resend Active Code</h4> 
                            <p>enter your email address in the form below and we will send you further instructions on how to active your account</p>
                            <div className="form-inner"> 
                                <fieldset>
                                    <label >
                                        Email address
                                    </label>
                                    <input onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Your email" required />
                                    <input style={{marginTop: 20 , display: 'none'}}  type="email" placeholder="Your email" required />

                                </fieldset> 
                            </div>
                            <div className="bottom">
                                Nevermind. 
                                <Link to="/login">Sign in</Link>
                            </div>
                        </div> 

                        <div className="wrap-btn">
                            <button onClick={() => {handleSubmitRegister()}}  type="submit" className="tf-button style1">
                                Resend Code
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