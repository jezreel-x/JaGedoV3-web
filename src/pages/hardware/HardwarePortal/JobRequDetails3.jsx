import { useState } from 'react';
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";

function JobRequestDetails() {
    const [isChecked, setIsChecked] = useState(false);

    const files = [
        { name: "Document 1.pdf", url: "#" },
        { name: "Image 2.jpg", url: "#" },
        { name: "Report 3.docx", url: "#" },
        { name: "Presentation 4.pptx", url: "#" },
        { name: "Spreadsheet 5.xlsx", url: "#" },
    ];

    return (
        <section className="container mx-auto p-5 max-w-7xl">
            {/* Header Section */}
            <div className="flex justify-between items-center bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-all duration-300">
                <h1 className="text-2xl font-bold text-gray-800">REQ 264</h1>
                <h2 className="text-sm font-medium text-gray-600 bg-white px-4 py-2 rounded-full shadow-sm">Created: 12/05/2025</h2>
            </div>

            {/* Job Detail Section */}
            <div className="p-8 border my-6 rounded-xl shadow-lg bg-white hover:shadow-xl transition-all duration-300">
                <h2 className="text-2xl font-bold text-gray-800 border-b pb-4 mb-6">Job Details</h2>

                <div className="flex justify-between gap-8">
                    {/* Left Column */}
                    <div className="w-1/2 space-y-4">
                        {[
                            { label: "Professional", value: "Architect" },
                            { label: "Level", value: "Master" },
                            { label: "Location", value: "Kenya, Nairobi, Kasarani" },
                            { label: "Start Date", value: "20/11/2023" },
                            { label: "End Date", value: "12/12/2024" }
                        ].map((item, index) => (
                            <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                                <span className="font-semibold text-gray-800 w-24">{item.label}:</span>
                                <span className="text-gray-700">{item.value}</span>
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="w-1/2 pl-8 border-l space-y-4">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-blue-900">Managed by Jagedo</h3>
                            <h3 className="font-semibold text-blue-900 mt-2">Payment by Jagedo</h3>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="font-semibold text-gray-800 mb-2">Package details</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi doloribus esse provident
                                necessitatibus quos sint facilis sed in sit magni.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* job description */}

            <div className="grid grid-cols-4 gap-6 bg-white p-8 shadow-lg rounded-xl border border-gray-200 my-6">
                {/* Job Description */}
                <div className="col-span-1 pr-6 border-r">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Job Description</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit minus molestiae
                        libero et aut accusamus consequuntur.
                    </p>
                </div>

                {/* Files Table */}
                <div className="col-span-3">
                    <table className="w-full border-collapse rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">File Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Attachment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {files.map((file, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-all duration-200">
                                    <td className="px-6 py-4 border-t">{file.name}</td>
                                    <td className="px-6 py-4 border-t">
                                        <a
                                            href={file.url}
                                            download
                                            className="text-blue-900 hover:text-blue-700 flex items-center gap-2 transition-colors"
                                        >
                                            <ArrowDownTrayIcon className="w-5 h-5" />
                                            Download
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-6 bg-white p-8 shadow-lg rounded-xl border border-gray-200">
                {/* admin notes */}
                <div className="col-span-1 pr-6 border-r">
                    <h2 className="text-xl font-bold text-gray-800 mb-4">Admin Notes</h2>
                    <p className="text-gray-600 leading-relaxed">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit minus molestiae
                        libero et aut accusamus consequuntur.
                    </p>
                </div>

                {/* Files Table */}
                <div className="col-span-3">
                    <table className="w-full border-collapse rounded-lg overflow-hidden">
                        <thead>
                            <tr className="bg-gray-50">
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">File Name</th>
                                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-800">Attachment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {files.map((file, index) => (
                                <tr key={index} className="hover:bg-gray-50 transition-all duration-200">
                                    <td className="px-6 py-4 border-t">{file.name}</td>
                                    <td className="px-6 py-4 border-t">
                                        <a
                                            href={file.url}
                                            download
                                            className="text-blue-900 hover:text-blue-700 flex items-center gap-2 transition-colors"
                                        >
                                            <ArrowDownTrayIcon className="w-5 h-5" />
                                            Download
                                        </a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Agreement Section */}
            <div className="mt-8 flex flex-col items-center bg-white p-8">
                <label className="flex items-center gap-3 cursor-pointer group">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => setIsChecked(!isChecked)}
                        className="w-5 h-5 rounded border-gray-300 text-blue-900 focus:ring-blue-900"
                    />
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                        I agree to the <span className="font-semibold text-blue-900">Hardware Agreement</span>
                    </span>
                </label>

                <p className="text-sm text-gray-600 mt-4 mb-6 text-center max-w-md">
                    Failure to adhere to the hardware agreement and stipulated timelines will lead to
                    <span className="font-semibold text-red-600"> account suspension</span>.
                </p>

                <button type='button'
                    className={`w-full max-w-md bg-blue-900 text-white py-3 rounded-lg font-medium transition-all duration-300
                        ${!isChecked 
                            ? "opacity-50 cursor-not-allowed" 
                            : "hover:bg-blue-800 hover:shadow-lg active:transform active:scale-98"
                        }`}
                    disabled={!isChecked}
                >
                    Create Quote
                </button>
            </div>
        </section>
    );
}

export default JobRequestDetails;