import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "New", key: "new", path: "/contractor-portal" },
  { name: "Draft", key: "draft", path: "/contractor-portal/draft" },
  { name: "Bids", key: "quotations", path: "/contractor-portal/quotations" },
  { name: "Active", key: "active", path: "/contractor-portal/active" },
  { name: "Past", key: "past", path: "/contractor-portal/past" },
];

function ContractorNavBar() {
  const location = useLocation(); 
  const {name} = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="container mx-auto mt-32 px-4">
      <div className="flex">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Welcome - {name}</h1>
      </div>
      <div className="border-b border-gray-400 mt-1">
        <div className="flex justify-end space-x-6 px-4">
          {tabs.map((tab) => (
            <Link
              key={tab.key}
              to={tab.path}g
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

export default ContractorNavBar