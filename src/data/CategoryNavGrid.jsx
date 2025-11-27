import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const CategoryNavGrid = () => {

    const location = useLocation();
    const [isActive, setIsActive] = useState(location.pathname);

    useEffect(() => {
        setIsActive(location.pathname)
    }, [location.pathname])
    
    return (
        <React.Fragment>
            {/* Navigation Grid */}
            <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 space-x-4 pt-4">
                <Link to="/hardware_shop/hardware-products">
                    <div
                        role="button"
                        tabIndex={0}
                        className={`flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4
                            ${isActive === "/hardware_shop/hardware-products" ? "bg-[rgb(0,0,122)] text-white" : "bg-blue-200 text-gray-900"}`}
                    >
                    <img src="/hardwareShop.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Fundi" />
                    <p className="mt-2 text-lg font-semibold">Hardware</p>
                    </div>
                </Link>

                <Link to="/hardware_shop/custom-products">
                    <div 
                        role="button"
                        tabIndex={0}
                        className={`flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition
                            ${isActive === "/hardware_shop/custom-products" ? "bg-[rgb(0,0,122)] text-white" : "bg-blue-200 text-gray-900"}`}
                    >
                    <img
                        src="/customproducts.png"
                        className="h-10 md:h-12 mr-2 md:mr-0"
                        alt="Professional"
                    />
                    <p className="mt-2 text-lg font-semibold">Custom Products</p>
                    </div>
                </Link>

                <Link to="/hire-equipments-and-machinery">
                    <div 
                        role="button"
                        tabIndex={0}
                        className={`flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition
                            ${isActive.startsWith("/hire-equipments-and-machinery") ? "bg-[rgb(0,0,122)] text-white" : "bg-blue-200 text-gray-900"}`}
                    >
                    <img src="/machinery.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Contractor" />
                    <p className="mt-2 text-lg font-semibold">Machinery Hire</p>
                    </div>
                </Link>

                <Link to="/hardware_shop/designs">
                    <div 
                        role="button"
                        tabIndex={0}
                        className={`flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition
                            ${isActive === "/hardware_shop/designs" ? "bg-[rgb(0,0,122)] text-white" : "bg-blue-200 text-gray-900"}`}
                    >
                    <img src="/designs.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Hardware" />
                    <p className="mt-2 text-lg font-semibold">Designs</p>
                    </div>
                </Link>
            </nav>
        </React.Fragment>
    )
};

export default CategoryNavGrid;