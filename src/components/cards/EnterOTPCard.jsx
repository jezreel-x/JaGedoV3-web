// import { useState } from "react";
import PropTypes from "prop-types";

const EnterOTPCard = ({ otp, setOtp, nextStep }) => {
    // State to hold the OTP digits
{/*
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value && index < 3) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      } else if (!value && index > 0) {
        document.getElementById(`otp-input-${index - 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(otp.join(""));
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Enter OTP</h2>
      <div className="flex space-x-2 mb-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            className="w-12 h-12 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        ))}
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
*/}
  return (
    <div className="text-center mt-25 xs:w-full xs:max-w-md xs:p-6 bg-white rounded-lg">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6 text-[rgb(0,0,122)]">
            Enter OTP
        </h2>

        {/* OTP Input */}
        <input
            type="text"
            placeholder="Enter OTP"
            className="border border-gray-300 p-3 xs:w-full rounded-lg text-center text-lg tracking-widest focus:ring-2 focus:ring-[rgb(0,0,122)] focus:outline-none"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            maxLength={6} // Limits OTP to 6 digits
        />

        {/* Verify Button */}
        <button
            disabled={otp.length < 6} // Disable if OTP is not 6 digits
            type="button"
            onClick={nextStep}
            className={`mt-6 py-3 px-6 rounded-lg w-full transition cursor-pointer
                ${otp.length < 6 ? "bg-gray-300 text-black" : "bg-[rgb(0,0,122)] text-white"}`}
        >
            Verify
        </button>
        {/* Resend OTP Button */}
        <button
            type="button"
            disabled={otp.length < 6} // Disable if OTP is not 6 digits
            onClick={nextStep}
            className={`py-3 px-6 rounded-lg w-full bg-[rgb(0,0,122)] text-white transition duration-300 mt-4 cursor-pointer`}
        >
            Resend OTP
        </button>
    </div>
  )
};

EnterOTPCard.propTypes = {
    otp: PropTypes.string.isRequired, // OTP string
    setOtp: PropTypes.func.isRequired, // Function to set OTP
    nextStep: PropTypes.func.isRequired, // Function to proceed to the next step
};

export default EnterOTPCard;