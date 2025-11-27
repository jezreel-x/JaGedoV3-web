import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "Requisition", key: "new", path: "/customer/request-contractor" },
  { name: "New", key: "new", path: "/customer/new2" },
  { name: "Draft", key: "draft", path: "/customer/draft2" },
  { name: "Bids", key: "quotations", path: "/customer/quotations2" },
  { name: "Active", key: "active", path: "/customer/active2" },
  { name: "Past", key: "past", path: "/customer/past2" },
];

function CustomerNavBar() {
  const location = useLocation();
  // const { name } = JSON.parse(localStorage.getItem("user"));

  return (
    <section className="container mx-auto mt-32 px-4">
      {/* <div className="flex">
        <h1 className="text-2xl font-semibold text-gray-600">Welcome - {name},</h1>
      </div> */}
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
              }`}>
              {tab.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CustomerNavBar;
