import { useState } from "react";

const FundRequestReceipt = () => {
  const [method, setMethod] = useState("bank");
  const [phone, setPhone] = useState("");
  const [slipName, setSlipName] = useState("");

  const totalKES = 1_600_000;
  const mpesaDisabled = totalKES > 500_000;

  return (
    <div className="mt-24"> {/* This pushes the content down */}
      <div className="max-w-2xl mx-auto p-6 bg-white border border-gray-300 shadow-md text-gray-800 space-y-6 font-sans text-base">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <img src="/logo.png" alt="JaGedo Logo" className="h-14 w-auto" />
          <div className="text-sm text-right space-y-1">
            <p><strong>Funds request no:</strong> FR#4468</p>
            <p><strong>Date:</strong> 2025-06-05</p>
          </div>
        </div>

        {/* Request Info */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="space-y-1">
            <p><strong>Funds request to:</strong> John Doe</p>
            <p><strong>Request type:</strong> Managed by JaGedo</p>
            <p><strong>Skill:</strong> Architect</p>
          </div>
        </div>

        {/* Table */}
        <div className="border border-gray-400 rounded">
          <div className="grid grid-cols-3 bg-gray-100 font-semibold text-center p-2">
            <span>Description</span>
            <span>Sum</span>
            <span>Total</span>
          </div>
          <div className="grid grid-cols-3 text-center p-2 border-t border-gray-300">
            <span>Construction of an office block</span>
            <span>1,600,000</span>
            <span>1,600,000</span>
          </div>
          <div className="text-right font-bold p-2 border-t border-gray-300">
            Total (KES): 1,600,000
          </div>
        </div>

        {/* Payment Method */}
        <div className="space-y-3">
          <label className="font-semibold">Select payment method:</label>
          <select
            value={method}
            onChange={(e) => setMethod(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
          >
            <option value="mpesa" disabled={mpesaDisabled}>
              Mpesa {mpesaDisabled && "(disabled for > 500K)"}
            </option>
            <option value="bank">Bank</option>
          </select>

          {method === "bank" ? (
            <>
              <div className="ml-4 space-y-1">
                <p><strong>Bank Name:</strong> KCB</p>
                <p><strong>Branch:</strong> Kipande House</p>
                <p><strong>Account:</strong> 132 679 9757</p>
              </div>

              {/* Upload & Confirm */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center sm:gap-4 mt-3 ml-4">
                <label className="font-semibold mb-1 sm:mb-0">Attach Payment Slip:</label>
                <input
                  type="file"
                  accept="application/pdf,image/*"
                  onChange={(e) =>
                    setSlipName(e.target.files[0] ? e.target.files[0].name : "")
                  }
                  className="border border-gray-300 rounded px-2 py-1 text-sm cursor-pointer file:mr-2 file:border-0 file:bg-blue-600 file:text-white file:px-3 file:py-1"
                />
                {slipName && (
                  <span className="text-green-600 text-sm mt-2 sm:mt-0">
                    Uploaded: {slipName}
                  </span>
                )}
              </div>
            </>
          ) : (
            <div className="ml-4 space-y-2">
              <label className="block font-semibold">Phone Number:</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="e.g. 0700123123"
                className="border border-gray-300 rounded px-3 py-2 w-64 focus:ring focus:ring-blue-200"
              />
            </div>
          )}
        </div>

        {/* Confirm Button */}
        <div className="pt-4 text-right">
          <button className="bg-[rgb(0,0,122)] text-white px-6 py-2 rounded shadow hover:bg-blue-700 transition">
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default FundRequestReceipt;
