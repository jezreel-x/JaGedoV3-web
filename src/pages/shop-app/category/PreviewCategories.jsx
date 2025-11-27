import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Sidebar from "../Sidebar";
import ShowDeleteModal from "../ShowDeleteModalCat";
import AddCategoryModal from "./AddCategoryModal";

const parentCategories = ["Hardware", "Design", "Custom Products", "Machinery"];

const PreviewCategories = () => {
  const [categories, setCategories] = React.useState([
    { id: 1, name: "Quarry", subcategories: [] },
    { id: 2, name: "Steel", subcategories: [] },
    { id: 3, name: "Cement", subcategories: [] },
  ]);
  const [filtered, setFiltered] = useState([]);
  const [selectedParent, setSelectedParent] = useState("Hardware");
  const [searchTerm, setSearchTerm] = useState("");
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteIndex, setDeleteIndex] = useState(null);
  const [addCategoryModal, setAddCategoryModal] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("categories")) || [];
    setCategories(stored);
  }, []);

  useEffect(() => {
    const result = categories
      .filter(cat => cat.parentCategory === selectedParent.toLowerCase())
      .filter(cat =>
        cat.categoryName.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setFiltered(result);
  }, [selectedParent, searchTerm, categories]);

  const handleAddSubcategory = (categoryName) => {
    navigate(`/create-category/${categoryName}`);
  };

  const handleDelete = (indexToDelete) => {
    setDeleteIndex(indexToDelete);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    const stored = JSON.parse(localStorage.getItem("categories")) || [];
    const updated = stored.filter((_, i) => i !== deleteIndex);
    localStorage.setItem("categories", JSON.stringify(updated));
    setCategories(updated);
    toast.success("Category deleted successfully!");
    setShowDeleteModal(false);
    setDeleteIndex(null);
  };

return (
    <div className="flex min-h-screen bg-gray-100">
        <Sidebar />
        <div className="overflow-y-auto p-4 border max-w-5xl mx-auto">
            <div className="w-full mb-4 flex items-center">
                <nav className="w-full flex space-x-4 px-2.5 items-center justify-between">
                    {parentCategories.map((category) => (
                        <button
                        type="button"
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
                        placeholder="Search categories..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-96 pl-10 pr-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <button
                    type="button"
                    onClick={() => navigate("/create-category")}
                    className="bg-[rgb(0,0,112)] cursor-pointer text-white w-56 px-5 py-3 rounded-lg transition duration-300 hover:bg-blue-300 hover:text-black"
                    >
                    + Create Category
                </button>
            </div>

            {/* Table */}
            <div className="bg-white p-0 mx-2.5 shadow-md">
                <table className="w-full border-collapse rounded-lg overflow-hidden table-auto">
                    <thead>
                    <tr className="bg-gray-300 text-gray-700">
                        <th className="border border-gray-300/50 p-4 text-lg">No</th>
                        <th className="border border-gray-300/50 p-4 text-lg">Category Name</th>
                        <th className="border border-gray-300/50 p-4 text-lg">Sub Category</th>
                        <th className="border border-gray-300/50 p-4 text-lg">URL Key</th>
                        <th className="border border-gray-300/50 p-4 text-lg">Meta Title & Keywords</th>
                        <th className="border border-gray-300/50 p-4 text-lg">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {/* Filtered categories based on selected parent category and search term */}
                        {filtered.length === 0 && (
                            <tr className="bg-white hover:bg-gray-100 transition duration-300">
                                <td colSpan="8" className="border border-gray-300/50 p-4 text-center text-gray-500">No categories found.</td>
                            </tr>
                        )}
                        {/* Map through filtered categories */}
                        {filtered.length > 0 && filtered.map((p, index) => {
                            return (
                                <tr key={p.id} className="bg-white hover:bg-gray-100 transition duration-300">
                                    <td className="border border-gray-300/50 p-4 text-center">{index + 1}</td>
                                    <td className="border border-gray-300/50 p-4 text-center">{p.name}</td>
                                    <td className="border border-gray-300/50 p-4 text-center">{p.subcategories.join(", ")}</td>
                                    <td className="border border-gray-300/50 p-4 text-center">-</td>
                                    <td className="border border-gray-300/50 p-4 text-center">-</td>
                                    <td className="border-gray-300/50 p-4 flex items-center justify-center gap-x-2">
                                        <button type="button" onClick={() => navigate(`/create-category/edit/${index}`)} className="text-white bg-[rgb(0,0,112)] py-2 px-3 rounded-lg hover:cursor-pointer">
                                        Edit
                                        </button>
                                        <button type="button" onClick={() => handleDelete(index)} className="text-white bg-red-800 py-2 px-3 rounded-lg hover:cursor-pointer">
                                        Delete
                                        </button>
                                        <button
                                            className="text-green-600 text-xs"
                                            onClick={() => handleAddSubcategory(p.name)}
                                            >
                                            + Add Subcategory
                                            </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

                {/* Modal for delete confirmation */}
                {showDeleteModal && (
                    <ShowDeleteModal
                        setShowDeleteModal={setShowDeleteModal}
                        confirmDelete={confirmDelete}
                    />
                )}

                {addCategoryModal && (
                    <AddCategoryModal 
                        setAddCategoryModal={setAddCategoryModal}
                    />
                )}
            </div>
            <button
                type="button"
                onClick={() => setAddCategoryModal(!addCategoryModal)}
                className="bg-[rgb(0,0,112)] cursor-pointer text-white w-56 px-5 py-3 rounded-lg transition duration-300 hover:bg-blue-300 hover:text-black my-3 mx-2"
                >
                + Add a Category
            </button>
        </div>
    </div>
);
};

export default PreviewCategories;
