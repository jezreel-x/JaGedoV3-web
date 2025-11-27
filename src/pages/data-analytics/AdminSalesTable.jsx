import { useState } from "react";
import DataAnalyticsSidebar from "./DataAnalyticsSidebar";
import AdminNavigationBar from "../../components/Navigation/AdminNav";

const dummyData = Array.from({ length: 20 }, (_, i) => ({
  no: i + 1,
  date: new Date(2023, i % 12, (i % 28) + 1).toLocaleDateString("en-GB"), // DD/MM/YYYY
  location: ["US", "Canada", "Kenya", "South Africa", "Nigeria", "Uganda", "Tanzania", "Germany"][i % 8],
  request: ["Professional", "Contractor", "Fundi", "Hardware"][i % 4],
  managedBy: ["JaGedo", "Self"][i % 2],
  receipt: `R${1000 + i}`,
  payment: Math.floor(Math.random() * 100000 + 10000), // Random payment between 10,000 and 110,000
  executedAmount: Math.floor(Math.random() * 50000 + 10000), // Random executed amount between 10,000 and 60,000
  balance: Math.floor(Math.random() * 50000 + 10000), // Random balance between 10,000 and 60,000
  commission: Math.floor(Math.random() * 10000 + 1000), // Random commission between 1,000 and 11,000
}));

const AdminSalesTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalPages = Math.ceil(dummyData.length / rowsPerPage);
  const indexOfLast = currentPage * rowsPerPage;
  const indexOfFirst = indexOfLast - rowsPerPage;
  const currentRows = dummyData.slice(indexOfFirst, indexOfLast);

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className="flex">
        <DataAnalyticsSidebar />
        <AdminNavigationBar />

        <main className="flex-1 ml-64 mt-20 p-6 space-y-6 overflow-y-auto bg-white text-gray-800 min-h-screen">
            <h2 className="text-xl font-bold mb-4">Analytics - Sales</h2>
            <table className="w-full bg-white rounded-lg overflow-hidden text-sm">
                <thead className="bg-gray-100 text-gray-600">
                    <tr className="border-b border-gray-100">
                        <th className="p-2 text-left font-semibold whitespace-nowrap">No</th>
                        <th className="p-2 text-left font-semibold whitespace-nowrap">Date</th>
                        <th className="p-2 text-left font-semibold whitespace-nowrap">Location</th>
                        <th className="p-2 text-left font-semibold whitespace-nowrap">Request</th>
                        <th className="p-2 text-left font-semibold whitespace-nowrap">Managed By</th>
                        <th className="p-2 text-left font-semibold whitespace-nowrap">Receipt</th>
                        <th className="p-2 text-left font-semibold whitespace-nowrap">Payment</th>
                        <th className="p-2 text-left font-semibold whitespace-nowrap">Executed Amount</th>
                        <th className="p-2 text-left font-semibold whitespace-nowrap">Balance</th>
                        <th className="p-2 text-left font-semibold whitespace-nowrap">Commission</th>
                    </tr>
                </thead>
                <tbody>
                {currentRows.map((row, index) => (
                    <tr key={index} className={`hover:bg-gray-100 cursor-pointer transition-colors duration-200
                        ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                        <td className="text-gray-600 p-2">{row.no}</td>
                        <td className="text-gray-600 p-2">{row.date}</td>
                        <td className="text-gray-600 p-2">{row.location}</td>
                        <td className="text-gray-600 p-2">{row.request}</td>
                        <td className="text-gray-600 p-2">{row.managedBy}</td>
                        <td className="text-gray-600 p-2">{row.receipt}</td>
                        <td className="text-gray-600 p-2">Ksh {row.payment.toLocaleString()}</td>
                        <td className="text-gray-600 p-2">Ksh {row.executedAmount.toLocaleString()}</td>
                        <td className="text-gray-600 p-2">Ksh {row.balance.toLocaleString()}</td>
                        <td className="text-gray-600 p-2">Ksh {row.commission.toLocaleString()}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center mt-4">
                <div className="flex items-center gap-3">
                    <label htmlFor="rows" className="text-sm font-medium">Rows per page:</label>
                    <select
                        id="rows"
                        value={rowsPerPage}
                        onChange={(e) => {
                        setRowsPerPage(Number(e.target.value));
                        setCurrentPage(1);
                        }}
                        className="border rounded px-2 py-1 text-sm"
                    >
                        {[5, 10, 15].map((num) => (
                        <option key={num} value={num}>{num}</option>
                        ))}
                    </select>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={handlePrev}
                        disabled={currentPage === 1}
                        className={`px-4 py-2 rounded cursor-pointer ${currentPage === 1 ? 'bg-gray-300' : 'bg-[rgb(0,0,112)] text-white'}`}
                    >
                        Prev
                    </button>
                    <span className="text-sm">Page {currentPage} of {totalPages}</span>
                    <button
                        onClick={handleNext}
                        disabled={currentPage === totalPages}
                        className={`px-4 py-2 rounded cursor-pointer ${currentPage === totalPages ? 'bg-gray-300' : 'bg-[rgb(0,0,112)] text-white'}`}
                    >
                        Next
                    </button>
                </div>
            </div>

            {/* Optional Commission Rate Footer */}
            <div className="mt-6 text-sm italic text-gray-600">
                Effective commission rate = Total Commission / TTV
            </div>
        </main>
    </div>
  );
};

export default AdminSalesTable;
