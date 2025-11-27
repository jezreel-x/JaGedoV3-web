import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Sidebar from '../Sidebar';

const SubcategoryForm = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [parentCategoryName, setParentCategoryName] = useState('');
  const [subcategoryName, setSubcategoryName] = useState('');
  // const [subcategoryType, setSubcategoryType] = useState('');
  const [urlKey, setUrlKey] = useState('');
  const [metaTitle, setMetaTitle] = useState('');
  const [metaKeywords, setMetaKeywords] = useState('');


  const [isEditMode, setIsEditMode] = useState(false);
  const [subcategoryIndex, setSubcategoryIndex] = useState(null);

  useEffect(() => {
    if (location.state) {
      const {
        parentCategoryName,
        subcategoryData,
        isEditMode,
        subcategoryIndex,
      } = location.state;

      if (parentCategoryName) setParentCategoryName(parentCategoryName);
      if (isEditMode) setIsEditMode(true);
      if (typeof subcategoryIndex === 'number') setSubcategoryIndex(subcategoryIndex);

      if (isEditMode && subcategoryData) {
        setSubcategoryName(subcategoryData.name || '');
        setUrlKey(subcategoryData.urlKey || '');
        setMetaTitle(subcategoryData.metaTitle || '');
        setMetaKeywords(subcategoryData.metaKeywords || '');
      }
    }
  }, [location]);

  const handleSubmit = () => {
    if (!subcategoryName) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const newSubcategory = {
      name: subcategoryName,
      urlKey,
      metaTitle,
      metaKeywords,
    };

    const stored = JSON.parse(localStorage.getItem('categories')) || [];
    let updatedCategories;

    if (isEditMode && typeof subcategoryIndex === 'number') {
      // Edit existing subcategory
      updatedCategories = stored.map((cat) => {
        if (cat.name === parentCategoryName) {
          const updatedSubcategories = [...(cat.subcategories || [])];
          updatedSubcategories[subcategoryIndex] = newSubcategory;
          return { ...cat, subcategories: updatedSubcategories };
        }
        return cat;
      });
      toast.success("Subcategory updated successfully!");
    } else {
      // Add new subcategory
      updatedCategories = stored.map((cat) => {
        if (cat.name === parentCategoryName) {
          return {
            ...cat,
            subcategories: [...(cat.subcategories || []), newSubcategory],
          };
        }
        return cat;
      });
      toast.success("Subcategory created successfully!");
    }

    localStorage.setItem('categories', JSON.stringify(updatedCategories));

    setTimeout(() => {
      navigate('/category-table');
    }, 1500);
  };

  return (
    <div className='bg-gray-100 min-h-screen flex'>
        <Sidebar />
        <div className="flex-1 overflow-x-hidden overflow-y-auto flex flex-col items-center justify-center">
            <div className='bg-white w-[70%] shadow-md rounded-lg mt-2 space-y-6 mx-20 p-12'>
                <div id="add__product" className="flex justify-start space-x-2">
                    <button 
                        className="rounded-lg px-4 py-2 bg-gray-100 hover:bg-gray-300 cursor-pointer" 
                        type="button"
                        onClick={() => navigate("/category-table")}
                    >
                        ←
                    </button>
                    <h1 className="text-3xl font-bold">{isEditMode ? "Edit Subcategory" : "Create Subcategory"}</h1>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1 font-semibold">Parent Category</label>
                    <input
                    type="text"
                    className="w-full p-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg bg-gray-100 cursor-not-allowed"
                    value={parentCategoryName}
                    disabled
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1 font-semibold">Subcategory Name</label>
                    <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                    value={subcategoryName}
                    onChange={(e) => setSubcategoryName(e.target.value)}
                    />
                </div>

                {/*
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1 font-semibold">Category Type</label>
                    <select
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                    value={subcategoryType}
                    onChange={(e) => setSubcategoryType(e.target.value)}
                    >
                    <option value="">Select Type</option>
                    {categoryTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                    ))}
                    </select>
                </div>
                */}
            </div> 
        

            <div className='w-[70%] bg-white shadow-md rounded-lg mt-2 space-y-6 mx-20 px-12 py-8'>
                <h1 className="text-3xl font-bold">Search Engine Optimize</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-1 font-semibold">URL Key</label>
                    <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                    value={urlKey}
                    onChange={(e) => setUrlKey(e.target.value)}
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1 font-semibold">Meta Title</label>
                    <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                    value={metaTitle}
                    onChange={(e) => setMetaTitle(e.target.value)}
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-1 font-semibold">Meta Keywords</label>
                    <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg"
                    value={metaKeywords}
                    onChange={(e) => setMetaKeywords(e.target.value)}
                    />
                </div>
            </div>

            <div className="flex w-[70%] items-center justify-between my-8">
                <button 
                    type="button" 
                    className="bg-white border-2 border-red-600 cursor-pointer hover:bg-red-600 hover:text-white text-red-600 font-semibold px-7 py-3.5 rounded-lg transition duration-300 hover:scale-105"
                >
                    {isEditMode ? 'Delete' : 'Discard'}
                </button>
                <button
                    onClick={handleSubmit} 
                    type="button" 
                    className="bg-[rgb(0,0,112)] cursor-pointer hover:bg-blue-300 hover:text-black text-white font-semibold px-7 py-3.5 rounded-lg transition duration-300 hover:scale-105"
                >
                    {isEditMode ? 'Update' : 'Save'}
                </button>
            </div>
        </div>
    </div>
  );
};

export default SubcategoryForm;
