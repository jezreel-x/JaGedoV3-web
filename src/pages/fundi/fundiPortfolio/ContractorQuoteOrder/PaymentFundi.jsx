
import { lazy, Suspense } from "react";
import ActiveFundiNav from "./ActiveFundiNav";

const NavigationBar = lazy(
  () => import("../../../../components/Navigation/NavigationBar")
);

const PaymentFundi = () => {
  return (
    <>
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>
       <br />
      <br />
      <br />  
      <br /> 
      <ActiveFundiNav />

      {/* Reduced top spacing by replacing py-10 with pt-4 pb-6 */}
      <div className="min-h-screen flex items-start justify-center bg-gray-100 pt-4 pb-6">
        <div className="max-w-6xl w-full mx-auto p-4 sm:p-6 bg-white shadow-md rounded-md flex flex-col space-y-6">
          <h1 className="text-2xl font-semibold text-gray-600 mt-2 mb-4">
            Payment Summary
          </h1>

          <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 border border-gray-200 mb-6">
            <div className="flex justify-between items-center mb-4">
              <span>Paid by Customer</span>
              <span className="font-semibold text-gray-800">KSH 180,000</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>JaGedo Commission @30% inclusive VAT</span>
              <span className="font-semibold text-gray-800">KSH 80,000</span>
            </div>

            <div className="border-t pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="text-base sm:text-lg font-semibold text-gray-700">
                  Payable to Professional
                </span>
                <span className="text-base sm:text-lg font-bold text-[rgb(0,0,122)]">
                  KSH 100,000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentFundi;
