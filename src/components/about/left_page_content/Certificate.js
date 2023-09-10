import React from "react";

function Certificate({ certificateSrc }) {
    return (
        <div className='certificate-container'>
            <img className='certificate-img' src={certificateSrc} />
        </div>
    );
}

export default Certificate;