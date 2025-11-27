import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "Job specification", key: "specification", path: "/admin-portal/jobSpecifications" },
  { name: "Customer", key: "quotations", path: "/admin-portal/customer" },

  { name: "Bidders", key: "Professional fee", path: "/admin-view-bidders" },
  { name: "Bids", key: "Other", path: "/admin-view-bid" },
//   { name: "Grand summary", key: "Breakdown", path: "/admin-grand-summary2" },
//   { name: "Payment Breakdown", key: "Breakdown", path: "/admin-payment-breakdown2" },
//   { name: "Submissions", key: "milestonesast", path: "/admin-submissions2" },
];

function FundiNavBar() {
  const location = useLocation();

  return (
    <section className="container mx-auto mt-10 px-4">
      <div className="flex justify-end flex-wrap space-x-4 sm:space-x-6 px-4">
        {tabs.map((tab) => (
          <Link
            key={tab.key}
            to={tab.path}
            className={`pb-2 font-medium text-sm sm:text-base transition-all duration-200 ${
              location.pathname === tab.path
                ? "text-[rgb(0,0,122)] border-b-2 border-[rgb(0,0,122)]"
                : "text-gray-600 hover:text-[rgb(0,0,122)]"
            }`}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FundiNavBar;
