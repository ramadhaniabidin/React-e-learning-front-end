import { useState, useEffect } from "react";

function CallAPI(){
    const endPoint = 'https://192.168.92.129:7290/E-LearningAPI/Address/GetAllProvince';
    const [temp, setTemp] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(endPoint);
            result.json().then(jsonData => {
                console.log(jsonData);
                //setTemp(jsonData.current.temp_f);
            });
        }
        fetchData();
    }, []);

    
    return(
        <div>
            <p className="text-danger">London Temp Now: {temp}F</p>            
        </div>
    )
}

export default CallAPI;