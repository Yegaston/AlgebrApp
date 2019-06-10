import React from "react";
import logoSvg from "../../logo.svg";
import "../../styles.css";
export default function LogoHeader() {
  return (
    <div className="container">
      <div className="row mt-5 d-flex">
        <div className="col s6 center">
          <img src={logoSvg} alt="Logo" />
        </div>
      </div>
    </div>
  );
}
