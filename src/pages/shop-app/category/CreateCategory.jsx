import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Sidebar from '../Sidebar';

const CreateCategory = () => {
    const [productDesc, setProductDesc] = React.useState("");
    const [categoryName, setCategoryName] = React.useState("");
    const [parentCategory, setParentCategory] = React.useState("");
    const [urlKey, setUrlKey] = React.useState("");
    const [metaTitle, setMetaTitle] = React.useState("");
    const [metaKeywords, setMetaKeywords] = React.useState("");
    // const [metaDesc, setMetaDesc] = React.useState("");

    const navigate = useNavigate();
    const { index } = useParams(); // grab index if editing

    const isEditMode = index !== undefined;

    const handleNavigation = () => {
        navigate("/categories");
    }

    // Load existing data in edit mode
    React.useEffect(() => {
        if (isEditMode) {
        const stored = JSON.parse(localStorage.getItem("categories")) || [];
        const item = stored[index];

        if (item) {
            setCategoryName(item.categoryName);
            setParentCategory(item.parentCategory);
            setProductDesc(item.productDesc);
            setUrlKey(item.urlKey);
            setMetaTitle(item.metaTitle);
            setMetaKeywords(item.metaKeywords);
            // setMetaDesc(item.metaDesc);
        } else {
            navigate("/file-import/preview"); // redirect if index invalid
        }
        }
    }, [index, isEditMode, navigate]);

    const handleSave = () => {
        if (!categoryName || !parentCategory || !productDesc) {
          alert("Please fill in all required fields.");
          return;
        }

        const existing = JSON.parse(localStorage.getItem("categories")) || [];
    
        const newCategory = {
          categoryName,
          parentCategory,
          productDesc,
          urlKey,
          metaTitle,
          metaKeywords,
        //   metaDesc,
        };

        if (isEditMode) {
            existing[index] = newCategory; // update item
        } else {
            existing.push(newCategory); // add new item
        }
    
        localStorage.setItem("categories", JSON.stringify([...existing, newCategory]));
    
        alert("Category saved successfully!");
        navigate("/preview-category");
    };

    return (
        <div className="bg-gray-200 min-h-screen flex">
            <Sidebar />
            <div className="flex-1 overflow-x-hidden overflow-y-auto flex flex-col items-center justify-center">
                <div className="bg-gray-100 w-[80%] shadow-md rounded-lg mt-2 space-y-6 mx-20 p-12">
                    <div id="add__product" className="flex justify-start space-x-2">
                        <button 
                            className="rounded-lg px-4 py-2 bg-gray-100 hover:bg-gray-300 cursor-pointer" 
                            onClick={handleNavigation}
                            type="button"
                        >
                            ←
                        </button>
                        <h1 className="text-3xl font-bold">Create Category</h1>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Category Name</label>
                            <input
                                type="text"
                                name="categoryName"
                                id="categoryName"
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="Enter category name..."
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Parent Category</label>
                            <select 
                                name="parentCategory" 
                                id="parent__category"
                                className="w-full border rounded-lg px-4 py-2"
                                value={parentCategory}
                                onChange={(e) => setParentCategory(e.target.value)}
                            >
                                <option value="" selected disabled className="font-medium text-gray-700">Select a parent category</option>
                                <option value="hardware">Hardware</option>
                                <option value="design">Design</option>
                                <option value="custom products">Custom Products</option>
                                <option value="machinery">Machinery</option>
                            </select>
                        </div>
                        <div>
                        <label className="block font-medium mb-1 text-gray-700">Product Description</label>
                        <textarea 
                            name="productDesc"
                            id="productDesc"
                            value={productDesc}
                            onChange={(e) => setProductDesc(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 resize-none" 
                            rows="5" 
                            cols='5' 
                            placeholder="Write product description here..."
                            maxLength={500}
                            required
                        />
                        </div>
                    </form>
                </div>
                <div className="w-[80%] bg-gray-100 shadow-md rounded-lg mt-2 space-y-6 mx-20 px-12 py-8">
                    <h1 className="text-3xl font-bold">Search Engine Optimize</h1>
                    <form action="" className="space-y-4">
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Url Key</label>
                            <input
                                type="text"
                                name="urlkey"
                                id="urlkey"
                                value={urlKey}
                                onChange={(e) => setUrlKey(e.target.value)}
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="Enter URL Key..."
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Meta Title</label>
                            <input
                                type="text"
                                name="metaTitle"
                                id="metaTitle"
                                value={metaTitle}
                                onChange={(e) => setMetaTitle(e.target.value)}
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="Enter Meta Title..."
                            />
                        </div>
                        <div>
                            <label className="block mb-2 font-medium text-gray-700">Meta Keywords</label>
                            <input
                                type="text"
                                name="metaKeywords"
                                id="metaKeywords"
                                value={metaKeywords}
                                onChange={(e) => setMetaKeywords(e.target.value)}
                                className="w-full border rounded-lg px-4 py-2"
                                placeholder="Enter Meta Keywords..."
                            />
                        </div>
                        {/* <div>
                        {/* <label className="block font-medium mb-1 text-gray-700">Meta Description</label>
                        <textarea
                            name="metaDesc"
                            id="metaDesc" 
                            value={metaDesc}
                            onChange={(e) => setMetaDesc(e.target.value)}
                            className="w-full border rounded-lg px-3 py-2 resize-none" 
                            rows="5" 
                            cols='5' 
                            placeholder="Write meta description here..."
                            maxLength={500}
                            required
                        />
                        </div> */} 
                    </form>
                </div>
                <div className="flex w-[80%] items-center justify-between my-8">
                    <button 
                        type="button" 
                        className="bg-white border-2 border-red-600 cursor-pointer hover:bg-red-600 hover:text-white text-red-600 font-semibold px-7 py-3.5 rounded-lg transition duration-300 hover:scale-105"
                    >
                        Discard
                    </button>
                    <button
                        onClick={handleSave} 
                        type="button" 
                        className="bg-[rgb(0,0,112)] cursor-pointer hover:bg-blue-300 hover:text-black text-white font-semibold px-7 py-3.5 rounded-lg transition duration-300 hover:scale-105"
                    >
                        {isEditMode ? "Update" : "Save"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CreateCategory;