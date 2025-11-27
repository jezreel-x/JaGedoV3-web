import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Sidebar from '../Sidebar';
import AdminNavigationBar from '../../../components/Navigation/AdminNav';

const CategoryTable = () => {
  const [categories, setCategories] = useState([]); // Holds all categories retrieved from localStorage.

  /* 
  Manages which tab/category type (like 'Hardware') is currently selected.
  Used to filter categories by type.
  */
  const [activeTab, setActiveTab] = useState('Hardware');
  const [showModal, setShowModal] = useState(false); // handles visibility of our modal
  const [newCategoryName, setNewCategoryName] = useState('');  // Stores the name input for a new category.
  const [categoryType, setCategoryType] = useState('Hardware'); // Stores the type of category selected (e.g., 'Design') when creating a new category.
  const [searchTerm, setSearchTerm] = useState(""); // Stores the current search input used to filter categories.
  const [filtered, setFiltered] = useState([]); // Stores the filtered categories based on activeTab and searchTerm.
  

  const navigate = useNavigate();

  const categoryTypes = ['Hardware', 'Design', 'Custom Products', 'Machinery'];

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('categories')) || [];
    setCategories(stored);
  }, []);

  useEffect(() => {
    const result = categories
      .filter(cat => cat.type.toLowerCase() === activeTab.toLowerCase())
      .filter(cat =>
        cat.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        cat.subcategories?.seo.urlKey.toLowerCase().includes(searchTerm.toLowerCase())
      );
    setFiltered(result);
  }, [activeTab, searchTerm, categories]);

  const queryParams = new URLSearchParams(location.search);
  const pageFromUrl = parseInt(queryParams.get('page'), 10) || 1;

  const [currentPage, setCurrentPage] = useState(pageFromUrl);
  
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRowsPerPageChange = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setCurrentPage(1); // Reset to page 1 on change
    // navigate(`/products?page=1`);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const totalPages = Math.ceil(categories.length / rowsPerPage);

  /*
  const filteredCategories = activeTab === 'All'
    ? categories
    : categories.filter(cat => cat.type === activeTab);
  */

  const handleAddCategory = () => {
    if (!newCategoryName) {
        toast.error("Please fill in all required fields first!");
        return;
    } else {
        toast.success("Saved successfully!");
        setShowModal(!showModal);
    }

    const newCategory = {
      name: newCategoryName,
      type: categoryType,
      subcategories: [],
    };

    const updatedCategories = [...categories, newCategory];
    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));

    setTimeout (() => {
        // Redirect to subcategory form with pre-filled parentCategoryName
        navigate('/add-subcategory', {
            state: { parentCategoryName: newCategoryName }
        });
    }, 2000)
  };

  /*
  const handleDeleteSubcategory = (parentCategoryName, subcategoryIndex) => {
    const updatedCategories = categories.map((cat) => {
      if (cat.name === parentCategoryName) {
        const updatedSubcategories = [...(cat.subcategories || [])];
        updatedSubcategories.splice(subcategoryIndex, 1);
        return { ...cat, subcategories: updatedSubcategories };
      }
      return cat;
    });
  
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
    toast.success("Subcategory deleted.");
  };
  */
  
  const handleEditSubcategory = (parentCategoryName, subcategoryIndex) => {
    const parentCategory = categories.find((cat) => cat.name === parentCategoryName);
    const subcategory = parentCategory?.subcategories?.[subcategoryIndex];
  
    if (!subcategory) {
      toast.error("Subcategory not found.");
      return;
    }
  
    // Navigate to /add-subcategory with data to edit
    navigate("/add-subcategory", {
      state: {
        parentCategoryName,
        subcategoryData: subcategory,
        subcategoryIndex,
        isEditMode: true
      },
    });
  };
  

  const handleEditCategory = (categoryName) => {
    navigate('/add-subcategory', { state: { editMode: true, categoryName } });
  };


  /*
  const handleDeleteCategory = (categoryName) => {
    const confirmed = window.confirm(`Are you sure you want to delete the category "${categoryName}"?`);
    if (!confirmed) return;
  
    const updatedCategories = categories.filter(cat => cat.name !== categoryName);
    setCategories(updatedCategories);
    localStorage.setItem('categories', JSON.stringify(updatedCategories));
    toast.success(`Category "${categoryName}" deleted successfully`);
  };
  */
  
  

  return (
    <div className="bg-gray-100 min-h-screen flex">
      {/* Tabs */}
      <Sidebar />

      <AdminNavigationBar />

      {/* main */}
      <div className='w-[75%] overflow-x-hidden overflow-y-auto p-4 mx-auto mt-20'>
        
         <div className="w-full mb-4 flex items-center">
            <nav className="w-full flex space-x-4 px-2.5 items-center justify-between">
                {/*
                <button
                    type='button'
                    className={`px-5 py-3 rounded-lg hover:cursor-pointer ${activeTab === 'All' ? 'bg-[rgb(0,0,112)] text-white' : 'bg-blue-300 text-gray-700'}`}
                    onClick={() => setActiveTab('All')}
                >All</button>
                */}
                {categoryTypes.map(type => (
                <button
                    type='button'
                    key={type}
                    className={`px-5 py-3 w-60 cursor-pointer rounded-lg font-medium transition duration-300  ${activeTab === type ? 'bg-[rgb(0,0,112)] text-white' : 'bg-blue-300 text-gray-700'}`}
                    onClick={() => {
                      setActiveTab(type)
                      setCategoryType(type);
                    }}
                >{type}</button>
                ))}
            </nav>
        </div>

        <div className="flex w-full px-2.5 my-4 items-center justify-between">
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
                    className="w-96 pl-10 pr-4 py-2 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            {/*
            <button
                type="button"
                onClick={() => navigate("/add-subcategory")}
                className="bg-[rgb(0,0,112)] cursor-pointer text-white w-56 px-5 py-3 rounded-lg transition duration-300 hover:bg-blue-300 hover:text-black"
                >
                + Create Category
            </button>
            */}
            <button
              type="button"
              onClick={() => setShowModal(!showModal)}
              className="bg-[rgb(0,0,112)] cursor-pointer text-white w-56 px-5 py-3 rounded-lg transition duration-300 hover:bg-blue-300 hover:text-black my-3"
            >
            + Add a Category
            </button>
        </div>

        {/* Table */}
        <div className="bg-white p-0 mx-2.5 shadow-md">
            <table className="w-full border-collapse rounded-lg overflow-hidden table-auto">
                <thead>
                    <tr className="bg-gray-300 text-gray-700">
                    <th className="border border-gray-300/50 p-4 text-lg">No.</th>
                    <th className="border border-gray-300/50 p-4 text-lg">Category Name</th>
                    <th className="border border-gray-300/50 p-4 text-lg">Sub Category</th>
                    <th className="border border-gray-300/50 p-4 text-lg">URL Key</th>
                    <th className="border border-gray-300/50 p-4 text-lg">Meta Title</th>
                    <th className="border border-gray-300/50 p-4 text-lg">Meta Keywords</th>
                    <th className="border border-gray-300/50 p-4 text-lg">Add sub-category</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Filtered categories based on selected parent category and search term */}

                    {filtered.length === 0 && (
                    <tr className="bg-white hover:bg-gray-100 transition duration-300">
                            <td colSpan="8" className="border border-gray-300/50 p-4 text-center text-gray-500">No categories found.</td>
                        </tr>
                    )}

                    {filtered.map((cat, idx) => (
                    <tr key={idx} className="bg-white hover:bg-gray-100 transition duration-300">
                        <td className="border border-gray-300/50 p-4 text-center">{idx + 1}</td>
                        <td 
                          onClick={() => handleEditCategory(cat.name)}
                          className="border border-gray-300/50 p-4 text-center font-semibold text-gray-700"
                        >
                          {cat.name}
                        </td>
                        
                        <td className="border border-gray-300/50 p-4 text-center font-semibold text-gray-700">
                            <ul className="list-disc ml-1.5 w-full space-y-3">
                                {(cat.subcategories || []).map((sub, i) => (
                                <li
                                  key={i} 
                                  className='flex justify-between items-center cursor-pointer hover:underline'
                                  onClick={() => handleEditSubcategory(cat.name, i)}
                                >
                                  {sub.name}
                                </li>
                                ))}
                            </ul>
                        </td>
                        <td className="border border-gray-300/50 p-4 text-center">
                            <ul className="list-disc ml-1.5 w-full font-semibold text-gray-700 space-y-3">
                                {(cat.subcategories || []).map((sub, i) => (
                                <li key={i} className='border-b-2 pb-4'>{sub.urlKey || 'N/A'}</li>
                                ))}
                            </ul>
                        </td>
                        <td className="border border-gray-300/50 p-4 text-center">
                            <ul className="list-disc ml-1.5 w-full font-semibold text-gray-700 space-y-3">
                                {(cat.subcategories || []).map((sub, i) => (
                                <li key={i} className='border-b-2 pb-4'>
                                    {(sub.metaTitle || 'N/A')}
                                </li>
                                ))}
                            </ul>
                        </td>
                        <td className="border border-gray-300/50 p-4 text-center">
                            <ul className="list-disc ml-1.5 w-full font-semibold text-gray-700 space-y-3">
                                {(cat.subcategories || []).map((sub, i) => (
                                <li key={i} className='border-b-2 pb-4'>
                                    {/* {(sub.seo?.metaTitle || 'N/A')}, {(sub.seo?.metaKeywords || 'N/A')} */}
                                    {(sub.metaKeywords || 'N/A')}
                                </li>
                                ))}
                            </ul>
                        </td>
                        <td className="border border-gray-300/50 p-4 text-center">
                            <button
                                type='button'
                                className="text-white text-start h-10 min-h-[2.5rem] px-3 py-1.5 font-semibold bg-[rgb(0,0,112)] rounded-lg hover:text-gray-800 hover:bg-blue-200 transition duration-300 cursor-pointer"
                                onClick={() => navigate('/add-subcategory', {
                                state: { parentCategoryName: cat.name }
                                })}
                            >
                                + Add
                            </button>
                        </td>
                        {/* 
                        <td className="border border-gray-300/50 align-middle p-2">
                            <div className="flex items-center justify-center gap-2">
                                <button
                                        type='button'
                                        className="text-white px-3 py-1.5 font-semibold bg-[rgb(0,0,112)] rounded-lg hover:text-gray-700 hover:bg-blue-200 transition duration-300 cursor-pointer"
                                        onClick={() => handleEditCategory(cat.name)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type='button'
                                        className="text-white px-3 py-1.5 font-semibold bg-red-600 rounded-lg hover:bg-red-500 transition duration-300 cursor-pointer"
                                        onClick={() => handleDeleteCategory(cat.name)}
                                    >
                                        Delete
                                    </button>
                            </div>
                        </td>
                        */}
                    </tr>
                    ))}
                </tbody>
            </table>
        </div>

        {/*
        <button
            type="button"
            onClick={() => setShowModal(!showModal)}
            className="bg-[rgb(0,0,112)] cursor-pointer text-white w-56 px-5 py-3 rounded-lg transition duration-300 hover:bg-blue-300 hover:text-black my-3 mx-2"
            >
            + Add a Category
        </button>
        */}

         {/* Pagination Controls */}
         <div className="flex justify-between mx-5 items-center mt-4">
          {/* Dropdown: Rows Per Page */}
          <div className="flex justify-end items-center gap-3">
            <label htmlFor="rows" className="text-sm font-medium">Rows per page:</label>
            <select
              id="rows"
              value={rowsPerPage}
              onChange={handleRowsPerPageChange}
              className="border bg-white rounded px-2 py-1 text-sm"
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
        

        {/* Modal/Section to Add Category */}
        {showModal && (
            <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white rounded-lg p-6 w-80 text-center shadow-xl">
                <h2 className="text-xl font-semibold text-start mb-2">Add a Category</h2>
                <input 
                    type="text" 
                    name="categoryName" 
                    id="categoryName" 
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    className='px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full mb-4 border border-gray-300'
                    placeholder='Enter a category name...'
                    required
                />
                {/* 
                <div className="mb-6">
                    <label className="block mb-2 text-start text-gray-700 font-semibold">Category Type</label>
                    <select
                        className="w-full border border-gray-500 p-2 rounded"
                        value={categoryType}
                        onChange={(e) => setCategoryType(e.target.value)}
                    >
                        <option value="" className='text-gray-700'>Select Type</option>
                        {categoryTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>
                */}
                <div className="flex justify-between gap-4">
                    <button
                    type='button'
                    onClick={handleAddCategory}
                    className="bg-[rgb(0,0,112)] text-white hover:bg-blue-200 hover:text-gray-700 px-4 py-2 rounded-lg cursor-pointer"
                    >
                    Save
                    </button>
                    <button
                    type='button'
                    onClick={() => setShowModal(false)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg cursor-pointer"
                    >
                    Cancel
                    </button>
                </div>
            </div>
        </div>
        )}
    </div>
    </div>
  );
};

export default CategoryTable;
