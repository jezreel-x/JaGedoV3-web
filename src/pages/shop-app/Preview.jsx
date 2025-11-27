// import { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
// import { FcNext } from "react-icons/fc";
// import { Link } from "react-router-dom";

const Preview = ({ productData: { name, price, sku, bid, material, size, color, uom }, images, handleEdit, prodDescription, saveProduct, role }) => {
const elevationLabels = ["Front Elevation", "Back Elevation", "Side Elevation"];
const [imageList, setImageList] = useState(images || []);
/*
const [formData] = useState({
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
    status: 'Drafts',
});
const [previewVisibility, setPreviewVisibility] = useState (false);
const [images] = useState([]);
const [prodDescription] = useState("");


const saveProduct = (statusType) => {
    const allProducts = JSON.parse(localStorage.getItem("products")) || [];

    if (images.length === 0) {
        toast.error('Please upload at least one image!');
        return;
    }

    // const savingToast = toast.loading('Saving...',);

    if (isEditing) {
        const updatedProducts = allProducts.map(product =>
            product.id === formData.id
                ? { ...product, ...formData, images, status: statusType, prodDescription }
                : product
        );
        localStorage.setItem("products", JSON.stringify(updatedProducts));
        toast.success(`Product updated and saved as ${statusType}!`);
    } else {
        const newProduct = {
            images,
            ...formData,
            status: statusType,
            prodDescription,
            role,
            options,
        };
        localStorage.setItem("products", JSON.stringify([...allProducts, newProduct]));
        /*
        console.log("New product added:", newProduct.prodDescription);
        console.log("All products:", allProducts);
        console.log("Testing...");
       
        toast.success(`Product saved successfully!`);
    }

    // Delay navigation slightly to let the success toast show
    setTimeout(() => {
        navigate("/builder-products");
    }, 1000); // 500ms delay
};

const handleEdit = () => {
    setPreviewVisibility(!previewVisibility);
    navigate("/create-product");
};
*/


    const handleThumbnailClick = (index) => {
        setImageList((prevImages) => {
            const newImages = [...prevImages];
            // Swap clicked image with main image
            const temp = newImages[0];
            newImages[0] = newImages[index];
            newImages[index] = temp;
            return newImages;
        });
    };

return (
        <div className="fixed inset-0 bg-white flex justify-center items-center z-50 w-[95%] rounded-lg mt-2 mx-auto px-4 sm:px-6 lg:px-4 py-8">
            <div className="flex lg:flex-row mt-1">
                {/* Images Section */}
                <section className={`w-full
                    ${role === "/fundi-portal/products" || role === "/professional/professional-products" ? "lg:w-3/4" : "lg:w-1/2"}`}>
                    <div className="bg-white p-6 flex flex-col lg:flex-row gap-4">
                        {/* Main Image */}
                        <div className="w-full lg:w-3/4">
                            {imageList[0] ? (
                                <img
                                    src={imageList[0].dataUrl}
                                    alt={elevationLabels[0]}
                                    className="w-full h-[500px] object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                                />
                            ) : (
                                <div className="w-full h-[500px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">No Image</div>
                            )}
                        </div>

                        {/* Thumbnail Images */}
                        {imageList.length > 1 ? (
                            <div className="w-full lg:w-1/4 flex flex-col gap-4 justify-center">
                                {imageList.slice(1).map((img, index) => (
                                    <img
                                        key={index + 1}
                                        src={img.dataUrl}
                                        alt={`Thumbnail ${index + 1}`}
                                        onClick={() => handleThumbnailClick(index + 1)} // +1 to align with imageList index
                                        className="w-full h-[200px] object-cover rounded-lg cursor-pointer hover:opacity-80 transition-opacity"
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="w-full lg:w-1/4 h-[500px] bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">No Image</div>
                        )}
                    </div>
                </section>
            

                {/* Product Details Section */}
                <section className="w-full lg:w-1/2">
                    <div className="bg-white p-6 flex flex-col justify-between">

                            <div className="flex items-center gap-2 mb-6">
                                    <h1 className="text-xl font-bold">Product Name: </h1><h2 className="text-gray-600 text-lg font-semibold">{name || 'N/A'}</h2>
                            </div>

                            <div className="border-b border-gray-600" />

                             {/* Price */}
                            <div className="flex items-center gap-2 my-6">
                                <h1 className="text-xl font-bold">Price: </h1><h2 className="text-gray-600 text-lg font-semibold">Ksh {price || 'N/A'}</h2>
                            </div>

                            <div className="border-b border-gray-600" />

                            {/* Product Title & Rating */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-gray-600 gap-6 py-6">
                                <div className="flex items-center align-baseline gap-2">
                                    <h1 className="text-xl font-bold">SKU:</h1><h2 className="text-gray-600 text-lg font-semibold">{sku || 'N/A'}</h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-xl font-bold">BID: </h1><h2 className="text-gray-600 text-lg font-semibold">{bid || 'N/A'}</h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-xl font-bold">Material: </h1><h2 className="text-gray-600 text-lg font-semibold">{material || 'N/A'}</h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-xl font-bold">Size: </h1><h2 className="text-gray-600 text-lg font-semibold">{size || 'N/A'}</h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-xl font-bold">Color: </h1><h2 className="text-gray-600 text-lg font-semibold">{color || 'N/A'}</h2>
                                </div>
                                <div className="flex items-center gap-2">
                                    <h1 className="text-xl font-bold">UOM: </h1><h2 className="text-gray-600 text-lg font-semibold">{uom || 'N/A'}</h2>
                                </div>
                            </div>

                            <div className="border-b border-gray-600" />

                            {/* Description */}
                            <div className="pt-6 mb-4">
                                <h2 className="text-xl font-bold mb-4">Product Description</h2>
                                <p className="text-gray-500 font-semibold leading-relaxed">
                                    {prodDescription || 'N/A'}
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex justify-center gap-4 mt-8">
                                <button
                                    onClick={handleEdit}
                                    type="button" 
                                    className="flex-1 flex items-center cursor-pointer justify-center gap-2 bg-[rgb(0,0,112)] text-white py-4 px-6 font-semibold rounded-xl hover:bg-blue-700 transition duration-300 shadow-md"
                                >
                                Edit
                                </button>
                                <button 
                                    onClick={saveProduct}
                                    type="button" 
                                    className="flex-1 flex items-center justify-center gap-2 cursor-pointer bg-green-600 hover:bg-green-500 text-white py-4 px-6 font-semibold rounded-xl transition duration-300 shadow-md"
                                >
                                Submit
                                </button>
                            </div>
                    </div>
                </section>
            </div>
            {/* <button type="button" onClick={handleEdit} className="absolute top-2 right-3.5 text-black hover:bg-gray-400 px-3 py-1 hover:cursor-pointer transition transform hover:scale-105 hover:ease-in-out text-3xl rounded-lg">
              ✕
            </button> */}
        </div>
    );
};

Preview.propTypes = {
  productData: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    sku: PropTypes.string,
    bid: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    status: PropTypes.string,
    material: PropTypes.string, // Added material validation
    size: PropTypes.string, // Added size validation
    color: PropTypes.string, // Added color validation
    uom: PropTypes.string, // Added uom validation
    images: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      dataUrl: PropTypes.string, // Added dataUrl validation
    })
  ).isRequired,
  handleEdit: PropTypes.func.isRequired,
  prodDescription: PropTypes.string.isRequired,
  saveProduct: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired, // Added role validation
};

export default Preview;
