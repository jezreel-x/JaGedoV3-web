
import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "Specification", key: "quote", path: "/customer-portal/Quote2" },
  // { name: "Grand Summary", key: "jobs", path: "/customer-portal/grand-summary2" },
  { name: "Product List", key: "jobs", path: "/customer-portal/product-list2" },
  // { name: "Payment Breakdown", key: "payment", path: "/customer-portal/payment-breakdown2" },


  { name: "Order Summary", key: "jobs", path: "/customer-portal/order-summary2" },
  // { name: "Order Summary", key: "progress", path: "/fundi-portal/active/progress" },
  // { name: "Submissions", key: "customer", path: "/customer-portal/submissions2" },
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