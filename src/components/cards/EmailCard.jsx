import { FcGoogle } from "react-icons/fc";
import PropTypes from "prop-types";

const EmailCard = ({email, setEmail, nextStep, prevStep}) => {
    {/*
    const [email, setEmail] = useState("");
    const [step, setStep] = useState(1);

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep =() => setStep((prev) => (prev > 1 ? prev - 1 : prev));
    */}

    return (
        <div className="flex flex-col items-center mt-20 w-full text-center p-6 bg-white rounded-lg max-w-md">
        {/* Title */}
        <h2 className="text-2xl font-bold mb-4 text-[rgb(0,0,122)]">Enter Your Email</h2>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email address"
          className="border border-gray-300 rounded-lg px-4 py-3 mb-4 w-72 xs:w-80 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)] font-roboto"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        {/* Continue Button */}
        

        {/* OR Separator */}
        <div className="flex items-center w-full my-4">
          <div className="border-t border-gray-300 flex-grow"></div>
          <span className="mx-3 text-gray-500">or</span>
          <div className="border-t border-gray-300 flex-grow"></div>
        </div>

        {/* Google Sign-in Button */}
        <button className="xs:w-80 w-72 flex items-center justify-center bg-white border border-gray-300 text-black py-3 rounded-lg font-medium hover:bg-gray-100 transition cursor-pointer">
          <FcGoogle className="mr-2" size={22} /> Continue with Google
        </button>

        {/* Terms & Conditions */}
        <p className="text-sm text-gray-600 mt-4 px-0 xs:px-4">
          By proceeding, you consent to receive calls, WhatsApp, or SMS messages, including automated means, from JaGedo and its affiliates to the provided number.
        </p>

        {/* Navigation Buttons */}
        <div className="flex justify-between w-72 xs:w-full xs:max-w-sm mt-6">
          <button
            onClick={prevStep}
            className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-5 rounded-lg hover:bg-[rgb(0,0,180)] transition cursor-pointer"
          >
            <span className="mr-2">←</span> Back
          </button>
          <button
            disabled={!email} // Disable if email is empty
            type="button"
            onClick={nextStep}
            className={`flex items-center cursor-pointer py-2 px-4 rounded-lg hover:opacity-90
              ${!email ? "bg-gray-300 text-black" : "bg-[rgb(0,0,122)] text-white"}`}
          >
           Next <span className="ml-2">→</span>
          </button>
        </div>
        </div>
    );
};

// PropTypes for type checking
EmailCard.propTypes = {
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired,
    setStep: PropTypes.func.isRequired,
};

export default EmailCard;







