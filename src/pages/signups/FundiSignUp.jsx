import { useState } from "react";
// import { Link } from "react-router-dom";
// import { FcGoogle } from "react-icons/fc";
// import { FaGlobeAmericas } from "react-icons/fa";
import { Flag } from "react-world-flags";
import Select from "react-select";
import EmailCard from "../../components/cards/EmailCard";
import PhoneNumberCard from "../../components/cards/PhoneNumberCard";
import OTPDeliveryCard from "../../components/cards/OTPDeliveryCard";
import EnterOTPCard from "../../components/cards/EnterOTPCard";
import LocationCard from "../../components/cards/LocationCard";
import SignUpCard from "../../components/cards/SignUpCard";
//  import { EyeOff } from "lucide-react"; // Importing EyeOff icon from lucide-react


const countries = [
  { code: "US", label: "United States" },
  { code: "KE", label: "Kenya" },
  { code: "UG", label: "Uganda" },
  { code: "TZ", label: "Tanzania" },
  { code: "NG", label: "Nigeria" },
  { code: "ZA", label: "South Africa" },
];


const FundiSignUp = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [otpMethod, setOtpMethod] = useState("Email");
  const [location, setLocation] = useState(countries.find(country => country.code === 'KE'));
  const [dob, setDob] = useState("");
  const [countryCode, setCountryCode] = useState("+254"); 
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [fundiType, setFundiType] = useState("");
  const [firstName, setFirstName] = useState("");
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [lastName, setLastName] = useState("");
  // const [idType, setIdType] = useState("");
  // const [isChecked, setIsChecked] = useState(false); // For Terms and Conditions checkbox


  const handleDobChange = (e) => {
    const { value } = e.target; 
    const sanitizedValue = value.replace(/[^0-9/]/g, ""); // Allow only numbers and slashes
    if (sanitizedValue.length <= 10) setDob(sanitizedValue); // Restrict to format DD/MM/YYYY
  };
  
  
  

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));


  const handleCountryChange = (selectedOption) => {
    setLocation(selectedOption); 
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
        
      {/* Flag Dropdown at the Top Left (Only for Step 1) */}
      {step === '1' && (
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
    option: (provided, state) => {
      let bgColor = "transparent";
      if (state.isSelected) {
        bgColor = "rgb(169, 169, 169)";
      } else if (state.isFocused) {
        bgColor = "rgb(169, 169, 169)";
      }
      return {
        ...provided,
        color: state.isSelected || state.isFocused ? "white" : "black",
        backgroundColor: bgColor,
      };
    },
    singleValue: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
    }),
  }}
/>

        </div>
      )}
          
      {/* Logo Positioning */}
      {step === 1 && (
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 mt-10">
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

  
      {/* Step 1 Content */}
      {step === 1 && (
        <>
        <h2 className="text-3xl font-bold m-6 text-gray-800 mt-28 xs:mt-28 sm:mt-32">Fundi Sign Up</h2>

        <select
          name="profession"
          className="w-full xs:w-[75%] sm:w-[80%] overflow-y-auto h-12 px-4 py-3 border border-gray-300 rounded-md text-black focus:outline-none cursor-pointer"
          value={fundiType}
          onChange={(e) => setFundiType(e.target.value)}
        >
          <option value="" disabled selected className="bg-white text-black">Select a skill</option>
          <option value="mason" className="bg-white text-black">Mason</option>
          <option value="plumber" className="bg-white text-black">Plumber</option>
          <option value="welder" className="bg-white text-black">Welder</option>
          <option value="electrician" className="bg-white text-black">Electrician</option>
          <option value="carpenter" className="bg-white text-black">Carpenter</option>
          <option value="painter" className="bg-white text-black">Painter</option>
          <option value="roofer" className="bg-white text-black">Roofer</option>
          <option value="tile__fixer">Tile Fixer</option>
          <option value="interior__skimmer">Interior Skimmer</option>
          <option value="glass/aluminium__fitter">Glass/Aluminium Fitter</option>
          <option value="steel__fixer">Steel fixer</option>
        </select>

        <div className="flex justify-between gap-16 xs:gap-28 mt-8 px-4">
            <button 
              disabled
              type="button"
              className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-5 rounded-lg hover:bg-[rgb(0,0,180)] transition cursor-not-allowed">
              <span className="mr-2">←</span> Back
            </button>
            <button type="button"
              onClick={nextStep}
              className={`flex items-center py-2 px-5 rounded-lg transition cursor-pointer
              ${!fundiType ? "bg-gray-300 text-black" : "bg-[rgb(0,0,122)] text-white"}`}
              disabled={!fundiType} // Disable if profession is not selected>
              >Next <span className="ml-2">→</span>
            </button>
        </div>
      </>
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
  <div className="max-w-lg mx-auto border border-gray-300 bg-white pt-2 mt-20 p-0 xs:px-3 w-[100%] sm:p-8 rounded-2xl mb-3">
    {/* Title */}
    <h3 className="text-2xl font-semibold text-[rgb(0,0,122)] mb-5 text-center">
      Personal Information
    </h3>

    {/* Name Fields */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
        placeholder="First Name"
        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        placeholder="Last Name"
        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
      />
    </div>

    {/* ID Type & Number */}
    <div className="grid grid-cols-1 gap-4 mb-6">
      
      {/* Date of Birth Field */}
      <div htmlFor="dob" className="">Date Of Birth</div>
      <input
        type="date"
        placeholder="Enter Date of Birth (DD/MM/YYYY)"
        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={dob}
        onChange={handleDobChange}
      />
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

    {/* ID Number 
    <input
      type="text"
      placeholder="ID/Passport Number/Driving License Number"
      className="border p-3 mb-6 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    */}

    {/* Navigation Buttons */}
    <div className="flex justify-between w-full max-w-sm mt-4">
      {/* Back Button 
      <button  type="button"  onClick={prevStep} className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-4 rounded-lg hover:cursor-pointer hover:opacity-90">
        <span className="mr-2">←</span> Back
      </button>
      */}
      {/* Next Button */}
      <button 
      type="button" 
      onClick={nextStep} 
      className={`w-full p-3 rounded-lg transition cursor-pointer
        ${!firstName || !lastName ? "bg-gray-300 text-black" : "bg-[rgb(0,0,122)] text-white"}`}
      disabled={!firstName || !lastName } // Disable if any field is empty>
      >Next
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

export default FundiSignUp;
