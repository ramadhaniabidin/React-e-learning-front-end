import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../font-awesome/css/fontawesome.css';
import '../font-awesome/css/solid.css'
import '../styling/LoginPage.css';
import { Link } from "react-router-dom";
import $ from 'jquery';
import { LoadingToast, Success } from "./LoadingToast";
import Cookies from 'js-cookie';






const LoginPage = () => {
    const [accountData, setAccountData] = useState(null);
    const [toast, setToast] = useState(null);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [isButtonDisabled, setIsButtonDisabled] = useState(true);

    useEffect(() => {
        const isInvalid = !userName.trim() || !password.trim();
        setIsButtonDisabled(isInvalid);
    }, [userName, password]);

    const handleUsername = (event) => {
        setUserName(event.target.value);
    };

    const handlePassword = (event) => {
        setPassword(event.target.value);
    };

    const LoginAction = () => {
        const model = {
            'username': userName.toString(),
            'password': password.toString()
        };

        showToast('Loading', 'info');
        const endPoint = "https://localhost:7215/React-Backend/Akun/Login";
        const fetchData = async () => {
            const result = await fetch(endPoint, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json; charset=utf-8'
                },
                body: JSON.stringify(model)
            });
            let jsonData = await result.json();
            if(jsonData){
                localStorage.setItem('Token', jsonData.Token);
                sessionStorage.setItem('Token', jsonData.Token);
                Cookies.set('Token', jsonData.Token, {expires: 1});
                if('caches' in window){
                    caches.open('my-cache').then((cache) =>{
                        cache.put('Token', new Response(jsonData.Token));
                    });
                }
                setTimeout(() => {
                    showToast('Success', 'suc');
                }, 2000);
            }
        }
        fetchData();
    };


    const showToast = (message, type) => {
        setToast({ message, type });
    };

    const MakeAPIRequest = () => {
        showToast('Making API request...', 'info');

        setTimeout(() => {
            showToast('Success', 'suc');
        }, 2000);
    };

    return (
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
                                    <input type="text" className="form-control" id="username" value={userName} onChange={handleUsername}></input>
                                </div>
                                <div className="form-group">
                                    <label className="form-control-label">PASSWORD</label>
                                    <input type="password" className="form-control" id="password" value={password} onChange={handlePassword}></input>
                                </div>
                                <div className="form-group" style={{ alignContent: "right" }}>
                                    <div className="row">
                                        <div className="col-md-8">
                                            <Link to="Register">
                                                Don't have an account? Click Here..
                                            </Link>
                                        </div>
                                        <div className="col-md-4">
                                            <button id="login-btn" type="button" className={`btn btn-primary float-end ${isButtonDisabled ? 'disabled' : ''}`}
                                                disabled={isButtonDisabled} onClick={LoginAction}>
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
            {
                (toast && toast.type === "info") && (
                    <LoadingToast toast={toast} setToast={setToast}></LoadingToast>
                )
            }
            {
                (toast && toast.type === "suc") && (
                    <Success toast={toast} setToast={setToast}></Success>
                )
            }
        </div>
    )
}
export default LoginPage;