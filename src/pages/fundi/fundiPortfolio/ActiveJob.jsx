import { useState } from "react";

const tabs = [
  { name: "Progress", key: "progress" },
  { name: "Job Specification", key: "specification" },
  { name: "Quote", key: "quote" },
  { name: "Payment Breakdown", key: "payment" },
  { name: "Customer", key: "customer" },
];

export default function ActiveJob() {
  const [activeTab, setActiveTab] = useState("evaluation");

  return (
    <div className="border-b">
      <div className="flex space-x-6 px-4">
        {tabs.map((tab) => (
          <button type="button"
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-2 font-medium ${
              activeTab === tab.key
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600 hover:text-blue-500"
            }`}
          >
            {tab.name}
          </button>
        ))}
      </div>
    </div>
  );
}
