
import AdminSideNav from "../../components/Navigation/AdminSideNav";

import { useState, lazy, Suspense } from "react";

import {  useNavigate } from "react-router-dom";
// import AdminSideNav from "../../components/Navigation/AdminSideNav";
import AdminActiveJobTabs from "../../pages/customer/customerLanding/AdminActiveJobTabs";

// import { tableData } from "../../data/tableData";

const NavigationBar = lazy(
  () => import("../../components/Navigation/NavigationBar")
);

const milestones = [
  {
    id: 1,
    activity: "Bill 1",
    percent: 25,
    plannedStartDate: "03/04/2025",
    plannedEndDate: "05/04/2025",
    actualStartDate: "04/04/2025",
    actualEndDate: "06/04/2025",
    remarks: "Awaiting Approval",
  },

  {
    id: 2,
    activity: "Bill 3",
    percent: 35,
    plannedStartDate: "03/04/2025",
    plannedEndDate: "05/04/2025",
    actualStartDate: "04/04/2025",
    actualEndDate: "06/04/2025",
    remarks: "Paid",
  },

  {
    id: 3,
    activity: "Bill 5",
    percent: 30,
    plannedStartDate: "03/04/2025",
    plannedEndDate: "05/04/2025",
    actualStartDate: "04/04/2025",
    actualEndDate: "06/04/2025",
    remarks: "Ongoing",
  },
  {
    id: 4,
    activity: "Bill 6",
    percent: 25,
    plannedStartDate: "03/04/2025",
    plannedEndDate: "05/04/2025",
    actualStartDate: "04/04/2025",
    actualEndDate: "06/04/2025",
    remarks: "Under Evaluation",
  },
  {
    id: 5,
    activity: "Bill 7",
    percent: 25,
    plannedStartDate: "03/04/2025",
    plannedEndDate: "05/04/2025",
    actualStartDate: "04/04/2025",
    actualEndDate: "06/04/2025",
    remarks: "Start Date Approved",
  },

  {
    id: 6,
    activity: "Bill 8",
    percent: 25,
    plannedStartDate: "03/04/2025",
    plannedEndDate: "05/04/2025",
    actualStartDate: "04/04/2025",
    actualEndDate: "06/04/2025",
    remarks: "End Date Approved",
  },
];

// Financial Milestones Data
const financialMilestones = [
  {
    id: 1,
    description: "Bill 1 & Bill 2",
    percent: 25,
    status: "Awaiting Approval",
    amount: 2500000,
  },
  {
    id: 2,
    description: "Bill 3 & Bill 4",
    percent: 25,
    status: "Paid",
    amount: 2500000,
  },

  {
    id: 3,
    description: "Bill 5",
    percent: 25,
    status: "Ongoing",
    amount: 2500000,
  },

  {
    id: 4,
    description: "Bill 6",
    percent: 25,
    status: "Yet to Start",
    amount: 2500000,
  },
];

const billSummary = [
  { id: 1, billNo: "Bill 1", budget: 1000000, actual: 800000, balance: 200000 },
  {
    id: 2,
    billNo: "Bill 2",
    budget: 1500000,
    actual: 1200000,
    balance: 300000,
  },
];

const totalAmount = milestones.reduce(
  (sum, milestone) => sum + milestone.amount,
  0
);

export default function DetailsPage() {
  // const { } = useParams(); // Get the item ID from the URL
  // const item = tableData.find((data) => data.id === parseInt(id, 10) || data);
  const navigate = useNavigate();

  // const [activeTab, setActiveTab] = useState("job specification"); // Default tab is 'Progress'
  const [activeCard, setActiveCard] = useState("technical");

  const handleCardClick = (card) => {
    setActiveCard(card); // Set active card based on the click (technical or financial)
  };

  return (
    <>
      <Suspense fallback={<div>Loading navigation...</div>}>
        <NavigationBar />
      </Suspense>
      <AdminSideNav />
      <AdminActiveJobTabs />

      <div className="flex min-h-screen bg-white">
        {/* <AdminSideNav /> */}

        {/* Main Content */}
        <div className="flex-1 flex flex-col transition-all duration-300 relative pt-20 px-4 md:px-8 lg:px-12">
         {/* Technical & Financial Cards */}
<div className="p-8 flex justify-center flex-wrap gap-16">
  {[
    {
      id: "technical",
      title: "Technical",
      value: "60%",
    },
    {
      id: "financial",
      title: "Financial",
      value: "50%",
    },
  ].map((card) => (
    <div
      key={card.id}
      role="button"
      tabIndex={0}
      className={`flex-1 max-w-sm cursor-pointer p-4 text-center rounded-lg transition-all font-bold ${
        activeCard === card.id
          ? "bg-[rgb(0,0,122)] text-white"
          : "bg-blue-200 text-black"
      }`}
      onClick={() => handleCardClick(card.id)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleCardClick(card.id);
        }
      }}
    >
      <h2 className="text-lg font-semibold mb-2">{card.title}</h2>
      <div className="text-3xl font-bold">{card.value}</div>
    </div>
  ))}
