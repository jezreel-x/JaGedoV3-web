import { useState } from "react";
import Select from "react-select";
import EmailCard from "../../components/cards/EmailCard";
import PhoneNumberCard from "../../components/cards/PhoneNumberCard";
import OTPDeliveryCard from "../../components/cards/OTPDeliveryCard";
import EnterOTPCard from "../../components/cards/EnterOTPCard";
import LocationCard from "../../components/cards/LocationCard";
import SignUpCard from "../../components/cards/SignUpCard";
//  import { FaGlobeAmericas } from "react-icons/fa";
// import Flag from "react-world-flags";

/*
const countries = [
  { code: "US", label: "United States" },
  { code: "KE", label: "Kenya" },
  { code: "UG", label: "Uganda" },
  { code: "TZ", label: "Tanzania" },
  { code: "NG", label: "Nigeria" },
  { code: "ZA", label: "South Africa" },
];
*/

const contractorOptions = [
  { value: "Mechanical works", label: "Mechanical works" },
  { value: "Building Works", label: "Building Works" },
  { value: "Water Works", label: "Water Works" },
  { value: "Electrical Works", label: "Electrical Works" },
  { value: "Road & Other Civil Works", label: "Road & Other Civil Works" },
];

const ContractorSignup = () => {
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  // const [location, setLocation] = useState(countries.find(country => country.code === 'KE'));
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpMethod, setOtpMethod] = useState("");
  const [countryCode, setCountryCode] = useState("+254");
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [dob, setDob] = useState("");

  /*
  const handleDobChange = (e) => {
    let {value} = e.target.value;
    // Allowing only numbers and slashes
    value = value.replace(/[^0-9/]/g, "");
    // Restricting format to DD/MM/YYYY
    if (value.length <= 10) setDob(value);
  };
  */

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  // const toggleSelection = (type) => {
  //   setSelectedTypes((prev) =>
  //     prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
  //   );
  // };

  /*
  const handleCountryChange = (selectedOption) => {
    setLocation(selectedOption);
  };
  */
  const handleDobChange = (e) => {
    let { value } = e.target.value;
    // Allow only numbers and slashes
    value = value.replace(/[^0-9/]/g, "");
    // Restrict to format DD/MM/YYYY
    if (value.length <= 10) setDob(value);
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedTypes(selectedOption || []);
  };

  /*
  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  */

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-300 font-roboto">
      {/*
      <div>
        <p>Current window width: {windowWidth}px</p>
      </div>
      */}
      <div className="bg-white p-10 rounded-xl shadow-2xl w-[100%] max-w-md min-h-[500px] flex flex-col items-center relative">
        {/*
        {step === 1 && (
          <div className="absolute top-4 left-4 z-10">
            <Select
              value={location}
              onChange={handleCountryChange}
              options={countries}
              defaultValue={countries.find((country) => country.code === "KE")}
              getOptionLabel={(e) => (
                <div className="flex items-center space-x-2">
                  <Flag code={e.code} style={{ width: 24, height: 16 }} />
                </div>
              )}
              className="w-24"
              placeholder={null}
              styles={{
                control: (provided) => ({
                  ...provided,
                  backgroundColor: "white",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  padding: "2px",
                  minHeight: "40px",
                }),
                menu: (provided) => ({
                  ...provided,
                  backgroundColor: "rgb(229, 231, 235)",
                  borderRadius: "8px",
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: state.isSelected || state.isFocused ? "white" : "black",
                  backgroundColor: state.isSelected
                    ? "rgb(169, 169, 169)"
                    : state.isFocused
                      ? "rgb(169, 169, 169)"
                      : "transparent",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  display: "flex",
                  alignItems: "center",
                }),
              }}
            />
          </div>
        )}
          */}

        {step === 1 && (
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 mt-10">
            <img
              src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75"
              alt="Logo"
              className="w-[350px] h-auto pr-7 pl-7"
            />
          </div>
        )}

        {step !== 1 && (
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
            <img
              src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75"
              alt="Logo"
              className="w-[650px] h-auto"
            />
          </div>
        )}

        {step === 1 && (
          <div className="mt-27 w-full">
            <h1 className="text-3xl font-bold text-center text-gray-800">Contractor Sign Up</h1>
            <p className="mt-4 text-center text-gray-600">
              <span className="font-semibold">Select type{" "}</span> 
              <span className="text-sm">(Allow for multiple selection)</span>
            </p>

            {/* React-Select Dropdown for contractor options */}
            <div className="mt-6 w-full px-0 xs:px-10">
              <Select
                isMulti
                options={contractorOptions}
                value={selectedTypes}
                onChange={handleSelectChange}
                className="react-select-container"
                classNamePrefix="select"
                placeholder="Select contractor type(s)"
                styles={{
                  control: (provided) => ({
                    ...provided,
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '4px',
                  }),
                  menu: (provided) => ({
                    ...provided,
                    backgroundColor: "rgb(229, 231, 235)",
                    borderRadius: "8px",
                  }),
                  option: (provided, state) => ({
                    ...provided,
                    backgroundColor: state.isSelected ? "rgb(169, 169, 169)" : "transparent",
                    color: state.isSelected ? "white" : "black",
                  }),
                }}
              />
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4 mt-8 px-0 xs:pl-11 xs:pr-10">
              <button 
                type="button"
                className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-5 rounded-lg hover:bg-[rgb(0,0,180)] transition cursor-not-allowed">
                <span className="mr-2">←</span> Back
              </button>
              <button 
                disabled={!selectedTypes.length} // Disable if no type is selected
                type="button"
                onClick={nextStep}
                className={`flex items-center py-2 px-5 rounded-lg transition cursor-pointer
                ${!selectedTypes.length ? "bg-gray-300 text-black" : "bg-[rgb(0,0,122)] text-white"}`}>
                Next <span className="ml-2">→</span>
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <EmailCard 
            email={email}
            setEmail={setEmail}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        {step === 3 && (
          <PhoneNumberCard
            countryCode={countryCode}
            setCountryCode={setCountryCode}
            phone={phone}
            setPhone={setPhone}
            prevStep={prevStep}
            nextStep={nextStep}
          />
        )}

        {step === 4 && (
          <OTPDeliveryCard
            otpMethod={otpMethod}
            setOtpMethod={setOtpMethod}
            nextStep={nextStep}
          />
        )}
         
        {step === 5 && (
          <EnterOTPCard
            otp={otp}
            setOtp={setOtp}
            nextStep={nextStep}
          />                       
        )}

        {step === 6 && (
          <div className="max-w-lg mx-auto bg-white border border-gray-300 xs:p-8 rounded-2xl mt-20 shadow-md">
            {/* Title */}
            <h3 className="text-2xl font-semibold text-[rgb(0,0,122)] mb-5 text-center">
              Organization Information
            </h3>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4 mb-6">
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                type="text"
                placeholder="Name of the Company"
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Name Details */}
            <h3 className="text-xl font-semibold text-[rgb(0,0,122)] mb-4">
              Contact Person Details
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)} 
                type="text" 
                placeholder="First Name" 
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type="text" 
                placeholder="Last Name" 
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex flex-col gap-4 mb-6">
              {/* Date of Birth Field */}
              <div htmlFor="dob" className="">Date Of Birth</div>
              <input
                type="date"
                placeholder="Enter Date of Birth (DD/MM/YYYY)"
                className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={dob}
                onChange={handleDobChange}
              />

              {/* Gender */}
              <div htmlFor="gender" className="">Select Gender</div>
              <select 
                name="gender" 
                id="gender" 
                className="border border-gray-300 px-4 py-3 rounded-lg hover:cursor-pointer"
              >
                <option disabled selected value="Gender" className="hover:cursor-pointer">Gender</option>
                <option value="Male" className="hover:cursor-pointer">Male</option>
                <option value="Female" className="hover:cursor-pointer">Female</option>
              </select>
            </div>

            {/* Next Step Button 
            <button type="button"
              onClick={() => setStep(7)}
              className="w-full p-3 bg-[rgb(0,0,122)] text-white rounded-lg hover:bg-blue-700 transition">
              Next
            </button>
            */}
            <div className="flex justify-between w-full max-w-sm mt-6">
              {/*
              <button 
                type="button"
                onClick={prevStep}
                className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-5 rounded-lg hover:bg-[rgb(0,0,180)] transition hover:cursor-pointer"
              >
                <span className="mr-2">←</span> Back
              </button>
              */}
              <button
                disabled={!companyName || !firstName || !lastName} // Disable if any field is empty
                type="button"
                onClick={nextStep}
                className={`w-full p-3 rounded-lg transition cursor-pointer
                  ${!companyName || !firstName || !lastName ? "bg-gray-300 text-black" : "bg-[rgb(0,0,122)] text-white"}`}
              >
                Next 
              </button>
            </div>
          </div>
        )}

        {step === 7 && (
          <LocationCard
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        
        
        {step === 8 && (
          <SignUpCard
            password={password}
            setPassword={setPassword}
            confirmPassword={confirmPassword}
            setConfirmPassword={setConfirmPassword}
            showPassword={showPassword}
            setShowPassword={setShowPassword}
            showConfirmPassword={showConfirmPassword}
            setShowConfirmPassword={setShowConfirmPassword}
          />
        )}
      </div>
    </div>
  );
};

export default ContractorSignup;
