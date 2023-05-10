import React from "react";
import { Image } from "react-bootstrap";
const Logo = () => {
    return (
        <div className="flex-row justify-content-between align-items-center flex pe-5 ps-5">
            <Image src="img/HaileyNycumLogo.svg" className="fullname-logo" />
            <Image src="img/HNLogo.svg" />
        </div>
    );
};

export default Logo;
