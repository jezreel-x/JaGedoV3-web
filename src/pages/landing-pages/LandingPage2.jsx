import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram, FaTiktok } from "react-icons/fa6";
// import { CheckCircleIcon } from "lucide-react";
// import logo from '../assets/Japageo logo-1.png';
import { motion } from "framer-motion";
import { CheckCircleIcon } from 'lucide-react';


import contractor from '../../assets/contractor.jpeg';
import customer from '../../assets/customer(1).png';
import professional from '../../assets/professional.jpeg';
import hardware from '../../assets/hardware.jpeg';
import fundi from '../../assets/fundi.jpeg';


import SteveImg from '../../assets/steve.jpeg';
import JamesImg from '../../assets/james.jpeg';
import IvoneImg from '../../assets/Ivone.jpeg';
import VivianImg from '../../assets/vivian.jpeg';
import micaImg from '../../assets/mica.jpeg';

const GreenCheckIcon = <CheckCircleIcon className="text-green-500 inline-flex align-top w-5 h-5" />;  

const rolesData = {
  CUSTOMER: {
    image: customer,
    steps: "Step 1: Sign up\nStep 2: Browse professionals\nStep 3: Hire & manage projects",
  },
  FUNDI: {
    image: fundi,
    steps: "Step 1: Create a profile\nStep 2: Showcase skills\nStep 3: Get hired & earn",
  },
  PROFESSIONAL: {
    image: professional,
    steps: "Step 1: Register\nStep 2: Display expertise\nStep 3: Connect with clients",
  },
  CONTRACTOR: {
    image: contractor,
    steps: "Step 1: Sign up\nStep 2: Manage projects\nStep 3: Grow your business",
  },
  HARDWARE: {
    image: hardware,
    steps: "Step 1: List your products\nStep 2: Reach customers\nStep 3: Boost sales",
  },
};

