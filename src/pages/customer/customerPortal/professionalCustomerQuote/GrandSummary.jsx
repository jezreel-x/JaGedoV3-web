import { lazy, Suspense } from "react";


import QuoteNavBar from "./QuoteNavBar";

const NavigationBar = lazy(
  () => import("../../../../components/Navigation/NavigationBar")
);


const ProBillSummary = () => {
  


  const summaryData = {
    grandTotal: "100000",
    commission: "348000",
    payable: "652000",
  };

  const rows = [
    { no: 1, description: "Professional Fees", amount: "75,000" },
    { no: 2, description: "Other Expenses", amount: "35,000" },
  ];

  

  return (
    <section className="container mx-auto mt-16 px-4">

      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>
<br></br>

      <QuoteNavBar />

      {/* Readonly Summary Section */}
      <div className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-all my-5">
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-300">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="px-4 py-2 text-gray-700 font-medium">NO</th>
                <th className="px-4 py-2 text-gray-600 font-medium">
                  Description
                </th>
                <th className="px-4 py-2 text-gray-600 font-medium text-right">
                  Amount (Kes)
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="px-4 py-2 text-gray-700">{row.no}</td>
                  <td className="px-4 py-2 text-gray-600">{row.description}</td>
                  <td className="px-4 py-2 text-gray-600 text-right">{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex flex-col items-end gap-4 mt-4">
        <div className="w-full sm:w-[500px] p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
          <span className="text-gray-600 text-sm">Grand Total (Kes)</span>
          <span className="w-40 text-right font-bold text-xl">{summaryData.grandTotal}</span>
        </div>

        {/* <div className="w-full sm:w-[500px] p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
          <span className="text-gray-600 text-sm">Jagedo commission</span>
          <span className="w-40 text-right font-bold text-xl">{summaryData.commission}</span>
        </div>

        <div className="w-full sm:w-[500px] p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
          <span className="text-gray-600 text-sm">Payable to Service Provider</span>
          <span className="w-40 text-right font-bold text-xl">{summaryData.payable}</span>
        </div> */}
      </div>

   

      {/* Action Buttons */}
      {/* <div className="flex flex-col sm:flex-row justify-end gap-4 mt-8">
        <button
          onClick={() => navigate("/professional-expense2")}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-600 transition duration-300"
        >
          Back
        </button>

        

        <button
          type="button"
          onClick={() => navigate("/professional-payment-breakdown2")}
          style={{ backgroundColor: "rgb(0, 0, 122)" }}
          className="hover:bg-blue-900 text-white font-semibold px-6 py-2 rounded-lg"
        >
          Next
        </button>
      </div> */}
    </section>
  );
};

export default ProBillSummary;
