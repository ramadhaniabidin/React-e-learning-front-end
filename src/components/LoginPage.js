import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../font-awesome/css/fontawesome.css';
import '../font-awesome/css/solid.css'
import '../styling/LoginPage.css';
import { Link } from "react-router-dom";

function testFunction () { 
    console.log("Test console log");
}

const LoginPage = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-2"></div>

                <div className="col-lg-6 col-md-8 login-box">
                    <div className="col-lg-12 login-key mt-3">
                        <i className="fa fa-book" aria-hidden="true"></i>
                    </div>

                    <div className="col-lg-12 login-title mt-2">
                        LOGIN
                    </div>

                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            <form>
                                <div className="form-group">
                                    <label className="form-control-label">USERNAME/EMAIL</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input type="password" className="form-control"></input>
                                </div>
                                <div className="form-group" style={{alignContent: "right"}}>
                                    <div className="row">
                                        <div className="col-md-8">
                                           <Link to="Register">
                                                Don't have an account? Click Here..
                                           </Link>
                                        </div>
                                        <div className="col-md-4">
                                            <button type="button" className="btn btn-primary float-end" onClick={testFunction}>
                                                LOGIN
                                            </button>
                                        </div>
                                    </div>                     
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3 col-md-2"></div>
            </div>
        </div>      
    )    
}
export default LoginPage;