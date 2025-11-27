import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";
import { v4 as uuidv4 } from 'uuid';
import Select from "react-select";
// import FileUploader from "./FileUploader";
import ImageUploader from "./ImageUploader";
// import MyUploader from "./MyUploader";
// import Sidebar from "./Sidebar";
import Preview from "./Preview";

const categoryOptions = ["Cement", "Quarry", "Steel"];

const subCategoryOptions = {
    Cement : ["Bamburi", "Savannah", "Blue-Triangle"],
    Quarry : ["Quarry-1", "Quarry-2", "Quarry-3"],
    Steel : ["Steel-1", "Steel-2", "Steel-3"],
};

const availableCategoryOptions = categoryOptions.map((cat) => ({
    label: cat,
    value: cat,
}));

const customStyles = {
    control: (provided) => ({
      ...provided,
      backgroundColor: 'white',
      borderRadius: '8px',
      display: 'flex',
      alignItems: 'center',
      padding: '4px',
    }),
    menu: (provided) => ({
      ...provided,
      backgroundColor: "rgb(229, 231, 235)",
      borderRadius: "8px",
    }),
    option: (provided, state) => ({
      ...provided,
      backgroundColor: state.isSelected ? "rgb(169, 169, 169)" : "transparent",
      color: state.isSelected ? "white" : "black",
    }),
    singleValue: (provided) => ({
      ...provided,
        color: "black",
        fontSize: "16px",
        fontWeight: "500",
        padding: "4px",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "gray",
      fontSize: "16px",
      fontWeight: "500",
    }),
};

