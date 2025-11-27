import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "job specification", key: "job-specification", path: "/admin-view-cont-past-job-specification" },
  { name: "Progress", key: "progress", path: "/admin-view-cont-past-job" },
  { name: "Builder", key: "draft", path: "/admin-view-past-cont-builders" },
  { name: "Customer", key: "customer", path: "/admin-view-past-cont-customers" },
  { name: "Quote", key: "quote", path: "/admin/view-past-cont/quoteform" },
  // { name: "Bids", key: "bids", path: "/adminquoteBids1" },
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
