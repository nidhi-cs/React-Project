import React, { useState, useRef, useEffect } from "react";
import "./OTPLogin.css";

function OTPLogin({ otpinputfeilds }) {
  // Define state to store OTP values
  const [otpArray, setOtpArray] = useState(
    otpinputfeilds ? new Array(otpinputfeilds).fill("") : []
  );

  // Create a ref to store references to input fields
  const ref = useRef([]);

  // Effect to focus on the first input field when component mounts
  useEffect(() => {
    if (ref && ref.current && ref.current[0]) {
      ref.current[0].focus();
    }
  }, []);

  // Function to handle key press events (specifically Backspace)
  const keyChangeHandler = (e, index) => {
    if (e.code === "Backspace") {
      // Check if Backspace key is pressed
      if (index > 0) {
        // If not the first input field
        ref.current[index - 1].focus(); // Move focus to the previous input field
      } 
        // If the first input field
        let newOtpArray = [...otpArray];
        newOtpArray[index] = ""; // Clear the value of the first input field
        setOtpArray(newOtpArray); // Update the OTP array
      
    }
  };

  // Function to handle OTP input changes
  const otpChangeHandler = (e, index) => {
    let inputValue = e.target.value; // Get the input value
    if (isNaN(inputValue)) {
      // Check if input value is not a number
      return; // Do nothing if input value is not a number
    }

    let newOtpArray = [...otpArray]; // Create a copy of the OTP array
    newOtpArray[index] = inputValue.substring(inputValue.length - 1); // Update the OTP value
    setOtpArray(newOtpArray); // Update the OTP array

    // Move focus to the next input field if not the last input field and input value is not empty
    if (index < otpArray.length - 1 && inputValue) {
      ref.current[index + 1].focus();
    }
  };

  return (
    <>
      <div className="otpContainer">
        {/* Render OTP input fields */}
        {otpArray.map((ele, index) => (
          <input
            type="text"
            name={index}
            key={index}
            value={ele}
            ref={(e) => (ref.current[index] = e)} // Store reference to input field
            onChange={(e) => otpChangeHandler(e, index)} // Handle OTP input changes
            onKeyDown={(e) => keyChangeHandler(e, index)} // Handle key press events
          ></input>
        ))}
      </div>
    </>
  );
}

export default OTPLogin;

//We use useRef to remember references to OTP input fields so we can interact with them later.
// We use useEffect to focus on the first input field when the component first appears, without causing unnecessary re-renders.
