
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "Specification", key: "quote", path: "/fundi-portal/quote/builder" },

  { name: "Grand Summary", key: "jobs", path: "/fundi-portal/order-summary" },
  { name: "Product List", key: "progress", path: "/fundi-portal/productlist" },
  { name: "Payment Breakdown", key: "payment", path: "/fundi-portal/payment-builder" },
  { name: "Lead Time", key: "lead", path: "/fundi-portal/leadtime" },

  { name: "Submissions", key: "customer", path: "/fundi-portal/submission-details" },
];

function ActiveFundiNav() {
  const location = useLocation(); 

  return (
    <section className="container mx-auto mt-12">
      
      <div className="border-b border-gray-400 mt-1">
        <div className="flex justify-end space-x-6 px-4">
          {tabs.map((tab) => (
            <Link
              key={tab.key}
              to={tab.path}
              className={`pb-1 font-medium ${
                location.pathname === tab.path
                  ? "text-[rgb(0,0,122)] border-b-2 border-[rgb(0,0,122)]"
                  : "text-gray-600 hover:text-[rgb(0,0,122)]"
              }`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ActiveFundiNav