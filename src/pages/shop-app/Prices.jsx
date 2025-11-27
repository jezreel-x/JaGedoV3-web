import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Sidebar from "./Sidebar";
import AdminNavigationBar from "../../components/Navigation/AdminNav";

const categories = ["Hardware", "Custom Products", "Designs", "Hire Machinery & E"];

const Prices = () => {
    const [selectedParent, setSelectedParent] = useState("Hardware");
    const [products, setProducts] = useState([]);
    const [regionPrices, setRegionPrices] = useState({}); // { productId: { central: "", ... } }
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage, setRowsPerPage] = useState(5);

    const totalPages = Math.ceil(products.length / productsPerPage);

    const filteredProducts = products.filter((product) => product.categoryType === selectedParent);

    const handleRowsPerPageChange = (e) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setCurrentPage(1); // Reset to page 1 on change
        // navigate(`/products?page=1`);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNext = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    const startIndex = (currentPage - 1) * productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("products") || "[]");
        if (stored) {
            setProducts(stored);
        }
    }, []);

    const handlePriceChange = (productId, region, value) => {
        // Validation: allow only positive numeric values
        if (!/^\d*$/.test(value)) {
            toast.error("Please enter numbers only");
            return;
        }
        setRegionPrices((prev) => ({
        ...prev,
        [productId]: {
            ...prev[productId],
            [region]: value,
        },
        }));
    };

    const handleBlur = () => {
        localStorage.setItem("regionPrices", JSON.stringify(regionPrices));
        toast.success("Price saved");
    };

    const regions = ["Central", "Nairobi", "Western", "Eastern", "Coast"];
    
    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />

            <AdminNavigationBar />

            {/* Main content */}
            <main className="w-[75%] overflow-x-hidden mx-auto pb-3 pt-4 mt-20">

                {/* Header Navbar */}
                <div className="px-2.5 py-1 mb-4 flex items-center">
                    <nav className="w-full flex space-x-4 px-2.5 items-center justify-between">
                        {categories.map(
                            (text, index) => {
                                // const lowerText = text.toLowerCase();
                                return (
                                    <button
                                        onClick={() => setSelectedParent(text)}
                                        type="button"
                                        key={index}
                                        className={`px-5 py-3 w-60 cursor-pointer border rounded-lg bg-[rgb(0,0,112)] font-medium transition duration-300
                                        ${selectedParent === text ? "bg-[rgb(0,0,112)] text-white" : "bg-blue-200 text-black border-none"}`}
                                    >
                                        {text}
                                    </button>
                                )
                            }
                        )}
                    </nav>
                </div>

                {/* Line separator */}
                <div className="mx-6 border border-b-slate-100 my-3" />

                {/* Prices Table */}
                <div className="bg-white p-0 mx-5 shadow-md">
                    <table className="w-full border-collapse rounded-lg overflow-hidden table-auto">
                        <thead>
                            <tr className="bg-gray-300 text-gray-700">
                                <th className="border border-gray-300/50 p-4 text-lg">No</th>
                                <th className="border border-gray-300/50 p-4 text-lg">Category</th>
                                <th className="border border-gray-300/50 p-4 text-lg">Sub-Category</th>
                                <th className="border border-gray-300/50 p-4 text-lg">Product Name</th>
                                {regions.map((region) => (
                                    <th key={region} className="border border-gray-300/50 p-4 text-lg">{region}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentProducts.map((p, index) => {
                                return (
                                    <tr 
                                        key={p.id}
                                        className="border-b-2 border-gray-300 bg-gray-50 hover:bg-gray-200 transition duration-300 hover:cursor-pointer"
                                    >
                                        <td className="border border-gray-300/30 p-4 text-lg text-center">{(currentPage - 1) * productsPerPage + index + 1}</td>
                                        <td className="border border-gray-300/30 p-4 text-lg text-center">{p.category?.value || "-"}</td>
                                        <td className="border border-gray-300/30 p-4 text-lg text-center">{Array.isArray(p.subCategory) 
                                        ? p.subCategory.map((s) => s.value).join(" | ") : "-"
                                        }
                                        </td>
                                        <td className="border border-gray-300/30 p-4 text-lg text-center">{p.name || "-"}</td>
                                        {regions.map((region) => (
                                        <td key={region} className="border border-gray-300/30 p-4 text-lg text-center">
                                            <input
                                                type="number"
                                                value={regionPrices[p.id]?.[region] || ""}
                                                onChange={(e) => handlePriceChange(p.id, region, e.target.value)}
                                                onBlur={handleBlur}
                                                className="w-full p-1 rounded border border-gray-300 text-center focus:outline-none focus:ring focus:ring-blue-200"
                                                placeholder="Price(KES)"
                                            />
                                        </td>
                                        ))}
                                    </tr>
                                )
                            })}
                            {currentProducts.length === 0 && (
                                <tr>
                                <td colSpan="8" className="text-center py-4 text-gray-500">
                                    No products yet.
                                </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-between mx-5 items-center mt-4">
                    {/* Dropdown: Rows Per Page */}
                    <div className="flex justify-end items-center gap-3">
                        <label htmlFor="rows" className="text-sm font-medium">Rows per page:</label>
                        <select
                            id="rows"
                            value={productsPerPage}
                            onChange={handleRowsPerPageChange}
                            className="border rounded bg-white px-2 py-1 text-sm"
                        >
                            {[5, 10, 20, 30].map((num) => (
                                <option key={num} value={num}>{num}</option>
                            ))}
                        </select>
                    </div>
                    <div className="flex gap-3 items-center">
                        <button
                            type="button"
                            onClick={handlePrev}
                            // onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                            disabled={currentPage === 1}
                            className={`px-4 py-2 rounded cursor-pointer ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-600 text-white'}`}
                        >
                            Prev
                        </button>

                        <span className="text-sm font-medium">
                            Page {currentPage} of {totalPages}
                        </span>

                        <button
                            type="button"
                            onClick={handleNext}
                            // onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                            disabled={currentPage === totalPages}
                            className={`px-4 py-2 rounded cursor-pointer ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-600 text-white'}`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
};

export default Prices;