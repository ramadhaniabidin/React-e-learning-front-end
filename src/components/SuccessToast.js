import React from "react";
const SuccessToast = () => {
    return (
        <div style={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "aliceblue",
            width: "20%",
            marginTop: "1%",
            marginLeft: "1%",
            padding: "1%",
            borderRadius: "30px"
        }}>
            <div style={{
                width: "50%"
            }}>
                {/* <div style={{
                    border: "8px solid #f3f3f3",
                    borderTop: "8px solid #3498db",
                    borderRadius: "50%",
                    width: "80px",
                    height: "80px",
                    animation: "spin 1s linear infinite",
                    display: "inline-block"
                }}>
                </div> */}
                <div style={{ color: "#2ecc71", fontSize: "2em" }}>
                    &#10003;
                </div>
            </div>

            <div style={{
                width: "50%",
                color: "blue"
            }}>
                Success
            </div>

        </div>
    )
};

export default SuccessToast;