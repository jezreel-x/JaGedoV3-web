import { useState } from "react";
// import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { FaGlobeAmericas } from "react-icons/fa";
// import { FcGoogle } from "react-icons/fc";
import Select from "react-select";
import { Flag } from "react-world-flags";
import EmailCard from "../../components/cards/EmailCard";
import PhoneNumberCard from "../../components/cards/PhoneNumberCard";
import OTPDeliveryCard from "../../components/cards/OTPDeliveryCard";
import EnterOTPCard from "../../components/cards/EnterOTPCard";
import LocationCard from "../../components/cards/LocationCard";
import SignUpCard from "../../components/cards/SignUpCard";
// import { EyeOff } from "lucide-react";
/*
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"; // Import the CSS for DatePicker
*/

const countries = [
  { code: "US", label: "United States" },
  { code: "KE", label: "Kenya" },
  { code: "UG", label: "Uganda" },
  { code: "TZ", label: "Tanzania" },
  { code: "NG", label: "Nigeria" },
  { code: "ZA", label: "South Africa" },
];

const CustomerSignUp = () => {
  const [step, setStep] = useState(1);
  const [accountType, setAccountType] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [otpMethod, setOtpMethod] = useState("");
  const [otp, setOtp] = useState("");
  const [location, setLocation] = useState(countries.find(country => country.code === 'KE'));
  const [password, setPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [isChecked, setIsChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [countryCode, setCountryCode] = useState("+254"); // Default country code for Kenya
  // const [isChecked, setIsChecked] = useState(false);
  // const [dob, setDob] = useState(null);
  // const [isOpen, setIsOpen] = useState(false);

 
  const handleCountryChange = (selectedOption) => {
    setLocation(selectedOption); 
  };

  /*
  const handleDobChange = (e) => {
    let value = e.target.value;
    // Allow only numbers and slashes
    value = value.replace(/[^0-9/]/g, "");
    // Restrict to format DD/MM/YYYY
    if (value.length <= 10) setDob(value);
  };
  */

  const nextStep = () => {
    if (step === 2 && !email) {
      alert("Please enter your email before proceeding.");
      return;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = () => setStep((prev) => prev - 1);

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
  

 /*
  const visibilityOfIndividual_Org = () => {
    nextStep(); // Move to the next step
    if (accountType === "Individual" && step === 6) {
      return true; // Show individual details
      setStep(8); // Move to step 8
    } else if (accountType === "Organization" && step === 7) {
      return true; // Show organization details
      setStep(8); // Move to step 8
    }
  };
 
  const individualOrgVisibility = () => {
    if (step === 6 && accountType === 'Individual') {
      return true;
    } else {
      return false;
    }
  }
    */
 

  /*
  const handleSendOtp = () => {
    // e.preventDefault(); // Prevent default form submission
    if (!otpMethod) {
      toast.error("Please select an OTP delivery method.");
    } else {
      toast.success(`OTP sent via ${otpMethod}`, 
        {
          position: "top-center",
          autoClose: 5000
        } // Customize the toast message
      );
      setStep(5); // Move to the next step after sending OTP
    }
     // Move to the next step after sending OTP
  }
    */
      

  return (
<div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-300 font-roboto">
  {/*
  <div>
    <p>Current window width: {windowWidth}px</p>
  </div>
  */}
  <div className="bg-white p-10 rounded-xl shadow-2xl w-[100%] max-w-md min-h-[500px] flex flex-col items-center relative">

    {/* Flag Dropdown at the top left (Only for step 1) */}
    {step === '1' && (
      <div className="absolute top-4 left-4 z-10">
        <Select
          value={location}
          onChange={handleCountryChange}
          options={countries}
          defaultValue={countries.find(country => country.code === "KE")}  
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
              backgroundColor: 'white',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              padding: '2px', 
              minHeight: '40px', 
            }),
            menu: (provided) => ({
              ...provided,
              backgroundColor: 'rgb(229, 231, 235)',
              borderRadius: '8px',
            }),
            option: (provided, state) => ({
              ...provided,
              color: state.isSelected || state.isFocused ? "white" : "black",
              backgroundColor: (state.isSelected || state.isFocused) ? 'rgb(169, 169, 169)' : 'transparent',
            }),
            
            singleValue: (provided) => ({
              ...provided,
              display: 'flex',
              alignItems: 'center',
            }),
          }}
        />
      </div>
    )}

    {/* Logo on the right side in step 1 */}
    {step === 1 && (
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10 mt-10">
            <img
              src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75"
              alt="Logo"
              className="w-[350px] h-auto pr-7 pl-7" 
            />
          </div>
        )}

    {/* Logo centered at the top in subsequent steps */}
    {step !== 1 && (
      <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-10">
        <img 
          src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75" 
          alt="Logo" 
          className="w-[450px] h-auto"  
        />
      </div>
    )}

    <div className="w-full"> 
      {step === 1 && (
        <div className="mt-30 text-center mb-8 w-full">
          <h1 className="text-3xl font-bold text-center text-gray-800">Customer Sign Up</h1>
          <p className="text-lg my-4 font-semibold">Select Account Type</p>

          <div className="w-full mb-6">
  <div className="flex justify-between gap-2 sm:gap-4">
    <button
      type="button"
      className={`py-2 px-6 w-1/2 text-black rounded-lg transition cursor-pointer ${
        accountType === "Individual" ? "bg-[rgb(0,0,122)] text-white" : "bg-gray-300 opacity-75"
      }`}
      onClick={
        () => setAccountType("Individual") // accType changes to individual
      }
    >
      Individual
    </button>
    <button
      type="button"
      className={`py-2 px-6 w-1/2 text-black rounded-lg transition cursor-pointer ${
        accountType === "Organization" ? "bg-[rgb(0,0,122)] text-white" : "bg-gray-300 opacity-75"
      }`}
      onClick={() => setAccountType("Organization")}
    >
      Organization
    </button>
  </div>

  {/* Explanatory Text */}
  <div className="mt-4 text-gray-700 text-sm">
    {accountType === "Individual" && (
      <p className="p-3 bg-gray-100 rounded-lg">
        These are <span className="font-medium">Individuals</span> seeking construction services for personal projects e.g home renovations, repairs or new construction
      </p>
    )}
    {accountType === "Organization" && (
      <p className="p-3 bg-gray-100 rounded-lg">
        Register as a <span className="font-medium"> group,business, corporation or institution</span> 
      </p>
    )}
  </div>
</div>

<div className="flex justify-between w-full max-w-sm mt-6">
            <button  type="button"  onClick={prevStep} className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-4 rounded-lg cursor-not-allowed">
              <span className="mr-2">←</span> Back
            </button>
            <button 
              disabled={!accountType} // Disable if accountType is not selected
              type="button" 
              onClick={nextStep} 
              className={`flex items-center py-2 px-4 rounded-lg cursor-pointer hover:opacity-90 ${
                !accountType ? "bg-gray-300 text-black" : "bg-[rgb(0,0,122)] text-white"}`}
            >
              Next <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      )}
      </div>

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

{/* Step 6: Enter Details as Individual */}
{step === 6 && ( 
  <div className="max-w-lg border border-gray-300 mx-auto bg-white pt-0 xs:px-3 w-[100%] sm:p-8 rounded-2xl mt-20">
  {/* Section Title */}
  <h3 className="text-2xl font-semibold text-[rgb(0,0,122)] pt-0 mb-6 text-center">
    Personal Information
  </h3>

  {/* First & Last Name Inputs */}
  <div className="flex flex-col md:flex-row gap-4 mb-6">
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

  

  {/* Gender */}
  <div className="flex flex-col gap-4 mb-6">
    <label htmlFor="gender" className="">Select Gender</label>
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
 

  {/* Date of Birth Input 
  <input
    type="date"
    placeholder="Enter Date of Birth (DD/MM/YYYY)"
    className="border border-gray-300 p-3 rounded-lg w-full mb-6 focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)]"
    value={dob}
    onChange={handleDobChange}
  />
  */}

  {/* Next Button */}
  <button
    disabled={!firstName || !lastName }
    type="button"
    onClick={() => setStep(7)}
    className={`w-full p-3 rounded-lg transition cursor-pointer
    ${!firstName || !lastName ? "bg-gray-300 text-black" : "bg-[rgb(0,0,122)] text-white"}`}>
    Next
  </button>
</div>
  
)}

{/* Step 7: Organization Details */}
{step === 7 && (
  <div className="mt-20 px-0 xs:px-2 pt-2 pb-6 w-[100%] sm:p-6 sm:border border-gray-300 rounded-lg bg-white sm:w-full max-w-lg mx-auto">
    <h3 className="text-2xl font-semibold text-[rgb(0,0,122)] mb-4 text-center">
      Organizational Information
    </h3>

    <div className="grid grid-cols-1 gap-4 mb-6 ">
      <input 
        type="text" 
        placeholder="Name of the Organization" 
        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    <h3 className="text-xl font-semibold text-[rgb(0,0,122)] mb-4">
      Contact Person Details
    </h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <input 
        value={fName}
        onChange={(e) => setFName(e.target.value)}  
        type="text" 
        placeholder="First Name" 
        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        value={lName}
        onChange={(e) => setLName(e.target.value)} 
        type="text" 
        placeholder="Last Name" 
        className="border border-gray-300 p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>

    {/*
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
      <div className="relative border rounded-lg w-full">
        <select className="border border-gray-300 p-3 pr-10 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-[rgb(0,0,122)] appearance-none cursor-pointer" placeholder="Select ID Type">
          <option value="" disabled selected>Select ID Type</option>
          <option value='National ID' className="hover:cursor-pointer">National ID</option>
          <option value='Passport' className="hover:cursor-pointer">Passport</option>
        </select>
        <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none">
          ▼
        </span>
      </div>
      <input type="text" placeholder="Passport/ID" className="border p-2 rounded" />
    </div>
    */}

    <div className="flex justify-between w-full max-w-sm mt-6">
      <button type="button" onClick={prevStep} className="flex items-center bg-[rgb(0,0,122)] text-white py-2 px-4 rounded-lg hover:opacity-90 cursor-pointer">
        <span className="mr-2">←</span> Back
      </button>
      <button
        disabled={!fName || !lName} // Disable if fName or lName is not entered 
        type="button" 
        onClick={nextStep} 
        className={`flex items-center py-2 px-4 rounded-lg hover:opacity-90 cursor-pointer
          ${!fName || !lName ? "bg-gray-300 text-black" : "bg-[rgb(0,0,122)] text-white"}`}
      >
        Next <span className="ml-2">→</span>
      </button>
    </div>
  </div>
)}


{/* Step 8: Location Details */}
      {step === 8 && (
        <LocationCard
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
  

{/* Step 9: Password Confirmation */}
      {step === 9 && (
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

export default CustomerSignUp;





      
      