</div>


          {/* Technical Progress Table */}
          {activeCard === "technical" && (
            <div className="max-w-full overflow-x-auto mx-auto w-full md:w-[90%] lg:w-[80%]">
              <h2 className="text-xl font-semibold mb-3">Technical Progress</h2>
              <div className="bg-white p-4 rounded-lg shadow mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100 text-gray-600">
                    <tr className="border-b">
                      <th className="border p-2">Item no.</th>
                      <th className="border p-2">Activity</th>
                      <th className="border p-2">Status</th>
                      <th className="border p-2">Planned Start Date</th>
                      <th className="border p-2">Planned End Date</th>
                      <th className="border p-2">Actual Start Date</th>
                      <th className="border p-2">Actual End Date</th>
                      <th className="border p-2">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {milestones.map((milestone) => (
                      <tr key={milestone.id} className="text-center border">
                        <td className="border p-2">{milestone.id}</td>
                        <td className="border p-2">{milestone.activity}</td>
                        <td className="border p-2">{milestone.percent}%</td>
                        <td className="border p-2">
                          {milestone.plannedStartDate}
                        </td>
                        <td className="border p-2">
                          {milestone.plannedEndDate}
                        </td>
                        <td className="border p-2">
                          {milestone.actualStartDate}
                        </td>
                        <td className="border p-2">
                          {milestone.actualEndDate}
                        </td>
                        <td className="border p-2">{milestone.remarks}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Financial Tables */}
          {activeCard === "financial" && (
            <div className="w-full mx-auto md:w-[90%] lg:w-[80%]">
              <h2 className="text-xl font-semibold mb-3">
                Disbursement Schedule
              </h2>
              <div className="overflow-x-auto mb-6">
                <table className="w-full text-sm bg-white">
                  <thead className="bg-gray-100 text-gray-600">
                    <tr>
                      <th className="border p-2">Milestone</th>
                      <th className="border p-2">Description</th>
                      <th className="border p-2">%</th>
                      <th className="border p-2">Status</th>
                      <th className="border p-2">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    {financialMilestones.map((item) => (
                      <tr key={item.id} className="text-center border">
                        <td className="border p-2">{item.id}</td>
                        <td className="border p-2">{item.description}</td>
                        <td className="border p-2">{item.percent}%</td>
                        <td className="border p-2">{item.status}</td>
                        <td className="border p-2">
                          {item.amount.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                    <tr className="font-bold bg-gray-100">
                      <td colSpan="4" className="p-2 text-right">
                        Total Amount:
                      </td>
                      <td className="p-2 text-right">
                        {totalAmount.toLocaleString()}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Bill Summary */}
              <h2 className="text-xl font-semibold mb-3">Bill Summary</h2>
              <div className="bg-white p-4 rounded-lg shadow overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead className="bg-gray-200">
                    <tr>
                      <th className="border p-2">No</th>
                      <th className="border p-2">Bill No</th>
                      <th className="border p-2">Title</th>
                      <th className="border p-2">Budget</th>
                      <th className="border p-2">Actual</th>
                      <th className="border p-2">Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {billSummary.map((bill) => (
                      <tr
                        key={bill.id}
                        className="text-center border hover:bg-gray-50 cursor-pointer"
                        onClick={() => navigate(`/bill-details/${bill.id}`)}
                      >
                        <td className="border p-2">{bill.id}</td>
                        <td className="border p-2">{bill.billNo}</td>
                        <td className="border p-2">Lorem Ipsum</td>
                        <td className="border p-2">
                          {bill.budget.toLocaleString()}
                        </td>
                        <td className="border p-2">
                          {bill.actual.toLocaleString()}
                        </td>
                        <td className="border p-2">
                          {bill.balance.toLocaleString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
