import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import NavigationBar from "../../../components/Navigation/NavigationBar";

const invoices = [
  {
    reqNo: "F001",
    created: { date: "2025-06-01", time: "10:00 AM" },
    dueDate: { date: "2025-06-10", time: "5:00 PM" },
    amount: 2500,
    status: "Paid",
  },
  {
    reqNo: "C001",
    created: { date: "2025-06-03", time: "12:00 PM" },
    dueDate: { date: "2025-06-12", time: "3:00 PM" },
    amount: 2500,
    status: "Paid",
  },
  {
    reqNo: "P001",
    created: { date: "2025-06-05", time: "09:00 AM" },
    dueDate: { date: "2025-06-15", time: "1:00 PM" },
    amount: 2500,
    status: "Paid",
  },
  {
    reqNo: "H001",
    created: { date: "2025-06-07", time: "11:30 AM" },
    dueDate: { date: "2025-06-17", time: "4:00 PM" },
    amount: 2500,
    status: "Paid",
  },
];

const rowsPerPageOptions = [5, 10, 20, 50];

export default function Invoice() {
  const navigate = useNavigate();

  const [sortField, setSortField] = useState("created");
  const [sortDirection, setSortDirection] = useState("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const totalPages = Math.ceil(invoices.length / rowsPerPage);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedInvoices = [...invoices].sort((a, b) => {
    let aField = sortField === "amount" ? a.amount : new Date(a[sortField].date);
    let bField = sortField === "amount" ? b.amount : new Date(b[sortField].date);
    return sortDirection === "asc" ? aField - bField : bField - aField;
  });

  const paginatedInvoices = sortedInvoices.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );

  const getStatusBadge = () => (
    <span className="px-2 py-1 text-xs font-medium rounded bg-green-100 text-green-800">
      Paid
    </span>
  );

  return (
    <>
      <NavigationBar />
      <div className="w-full bg-white min-h-screen">
        <div className="max-w-7xl mx-auto pt-32">
          <Link
            to="/customer"
            className="font-semibold hover:text-[rgb(0,0,122)] flex items-center pb-8"
          >
            Home . Receipts
          </Link>

          <div className="flex justify-end gap-4 pb-4">
            <a
              href="/receipts/sample_receipt.pdf"
              download
              className="flex items-center gap-2 bg-green-50 hover:bg-green-100 px-4 py-2 rounded-lg border border-gray-200 text-green-700 font-medium text-sm"
            >
              <ArrowDownTrayIcon className="w-5 h-5" />
              Download Receipt
            </a>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-50">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-100 text-gray-600">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-medium uppercase">Req No.</th>
                    <th className="px-6 py-4 text-left">
                      <button onClick={() => handleSort("created")} className="flex items-center gap-1">
                        Created{" "}
                        <ChevronDown className={`h-4 w-4 ${sortField === "created" && sortDirection === "desc" ? "rotate-180" : ""}`} />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <button onClick={() => handleSort("dueDate")} className="flex items-center gap-1">
                        Due Date{" "}
                        <ChevronDown className={`h-4 w-4 ${sortField === "dueDate" && sortDirection === "desc" ? "rotate-180" : ""}`} />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <button onClick={() => handleSort("amount")} className="flex items-center gap-1">
                        Amount{" "}
                        <ChevronDown className={`h-4 w-4 ${sortField === "amount" && sortDirection === "desc" ? "rotate-180" : ""}`} />
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-medium uppercase">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {paginatedInvoices.map((invoice, index) => (
                    <tr
                      key={index}
                      onClick={() => navigate("/customer/invoice/details")}
                      className="cursor-pointer hover:bg-blue-50"
                    >
                      <td className="px-6 py-4 font-medium text-gray-600">{invoice.reqNo}</td>
                      <td className="px-6 py-4">
                        <div>{invoice.created.date}</div>
                        <div className="text-sm text-gray-500">{invoice.created.time}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div>{invoice.dueDate.date}</div>
                        <div className="text-sm text-gray-500">{invoice.dueDate.time}</div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">Ksh {invoice.amount.toFixed(2)}</td>
                      <td className="px-6 py-4">{getStatusBadge()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Rows per page:</span>
                <select
                  value={rowsPerPage}
                  onChange={(e) => setRowsPerPage(Number(e.target.value))}
                  className="border px-2 py-1 rounded"
                >
                  {rowsPerPageOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <span>Page {currentPage} of {totalPages}</span>
                <button onClick={() => setCurrentPage(1)} disabled={currentPage === 1} className="p-1">
                  <ChevronsLeft className="h-4 w-4" />
                </button>
                <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="p-1">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="p-1">
                  <ChevronRight className="h-4 w-4" />
                </button>
                <button onClick={() => setCurrentPage(totalPages)} disabled={currentPage === totalPages} className="p-1">
                  <ChevronsRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
