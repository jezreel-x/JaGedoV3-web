import { lazy } from "react";
import { Route } from "react-router-dom";
import CustomCheckout from "../../pages/customer/customerPortal/hardwarePortal/custom-products/CustomCheckout";
import DesignCheckout from "../../pages/customer/customerPortal/hardwarePortal/design-products/DesignCheckout";


const ShopAppPage = lazy(() => import("../../pages/shop-app/ShopAppPage"));
const ProductUploadForm = lazy(() => import("../../pages/shop-app/ProductUploadForm"));
const AdminProductUploadForm = lazy(() => import("../../pages/shop-app/AdminProductUploadForm"));
const BuilderProducts = lazy(() => import("../../pages/shop-app/BuilderProducts"));
const AdminProducts = lazy(() => import("../../pages/admin/AdminProducts"));
const Checkout = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/hire-equipment-products/HireEquipmentsCheckout"));
const Cement = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/hardware-products/product-categories/Cement"));
const CustomProducts = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/custom-products/AllCustomProducts"));
const HireEquipments = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/hire-equipment-products/HireEquipments"));
const Designs = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/design-products/Designs"));
const CartPreview = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/hire-equipment-products/HireEquipmentsCartPreview"));
const Cart = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/hire-equipment-products/HireEquipmentsCart"));
const Categories = lazy(() => import("../../pages/shop-app/category/Categories"));
const EditProductModal = lazy(() => import("../../pages/shop-app/EditProductModal"));
const FileImportButton = lazy(() => import("../../pages/shop-app/FileImportButton"));
const FileUploadPage  = lazy(() => import("../../pages/shop-app/FileUploadPage"));
const CreateCategory = lazy(() => import("../../pages/shop-app/category/CreateCategory"));
const PreviewCategories = lazy(() => import("../../pages/shop-app/category/PreviewCategories"));
const CreateAttributes = lazy(() => import("../../pages/shop-app/attributes/CreateAttributes"));
const PreviewAttributes = lazy(() => import("../../pages/shop-app/attributes/PreviewAttributes"));
const Preview = lazy(() => import("../../pages/shop-app/Preview"));
const CreateRegions = lazy(() => import("../../pages/shop-app/regions/CreateRegions"));
const SubcategoryForm = lazy(() => import("../../pages/shop-app/category/SubCategoryForm"));
const CategoryTable = lazy(() => import("../../pages/shop-app/category/CategoryTable"));
const PreviewRegions = lazy(() => import("../../pages/shop-app/regions/PreviewRegions"));
const Hardware = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/ShopApp"));
const DesignDetails = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/design-products/DesignDetails"));
const DesignCart = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/design-products/DesignCart"));
const AllHardwareProducts = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/hardware-products/product-categories/AllHardwareProducts"));
const HardwareCartPreview = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/hardware-products/HardwareCartPreview"));
const HardwareCart = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/hardware-products/HardwareCart"));
const HardwareCheckout = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/hardware-products/HardwareCheckout"));
const AllCustomProducts = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/custom-products/AllCustomProducts"));
const CustomCartPreview = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/custom-products/CustomCartPreview"));
const CustomCart = lazy(() => import("../../pages/customer/customerPortal/hardwarePortal/custom-products/CustomCart"));
const ParsedPreviewTable = lazy(() => import("../../pages/shop-app/ParsedPreviewTable"));
const Prices = lazy(() => import("../../pages/shop-app/Prices"));


const shopAppRoutes = [
    <Route path="/fundi-portal/products" element={<ShopAppPage />} key="shopapp" />,
    <Route path="/create-product" element={<ProductUploadForm />} key="create-product" />,
    <Route path="/create-admin-product" element={<AdminProductUploadForm />} key="create-admin-product" />,
    <Route path="/admin-products" element={<AdminProducts />} key="admin-products" />,
    <Route path="/builder-products" element={<BuilderProducts />} key="builder-products" />,
    // <Route path="/checkout" element={<Checkout />} key="checkout" />,
    <Route path="/customer/machinery/checkout" element={<Checkout />} key="checkout" />,
    <Route path="/hardware_shop/all-products/cart" element={<Cement />} key="cement" />,
    <Route path="/customer/machinery/cart-preview" element={<CartPreview />} key="cement-preview" />,
    <Route path="/hardware_shop/custom-products" element={<CustomProducts />} key="custom-products" />,
    <Route path="/hire-equipments-and-machinery" element={<HireEquipments />} key="hire-equipments" />,
    <Route path="/hardware_shop/designs" element={<Designs />} key="designs" />,
    <Route path="/customer/machinery/cart" element={<Cart />} key="cart" />,
    <Route path="/hardware_shop" element={<Hardware />} key="hardwareportal"/>,
    <Route path="/categories" element={<Categories />} key="categories" />,
    <Route path="/edit-product" element={<EditProductModal />} key="edit-product" />,
    <Route path="/file-import" element={<FileImportButton />} key="file-import" />,
    <Route path="/file-import/preview" element={<FileUploadPage />} key="file-import-preview" />,


    <Route path="/customer/designs/cart-preview" element={<DesignDetails />} key="design-details" />,
    <Route path="/customer/designs/cart" element={<DesignCart />} key="design-cart" />,
    <Route path="/customer/designs/checkout" element={<DesignCheckout />} key="design-checkout" />,

    <Route path="/customer/hardware_shop" element={<AllHardwareProducts />} key="all-hardware-products" />,
    <Route path="/customer/hardware/cart-preview" element={<HardwareCartPreview />} key="hardware-cart-preview" />,
    <Route path="/customer/hardware/cart" element={<HardwareCart />} key="hardware-cart" />,
    <Route path="/customer/hardware/checkout" element={<HardwareCheckout />} key="hardware-checkout" />,

    <Route path="/customer/hardware_shop" element={<AllCustomProducts />} key="custom-products" />,
    <Route path="/customer/custom-products/cart-preview" element={<CustomCartPreview />} key="custom-cart-preview" />,
    <Route path="/customer/custom-products/cart" element={<CustomCart />} key="custom-cart" />,
    <Route path="/customer/custom-products/checkout" element={<CustomCheckout />} key="custom-checkout" />,

    /* Category paths */
    <Route path="/create-category" element={<CreateCategory />} key="create-category" />,
    <Route path="/preview-category" element={<PreviewCategories />} key="preview-category" />,
    <Route path="/add-subcategory" element={<SubcategoryForm />} key="add-subcategory" />,
    <Route path="/category-table" element={<CategoryTable />} key="category-table" />,


    <Route path="/create-category/edit/:index" element={<CreateCategory />} key="edit-category" />,
    <Route path="/create-attributes" element={<CreateAttributes />} key="create-attributes" />,
    <Route path="/create-attributes/preview" element={<PreviewAttributes />} key="preview-attributes" />,
    <Route path="/preview-products" element={<Preview />} key="preview-products" />,
    <Route path="/create-regions" element={<CreateRegions />} key="create-regions" />,
    <Route path="/create-regions/preview" element={<PreviewRegions />} key="preview-regions" />,
    // <Route path="/create-attributes/edit/:index" element={<CreateAttribute />} key="edit-attributes" />,


    <Route path="/parsed-preview-table" element={<ParsedPreviewTable />} key="parsed-table" />,
    <Route path="/prices" element={<Prices />} key="prices" />,

];

export default shopAppRoutes;