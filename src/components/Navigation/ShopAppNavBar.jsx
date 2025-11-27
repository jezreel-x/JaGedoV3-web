import { Link } from 'react-router-dom'


const ShopAppNavBar = () => {
    return (
        <nav className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 px-2">
            {/* Fundi hardware products */}
            <Link to="/hardware_shop/hardware-products">
                <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 bg-[rgb(0,0,122)]" >
                    <img src="/hardwareShop.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Fundi" />
                    <p className="mt-2 text-lg font-semibold text-white">Hardware</p>
                </div>
            </Link>

            {/* Professional custom products */}

            <Link to="/hardware_shop/custom-products">
                {/* <div className="flex flex-col items-center rounded-lg shadow-md p-4 bg-[rgba(0,0,122,0.4)] hover:bg-[rgba(0,0,122,0.7)] transition"> */}
                <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md bg-blue-900 hover:bg-opacity-70 p-4 transition">
                    <img src="/customproducts.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Professional" />
                    <p className="mt-2 text-lg font-semibold text-white">Custom Products</p>
                </div>
            </Link>

            {/* hire equipment and machine */}
            <Link to="/hardware_shop/hire-equipments-and-machinery">
                <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition bg-blue-900 hover:bg-opacity-70">
                    <img src="/machinery.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Contractor" />
                    <p className="mt-2 text-lg font-semibold text-white">Hire Equipments and Machinery</p>
                </div>
            </Link>


            {/* Hardware design */}
            <Link to="/hardware_shop/designs">
                <div className="flex flex-row md:flex-col justify-center items-center rounded-lg shadow-md p-4 transition bg-blue-900 hover:bg-opacity-70">
                    <img src="/designs.png" className="h-10 md:h-12 mr-2 md:mr-0" alt="Hardware" />
                    <p className="mt-2 text-lg font-semibold text-white">Designs</p>
                </div>
            </Link>
        </nav>

    )
}

export default ShopAppNavBar