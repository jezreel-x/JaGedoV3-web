import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "Specification", key: "specification", path: "/adminquoteSpecification" },
  { name: "Customer", key: "Other", path: "/adminquoteCustomer" },
  { name: "Bidders", key: "Professional fee", path: "/adminquoteBidders" },
  { name: "Bids", key: "quotations", path: "/adminquoteBids" },
  
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
