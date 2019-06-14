import React from "react";
import logoSvg from "../../logo.svg";
import "../../styles.css";
export default function LogoHeader() {
  return (
    <div className="container">
      <div className="justify-content-center d-flex mt-10 p-10">
        <img src={logoSvg} alt="Logo" />
      </div>
    </div>
  );
}
