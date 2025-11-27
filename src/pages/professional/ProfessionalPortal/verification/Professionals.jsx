import { useState, useRef } from "react";
import { Avatar } from "@material-tailwind/react";
import { FiEdit } from "react-icons/fi";

import { Link } from "react-router-dom";
import { Settings, User, Star } from "lucide-react";
import ProfileNavBarVerification2 from "./ProfileNavBarVerification2";

export default function Individual() {
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [askDeleteReason, setAskDeleteReason] = useState(false);
  const [deleteReason, setDeleteReason] = useState("");
  const [showActionDropdown, setShowActionDropdown] = useState(false);
  const fileInputRef = useRef(null);
  const showVerificationMessage = localStorage.getItem(
    "showVerificationMessage"
  );

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const [imageSrc, setImageSrc] = useState(
    "https://docs.material-tailwind.com/img/face-2.jpg"
  );

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result); // set image as data URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = () => {
    setShowDeleteConfirm(true);
  };

  const handleConfirmDelete = () => {
    setShowDeleteConfirm(false);
    setAskDeleteReason(true);
  };

  const handleSubmitReason = () => {
    if (deleteReason.trim()) {
      alert(`Deleted for reason: ${deleteReason}`);
      setAskDeleteReason(false);
      setDeleteReason("");
    } else {
      alert("Please enter a reason.");
    }
  };

  return (
    <div className="flex">
      <ProfileNavBarVerification2 />

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto bg-white">
        {/* Top right icons */}
        <div className="sticky top-0 z-40 bg-white px-4 py-2 flex justify-end gap-3 border-b">
          <button
            type="button"
            className="hover:bg-gray-100 p-2 rounded-full transition"
          >
            <User className="w-6 h-6 text-gray-800" />
          </button>
          <button
            type="button"
            className="hover:bg-gray-100 p-2 rounded-full transition"
          >
            <Settings className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* Tabs */}

        <div className="ml-[20rem] w-full">
          <section className="w-full max-w-3xl p-6">
            <div className="bg-white rounded-xl p-8">
              <h1 className="text-3xl font-bold mb-6">Account Info</h1>

              {showVerificationMessage && (
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      className="text-yellow-400 w-5 h-5"
                      fill="currentColor"
                    />
                  ))}
                  <span className="text-sm text-green-600 font-medium ml-2">
                    Verified
                  </span>
                </div>
              )}

              <div className="flex flex-col items-start mb-8">
                <Avatar size="l" alt="avatar" src={imageSrc} />
                <button
                  type="button"
                  onClick={handleButtonClick}
                  className="mt-4 text-[rgb(0,0,122)] hover:text-[rgb(0,0,150)] text-sm font-medium"
                >
                  Change Photo
                </button>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleImageChange}
                  className="hidden"
                />
              </div>

              <div className="space-y-6">
                <h2 className="text-2xl font-semibold border-b pb-2">
                  Basic Info
                </h2>

                <form className="space-y-4">
                  <div className="space-y-2 relative">
                    <label className="block text-sm font-medium">Name</label>
                    <div className="flex items-center border-b focus-within:border-b-[rgb(0,0,122)] transition-all">
                      <input
                        type="tel"
                        defaultValue="James Jagedo"
                        className="w-full px-4 py-2 outline-none"
                      />
                      <Link to="/professionalPortal/account-info/edit-name">
                        <FiEdit
                          className="text-[rgb(0,0,122)] cursor-pointer hover:opacity-75"
                          size={15}
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="space-y-2 relative">
                      <label className="block text-sm font-medium">
                        Phone Number
                      </label>
                      <div className="flex items-center border-b focus-within:border-b-[rgb(0,0,122)] transition-all">
                        <input
                          type="tel"
                          defaultValue="07456789456"
                          className="w-full px-4 py-2 outline-none"
                        />
                        <Link to="/professionalPortal/account-info/edit-phone">
                          <FiEdit
                            className="text-[rgb(0,0,122)] cursor-pointer hover:opacity-75"
                            size={15}
                          />
                        </Link>
                      </div>
                    </div>

                    <div className="space-y-2 relative">
                      <label className="block text-sm font-medium">Email</label>
                      <div className="flex items-center border-b focus-within:border-b-[rgb(0,0,122)] transition-all">
                        <input
                          type="email"
                          defaultValue="professionali@jagedo.com"
                          className="w-full px-4 py-2 outline-none"
                        />
                        <Link to="/professionalPortal/account-info/edit-email">
                          <FiEdit
                            className="text-[rgb(0,0,122)] cursor-pointer hover:opacity-75"
                            size={15}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* Only show if verified */}
            {showVerificationMessage && (
              <div className="mt-6 flex justify-between items-center flex-wrap gap-4">
                {/* Actions button aligned to start */}
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setShowActionDropdown(!showActionDropdown)}
                    className="bg-blue-800 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Actions
                  </button>

                  {showActionDropdown && (
                    <div className="absolute left-0 mt-2 w-44 bg-white border rounded shadow-lg z-50">
                      <button type="button"
                        onClick={() => {
                          alert("User Unverified");
                          setShowActionDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Unverify
                      </button>
                      <button type="button"
                        onClick={() => {
                          alert("User Suspended");
                          setShowActionDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                      >
                        Suspend
                      </button>
                      <button type="button"
                        onClick={() => {
                          alert("User Blacklisted");
                          setShowActionDropdown(false);
                        }}
                        className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600"
                      >
                        Blacklist
                      </button>
                    </div>
                  )}
                </div>

                {/* Delete button aligned to end */}
                <button
                  type="button"
                  onClick={handleDelete}
                  className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            )}

            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-4">
                <p>Are you sure you want to delete?</p>
                <div className="mt-2 flex gap-4">
                  <button
                    type="button"
                    onClick={handleConfirmDelete}
                    className="bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700"
                  >
                    Yes
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowDeleteConfirm(false)}
                    className="bg-gray-300 text-black px-4 py-1 rounded hover:bg-gray-400"
                  >
                    No
                  </button>
                </div>
              </div>
            )}

            {/* Ask for Delete Reason */}
            {askDeleteReason && (
              <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative mt-4">
                <p>Please provide a reason for deletion:</p>
                <textarea
                  value={deleteReason}
                  onChange={(e) => setDeleteReason(e.target.value)}
                  className="w-full mt-2 p-2 border rounded"
                />
                <div className="mt-2 flex gap-4">
                  <button
                    type="button"
                    onClick={handleSubmitReason}
                    className="bg-yellow-600 text-white px-4 py-1 rounded hover:bg-yellow-700"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setAskDeleteReason(false);
                      setDeleteReason("");
                    }}
                    className="bg-gray-300 text-black px-4 py-1 rounded hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
