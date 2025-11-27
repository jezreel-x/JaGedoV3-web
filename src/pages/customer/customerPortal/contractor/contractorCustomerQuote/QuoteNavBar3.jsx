import { Link, useLocation } from "react-router-dom";

const tabs = [
  // { name: "Award", key: "milestonesast", path: "/contractor-view-bid" },

  { name: "Job Specification", key: "fees", path: "/contractor-view-quote-job-spec" },
  { name: "Work plan", key: "quotations", path: "/contractor-workplan3" },
  { name: "Contractor fee", key: "fees", path: "/contractor-quote-creation3" },
  { name: "Other expenses", key: "Other", path: "/contractor-expense3" },
  { name: "Bill summary", key: "Breakdown", path: "/contractor-bill-summary3" },
  { name: "Milestones", key: "milestonesast", path: "/contractor-submissions3" },
  {name:"Attachments",key:"payment",path:"/contractor-attachments3"}

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
