import { lazy, Suspense } from "react";

// import AdminSideNav from "../../components/Navigation/AdminSideNav";

import BuilderProfPastJobTabs from "../../../pages/customer/customerLanding/BuilderProfPastJobTabs";

const NavigationBar = lazy(() => import("../../../components/Navigation/NavigationBar"));



const customerData = {
  customerImage: "/images/woman1.jpg",
  type: "Organization",
  name: "Acme Ltd.",
  contactPerson: "Grace Oloo",
  phone: "0700001111",
  email: "grace@acme.com",
};

// components/CustomerPage.js
export default function CustomerPage() {
  
  
  

 

  return (
    <>
  
 <Suspense fallback={<div>Loading navigation...</div>}>
    <NavigationBar />
  </Suspense>
  <BuilderProfPastJobTabs />
  

      <div className="flex h-screen bg-white">
        {/* Sidebar */}
       
            {/* <AdminSideNav /> */}

        {/* Main Section */}
        <div className="flex-1 p-10 overflow-y-auto">
          <div className="bg-white shadow-xl rounded-3xl p-10 flex flex-col items-center justify-center text-center max-w-xl mx-auto border border-gray-200">
            {/* Avatar */}
            <img
              src={customerData.customerImage}
              alt="Customer"
              className="w-60 h-60 rounded-full object-cover shadow-lg border-4 border-green-500 mb-6"
            />

            {/* Text Content */}
            <h2 className="text-4xl font-bold text-gray-800 mb-2">
              {customerData.contactPerson}
            </h2>
            <p className="text-2xl text-gray-600">{customerData.type}</p>
            <p className="text-2xl text-gray-600 mb-6">{customerData.name}</p>

            <div className="w-full space-y-4 text-left">
              <div>
                <h3 className="text-lg font-semibold text-gray-500">Phone</h3>
                <p className="text-lg text-gray-800">{customerData.phone}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-500">Email</h3>
                <p className="text-lg text-gray-800">{customerData.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
