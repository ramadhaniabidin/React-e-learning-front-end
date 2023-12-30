import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../font-awesome/css/fontawesome.css';
import '../font-awesome/css/solid.css'
import '../styling/LoginPage.css';

function test(){
    window.location.href = "/Register";
}

const Activation = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>

                <div className="col-lg-6 col-md-8 login-box">
                    <div className="col-lg-12 login-key mt-3">
                        <i className="fa fa-book" aria-hidden="true"></i>
                    </div>

                    <div className="col-lg-12 login-title mt-2">
                        ACTIVATE YOUR ACCOUNT
                    </div>

                    <div className="col-lg-12 mt-2">
                        <span style={{ color: "white" }}>
                            ENTER YOUR OTP CODE
                        </span>

                    </div>

                    <div className="col-lg-12 login-form">
                        <div className="row" style={{ marginLeft: "1%", marginBottom: "5%" }}>
                            <div className="col-md-3">
                                <input maxLength={1} className="otp-box"></input>
                            </div>
                            <div className="col-md-3">
                                <input maxLength={1} className="otp-box"></input>
                            </div>
                            <div className="col-md-3">
                                <input maxLength={1} className="otp-box"></input>
                            </div>
                            <div className="col-md-3">
                                <input maxLength={1} className="otp-box"></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-5">

                            </div>
                            <div className="col-md-2 mb-3">
                                <button type="button" className="btn btn-primary btn-default" onClick={test}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-2"></div>
            </div>
        </div>
    )
}

export default Activation;