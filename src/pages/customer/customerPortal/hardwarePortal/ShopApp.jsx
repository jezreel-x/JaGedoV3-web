import { useState } from "react";
import { lazy, Suspense } from "react";
import AllHardwareProducts from "./hardware-products/product-categories/AllHardwareProducts";
import AllCustomProducts from "./custom-products/AllCustomProducts";
import Designs from "./design-products/Designs";
import HireEquipments from "./hire-equipment-products/HireEquipments";

const NavigationBar = lazy(() => import("../../../../components/Navigation/NavigationBar"));

const Hardware = () => {
  const [selectedCategory, setSelectedCategory] = useState("Hardware");

  const renderComponent = () => {
    switch (selectedCategory) {
      case "Hardware":
        return <AllHardwareProducts />;
      case "Custom Products":
        return <AllCustomProducts />;
      case "Designs":
        return <Designs />;
      case "Hire Equipments & Machinery":
        return <HireEquipments />;
      default:
        return null;
    }
  };

  return (
    <>
      <section className="bg-white h-full pb-2 md:pb-11">
        {/* header */}
        <Suspense fallback={<div>Loading navigation...</div>}>
          <NavigationBar />
        </Suspense>
        <section className="bg-gradient-to-r from-blue-200 via-blue-500 to-blue-700 min-h-72 md:min-h-60 w-full flex justify-center mt-20 items-center">
          <div className="flex justify-center container mx-auto items-center gap-6 px-6 flex-wrap md:my-9">
            {/* Logo Image */}
            <img
              src="/logo.png"
              alt="logo"
              className="w-1/3 min-w-[150px] mr-0 md:mr-10 hidden md:inline"
            />

            {/* Text Content */}
            <div className="flex flex-col">
              <h1 className="text-4xl font-semibold text-white">Welcome to the Jagedo Shop</h1>
              <p className="text-xl my-6 text-white">
                Quality products from trusted and verified suppliers.
              </p>

              {/* CTA Button */}
              <button
                type="button"
                onClick={() => {
                  document
                    .getElementById("mainShopAppContainer")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="p-2 text-blue-500 bg-white font-semibold rounded shadow-lg hover:bg-blue-100 transition duration-300 md:w-36 w-full cursor-pointer">
                SHOP NOW
              </button>
            </div>
          </div>
        </section>

        {/* categories */}

        <section className="w-full mx-auto sticky top-22 z-10">
          <nav className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 sm:space-x-4 px-2 mt-5" id="mainShopAppContainer">
            {["Hardware", "Custom Products", "Hire Equipments & Machinery", "Designs"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)} 
                  className={`flex justify-center rounded-lg shadow-md px-4 py-5 transition font-semibold cursor-pointer  ${
                    selectedCategory === category
                      ? "bg-[rgb(0,0,122)] text-white"
                      : "bg-blue-200 hover:bg-opacity-70"
                  }`}>
                  <span>{category}</span>
                </button>
              )
            )}
          </nav>
        </section>
      </section>
      <section className="container mx-auto">
        <Suspense fallback={<div>Loading products...</div>}>{renderComponent()}</Suspense>
      </section>
    </>
  );
};

export default Hardware;
