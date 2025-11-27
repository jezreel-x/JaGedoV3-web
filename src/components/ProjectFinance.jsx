const ProjectFinance = () => {
  const milestones = [
    { id: 1, description: "Bill 1 & Bill 2", percent: 25, status: "Awaiting Approval", amount: 2500000 },
    { id: 2, description: "Bill 3 & Bill 4", percent: 25, status: "Paid", amount: 2500000 },
    { id: 3, description: "Bill 5", percent: 25, status: "Ongoing", amount: 2500000 },
    { id: 4, description: "Bill 6", percent: 25, status: "Yet to Start", amount: 2500000 },
  ];

  const billSummary = [
    { id: 1, billNo: "Bill 1", budget: 1000000, actual: 800000, balance: 200000 },
    { id: 2, billNo: "Bill 2", budget: 1500000, actual: 1200000, balance: 300000 },
  ];

  const totalAmount = milestones.reduce((sum, milestone) => sum + milestone.amount, 0);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <nav className="flex justify-between border-b pb-2 mb-4 text-lg font-semibold">
        <span>Builder</span>
        <span>Customer</span>
        <span>Project Details</span>
        <span className="px-4 py-1 bg-[rgb(0,0,122)] text-white rounded-md shadow">Progress</span>
        <span>Quote</span>
      </nav>
      <div className="flex gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow w-1/2">
          <h2 className="text-lg font-semibold">Technical</h2>
          <div className="text-center text-3xl font-bold text-blue-600">75%</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow w-1/2">
          <h2 className="text-lg font-semibold">Financial</h2>
          <div className="text-center text-3xl font-bold text-green-600">60%</div>
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-3">Disbursement Schedule</h2>
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Milestone</th>
              <th className="border p-2">Description</th>
              <th className="border p-2">%</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {milestones.map((milestone) => (
              <tr key={milestone.id} className="text-center border">
                <td className="border p-2">{milestone.id}</td>
                <td className="border p-2">{milestone.description}</td>
                <td className="border p-2">{milestone.percent}%</td>
                <td className="border p-2">{milestone.status}</td>
                <td className="border p-2 ">{milestone.amount.toLocaleString()}</td>
              </tr>
            ))}
            <tr className="font-bold bg-gray-100">
              <td colSpan="4" className="p-2 text-right">Total Amount:</td>
              <td className="p-2 text-right">{totalAmount.toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-semibold mb-3">Bill Summary</h2>
      <div className="bg-white p-4 rounded-lg shadow">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
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
                className="text-center border cursor-pointer hover:bg-gray-100"
                onClick={() => window.open(`/bill-details/${bill.id}`, "_blank")}
              >
                <td className="border p-2">{bill.id}</td>
                <td className="border p-2">{bill.billNo}</td>
                <td className="border p-2">Lorem Ipsum</td>
                <td className="border p-2">{bill.budget.toLocaleString()}</td>
                <td className="border p-2">{bill.actual.toLocaleString()}</td>
                <td className="border p-2">{bill.balance.toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectFinance;














