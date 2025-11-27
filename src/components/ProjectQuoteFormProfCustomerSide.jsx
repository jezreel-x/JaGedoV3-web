import { useState,lazy, Suspense } from "react";
import PropTypes from "prop-types";
// import AdminSideNav from "../components/Navigation/AdminSideNav";
import ProfessionalActiveJobNav from "../pages/customer/customerLanding/ProfessionalActiveJobNav";



const NavigationBar = lazy(() => import("../components/Navigation/NavigationBar"));

// Quote Section Component
const QuoteSection = ({ expandedBill, setExpandedBill }) => {
  const bills = [
    {
      id: 1,
      title: "Material Cost",
      amount: "$500",
      details: [
        {
          no: 1,
          description: "Cement",
          qty: 10,
          uom: "Bags",
          rate: "$50",
          amount: "$500",
        },
      ],
    },
    {
      id: 2,
      title: "Labor",
      amount: "$300",
      details: [
        {
          no: 1,
          description: "Masonry Work",
          qty: 10,
          uom: "Hours",
          rate: "$30",
          amount: "$300",
        },
      ],
    },
  ];

  const toggleBill = (id) => {
    setExpandedBill(expandedBill === id ? null : id);
  };

  return (
     <>
        <Suspense fallback={<div>Loading navigation...</div>}>
            <NavigationBar />
          </Suspense>
          <ProfessionalActiveJobNav />
    <div className="max-w-6xl w-full min-h-[85vh] mx-auto p-6 bg-white shadow-md rounded-md flex flex-col">
    
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Bid</h2>

      <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">
          Bill Summary
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-blue-100 text-gray-800">
                <th className="border p-3">No</th>
                <th className="border p-3">Bill</th>
                <th className="border p-3 text-right">Amount</th>
              </tr>
            </thead>
            <tbody>
              {bills.map((bill) => (
                <Fragment key={bill.id}>
                  <tr
                    className="cursor-pointer hover:bg-gray-100 transition"
                    onClick={() => toggleBill(bill.id)}
                  >
                    <td className="border p-3 text-center">{bill.id}</td>
                    <td className="border p-3">{bill.title}</td>
                    <td className="border p-3 text-right">{bill.amount}</td>
                  </tr>

                  {expandedBill === bill.id && (
                    <tr>
                      <td colSpan="3" className="border p-4 bg-gray-50">
                        <h4 className="text-lg font-medium mb-2">
                          Bill No {bill.id}: {bill.title}
                        </h4>
                        <table className="w-full text-sm border-collapse">
                          <thead>
                            <tr className="bg-gray-200 text-gray-800">
                              <th className="border p-2">No</th>
                              <th className="border p-2">Description</th>
                              <th className="border p-2 text-center">QTY</th>
                              <th className="border p-2 text-center">UOM</th>
                              <th className="border p-2 text-right">Rate</th>
                              <th className="border p-2 text-right">Amount</th>
                            </tr>
                          </thead>
                          <tbody>
                            {bill.details.map((detail, index) => (
                              <tr key={index} className="bg-white">
                                <td className="border p-2 text-center">{detail.no}</td>
                                <td className="border p-2">{detail.description}</td>
                                <td className="border p-2 text-center">{detail.qty}</td>
                                <td className="border p-2 text-center">{detail.uom}</td>
                                <td className="border p-2 text-right">{detail.rate}</td>
                                <td className="border p-2 text-right">{detail.amount}</td>
                              </tr>
                            ))}
                            <tr className="bg-gray-100 font-semibold">
                              <td colSpan="5" className="border p-2 text-right">
                                Subtotal:
                              </td>
                              <td className="border p-2 text-right">
                                {bill.amount}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="mt-4 text-right text-lg font-semibold">
                          Grand Total:{" "}
                          <span className="text-green-600">$800</span>
                        </div>
                      </td>
                    </tr>
                  )}
                </Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

// Main Component
import { Fragment } from "react";

const ProjectQuoteForm = () => {
  const [activeSection] = useState("Quote");
  const [expandedBill, setExpandedBill] = useState(null);
  
  
  QuoteSection.propTypes = {
    expandedBill: PropTypes.any.isRequired, // or PropTypes.number, PropTypes.string, etc.
    setExpandedBill: PropTypes.func.isRequired,
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* <AdminSideNav /> */}

      <main className="flex-1 overflow-hidden">
        {activeSection === "Quote" && (
          <QuoteSection
            expandedBill={expandedBill}
            setExpandedBill={setExpandedBill}
          />
        )}
      </main>
    </div>
  );
};

export default ProjectQuoteForm;
