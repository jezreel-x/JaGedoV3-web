import { useState } from "react";

function EditPhone() {
  const [message, setMessage] = useState("");

  const handleUpdate = async () => {
    // const updatedAddress = { country, county, subCounty, estate };

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simulate delay

      setMessage("✅ Address updated successfully!");
    } catch (err) {
      setMessage("❌ Failed to update address. Please try again.");
    }
  };
  return (
    <div className="flex min-h-screen items-start mt-20 justify-center px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-6">
        <h1 className="text-3xl font-semibold text-gray-900">
          Update Phone Number
        </h1>

        <p className="mt-2 text-gray-600">
          You’ll use this number to get notifications, sign in, and recover your
          account.
        </p>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            defaultValue="07456789456"
            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 text-gray-900 shadow-sm focus:border-black focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        <p className="mt-2 text-sm text-gray-500">
          A verification code will be sent to this number.
        </p>

        <button
          type="button"
          onClick={handleUpdate}
          className="mt-6 w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:green-100"
        >
          Update
        </button>

        {message && <p className="text-sm text-green-600 mt-2">{message}</p>}
      </div>
    </div>
  );
}

export default EditPhone;
