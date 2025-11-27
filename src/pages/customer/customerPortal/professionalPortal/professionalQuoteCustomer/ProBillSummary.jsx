import { FaEye } from "react-icons/fa";

const today = new Date().toLocaleDateString();

const ProBillSummary = () => 
     (
        <div className="max-w-4xl mx-auto p-8 ">
            {/* Project Details Dropdown */}
            <div className="bg-white rounded-lg p-4 border border-gray-200 cursor-pointer hover:shadow-lg transition-all my-5">
                {/* Top Row */}
                <div className="grid grid-cols-4 gap-4 items-center mb-4">
                    <span className="font-medium text-gray-800">REQ #3635</span>
                    <span className="text-gray-600 font-medium">Managed by Jagedo</span>
                    <span className="text-gray-600 font-medium">Req Date: {today}</span>
                    <span className="text-[rgb(0,0,122)] font-medium justify-self-end">View detail</span>
                </div>

                <hr className="border-gray-200 my-3" />

                {/* Bottom Row */}
                <div className="grid grid-cols-4 gap-2 items-center">
                    <span className="text-gray-700 font-medium">Details</span>
                    <span className="text-gray-600 font-medium">Location: Utawala, Nairobi</span>
                    <span className="text-gray-600 font-medium">Start Date: {today}</span>
                    <div className="justify-self-end">
                        <FaEye className="text-gray-500 w-5 h-5 hover:text-[rgb(0,0,122)] transition-colors mr-2" />
                    </div>
                </div>
            </div>

            {/* Bill Summary Section */}
            <div className="mb-8">
                <h2 className="text-lg font-bold mb-4">Bill Summary</h2>
                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm text-left">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="p-3 font-semibold">BILL NO</th>
                                <th className="p-3 font-semibold">DESCRIPTION</th>
                                <th className="p-3 font-semibold">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3">1</td>
                                <td className="p-3">Substructure</td>
                                <td className="p-3">7000,000</td>
                            </tr>
                            <tr>
                                <td className="p-3">2</td>
                                <td className="p-3">Superstructure</td>
                                <td className="p-3">3000,000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Summary Section */}
            <div className="flex flex-col items-end gap-4 mt-4">
                {/* Total (Kes) Tile */}
                <div className="w-150 p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
                    <span className="text-gray-600 text-sm">Total (Kes)</span>
                    <span className="font-bold text-xl">10,000,000</span>
                </div>

                {/* JaGedo Tile */}
                <div className="w-150 p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
                    <span className="text-gray-600 text-sm">JaGedo</span>
                    <span className="font-bold text-xl">750, 000</span>
                </div>

                {/* Payable to Service Provider Tile */}
                <div className="w-150 p-4 rounded-lg flex items-center justify-between border border-gray-300 bg-gray-50">
                    <span className="text-gray-600 text-sm">Payable to Service Provider</span>
                    <span className="font-bold text-xl">750, 000</span>
                </div>
            </div>

            {/* Notes Section */}
            <div className="mt-8">
                <h3 className="text-lg font-bold mb-2">Notes</h3>
                <p className="text-sm mb-1">Payment Method: Bank Transfer</p>
                <p className="text-sm mb-1">Account Name: Jagedo Innovations Limited</p>
                <p className="text-sm mb-1">Bank: Kenya Commercial Bank</p>
                <p className="text-sm mb-1">Branch: Kipande House Branch</p>
                <p className="text-sm mb-1">Account No: 1326749757</p>
                <p className="text-sm">Thanks for your business.</p>
            </div>
        </div>
    );

export default ProBillSummary;
