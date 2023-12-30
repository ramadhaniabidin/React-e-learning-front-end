import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../font-awesome/css/fontawesome.css';
import '../font-awesome/css/solid.css';
import '../styling/latis.css';
import guruImage from '../images/Guru.png';
import siswaImage from '../images/Siswa.png';
import checkImage from '../images/checked.png';

const LatisLogin = () => {
    return (
        <div className="row" style={{ justifyContent: "center" }}>
            <div className="col-5">
                <div className="card-auth">
                    <div className="container">
                        <div id="form-login" style={{ paddingTop: "30%" }}>
                            <div className="row" style={{ justifyContent: "center" }}>
                                <h5 className="rubik mt-3" style={{ textAlign: "center" }}>
                                    Pilih Tipe Akun
                                </h5>
                            </div>
                            <div className="row mt-2">
                                <div className="col">
                                    <label htmlFor="customRadio">
                                        <input type="radio" name="siswatutor" value={"siswa"} id="customRadio" className="tutorsiswa">
                                        </input>
                                        <div className="card-input">
                                            <img className="img-fluid" src={siswaImage} alt="Siswa"></img>
                                            <h6 className="text-center rubik mt-2">Siswa</h6>
                                            <img className="check-image" width="60" src={checkImage} alt=""></img>
                                        </div>
                                    </label>
                                </div>
                                <div className="col">
                                    <label htmlFor="customRadio1">
                                        <input type="radio" name="siswatutor" value={"tutor"} id="customRadio1" className="tutorsiswa">
                                        </input>
                                        <div className="card-input">
                                            <img className="img-fluid" src={guruImage} alt="Tutor"></img>
                                            <h6 className="text-center rubik mt-2">Tutor</h6>
                                            {/* <img className="img-fluid chekced" width="60"></img> */}
                                        </div>
                                    </label>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default LatisLogin;