import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../font-awesome/css/fontawesome.css';
import '../font-awesome/css/solid.css'
import '../styling/LoginPage.css';
import '../styling/common.css';
import guruImage from '../images/Guru.png';
import siswaImage from '../images/Siswa.png';
import { Link } from "react-router-dom";
// import checkImage from '../images/checked.png';

function btnRegister() {

}

function test() {
    const selectedOption = document.querySelector('input[type="radio"]:checked');
    if (selectedOption) {
        alert('Selected Option: ' + selectedOption.value);
    } else {
        alert('Please select an option.');
    }
}

const Register = () => {
    return (
        <div className="container">
            <div className="row">


                <div className="col-lg-6 col-md-6 login-box">
                    <div className="col-lg-12 login-key mt-3">
                        <i className="fa fa-book"></i>
                    </div>

                    <div className="col-lg-12 login-title mt-2">
                        REGISTER
                    </div>

                    <div className="col-lg-12 login-form">
                        <div className="col-lg-12 login-form">
                            <form>
                                <div className="form-group">
                                    <label className="form-control-label">EMAIL</label>
                                    <input type="text" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input type="password" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">REPEAT PASSWORD</label>
                                    <input type="password" className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-primary btn-default" onClick={btnRegister}>
                                        SIGN UP
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="col-lg-1 col-md-1">

                </div>

                <div className="col-lg-5 col-md-5 login-box">
                    <div className="row">
                        <div className="col-lg-12 login-title mt-2 mb-3"></div>
                        <div className="col-lg-12 login-title mt-5 mb-3">
                            CHOOSE YOUR ACCOUNT
                        </div>


                        <div className="col-lg-6">
                            <label htmlFor="teacher">
                                <input className="custom-checkbox" type="radio" id="teacher" value="teacher" name="account"></input>
                                <div className="card">
                                    <img src={guruImage} alt="tutor"></img>
                                    <h6 className="text-center rubik mt-2">Tutor</h6>
                                    {/* <img className="img-fluid checked" src={checkImage} alt=""></img> */}
                                </div>
                            </label>
                        </div>
                        <div className="col-lg-6">
                            <label htmlFor="student">
                                <input className="custom-checkbox" type="radio" id="student" value="student" name="account"></input>
                                <div className="card">
                                    <img src={siswaImage} alt="siswa"></img>
                                    <h6 className="text-center rubik mt-2">Siswa</h6>
                                </div>
                            </label>
                        </div>
                        <div className="col-lg-12 mt-5 mb-3">
                            <span className="text-primary">
                                Already have an account? 
                            </span>
                            <Link to="/" className="text-primary">
                                Login here
                            </Link>
                        </div>
                    </div>



                </div>

                {/* <div className="col-lg-1 col-md-1"></div> */}
                <button type="button" onClick={test}>
                    click me
                </button>
            </div>
        </div>
    )
}
export default Register;