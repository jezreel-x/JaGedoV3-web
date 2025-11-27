// import { useState } from "react";
import PropTypes from "prop-types";
// import { Phone } from "lucide-react";


const PhoneNumberCard = ({countryCode, setCountryCode, phone, setPhone, prevStep, nextStep}) => {
    return (
        <div className="xs:w-full xs:max-w-md xs:p-8 bg-white rounded-lg mx-auto mt-25 p-0 xs:mt-25">
            {/* Title */}
            <h2 className="text-2xl font-semibold text-[rgb(0,0,122)] text-center mb-6">
              Enter Your Phone Number
            </h2>
 
            {/* Phone Input Section */}
            <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-[rgb(0,0,122)]">
            {/* Country Code Dropdown */}
            <select
              className="p-3 bg-gray-100 text-gray-700 border-r outline-none focus:bg-gray-200 pr-1 pl-1"
              value={countryCode} // Controlled value for default selection
              onChange={(e) => setCountryCode(e.target.value)}
            >
              <option value="+254">🇰🇪 +254</option> {/* Default */}
              <option value="+1">🇺🇸 +1</option>
              <option value="+44">🇬🇧 +44</option>
            </select>
 
            {/* Phone Number Input */}
            <input
              type="tel"
              placeholder="Phone number"
              className="p-3 w-full outline-none focus:ring-0"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
 
          {/* Navigation Buttons */}
          <div className="flex justify-between w-full max-w-sm mt-6">
              <button 
              type="button"
                onClick={prevStep}
                className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-5 rounded-lg hover:bg-[rgb(0,0,180)] transition hover:cursor-pointer"
              >
                <span className="mr-2">←</span> Back
              </button>
              <button
                disabled={!phone} // Disable if phone number is empty
                type="button"
                onClick={nextStep}
                className={`flex items-center py-2 px-5 rounded-lg transition hover:cursor-pointer
                    ${!phone ? "bg-gray-300 text-black" : "bg-[rgb(0,0,122)] text-white"}`}
              >
                Next <span className="ml-2">→</span>
              </button>
           </div>
        </div>
    )
};

PhoneNumberCard.propTypes = {
    countryCode: PropTypes.string.isRequired,
    setCountryCode: PropTypes.func.isRequired,
    phone: PropTypes.string.isRequired,
    setPhone: PropTypes.func.isRequired,
    prevStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired,
};

export default PhoneNumberCard;

