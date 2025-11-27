// import { useState } from "react";
import PropTypes from "prop-types";

const OTPDeliveryCard = ({otpMethod, setOtpMethod, nextStep}) => {
    return (
        <div className="text-center mt-25 xs:w-full xs:max-w-md xs:p-6 bg-white rounded-lg">
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-6 text-[rgb(0,0,122)]">
            Choose OTP Delivery Method
          </h2>
 
          {/* OTP Method Selection */}
          <div className="flex flex-col gap-4 mb-6">
            <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-300">
              <input
                type="radio"
                name="otpMethod"
                value="Email"
                checked={otpMethod === "Email"}
                onChange={() => setOtpMethod("Email")}
                className="accent-[rgb(0,0,122)]"
              />
              <span className="text-gray-700 font-medium">Email</span>
            </label>
        
            <label className="flex items-center gap-3 p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-300">
              <input
                type="radio"
                name="otpMethod"
                value="Phone"
                checked={otpMethod === "Phone"}
                onChange={() => setOtpMethod("Phone")}
                className="accent-[rgb(0,0,122)]"
              />
              <span className="text-gray-700 font-medium">Phone</span>
            </label>
          </div>
          
            {/* Send OTP Button */}
            <div className=" flex w-full max-w-sm mt-6">
              <button
                disabled={!otpMethod} 
                type="button"
                onClick={nextStep}
                className={`py-3 px-6 w-full rounded-lg transition duration-300 cursor-pointer
                    ${!otpMethod ? "bg-gray-300 text-black" : "bg-[rgb(0,0,122)] text-white"}`}
              >
                Send OTP
              </button>
            </div>
        </div>
    )
};

OTPDeliveryCard.propTypes = {
    otpMethod: PropTypes.string.isRequired,
    setOtpMethod: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
};

export default OTPDeliveryCard;