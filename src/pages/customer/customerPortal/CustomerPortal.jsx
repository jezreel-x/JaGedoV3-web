import { Link } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import ManageByJagedo from "./forms/ManageByJagedo";
import CustomerNavBar from "../customerLanding/CustomerNavBar";
import Chatbot from "../../../pages/customer/customerPortal/ChatBot";
const NavigationBar = lazy(() => import("../../../components/Navigation/NavigationBar"));

const CustomerPortal = () => {
  const [userRole, setUserRole] = useState("");

  const user = JSON.parse(localStorage.getItem("user"));
  

  useEffect(() => {
    if (user?.role) {
      setUserRole(user.role.toLowerCase()); // assuming role is like 'Fundi' or 'Professional'
    }
  }, [user]);

  const requisitionPath =
    userRole === "fundi"
      ? "/customer"
      : userRole === "fundi"
        ? "/request-fundi" // updated to match your requirement
        : "/customer"; // fallback remains the same

  return (
    <section className="container mx-auto mt-7">
      <NavigationBar />

      <CustomerNavBar />

      <Chatbot />

      <header className="container mx-auto px-1">
        <div className="bg-white p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                Welcome - {user.name}
              </h1>
            </div>
          </div>
        </div>
      </header>

      {/* Cards Section */}
      <section className="mt-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {/* Requisition Card - Dynamic */}
          <Link to={requisitionPath}>
            <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 bg-[rgb(0,0,122)]">
              <img src="/fundi.png" className="h-12 md:h-16 mr-2 md:mr-0" alt="Requisition" />
              <p className="mt-2 text-lg font-semibold text-white">Fundi</p>
            </div>
          </Link>

          {/* Other Cards (Static) */}
          <Link to="/customer/request-professional">
            <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md bg-blue-200 hover:bg-opacity-70 p-4 transition">
              <img
                src="/professional.png"
                className="h-12 md:h-16 mr-2 md:mr-0"
                alt="Professional"
              />
              <p className="mt-2 text-lg font-semibold text-black">Professional</p>
            </div>
          </Link>

          <Link to="/customer/request-contractor">
            <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition bg-blue-200 hover:bg-opacity-70">
              <img src="/contractor.png" className="h-12 md:h-16 mr-2 md:mr-0" alt="Contractor" />
              <p className="mt-2 text-lg font-semibold text-black">Contractor</p>
            </div>
          </Link>

          <Link to="/customer/hardware_shop">
            <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition bg-blue-200 hover:bg-opacity-70">
              <img src="/hardware.png" className="h-12 md:h-16 mr-2 md:mr-0" alt="Hardware" />
              <p className="mt-2 text-lg font-semibold text-black">Shop App</p>
            </div>
          </Link>
        </div>
      </section>

      {/* Form Section */}
      <section className="mt-10">
        <ManageByJagedo />
      </section>
    </section>
  );
};

export default CustomerPortal;
