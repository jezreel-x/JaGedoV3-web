import { useLocation, useNavigate } from "react-router-dom";
import { EyeOff } from "lucide-react";
import PropTypes from "prop-types";

const SignUpCard = ({
  showPassword,
  showConfirmPassword,
  setShowPassword,
  setShowConfirmPassword,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
}) => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = () => {
        console.log("am called");
        if (location.pathname === "/customer-signup") {
            console.log(location.pathname);
            navigate("/customer");

        }

        if (location.pathname === "/fundi-signup") {
            navigate("/fundi-portal");
        }

        if (location.pathname === "/contractor-signup") {
            navigate("/contractor-portal");
        }

        if (location.pathname === "/professional-signup") {
            navigate("/professional-portal");
        }

        if (location.pathname === "/hardware-signup") {
            navigate("/hardware-portal");
        }
    };
  return (
    <div className="mt-20 w-full p-0 xs:max-w-md xs:p-6 bg-white rounded-lg">
      {/* Title */}
      <h2 className="text-center text-2xl font-semibold mb-6 text-[rgb(0,0,122)]">Security</h2>

      {/* Password Input */}
      <p className="text-lg font-medium mt-4 mb-2">Password</p>
      <div className="relative mb-4">
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          className="border border-indigo-400 focus:outline-none p-3 w-full rounded-lg focus:ring-1 focus:ring-indigo-200"
        />

        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-0 flex items-center bg-[rgb(255, 255, 255)] w-20 h-12.5 rounded-lg justify-center hover:bg-gray-300 hover:cursor-pointer transition duration-300"
          // style={{ zIndex: 1 }} // Ensure the button is above the input field
        >
          {showPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7s-8.268-2.943-9.542-7z"
              />
            </svg>
          ) : (
            <EyeOff strokeWidth={1.25} />
          )}
        </button>
      </div>

      <p className="text-lg font-medium mt-4 mb-2">Confirm Password</p>
      <div className="relative mb-4">
        <input
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
          className="border border-indigo-400 focus:outline-none p-3 w-full rounded-lg focus:ring-1 focus:ring-indigo-200 relative"
        />
        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          className="absolute inset-y-0 right-0 flex items-center bg-[rgb(255, 255, 255)] w-20 h-12.5 rounded-lg justify-center hover:bg-gray-300 hover:cursor-pointer transition duration-300"
          // style={{ zIndex: 1 }} // Ensure the button is above the input field
        >
          {showConfirmPassword ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7s-8.268-2.943-9.542-7z"
              />
            </svg>
          ) : (
            <EyeOff strokeWidth={1.25} />
          )}
        </button>
      </div>

      {/* Terms and Conditions Checkbox */}
      {/* 
            <div className="flex items-center gap-2 mt-4 text-left">
                <input type="checkbox" className="w-5 h-5 accent-[rgb(0,0,122)] cursor-pointer" />
                <label className="text-lg">I agree to the <a href="#" className="text-[rgb(0,0,122)] underline">Terms and Conditions, Data Privacy</a> and confidentiality policy</label>
            </div> 
            */}
      <div className="flex items-start gap-3 mt-4 text-left">
        <input type="checkbox" className="w-5 h-5 accent-[rgb(0,0,122)] cursor-pointer mt-1" />
        <p className="text-lg leading-relaxed">
          I agree to the
          <a href="#" className="text-[rgb(0,0,122)] font-medium underline mx-1">
            Terms Of Service
          </a>
          and
          <a href="#" className="text-[rgb(0,0,122)] font-medium underline mx-1">
            Data Privacy and Confidentiality Policy
          </a>
          .
        </p>
      </div>

      {/* Sign Up Button */}
      <button
        disabled={!password || !confirmPassword}
        onClick={() => handleSignUp()}
        type="button"
        className={`mt-6 py-3 px-6 w-full rounded-lg transition cursor-pointer
                    ${!password || !confirmPassword ? "bg-gray-300 text-black" : "bg-[rgb(0,0,122)] text-white"}`}>
        Sign Up
      </button>
    </div>
  );
};

SignUpCard.propTypes = {
  showPassword: PropTypes.bool.isRequired,
  showConfirmPassword: PropTypes.bool.isRequired,
  setShowPassword: PropTypes.func.isRequired,
  setShowConfirmPassword: PropTypes.func.isRequired,
  password: PropTypes.string.isRequired,
  setPassword: PropTypes.func.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  setConfirmPassword: PropTypes.func.isRequired,
};

export default SignUpCard;
