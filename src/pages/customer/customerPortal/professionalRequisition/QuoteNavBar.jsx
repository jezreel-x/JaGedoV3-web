import { Link, useLocation } from "react-router-dom";

const tabs = [
  { name: "Job Specification", key: "specification", path: "/professional-portal/jobSpecification" },
  { name: "Work Plan", key: "quotations", path: "/professional-workplan" },

  { name: " Professional Fee", key: "Professional fee", path: "/professional-quote-creation" },
  { name: "Other Expenses", key: "Other", path: "/professional-expense" },
  { name: "Grand Summary", key: "Breakdown", path: "/professional-grand-summary" },
  { name: "Payment Breakdown", key: "Breakdown", path: "/professional-payment-breakdown" },
  { name: "Submissions", key: "milestonesast", path: "/professional-submissions" },
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
