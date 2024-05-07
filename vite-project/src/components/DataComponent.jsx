import React from "react";
import OTPLogin from "./OTPLogin";
import "./index.css"
function DataComponent() {
  return (
    <>
      <div className="mainContainerOtp">
        <h1>OTP LOGIN</h1>
      <OTPLogin otpinputfeilds={5}></OTPLogin>
      </div>
    </>
  );
}

export default DataComponent;