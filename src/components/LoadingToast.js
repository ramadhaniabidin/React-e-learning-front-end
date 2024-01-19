import React, { useRef } from "react";
import '../styling/toast.css';
import { FadeInAnimation } from "../library/animation";
import { useEffect } from "react";

export const LoadingToast = ({ toast, setToast }) => {
    const ref = useRef(null);
    useEffect(() => {
        const animation = new FadeInAnimation(ref.current);
        animation.start(1000);
        setTimeout(() => {
            animation.close(1000, () => {
                setToast(null);
            })
        }, 1000);
    });
    return (
        <div ref={ref} className="toast-container">
            <div className="myToast"></div>
            {/* <div className="success-toast">&#10003;</div> */}
            <div style={{ color: "blue", width: "75%" }}>
                {toast.message}
            </div>
        </div >
    )
}

export const Success = ({ toast, setToast }) => {
    const ref = useRef(null);
    useEffect(() => {
        const animation = new FadeInAnimation(ref.current);
        animation.start(1000);
        setTimeout(() => {
            animation.close(1000, () => {
                setToast(null);
            })
        }, 1000);
    });

    return (
        <div ref={ref} className="toast-container">
            {/* <div className="myToast"></div> */}
            <div className="success-toast">&#10003;</div>
            <div style={{ color: "blue", width: "75%" }}>
                {toast.message}
            </div>
        </div >
    )
};