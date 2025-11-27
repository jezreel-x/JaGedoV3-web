import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { toast } from "react-hot-toast";

import { Eye, EyeOff } from "lucide-react";
import { FcGoogle } from "react-icons/fc";

import TextInput from "@components/text-input/TextInput";

import { dummyUsers as users } from "@data/DummyLoginUsers";

const LoginScreen = () => {
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [password, setPassword] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const navigate = useNavigate();

  const toggleVisibility = () => setIsVisible((prevState) => !prevState);

  // TODO: Refactor later, maybe if time allows
  const handleLogin = () => {
    const input = emailOrPhone.trim().toLowerCase();
    const userByEmail = users[input];
    const userByPhone = Object.values(users).find((item) => item.phone === input);

    const user = userByEmail || userByPhone;

    if (!input || !password) {
      return toast.error("Please fill in both email/phone and password.");
    } 
    
    if (!user) {
      return toast.error("Wrong email address or phone number.");
    } 
    
    if (password !== user.password) {
      return toast.error("Wrong password or username.");
    } 

    toast.success("Login successful!");
   
  
    const { role, name, phone } = user;

    const finalEmail = userByEmail ? input : Object.keys(users).find(
      key => users[key].phone === input
    );
  
    // localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ email: finalEmail, role, name, phone, password: password })
    );
  
    // Role-based navigation
    const roleRoutes = {
      customer: "/customer",
      fundi: "/fundi-portal",
      contractor: "/contractor-portal",
      hardware: "/hardware-portal",
      professional: "/professional-portal",
      admin: "/admin",
    };
  
    const route = roleRoutes[role];

    setTimeout(() => {
      if (route) {
        navigate(route);
      } else {
        alert("Unknown role. Contact admin.");
      }
    }, 2000);

  };
  

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-2xl flex flex-col items-center">
        <img
          src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75"
          alt="Logo"
          className="w-[150px] h-auto mb-6"
        />
        <h1 className="text-2xl font-bold text-gray-800">User Login</h1>
        <p className="text-gray-600 mt-4 text-center">What is your phone number or email?</p>

        <div className="flex flex-col mt-4 w-full justify-center items-center">
          {/* <label htmlFor="email" className="mb-2">Email
            <span className="text-red-500" aria-hidden="true">*</span>
            <span className="sr-only">(required)</span>
          </label> */}
          <TextInput
            type="text"
            value={emailOrPhone}
            onChange={(e) => setEmailOrPhone(e.target.value)}
            placeholder="Enter phone number or email"
            className="w-full sm:w-3/4 p-4 border border-gray-300 text-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="relative mt-4 w-full sm:w-3/4">
            <TextInput
              id="password"
              type={isVisible ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-slate-600 my-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 p-4"
              placeholder="Enter your password..."
              aria-label="Password"
              required
            />
            <button
              className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
              type="button"
              onClick={toggleVisibility}
              aria-label={isVisible ? "Hide password" : "Show password"}
              aria-pressed={isVisible}
              aria-controls="password">
              {isVisible ? (
                <Eye size={20} aria-hidden="true" />
              ) : (
                <EyeOff size={20} aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="button"
            onClick={handleLogin}
            className="mt-4 w-full sm:w-3/4 bg-[rgb(0,0,122)] text-white py-4 rounded-lg hover:bg-blue-600 transition duration-200 cursor-pointer">
            Login
          </button>

          <div className="mt-4">
            <Link to="/forgot-password" className="text-sm sm:text-lg text-right text-blue-500 hover:text-gray-700 hover:underline">
              Forgot password?
            </Link>
          </div>
        </div>

        {/* <div className="text-center my-4 text-gray-600">Or</div> */}

        <div className="flex flex-col justify-center items-center w-full my-6">
          <button
            type="button"
            className="w-full sm:w-3/4 flex items-center justify-center bg-white border border-gray-300 text-black py-4 rounded-md shadow-md hover:bg-gray-100 transition duration-200 cursor-pointer">
            <FcGoogle className="mr-2" size={20} /> Continue with Google
          </button>
          <p className="mt-6 gap-3 text-sm sm:text-lg">{`Don't have an account?`}
            <Link to="/" className="text-sm sm:text-lg text-blue-500 hover:underline hover:text-gray-700 ml-2">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