const LandingPage2 = () => {
  // const [selectedRole, setSelectedRole] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  // const [selected, setSelected] = useState("Customer");
  const [image, setImage] = useState(micaImg);
  // const [steps, setSteps] = useState("1. Sign up .\n2. Request.\n3. Escrow payment. \n4. Job Execution Tracking. \n5. Complete and Review");  
  const [steps, setSteps] = useState([
    { 
      id: 1, 
      title: "Sign Up", 
      icon: "📝" 
    },
    { id: 2, title: "Request", icon: "📄" },
    { id: 3, title: "Pay to Escrow", icon: "💰" },
    { id: 4, title: "Job Execution & Tracking", icon: "📊" },
    { id: 5, title: "Complete and Review Job", icon: "✅" },
  ]);
   
    /*
    const [benefits, setBenefits] = useState(
      "✔ Access to verified professionals: Customers get access to vetted and licensed fundis, contractors, and professionals ensuring quality services.\n" +
      "✔ One-Stop Construction Solution: The platform integrates all construction services from design to execution, making it convenient for customers.\n" +
      "✔ Secure Payments: JaGedo ensures secure transactions with milestone payments that protect both the customer and the contractor.\n" +
      "✔ Quality Assurance & Reviews: Customers can review contractors based on past work and performance ensuring accountability.\n" +
      "✔ Project Tracking & Collaboration: The platform provides features for monitoring project progress, communicating with contractors, and approving milestones."
    );
    */
  const [benefits, setBenefits] = useState([
    <p className="flex items-start gap-3 mb-1.5" key="1"><span>{GreenCheckIcon}</span>Access to verified professionals: Customers get access to vetted and licensed fundis, contractors, and professionals ensuring quality services.</p>,
    <p className="flex items-start gap-3 mb-1.5" key="2"><span>{GreenCheckIcon}</span>One-Stop Construction Solution: The platform integrates all construction services from designs to execution, making it convenient for customers.</p>,
    <p className="flex items-start gap-3 mb-1.5" key="3"><span>{GreenCheckIcon}</span>Secure Payments: JaGedo ensures secure transactions with milestone payments that protect both the customer and the contractor.</p>,
    <p className="flex items-start gap-3 mb-1.5" key="4"><span>{GreenCheckIcon}</span>Quality Assurance & Reviews: Customers can review contractors based on past work and performance, ensuring accountability.</p>,
    <p className="flex items-start gap-3 mb-1.5" key="5"><span>{GreenCheckIcon}</span>Project Tracking & Collaboration: The platform provides features for monitoring project progress, communicating with contractors, and approving milestones.</p>,
  ]);


  const categories = [
      { 
        name: "Customer", 
        img: [image], 
        steps: "1. Sign up as a customer.\n2. Browse available services.\n3. Request a service.", 
        benefits: "✔ Access trusted builders\n✔ Convenient service booking\n✔ Secure payments" 
      },
      { 
        name: "Fundi", 
        img: JamesImg, 
        steps: "1. Create a fundi account.\n2. Showcase your skills.\n3. Receive job requests.", 
        benefits: "✔ Get hired easily\n✔ Showcase your skills\n✔ Increase your earnings" 
      },
      { 
        name: "Professional", 
        img: IvoneImg, 
        steps: "1. Register as a professional.\n2. Verify your qualifications.\n3. Connect with clients.", 
        benefits: "✔ Verified professionals\n✔ High-paying projects\n✔ Expand your client base" 
      },
      { 
        name: "Contractor", 
        img: SteveImg, 
        steps: "1. Sign up as a contractor.\n2. Manage projects.\n3. Hire fundis and professionals.", 
        benefits: "✔ Manage multiple projects\n✔ Hire skilled labor\n✔ Expand your network" 
      },
      { 
        name: "Hardware", 
        img: VivianImg, 
        steps: "1. Register your hardware store.\n2. List your products.\n3. Connect with builders.", 
        benefits: "✔ Increase sales\n✔ Reach more customers\n✔ Simplified inventory management" 
      },
    ];
  
  
   
  const handleCategoryClick = (category) => {
      setSelectedCategory(category.name);
      /*
      setImage(category.img);
      setSteps(category.steps);
      setBenefits(category.benefits);
      */
  
      // const GreenCheckIcon = <CheckCircleIcon className="text-green-500 inline-flex align-top w-5 h-5" />;  
  
      switch (category.name) {
        case "Customer":
          setImage(micaImg);
          // setSteps("1. Sign up.\n2. Request.\n3. Pay to Escrow. \n4. Job Execution and Tracking. \n5. Complete and Review Job."); 
         
          setSteps([
            { 
              id: 1, 
              title: "Sign Up", 
              icon: "📝" 
            },
            { id: 2, title: "Request", icon: "📄" },
            { id: 3, title: "Pay to Escrow", icon: "💰" },
            { id: 4, title: "Job Execution & Tracking", icon: "📊" },
            { id: 5, title: "Complete and Review Job", icon: "✅" },
          ]);
         
          /* setBenefits("✔ Access to verified professionals: Customers get access to vetted and licensed fundis, contractors, and professionals ensuring quality services.\n✔ One-Stop Construction Solution: The platform integrates all construction services from designs to execution, making it convenient for customers.\n✔ Secure Payments: JaGedo ensures secure transactions with milestone payments that protect both the customer and the contractor.\n✔ Quality Assurance & Reviews: Customers can review contractors based on past work and performance ensuring accountability.\n✔ Project Tracking & Collaboration: The platform provides features for monitoring project progress, communicating with contractors, and approving milestones."); */
          setBenefits([
            <p className="flex items-start gap-3 mb-1.5" key="1"><span>{GreenCheckIcon}</span>Access to verified professionals: Customers get access to vetted and licensed fundis, contractors, and professionals ensuring quality services.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="2"><span>{GreenCheckIcon}</span>One-Stop Construction Solution: The platform integrates all construction services from designs to execution, making it convenient for customers.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="3"><span>{GreenCheckIcon}</span>Secure Payments: JaGedo ensures secure transactions with milestone payments that protect both the customer and the contractor.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="4"><span>{GreenCheckIcon}</span>Quality Assurance & Reviews: Customers can review contractors based on past work and performance, ensuring accountability.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="5"><span>{GreenCheckIcon}</span>Project Tracking & Collaboration: The platform provides features for monitoring project progress, communicating with contractors, and approving milestones.</p>,
          ]);
          break;
        case "Fundi":
          setImage(JamesImg);
          // setSteps("1. Sign up & Set Profile.\n2. Receive Requests.\n3. Bid and win. \n4. Job Execution Updates. \n5. Get Paid and Reviewed.");
         
          setSteps([
            { 
              id: 1, 
              title: "Sign Up & Set Profile", 
              icon: "📝" 
            },
            { id: 2, title: "Receive Request", icon: "📄" },
            { id: 3, title: "Bid & win", icon: "💰" },
            { id: 4, title: "Job Execution Updates", icon: "📊" },
            { id: 5, title: "Get paid & Reviewed", icon: "✅" },
          ])
       
          /*
          setBenefits("✔Increased Job Opportunities-Fundis gain access to a steady flow of construction jobs from various customers.\n✔ Fair & Transprent Compensation- A structured payment system ensures fair earnings and timely disbursements.\n✔ Skill Development & apprenticeship- Builders can upskill through JaGedo's in-app apprenticeship program, improving their competitiveness.\n✔ Collaborative Work Environment- The Platform enables teamwork and networking with other professionals, leading to better project execution.\n✔ Guaranteed Payments- The structured milestone-based payment system minimizes the risk of non-payment and disputes."); */
          setBenefits([
            <p className="flex items-start gap-3 mb-1.5" key="1"><span>{GreenCheckIcon}</span>Increased Job Opportunities-Fundis gain access to a steady flow of construction jobs from various customers.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="2"><span>{GreenCheckIcon}</span>Fair & Transprent Compensation- A structured payment system ensures fair earnings and timely disbursements.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="3"><span>{GreenCheckIcon}</span>Skill Development & apprenticeship- Builders can upskill through JaGedo`s in-app apprenticeship program, improving their competitiveness.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="4"><span>{GreenCheckIcon}</span>Collaborative Work Environment- The Platform enables teamwork and networking with other professionals, leading to better project execution.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="5"><span>{GreenCheckIcon}</span>Guaranteed Payments- The structured milestone-based payment system minimizes the risk of non-payment and disputes.</p>,
          ]);       
          break;
        case "Professional":
          setImage(IvoneImg);
          // setSteps("1. Sign up & Set Profile.\n2. Receive Requests.\n3. Bid and win. \n4. Job Execution Updates. \n5. Get Paid and Reviewed.");
          /* setBenefits("✔Increased Job Opportunities-Professionals gain access to a steady flow of construction jobs from various customers.\n✔ Fair & Transprent Compensation- A structured payment system ensures fair earnings and timely disbursements.\n✔ Skill Development & apprenticeship- Builders can upskill through JaGedo's in-app apprenticeship program, improving their competitiveness.\n✔ Collaborative Work Environment- The Platform enables teamwork and networking with other professionals, leading to better project execution.\n✔ Guaranteed Payments- The structured milestone-based payment system minimizes the risk of non-payment and disputes."); */
          setSteps([
            { 
              id: 1, 
              title: "Sign up & Set Profile.", 
              icon: "📝" 
            },
            { id: 2, title: "Receive Requests.", icon: "📄" },
            { id: 3, title: "Bid and win.", icon: "💰" },
            { id: 4, title: "Job Execution Updates.", icon: "📊" },
            { id: 5, title: "Get Paid and Reviewed.", icon: "✅" },
          ]);
          setBenefits([
            <p className="flex items-start gap-3 mb-1.5" key="1"><span>{GreenCheckIcon}</span>Increased Job Opportunities-Professionals gain access to a steady flow of construction jobs from various customers.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="2"><span>{GreenCheckIcon}</span>Fair & Transprent Compensation- A structured payment system ensures fair earnings and timely disbursements.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="3"><span>{GreenCheckIcon}</span>Skill Development & apprenticeship- Builders can upskill through JaGedo`s in-app apprenticeship program, improving their competitiveness.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="4"><span>{GreenCheckIcon}</span>Collaborative Work Environment- The Platform enables teamwork and networking with other professionals, leading to better project execution.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="5"><span>{GreenCheckIcon}</span>Guaranteed Payments- The structured milestone-based payment system minimizes the risk of non-payment and disputes.</p>,
          ]);  
          break;
        case "Contractor":
          setImage(SteveImg);
          // setSteps("1. Sign up & Set Profile.\n2. Receive Requests.\n3. Bid and win. \n4. Job Execution Updates. \n5. Get Paid and Reviewed.");
          /* setBenefits("✔Increased Job Opportunities-Contractor gain access to a steady flow of construction jobs from various customers.\n✔ Fair & Transprent Compensation- A structured payment system ensures fair earnings and timely disbursements.\n✔ Skill Development & apprenticeship- Builders can upskill through JaGedo's in-app apprenticeship program, improving their competitiveness.\n✔ Collaborative Work Environment- The Platform enables teamwork and networking with other professionals, leading to better project execution.\n✔ Guaranteed Payments- The structured milestone-based payment system minimizes the risk of non-payment and disputes.");  */
          setSteps([
            { 
              id: 1, 
              title: "Sign up & Set Profile.", 
              icon: "📝" 
            },
            { id: 2, title: "Receive Requests.", icon: "📄" },
            { id: 3, title: "Bid and win.", icon: "💰" },
            { id: 4, title: "Job Execution Updates.", icon: "📊" },
            { id: 5, title: "Get Paid and Reviewed.", icon: "✅" },
          ]);
          setBenefits([
            <p className="flex items-start gap-3 mb-1.5" key="1"><span>{GreenCheckIcon}</span>Increased Job Opportunities-Contractor gain access to a steady flow of construction jobs from various customers.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="2"><span>{GreenCheckIcon}</span>Fair & Transprent Compensation- A structured payment system ensures fair earnings and timely disbursements.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="3"><span>{GreenCheckIcon}</span>Skill Development & apprenticeship- Builders can upskill through JaGedo`s in-app apprenticeship program, improving their competitiveness.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="4"><span>{GreenCheckIcon}</span>Collaborative Work Environment- The Platform enables teamwork and networking with other professionals, leading to better project execution.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="5"><span>{GreenCheckIcon}</span>Guaranteed Payments- The structured milestone-based payment system minimizes the risk of non-payment and disputes.</p>,
          ]);      
          break;
        case "Hardware":
          setImage(VivianImg);
          // setSteps("1. Sign up & Set Profile.\n2. Receive Requests.\n3. Bid and win. \n4. Job Execution Updates. \n5. Get Paid and Reviewed.");
          /* setBenefits("✔Increased Job Opportunities-Hardwares gain access to a steady flow of construction jobs from various customers.\n✔ Fair & Transprent Compensation- A structured payment system ensures fair earnings and timely disbursements.\n✔ Skill Development & apprenticeship- Builders can upskill through JaGedo's in-app apprenticeship program, improving their competitiveness.\n✔ Collaborative Work Environment- The Platform enables teamwork and networking with other professionals, leading to better project execution.\n✔ Guaranteed Payments- The structured milestone-based payment system minimizes the risk of non-payment and disputes.");  */ 
          setSteps([
            { 
              id: 1, 
              title: "Sign up & Set Profile.", 
              icon: "📝" 
            },
            { id: 2, title: "Receive Requests.", icon: "📄" },
            { id: 3, title: "Bid and win.", icon: "💰" },
            { id: 4, title: "Job Execution Updates.", icon: "📊" },
            { id: 5, title: "Get Paid and Reviewed.", icon: "✅" },
          ]);
          setBenefits([
            <p className="flex items-start gap-3 mb-1.5" key="1"><span>{GreenCheckIcon}</span>Increased Job Opportunities-Hardwares gain access to a steady flow of construction jobs from various customers.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="2"><span>{GreenCheckIcon}</span>Fair & Transprent Compensation- A structured payment system ensures fair earnings and timely disbursements.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="3"><span>{GreenCheckIcon}</span>Skill Development & apprenticeship- Builders can upskill through JaGedo`s in-app apprenticeship program, improving their competitiveness.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="4"><span>{GreenCheckIcon}</span>Collaborative Work Environment- The Platform enables teamwork and networking with other professionals, leading to better project execution.</p>,
            <p className="flex items-start gap-3 mb-1.5" key="5"><span>{GreenCheckIcon}</span>Guaranteed Payments- The structured milestone-based payment system minimizes the risk of non-payment and disputes.</p>,
          ]);
          break;
        default:
          setImage(null);
          setSteps("");
          setBenefits("");
      }
    };
  


  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-gray-200"
    >
      {/* Navbar */}
      <motion.nav 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="flex justify-between items-center px-6 py-4 bg-white shadow-md relative"
      >
        <img src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75" alt="Logo" className="w-32 md:w-56 lg:w-60 h-auto mr-auto" />
        <div className="hidden md:flex space-x-4 ml-auto">
          {['LOGIN', 'SHOPAPP'].map((text, index) => (
            <button
              type="button"
              key={index}
              className="bg-[rgb(0,0,122)] text-white min-h-[48px] py-2 px-6 rounded-full shadow-md hover:scale-110 hover:transition duration-900 ease-in-out hover:bg-[#FFD700] hover:text-black hover:cursor-pointer flex items-center justify-center sm:w-36 md:w-32"
            >
              {text}
            </button>
          ))}
        </div>
        <div 
          role="button"
          tabIndex={0}
          className="md:hidden hover:cursor-pointer" 
          onClick={() => setMenuOpen(!menuOpen)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setMenuOpen(!menuOpen);
            }
          }}
        >
          {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {menuOpen && (
          <div className="absolute top-16 right-2 rounded-lg w-48 bg-gray-200 shadow-md flex flex-col items-center space-y-2 p-4 md:hidden">
            {['LOGIN', 'SHOPAPP'].map((text, index) => (
              <button
              type="button"
                key={index}
                className="bg-[rgb(0,0,122)] text-white min-h-[48px] py-2 px-6 rounded-full shadow-md hover:scale-110 hover:transition duration-900 ease-in-out hover:bg-[#FFD700] hover:text-black hover:cursor-pointer flex items-center justify-center w-full"
              >
                {text}
              </button>
            ))}
          </div>
        )}
      </motion.nav>

        {/*
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} 
        className="flex justify-center items-center p-8 bg-gray-100"
      >
        <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Customer Card 
          <div
            className={`w-72 p-6 rounded-lg border-2 cursor-pointer focus:outline-none bg-[rgba(85,143,210,0.76)] transition-all ${
              selected === "Customer" ? "bg-blue-600" : "border-gray-300"
            }`}
            onClick={() => setSelected("Customer")}
          >
            <div className="flex items-center gap-2">
                <h2 className="text-lg font-bold text-white">Customer</h2>
              </div>
          </div>


          <div
            className={`w-72 p-6 bg-[rgba(85,143,210,0.76)] focus:outline-none rounded-lg border-2 cursor-pointer transition-all ${
              selected === "Fundi" ? "bg-blue-800" : "border-gray-300"
            }`}
            onClick={() => setSelected("Fundi")}
          >
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white">Fundi</h2>
            </div>
          </div>


          <div
            className={`w-72 p-6 bg-[rgba(85,143,210,0.76)] focus:outline-none rounded-lg border-2 cursor-pointer transition-all ${
              selected === "Professional" ? "bg-blue-800" : "border-gray-300"
            }`}
            onClick={() => setSelected("Professional")}
          >
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white">Professional</h2>
            </div>
          </div>

          {/* Contractor card 
          <div
            className={`w-72 p-6 bg-[rgba(85,143,210,0.76)] focus:outline-none rounded-lg border-2 cursor-pointer transition-all ${
              selected === "Contractor" ? "bg-blue-800" : "border-gray-300"
            }`}
            onClick={() => setSelected("Contractor")}
          >
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white">Contractor</h2>
            </div>
          </div>


          {/* Hardware card 
          <div
            className={`w-72 p-6 bg-[rgba(85,143,210,0.76)] focus:outline-none rounded-lg border-2 cursor-pointer transition-all ${
              selected === "Hardware" ? "bg-blue-800" : "border-gray-300"
            }`}
            onClick={() => setSelected("Hardware")}
          >
            <div className="flex items-center gap-2">
              <h2 className="text-lg font-bold text-white">Hardware</h2>
            </div>
          </div>
        </div>
      </motion.div>
      */}

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} 
        className="text-center py-12 px-6"
      >
        <h1 className="text-3xl font-bold">
          Join us today! Get special benefits and stay up-to-date.
        </h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-6 max-w-4xl mx-auto">
          {Object.keys(rolesData).map((role, index) => (
            <div key={index} className="flex flex-col items-center">
              <img
                src={rolesData[role].image}
                alt={role}
                className="h-16 w-16 rounded-full object-cover"
              />
              <p className="font-semibold mt-2">{role}</p>
            </div>
          ))}
        </div>
      
      </motion.div>

      {/* Signup Call-to-Action */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} 
        className="text-center bg-gray-200 py-8 px-6"
      >
        <h2 className="text-xl font-bold">A One Stop Construction Platform</h2>
        <button type="button" className="bg-[rgb(0,0,122)] text-white py-3 px-8 rounded-full shadow-lg hover:scale-110 hover:transition duration-900 ease-in-out hover:bg-[#FFD700] hover:cursor-pointer hover:text-black text-lg mt-6 font-medium transition-all">
            Sign Up For Free
        </button>
      </motion.div>

      {/* How It Works Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} 
        className="text-center bg-gray-200 py-10 px-6"
      >
        <h2 className="text-xl font-bold">How It Works</h2>
        <p className="mt-2 max-w-3xl mx-auto">
          Seamlessly connect with fundis, professionals, contractors, and hardware in just a few steps.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          {
          /*Object.keys(rolesData).map((role, index) => (
            <button
            type="button"
              key={index}
              onClick={() => setSelectedRole(role)}
              className={`py-2 px-4 rounded-full hover:cursor-pointer hover:scale-105 hover:transition duration-700 ease-in-out shadow-md transition ${
                selectedRole === role
                  ? "bg-green-600 text-white"
                  : "bg-[rgb(0,0,122)] text-white hover:bg-gray-600 hover:text-white"
              }`}
            >
              {role}
            </button>
          ))
          */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-4 justify-center my-1 mt-6">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryClick(category)}
                className={`bg-[rgb(0,0,122)] px-6 py-2 rounded-full flex flex-row gap-3 justify-center text-white shadow-md hover:cursor-pointer hover:scale-105 hover:transition duration-700 ease-in-out transition  ${
                  selectedCategory === category.name ? "bg-green-600 text-white" : " hover:bg-gray-400"
                }`}
              >
                {/*
                <div className="flex-shrink-0">
                  <img src={c} alt={selectedCategory} className="w-7 h-7 object-cover rounded-lg shadow-lg" />
                </div>
                */}
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </motion.div>


      {/* Steps Section 
      <div className="bg-gray-300 text-white min-h-screen flex flex-col items-center py-10">
        <div className="flex bg-white text-black p-6 rounded-lg shadow-lg w-4/5 sm:w-[95%] md:w-[95%] lg:w-[95%] my-4 mx-auto">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center space-x-2 p-3">
              
              <div className="flex items-center justify-center w-8 h-8 border-2 border-blue-600 rounded-full text-blue-600 font-bold">
                {step.id}
              </div>
              
              <div className="flex p-4 gap-3 bg-blue-900 text-white rounded-lg w-auto h-20 items-center shadow-md">
                <p className="text-sm">{step.icon}</p>
                <h3 className="font-bold">{step.title}</h3>
                {/* <p className="text-sm">{step.description}</p> 
              </div>
              {index !== steps.length - 1 && <span className="text-lg">➡️</span>}
            </div>
          ))}
        </div>
      </div>
      */}
      
      {selectedCategory && (
        /*
        <div className="flex flex-col items-center justify-center text-center mt-8 p-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-4xl">
            <img
              src={rolesData[selectedRole].image}
              alt={selectedRole}
              className="w-full max-w-xs md:max-w-md lg:max-w-lg h-auto rounded-lg shadow-lg transition duration-300 transform hover:scale-105"
            />
            <div className="bg-gray-100 p-6 md:p-8 rounded-lg shadow-md w-full max-w-md">
              <h3 className="text-xl font-bold mb-3 text-gray-800">{selectedRole} Steps</h3>
              <p className="text-gray-700 text-base leading-relaxed whitespace-pre-line">
                {rolesData[selectedRole].steps}
              </p>
            </div>
          </div>
        </div>
        */
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-black font-sans"
          >
            <div className="bg-[rgb(255, 255, 255)] p-4 hover:transition duration-700 ease-in-out md:p-8 w-4/5 sm:w-full my-4 mx-auto">
              <h3 className="text-xl font-bold mb-3 text-center text-black">How It Works</h3>
              <div className="flex items-center text-gray-100">
                {steps.map((step) => (
                  <div key={step.id} className="flex items-center justify-between space-x-2 p-3">
                    {/*
                    <div className="flex items-center justify-center w-8 h-8 border-2 border-blue-600 rounded-full text-blue-600 font-bold">
                      {step.id}
                    </div>
                    */}
                    <div className="flex p-4 gap-3 bg-gray-300 text-black rounded-lg w-auto h-20 items-center shadow-md relative">
                      <div className="flex absolute -top-4 -left-4 items-center justify-center w-8 h-8 bg-gray-300 border-2 border-gray-300 rounded-full text-black font-bold">
                        {step.id}
                      </div>
                      <p className="text-lg">{step.icon}</p>
                      <h3 className="font-bold">{step.title}</h3>
                    </div>
                    {step.id !== steps.length && (
                    <span className="text-5xl text-gray-400">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
    
    
            <div className="flex flex-col md:flex-row gap-6 items-center px-6 md:px-12 lg:px-20">
          
            {/* 
            <div className="flex-shrink-0">
              <img src={image} alt={selectedCategory} className="w-7 h-7 object-cover rounded-lg shadow-lg" />
            </div>
            */}
    
              
            <div className="flex flex-col w-full md:flex-row gap-3">
              {/*
              <div className="bg-gray-600 p-6 hover:scale-105 hover:transition duration-700 ease-in-out md:p-8 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-bold mb-3 text-gray-100">How It Works</h3>
                <p className="text-gray-100 text-base leading-relaxed whitespace-pre-line">{steps}</p>
              </div>
              */}
              <div className="flex-shrink-0 w-full md:w-[50%] lg:w-[50%]">
                <img src={image} alt={selectedCategory} className="object-cover rounded-lg shadow-lg" />
              </div>
    
              <div className="bg-white p-6 hover:scale-105 hover:transition duration-700 ease-in-out md:p-8 rounded-lg shadow-md md:w-[50%]">
                <h3 className="text-xl font-bold mb-3 text-gray-600">Benefits</h3>
                <p className="text-gray-600 text-base leading-relaxed whitespace-pre-line">{benefits}</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      <motion.footer
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }} 
        className="mt-16 bg-[rgb(0,0,122)] text-white py-12 px-6"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* About Us Section */}
          <div className="space-y-3">
            <h3 className="font-bold text-xl mb-3">About Us</h3>
            <p className="hover:text-[#FFD700] cursor-pointer transition duration-300">Susrecomm Enterprises</p>
            <p className="hover:text-[#FFD700] cursor-pointer transition duration-300">Helpdesk</p>
          </div>
  
          {/* Quick Links Section */}
          <div className="space-y-3">
            <h3 className="font-bold text-xl mb-3">Quick Links</h3>
            <p className="hover:text-[#FFD700] cursor-pointer transition duration-300">Terms Of Service</p>
            <p className="hover:text-[#FFD700] cursor-pointer transition duration-300">
              Privacy and Data Protection Policy
            </p>
          </div>
  
          {/* Contacts Section */}
          <div className="space-y-3">
            <h3 className="font-bold text-xl mb-3">Contacts</h3>
            <p className="text-gray-300">+254 113 273 333</p>
            <p>
              <a href="mailto:info@jagedo.co.ke" className="text-[#FFD700] hover:underline transition duration-300">
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
                  className={`text-xl p-3 bg-[rgb(0,0,122)] text-white rounded-full hover:bg-[#FFD700] hover:text-${color} transition duration-300 transform hover:scale-110 shadow-md`}
                >
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

export default LandingPage2;
