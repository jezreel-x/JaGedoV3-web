import AdminSideNav from "../components/Navigation/AdminSideNav";
import { lazy, Suspense } from "react";
const NavigationBar = lazy(() => import("../components/Navigation/NavigationBar"));
import AdminActiveJobTabs from "../pages/customer/customerLanding/AdminActiveJobTabs";
// Builder data
const builderData = {
  builderImage: "/images/constructor1.jpg",
  organisation: "Jagedo Construction Ltd.",
  contractor: "Jagedo Contractors",
  contactPerson: "John Kamau",
  firstName: "Edwin",
  lastName: "Sifuna",
  phoneNo: "0114212111",
  email: "sifuna@gmail.com",
};

export default function AdminPortal() {
  return (

     <>
            <Suspense fallback={<div>Loading navigation...</div>}>
                <NavigationBar />
              </Suspense>
              <AdminActiveJobTabs />
    <div className="flex h-screen bg-white">
      <AdminSideNav />

      {/* Main Section */}
      <div className="flex-1 p-10 overflow-y-auto">
        <div className="bg-white shadow-xl rounded-8xl p-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto border border-gray-200">
          {/* Avatar */}
          <img
            src={builderData.builderImage}
            alt="Builder"
            className="w-60 h-60 rounded-full object-cover shadow-lg border-4 border-green-500 mb-6"
          />

          {/* Text Content */}
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            {builderData.contactPerson}
          </h2>
          <p className="text-2xl text-gray-600">{builderData.organisation}</p>
          <p className="text-2xl text-gray-600 mb-6">
            {builderData.contractor}
          </p>

          <div className="w-full space-y-4 text-left">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                {" "}
                Contact Person
              </h2>
              <h3 className="text-lg font-semibold text-gray-500">Full Name</h3>
              <p className="text-lg text-gray-800">
                {builderData.firstName} {builderData.lastName}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-500">Phone</h3>
              <p className="text-lg text-gray-800">{builderData.phoneNo}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-500">Email</h3>
              <p className="text-lg text-gray-800">{builderData.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
