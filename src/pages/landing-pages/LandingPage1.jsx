import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Menu, X, CheckCircleIcon } from "lucide-react";
import { motion } from "framer-motion";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa6";
import customerImg from "../../assets/customer(1).png";
import fundiImg from "../../assets/fundi.jpeg";
import professionalImg from "../../assets/professional.jpeg";
import contractorImg from "../../assets/contractor.jpeg";
import hardwareImg from "../../assets/hardware.jpeg";
import JamesImg from '../../assets/Builder.jpg';
import micaImg from "../../assets/mutonga.jpg";
// import jibs from "../../assets/jibs.jpg";
// import { FaTools, FaUserTie, FaHardHat } from "react-icons/fa";

const GreenCheckIcon = <CheckCircleIcon className="text-green-500 inline-flex align-top w-5 h-5" />;

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Customer");
  const [image, setImage] = useState(micaImg);
  const [active, setActive] = useState(false);
  const [steps, setSteps] = useState([
    {
      id: 1,
      title: "Sign Up",
      /* icon: "📝" */
    },
    { id: 2, title: "Request" /* icon: "📄" */ },
    { id: 3, title: "Pay to Escrow" /* icon: "💰" */ },
    { id: 4, title: "Track Execution" /* icon: "📊" */ },
    { id: 5, title: "Complete and Review" /* icon: "✅" */ },
  ]);
  const [benefits, setBenefits] = useState([
    <p className="flex items-start gap-3 mb-1.5" key="1">
      <span>{GreenCheckIcon}</span>Access to verified Builders - Vetted, certified construction
      professionals only.
    </p>,
    <p className="flex items-start gap-3 mb-1.5" key="2">
      <span>{GreenCheckIcon}</span>All-in-one platform - 1500+ services in one place.
    </p>,
    <p className="flex items-start gap-3 mb-1.5" key="3">
      <span>{GreenCheckIcon}</span>Secure Escrow Payments - Pay by milestone, funds safely held.
    </p>,
    <p className="flex items-start gap-3 mb-1.5" key="4">
      <span>{GreenCheckIcon}</span>Quality Assurance - Reviewed and approved by expert peers.
    </p>,
    <p className="flex items-start gap-3 mb-1.5" key="5">
      <span>{GreenCheckIcon}</span>Project Tracking Tools - Monitor progress and collaborate easily.
    </p>,
  ]);

  const section1Ref = React.useRef(null);
  const section2Ref = React.useRef(null);
  const navigate = useNavigate();

  const navCards = [
    { name: "Customer", img: customerImg },
    { name: "Fundi", img: fundiImg },
    { name: "Professional", img: professionalImg },
    { name: "Contractor", img: contractorImg },
    { name: "Hardware", img: hardwareImg },
  ];

  const categories = [
    {
      name: "Customer",
      img: [image],
      steps: "1. Sign up as a customer.\n2. Browse available services.\n3. Request a service.",
      benefits: "✔ Access trusted builders\n✔ Convenient service booking\n✔ Secure payments",
    },
    {
      name: "Builder",
      img: JamesImg,
      steps: "1. Create a fundi account.\n2. Showcase your skills.\n3. Receive job requests.",
      benefits: "✔ Get hired easily\n✔ Showcase your skills\n✔ Increase your earnings",
    },
  ];

  const handleCategory = (category) => {
    setSelectedCategory(category.name);
    // const GreenCheckIcon = <CheckCircleIcon className="text-green-500 inline-flex align-top w-5 h-5" />;  

    switch (category.name) {
      case "Customer":
        setImage(micaImg);
        // setSteps("1. Sign up.\n2. Request.\n3. Pay to Escrow. \n4. Job Execution and Tracking. \n5. Complete and Review Job.");
        setSteps([
          {
            id: 1,
            title: "Sign Up",
            /* icon: "📝" */
          },
          { id: 2, title: "Request" /* icon: "📄" */ },
          { id: 3, title: "Pay to Escrow" /* icon: "💰" */ },
          { id: 4, title: "Track Execution" /* icon: "📊" */ },
          { id: 5, title: "Complete and Review" /* icon: "✅" */ },
        ]);
        setBenefits([
          <p className="flex items-start gap-3 mb-1.5" key="1">
            <span>{GreenCheckIcon}</span>Access to verified Builders - Vetted, certified
            construction professionals only.
          </p>,
          <p className="flex items-start gap-3 mb-1.5" key="2">
            <span>{GreenCheckIcon}</span>All-in-one platform - 1500+ services in one place.
          </p>,
          <p className="flex items-start gap-3 mb-1.5" key="3">
            <span>{GreenCheckIcon}</span>Secure Escrow Payments - Pay by milestone, funds safely
            held.
          </p>,
          <p className="flex items-start gap-3 mb-1.5" key="4">
            <span>{GreenCheckIcon}</span>Quality Assurance - Reviewed and approved by expert peers.
          </p>,
          <p className="flex items-start gap-3 mb-1.5" key="5">
            <span>{GreenCheckIcon}</span>Project Tracking Tools - Monitor progress and collaborate
            easily.
          </p>,
        ]);
        scrollToSection(section2Ref);
        break;
      case "Builder":
        setImage(JamesImg);
        setSteps([
          {
            id: 1,
            title: "Sign up & Set Profile.",
          },
          { id: 2, title: "Receive Requests." /* icon: "📄" */ },
          { id: 3, title: "Bid and win." /* icon: "💰" */ },
          { id: 4, title: "Job Execution Updates." /* icon: "📊" */ },
          { id: 5, title: "Get Paid and Reviewed." /* icon: "✅" */ },
        ]);
        setBenefits([
          <p className="flex items-start gap-3 mb-1.5" key="1">
            <span>{GreenCheckIcon}</span>More jobs - Direct Access to construction projects.
          </p>,
          <p className="flex items-start gap-3 mb-1.5" key="2">
            <span>{GreenCheckIcon}</span>Fair Pay - Transparent and timely structured payments.
          </p>,
          <p className="flex items-start gap-3 mb-1.5" key="3">
            <span>{GreenCheckIcon}</span>Skill Growth - In-app apprenticeships and upskilling
            program.
          </p>,
          <p className="flex items-start gap-3 mb-1.5" key="4">
            <span>{GreenCheckIcon}</span>Team collaboration - Seamless teamwork and communication
            tools.
          </p>,
          <p className="flex items-start gap-3 mb-1.5" key="5">
            <span>{GreenCheckIcon}</span>Secure payments - Guaranteed milestone-based payment
            system.
          </p>,
        ]);
        scrollToSection(section2Ref);
        break;
      default:
        setImage(null);
        setSteps("");
        setBenefits("");
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickSignUp = () => {
    setActive(!active);
    scrollToSection(section1Ref);
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleNavigation = (card) => {
    switch (card.name) {
      case "Customer":
        navigate("/customer-signup");
        break;
      case "Fundi":
        navigate("/fundi-signup");
        break;
      case "Professional":
        navigate("/professional-signup");
        break;
      case "Contractor":
        navigate("/contractor-signup");
        break;
      case "Hardware":
        navigate("/hardware-signup");
        break;
      default:
        break;
    }
  };

  const menuButtons = ["Login", "Sign Up" , "About us "];

  const handleMenuButtonClick = (index) => {
    switch (menuButtons[index]) {
      case "Login":
        navigate("/login");
        break;
      case "Sign Up":
        scrollToSection(section1Ref);
        break;
      case "About Us ":
        navigate ("/landing-page-s")
        break;
      default:
        break;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-white text-black min-h-screen flex flex-col">

      
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex justify-between items-center py-1 px-6 md:px-8">
        <img
          src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75"
          alt="Logo"
          className="w-40 md:w-64 lg:w-80 h-auto"
        />

        <div id="div1" className="hidden space-x-4 sm:flex md:space-x-8">
          <button
            type="button"
            className="bg-[rgb(0,0,122)] text-white min-h-[48px] py-2 px-6 rounded-full shadow-md hover:scale-110 hover:transition duration-900 ease-in-out hover:bg-[#FFD700] hover:text-black hover:cursor-pointer flex items-center justify-center sm:w-36 md:w-32"
            onClick={() => navigate("/login")}>
            Login
          </button>
          <button
            type="button"
            onClick={handleClickSignUp}
            className={`text-white py-3 px-6 rounded-full shadow-md hover:scale-110 hover:transition duration-900 ease-in-out hover:bg-[#FFD700] hover:cursor-pointer hover:text-black sm:w-36 md:w-32
          ${active ? "bg-green-600" : "bg-[rgb(0,0,122)]"}`}>
            Sign Up
          </button>
          <button
            type="button"
            className="bg-[rgb(0,0,122)] text-white min-h-[48px] py-2 px-6 rounded-full shadow-md hover:scale-110 hover:transition duration-900 ease-in-out hover:bg-[#FFD700] hover:text-black hover:cursor-pointer flex items-center justify-center sm:w-36 md:w-32"
            onClick={() => navigate("/landing-page-s")}>
            About Us 
          </button>
          {/*
          {['Login', 'Sign Up'].map((text, index) => (
              <button
                key={index}
                type="button"
                className={`bg-[rgb(0,0,122)] text-white py-3 px-6 rounded-full shadow-md hover:scale-110 hover:transition duration-900 ease-in-out hover:bg-[#FFD700] hover:cursor-pointer hover:text-black sm:w-36 md:w-32`}
              >
                {text}
              </button>
          ))};
          */}
        </div>
        <div className="sm:hidden">
          <button className="hover:cursor-pointer" type="button" onClick={handleClick}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="absolute top-16 right-2 rounded-lg w-48 bg-gray-200 shadow-md flex flex-col items-center space-y-2 p-4 md:hidden">
            {menuButtons.map((text, index) => (
              <button
                type="button"
                key={index}
                className="bg-[rgb(0,0,122)] text-white min-h-[48px] py-2 px-6 rounded-full shadow-md hover:scale-110 hover:transition duration-900 ease-in-out hover:bg-[#FFD700] hover:text-black hover:cursor-pointer flex items-center justify-center w-full"
                onClick={handleMenuButtonClick.bind(null, index)}>
                {text}
              </button>
            ))}
          </div>
        )}
      </motion.div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex-grow py-8 px-6 flex flex-col items-center justify-center text-center bg-gray-100">
        <div className="max-w-4xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            A One-Stop Construction Platform
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            JaGedo seamlessly connects customers and builders to other builders: fundis,
            professionals, contractors, and hardware suppliers in your locality.
          </p>
        </div>
      </motion.div>

      <motion.div ref={section1Ref} className="py-10 text-center">
        <button
          type="button"
          onClick={() => scrollToSection(section1Ref)}
          className="bg-[rgb(0,0,122)] text-white py-3 px-8 rounded-full shadow-lg hover:scale-110 hover:transition duration-900 ease-in-out hover:bg-[#FFD700] hover:cursor-pointer hover:text-black text-lg font-medium transition-all">
          Sign Up For Free
        </button>
      </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-3 justify-between mt-0 bg-[rgb(0,0,122)] py-10 px-4"
    >
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-10 px-3 sm:px-6 md:px-8 lg:px-10">
        {/* Navigation Cards */}
        {navCards.map((card) => {
          return (
            <div
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") handleNavigation(card);
              }}
              onClick={() => handleNavigation(card)}
              key={card.name}
              className={`bg-[rgb(0,0,122)] rounded-xl p-8 flex flex-col items-center w-40 sm:w-48 md:w-56 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-95 hover:cursor-pointer
                ${card.name === "Hardware" ? "col-span-2 sm:col-span-1 flex justify-center" : ""}`}
            >
            <img
              src={card.img}
              alt={card.name}
              className="w-32 aspect-square rounded-full mb-4 object-cover border-4 border-white"
            />
            <p className="text-xl font-semibold text-white">{card.name}</p>
          </div>
        )})}
      </div>
    </motion.div>

    {/* How It Works Section */}
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }} 
      className="bg-white text-black py-2 flex flex-col"
    >
      <div className="flex flex-col items-center justify-center my-6">
        <button 
          type="button" 
          onClick={() => (navigate("/login"))} 
          className="bg-[rgb(0,0,122)] text-white py-3 px-8 rounded-full shadow-lg hover:scale-110 hover:transition duration-900 ease-in-out hover:bg-[#FFD700] hover:cursor-pointer hover:text-black text-lg font-medium transition-all sm:w-36 md:w-32"
        >
          Log In
        </button>
      </div>
      <h2 className="text-2xl text-center px-6 sm:text-3xl font-bold mb-4">How It Works</h2>
      <p className="text-gray-700 mt-2 text-center text-base sm:text-lg px-2 sm:px-12 mb-2">
        Seamlessly connect with fundis, professionals, contractors, and hardware in just a few steps.
      </p>
      <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-center gap-4 md:gap-10 px-10 mt-5 w-auto">
        {categories.map((category) => (
          <button
            type="button"
            key={category.name}
            onClick={() => handleCategory(category)}
            className={`bg-[rgb(0,0,122)] w-72 sm:w-40 px-6 py-2 rounded-full my-1.5 justify-center text-white shadow-md hover:cursor-pointer hover:scale-105 hover:transition duration-700 ease-in-out transition  ${
              selectedCategory === category.name ? "bg-green-600 text-white" : " hover:bg-gray-400"
            }`}
          >
              {category.name}
            </button>
          ))}
        </div>

        <div className="bg-[rgb(255, 255, 255)] p-4 hover:transition duration-700 ease-in-out md:px-4 w-4/5 sm:w-full mt-2 mx-auto">
          <div className="flex flex-col items-center justify-center text-gray-100 md:flex-row 2xl:pl-24">
            {steps.map((step) => (
              <div key={step.id} className="flex items-center w-full justify-between p-3">
                <div className="flex flex-col md:flex-row w-72 md:w-48 px-4 py-2 bg-white text-black rounded-lg justify-start items-start shadow-md relative">
                  <div className="flex absolute -top-4 -left-4 items-center justify-center w-8 h-8 bg-gray-300 border-2 border-gray-300 rounded-full text-black font-bold">
                    {step.id}
                  </div>
                  <div className="flex flex-row">
                    <h3 className="font-bold text-sm">{step.title}</h3>
                  </div>
                </div>
                {step.id !== steps.length && (
                  <span className="hidden md:inline md:gap-4 text-5xl text-gray-400">→</span>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-10 w-full px-4 sm:px-6 lg:px-8 md:flex-row md:gap-1.5 xl:gap-10 xl:max-w-7xl xl:mx-auto">
            <div className="flex-shrink-0 w-full md:flex-1">
              <img
                src={image}
                alt={selectedCategory}
                className="object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="bg-white p-6 hover:scale-95 hover:transition duration-700 ease-in-out md:p-8 rounded-lg shadow-md md:flex-1">
              <h3 className="text-xl font-bold mb-3 text-gray-600">Benefits</h3>
              <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">
                {benefits}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.footer
        className="mt-16 bg-[rgb(0,0,122)] text-white py-12 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
           {/* JBIS */}
             <div className="space-y-2">
               <h3 className="font-bold text-lg mb-2">Upcoming Event</h3>
                <p className="text-3xl hover:text-[#FFD700] font-bold cursor-pointer transition duration-300">JBIS</p>
              </div>
          {/* About Us Section */}
          <div className="space-y-3">
            <h3 className="font-bold text-xl mb-3">About Us</h3>
            <Link to="/landing-page-s">
              <p className="hover:text-[#FFD700] cursor-pointer transition duration-300">JaGedo</p>
            </Link>
            <p className="hover:text-[#FFD700] cursor-pointer transition duration-300">Helpdesk</p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-3">
            <h3 className="font-bold text-xl mb-3">Quick Links</h3>
            <p className="hover:text-[#FFD700] cursor-pointer transition duration-300">
              Terms Of Service
            </p>
            <p className="hover:text-[#FFD700] cursor-pointer transition duration-300">
              Privacy and Data Protection Policy
            </p>
          </div>

          {/* Contacts Section */}
          <div className="space-y-3">
            <h3 className="font-bold text-xl mb-3">Contacts</h3>
            <p className="text-gray-300">+254 113 273 333</p>
            <p>
              <a
                href="mailto:info@jagedo.co.ke"
                className="text-[#FFD700] hover:underline transition duration-300">
                info@jagedo.co.ke
              </a>
            </p>
          </div>

          {/* Social Media Links */}
          <div className="space-y-3">
            <h3 className="font-bold text-xl mb-3">Follow Us</h3>
            <div className="flex justify-center sm:justify-start space-x-5 mt-4">
              {[
                { icon: FaFacebookF, color: "blue-900" },
                { icon: FaXTwitter, color: "blue-900" },
                { icon: FaLinkedinIn, color: "blue-900" },
                { icon: FaInstagram, color: "pink-900" },
                { icon: FaTiktok, color: "gray-900" },
              ].map(({ icon: Icon, color }, index) => (
                <a
                  key={index}
                  href="#"
                  className={`text-xl p-3 bg-[rgb(0,0,122)] text-white rounded-full hover:bg-[#FFD700] hover:text-${color} transition duration-300 transform hover:scale-110 shadow-md`}>
                  <Icon />
                </a>
              ))}
             </div>
          </div>
        </div>
        {/* Bottom Copyright Section */}
        <div className="border-t border-gray-500 mt-12 pt-6 text-center text-sm text-gray-300">
          <p>&copy; 2025 JaGedo. All rights reserved.</p>
        </div>
      </motion.footer>
    </motion.div>
  );
};

export default LandingPage;
