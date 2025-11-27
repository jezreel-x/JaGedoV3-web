
import { useState, useRef, useEffect, lazy} from "react";
import { IoIosPrint } from "react-icons/io";
import { FaDownload } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";
import CustomerNavBar from "../../customerLanding/CustomerNavBar";


const NavigationBar = lazy(() => import("../../../../components/Navigation/NavigationBar"));

const RequisitionInvoice = () => {
  const [paymentMade, setPaymentMade] = useState(false);
  const [phone, setPhone] = useState("");
  const invoiceRef = useRef(null);
  const [data, setFormData] = useState([]);
  const navigate = useNavigate();

  const handlePrint = () => window.print();

  const handleDownload = () => {
    const element = invoiceRef.current;
    html2pdf().from(element).save("invoice.pdf");
  };

  useEffect(() => {
    const storedData = localStorage.getItem("fundiRequest");
    if (storedData) {
      setFormData(JSON.parse(storedData));
    }
  }, []);

  const handlePaymentClick = () => {
    if (phone.trim()) {
      const invoiceData = {
        to: "Frank Customer",
        number: "Fr#4468",
        sum: "3000",
        total: "3000",
        vat: "480.00",
        excludingVat: "2520",
        totalCost: "3000",
        phone: phone,
        status: "Paid",
      };

      const combined = {
        ...data,
        ...invoiceData,
      };

      localStorage.setItem("invoiceData", JSON.stringify(combined));
      setPaymentMade(true);

      setTimeout(() => {
        navigate("/customer/new");
      }, 2000);
    } else {
      alert("Please enter your phone number before proceeding with payment.");
    }
  };

  return (
    <>
        <NavigationBar />

      <CustomerNavBar />

      <div
        ref={invoiceRef}
        className="max-w-[794px] mx-auto bg-white shadow-xl rounded-2xl p-8 border border-gray-200 mt-4"
      >
        {/* Payment Status */}
        <div className="flex justify-end mb-6">
          <span
            className={`text-sm font-bold px-4 py-1 rounded-full uppercase tracking-wide ${
              paymentMade
                ? "bg-green-100 text-green-700 border border-green-300"
                : "bg-red-100 text-red-700 border border-red-300"
            }`}
          >
            {paymentMade ? "Paid" : "Unpaid"}
          </span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-6">
          <img
            src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75"
            alt="Logo"
            className="h-16 md:h-20"
          />
          <div className="flex space-x-4 mt-6 md:mt-0">
            <button
            type="button"
              onClick={handlePrint}
              className="flex items-center px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm transition"
            >
              <IoIosPrint className="mr-2" /> Print
            </button>
            <button
            type="button"
              onClick={handleDownload}
              className="flex items-center px-5 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md text-sm transition"
            >
              <FaDownload className="mr-2" /> Download
            </button>
          </div>
        </div>

        {/* Invoice Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-gray-700 text-base">
          <div className="space-y-1">
            <p className="font-semibold">
              Fund Request To: <span className="font-normal">C001</span>
            </p>
            <p className="font-semibold">
              Request Type:{" "}
              <span className="font-normal">{data.managedBy}</span>
            </p>
            <p className="font-semibold">
              Skill: <span className="font-normal">{data.skill}</span>
            </p>
          </div>
          <div className="text-right space-y-1">
            <p className="font-semibold">
              Fund Request No: <span className="font-normal">Fr#4468</span>
            </p>
            <p className="font-semibold">
              Date: <span className="font-normal">{data.date}</span>
            </p>
          </div>
        </div>

        {/* Invoice Table */}
        <div className="overflow-x-auto mt-8 border rounded-lg">
          <table className="w-full text-sm text-left text-gray-800">
            <thead className="bg-gray-100 border-b">
              <tr>
                <th className="px-6 py-3 border-r">Description</th>
                <th className="px-6 py-3 border-r">Sum (KES)</th>
                <th className="px-6 py-3">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b hover:bg-gray-50">
                <td className="px-6 py-4 border-r">{data.description}</td>
                <td className="px-6 py-4 border-r">244,567</td>
                <td className="px-6 py-4">34,567</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Summary Table */}
        <div className="overflow-x-auto w-full md:w-1/2 ml-auto mt-10 border rounded-lg">
          <table className="w-full text-sm text-left text-gray-800">
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold text-center">Total (KES)</td>
                <td className="px-6 py-4 text-center">10,000.00</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="px-6 py-4 font-semibold text-center">VAT 16%</td>
                <td className="px-6 py-4 text-center">1600.00</td>
              </tr>
              <tr className="hover:bg-gray-50 font-bold">
                <td className="px-6 py-4 text-center">Total Excluding VAT</td>
                <td className="px-6 py-4 text-center">8400.00</td>
              </tr>
              {paymentMade && (
                <tr className="hover:bg-gray-50 text-green-700 font-semibold">
                  <td className="px-6 py-4 text-center">
                    Paid by KE3D8CURS76EQNB-1:
                  </td>
                  <td className="px-6 py-4 text-center">10,000.00</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Payment Section */}
        {!paymentMade && (
          <div className="mt-10">
            <div className="flex justify-end mb-2">
              <label className="text-sm font-semibold text-gray-700">
                Enter phone number to make payment:
              </label>
            </div>
            <div className="flex flex-col sm:flex-row sm:justify-end sm:items-center gap-4">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g., 07XX..."
                className="w-full sm:w-[250px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button type="button"
                onClick={handlePaymentClick}
                className="px-6 py-2 bg-blue-900 hover:bg-blue-800 text-white rounded-md transition font-semibold"
              >
                Pay
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default RequisitionInvoice;
