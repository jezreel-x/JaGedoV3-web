import { useState, useEffect } from "react";
import Sidebar from "../Sidebar";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import ShowDeleteModalAtt from "../ShowDeleteModalAtt";
import AdminNavigationBar from "../../../components/Navigation/AdminNav";


const parentCategories = ["Hardware", "Design", "Custom Products", "Machinery"];


const PreviewAttributes = () => {

    const [selectedParent, setSelectedParent] = useState("Hardware");
    const [attributes, setAttributes] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filtered, setFiltered] = useState([]);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteIndex, setDeleteIndex] = useState(null);
    
    const navigate = useNavigate();

    const handleNavigation = (cat) => {
        navigate("/create-attributes", { state: { categoryType: cat }});
    }

    const confirmDelete = () => {
        const stored = JSON.parse(localStorage.getItem("attributes")) || [];
        const updated = stored.filter((_, i) => i !== deleteIndex);
        localStorage.setItem("attributes", JSON.stringify(updated));
        setAttributes(updated);
        toast.success("Attributes deleted successfully!");
        setShowDeleteModal(false);
        setDeleteIndex(null);
    };

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem("attributes")) || [];
        setAttributes(stored);
      }, []); 

    useEffect(() => {
    const result = attributes
        /*  
        .filter(cat => Array.isArray(cat.attributeGroup) &&
        cat.attributeGroup.map(g => g.toLowerCase()).includes(selectedParent.toLowerCase()))
        */
        .filter (cat => cat.categoryType === selectedParent)
        .filter(cat =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
    setFiltered(result);
    }, [selectedParent, searchTerm, attributes]);

    const handleDelete = (indexToDelete) => {
        setDeleteIndex(indexToDelete);
        setShowDeleteModal(true);
    };

    return (
        <div className="flex min-h-screen bg-gray-100">
            <Sidebar />

            <AdminNavigationBar />

            {/* main content */}
            <div className="w-[75%] overflow-x-hidden overflow-y-auto p-4 mx-auto mt-20">
                <div className="w-full mb-4 flex items-center">
                    <nav className="w-full flex space-x-4 px-2.5 items-center justify-between">
                        {parentCategories.map((category) => (
                            <button
                            key={category}
                            onClick={() => setSelectedParent(category)}
                            className={`px-5 py-3 w-60 cursor-pointer rounded-lg font-medium transition duration-300 ${
                                selectedParent === category
                                ? "bg-[rgb(0,0,112)] text-white"
                                : "bg-blue-300 text-gray-700"
                            }`}
                            >
                                {category}
                            </button>
                        ))}
                    </nav>
                </div>
                 {/*Search Bar*/}
                <div className="flex px-2.5 my-4 justify-between items-center">
                    <div className="relative">
                        <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            {/* You can replace this with your preferred icon set */}
                            <svg className="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                            </svg>
                        </span>
                        <input
                            type="text"
                            placeholder="Search attributes..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-96 pl-10 pr-4 py-2 border border-gray-300 bg-white rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="button"
                        onClick={() => handleNavigation(selectedParent)}
                        className="bg-[rgb(0,0,112)] cursor-pointer text-white w-56 px-5 py-3 rounded-lg transition duration-300 hover:bg-blue-300 hover:text-black"
                        >
                        + Add Attribute
                    </button>
                </div>

                {/* Table */}
                <div className="bg-white p-0 mx-2.5 shadow-md">
                    <table className="w-full border-collapse rounded-lg overflow-hidden table-auto">
                        <thead>
                        <tr className="bg-gray-300 text-gray-700">
                            <th className="border border-gray-300/50 p-4 text-lg">No</th>
                            <th className="border border-gray-300/50 p-4 text-lg">Attribute Name</th>
                            {/* <th className="border border-gray-300/50 p-4 text-lg">Attribute Group</th> */}
                            <th className="border border-gray-300/50 p-4 text-lg">Type</th>
                            <th className="border border-gray-300/50 p-4 text-lg">Attribute values</th>
                            <th className="border border-gray-300/50 p-4 text-lg">Is Required</th>
                            <th className="border border-gray-300/50 p-4 text-lg">Is Filterable</th>
                            <th className="border border-gray-300/50 p-4 text-lg">Show To Customers</th>
                            <th className="border border-gray-300/50 p-4 text-lg">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                            {/* Filtered categories based on selected parent category and search term */}
                            {filtered.length === 0 && (
                                <tr className="bg-white hover:bg-gray-100 transition duration-300">
                                    <td colSpan="8" className="border border-gray-300/50 p-4 text-center text-gray-500">No attributes found</td>
                                </tr>
                            )}
                            {/* Map through filtered categories */}
                            {filtered.length > 0 && filtered.map((p, index) => {
                                return (
                                    <tr key={index} className="bg-white hover:bg-gray-100 transition duration-300">
                                        <td className="border border-gray-300/50 p-4 text-center">{index + 1}</td>
                                        <td className="border border-gray-300/50 p-4 text-center">{p.name}</td>
                                        {/* <td className="border border-gray-300/50 p-4 text-center">{p.attributeGroup.join(", ")}</td> */}
                                        <td className="border border-gray-300/50 p-4 text-center">{p.type}</td>
                                        <td className="border border-gray-300/50 p-4 text-center">{p.attributeValues.map(attr => attr.value).join(", ") || "N/A"}</td>
                                        <td className="border border-gray-300/50 p-4 text-center">{p.isRequired ? "Yes" : "No"}</td>
                                        <td className="border border-gray-300/50 p-4 text-center">{p.isFilterable ? "Yes" : "No"}</td>
                                        <td className="border border-gray-300/50 p-4 text-center">{p.showToCustomers ? "Yes" : "No"}</td>
                                        <td className="border-gray-300/50 p-4 flex items-center justify-center gap-x-2">
                                            <button type="button" onClick={handleNavigation} className="text-white bg-[rgb(0,0,112)] py-2 px-3 rounded-lg hover:cursor-pointer">
                                            Edit
                                            </button>
                                            <button type="button" onClick={() => handleDelete(index)} className="text-white bg-red-800 py-2 px-3 rounded-lg hover:cursor-pointer">
                                            Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {/* Modal for delete confirmation */}
                    {showDeleteModal && (
                        <ShowDeleteModalAtt
                            setShowDeleteModal={setShowDeleteModal}
                            confirmDelete={confirmDelete}
                        />
                    )}
                </div>
            </div>
        </div>
    )
};

export default PreviewAttributes;