const AdminProductUploadForm = () => {

    // const [, setProducts] = useState([]);
    const [images, setImages] = useState([]);
    const [formData, setFormData] = useState({
        id: uuidv4(),
        name: '',
        price: '',
        sku: '',
        bid: '',
        material: '',
        size: '',
        color: '',
        region: '',
        uom: '',
        category: '',
        status: 'Drafts',
    });
    const [isEditing, setIsEditing] = useState(false);
    const [previewVisibility, setPreviewVisibility] = useState(false);
    const [productDesc, setProductDesc] = useState("");
    const [category, setCategory] = useState(null);
    const [subCategory, setSubCategory] = useState([]);

    const navigate = useNavigate();
    const location = useLocation();

    const categoryType = location.state?.categoryType || '';

    const queryParams = new URLSearchParams(location.search);
    const isEditMode = queryParams.get('edit') === 'true';
    const productId = queryParams.get('id');
      

    useEffect(() => {
        if (isEditMode && productId) {
          const products = JSON.parse(localStorage.getItem('products')) || [];
          const existingProduct = products.find((p) => p.id === productId);
          if (existingProduct) {
            setFormData({
              id: existingProduct.id || '',   
              name: existingProduct.name || '',
              material: existingProduct.material || '',
              size: existingProduct.size || '',
              color: existingProduct.color || '',
              region: existingProduct.region || '',
              uom: existingProduct.uom || '',
              bid: existingProduct.bid || '',
              sku: existingProduct.sku || '',
              price: existingProduct.price || '',
              category: existingProduct.category || '',
              status: existingProduct.status || 'Drafts',
            });
            setIsEditing(true);
            setProductDesc(existingProduct.productDesc || '');
            setImages(existingProduct.images || []);
            setCategory(existingProduct.category);
            setSubCategory(existingProduct.subCategory);
          }
        }
        }, [isEditMode, productId]);

        const origin = location.state?.from || "";

        const getSubmitLabel = (isEdit, origin) => {
            if (isEdit) {
                return origin === "/admin-products" ? "Approve" : "Submit";
            }
            return "Submit";
        };
      
    // Usage in my component:
        const submitLabel = getSubmitLabel(isEditMode, origin);
    
    const isFormIncomplete = !formData.name || !formData.bid || !formData.sku || !formData.price || !productDesc;


    const saveProduct = (statusType) => {
        const allProducts = JSON.parse(localStorage.getItem("products")) || [];

        if (images.length < 3) {
            toast.error('Please upload three images!');
            return;
        }

        if (isEditing) {
            const updatedProducts = allProducts.map(product =>
                product.id === formData.id
                    ? { ...product, ...formData, images, status: statusType, productDesc, category, subCategory }
                    : product
            );
            localStorage.setItem("products", JSON.stringify(updatedProducts));
            toast.success(`Product updated and saved as ${statusType}!`);
        } else {
            const newProduct = {
                images,
                ...formData,
                categoryType: categoryType,
                status: statusType,
                category,
                subCategory,
                productDesc,
            };
            localStorage.setItem("products", JSON.stringify([...allProducts, newProduct]));
            toast.success(`Product saved successfully!`);
        }

        // Delay navigation slightly to let the success toast show
        setTimeout(() => {
            navigate("/admin-products");
        }, 2000); // 500ms delay
    };

    const handleInputChange = (e) => {
        /*
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        */
        const { name, value, type } = e.target;

        setFormData((prev) => ({
          ...prev,
          [name]: type === 'number' ? parseFloat(value) || '' : value,
        }));
    };
    
    const handleEdit = () => {
        setPreviewVisibility(!previewVisibility);
        // navigate("/create-product");
    };

    const handlePreviewVisibility = () => {
        setPreviewVisibility(!previewVisibility)
    }
    
    const handleNavigation = () => {
        navigate("/shopapp");
    };

    const getAvailableSubCategoryOptions = (categoryValue) => {
        const subs = subCategoryOptions[categoryValue] || [];
        return subs.map((subCategoryValue) => ({
            label: subCategoryValue,
            value: subCategoryValue
        }))
    };

    
  return (
    <div className="flex flex-col min-h-screen bg-gray-300">
        {/*
        <Sidebar />
        */}
        <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-6 mt-2">
            <div id="add__product" className="flex justify-start max-w-3xs space-x-2">
                <button 
                    className="rounded-lg px-4 py-2 bg-white hover:bg-gray-300 cursor-pointer" 
                    onClick={handleNavigation}
                    type="button"
                >
                    ←
                </button>
                <h1 className="text-3xl font-bold">{isEditing ? "Edit Product" : "Add Product"}</h1>
            </div>

            {/* Category */}
            <form className="grid grid-cols-1 gap-4 mb-8">
                <div>
                    <label className="block mb-1 font-medium">Category</label>
                    <Select
                        options={availableCategoryOptions}
                        value={category}
                        onChange={(selected) => {
                            setCategory(selected);
                            setSubCategory([]); // Reset subcategories on category change
                        }}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        styles={customStyles}
                    />
                </div>

                {category && (
                    <div>
                    <label className="block mb-1 font-medium">Subcategory</label>
                    <Select
                        options={getAvailableSubCategoryOptions(category.value)}
                        value={subCategory}
                        onChange={setSubCategory}
                        className="react-select-container"
                        classNamePrefix="react-select"
                        styles={customStyles}
                    />
                </div>
                )}

                {/* Product Name & Description */}
                <div>
                    <h2 className="block font-semibold mb-2">Product Name</h2>
                    <input 
                        type="text"
                        name="name"
                        value={formData.name} 
                        onChange={handleInputChange}
                        className="w-full border border-gray-500 rounded-lg px-3 py-2 mb-4" 
                        required
                    />

                    <h2 className="block font-semibold mb-2">Product Description</h2>
                    <textarea 
                        value={productDesc}
                        onChange={(e) => setProductDesc(e.target.value)}
                        className="w-full border border-gray-500 rounded-lg px-3 py-2 resize-none" 
                        rows="5" 
                        cols='5' 
                        placeholder="Write product description here..."
                        maxLength={500}
                        required
                    />
                </div>

                {/* Product Specifications */}
                <div>
                    <h2 className="font-semibold mb-2">Product Attributes</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                        { name: 'bid', label: 'B-ID', required: true },
                        { name: 'sku', label: 'SKU', required: true },
                        { name: 'material', label: 'Material' },
                        { name: 'size', label: 'Size' },
                        { name: 'color', label: 'Color' },
                        { name: 'region', label: 'Region' },
                        { name: 'uom', label: 'UOM' },
                        { name: 'price', label: 'Price (KES)', required: true },
                        ].map(({ name, label, required }) => {
                            // // ⛔️ Skip rendering "price" if categoryType is "Hardware"
                            // if (name === 'price' && categoryType === 'Hardware' && !isEditing) {
                            //     return null;
                            // }
                            return (
                                <div key={name} className="relative">
                                    <input
                                        type="text"
                                        name={name}
                                        value={formData[name]}
                                        onChange={handleInputChange}
                                        placeholder=" "
                                        className="peer w-full border border-gray-500 rounded px-3 pt-5 pb-2 focus:outline-none focus:border-gray-300 focus:ring-2 focus:ring-blue-500"
                                        required={required}
                                    />
                                    <label
                                        htmlFor={name}
                                        className="absolute left-1 -top-2 text-gray-500 text-sm bg-white px-1 transition-all duration-200
                                            peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                            peer-focus:-top-2 peer-focus:left-1 peer-focus:text-sm peer-focus:bg-white peer-focus:text-blue-500"
                                    >
                                        {label}
                                    </label>
                                </div>
                            )
                        })}
                    </div>
                </div>


                {/* Image Uploads */}
                <div>
                    <h2 className="font-semibold mb-2">Media Upload (Upload in the manner: Front, Back, Side Elevations)</h2>
                    <div className="flex border border-gray-500 rounded-lg py-3 px-2 flex-wrap gap-4">
                        <ImageUploader 
                            images={images} 
                            setImages={setImages}
                        />
                    </div>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-4">
                    <button
                        type="button" 
                        disabled={isFormIncomplete}
                        onClick={handlePreviewVisibility}
                        className={`px-4 py-2 rounded-lg text-white
                            ${isFormIncomplete ? 'bg-gray-400 cursor-not-allowed' : 'bg-gray-600 hover:bg-gray-500 cursor-pointer hover:border-0'}}`}
                    >
                        Preview
                    </button>
                    <button
                        type="button"
                        disabled={isFormIncomplete}
                        onClick={() => saveProduct("Drafts")}
                        className={`rounded-lg text-white px-4 py-2
                            ${isFormIncomplete ? 'bg-gray-400 cursor-not-allowed' : 'bg-[rgb(0,0,112)] hover:bg-blue-300 hover:text-black cursor-pointer'}`}
                    >
                    Save Changes
                    </button>
                    <button
                        type="button"
                        disabled={isFormIncomplete}
                        onClick={() => {
                            const isAdmin = origin === "/admin-products";
                            const status = isEditMode && isAdmin ? "Approved" : "Pending Approval";
                            saveProduct(status);
                        }}
                        className={`px-4 py-2 text-white rounded-lg
                            ${isFormIncomplete ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-500 cursor-pointer'}`}
                    >
                    {submitLabel}
                    </button>
                </div>
            </form>
        </div>
        {previewVisibility && (
            <Preview
                productData = {formData}
                // role = {fromPath}
                images = {images}
                previewVisibility = {previewVisibility}
                handleEdit = {handleEdit}
                prodDescription = {productDesc}
                saveProduct = {saveProduct}
            />
        )}
    </div>
  )};

export default AdminProductUploadForm;
