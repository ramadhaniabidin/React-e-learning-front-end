import { useState, useEffect } from "react";

function CallAPI(){
    const endPoint = 'https://localhost:7290/E-LearningAPI/Address/GetAllProvince';
    const [temp, setTemp] = useState(0);
    const [provinsi, setProvinsi] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(endPoint);
            result.json().then(jsonData => {
                console.log(jsonData);
                let province = jsonData.Provinsi;
                console.log("Provinsi : ", province);
                //setTemp(jsonData.current.temp_f);
                setProvinsi(province[0].namaProvinsi);
            });
        }
        fetchData();
    }, []);

    
    return(
        <div>
            <p className="text-danger">Provinsi Saya = {provinsi}</p>            
        </div>
    )
}

export default CallAPI;