import { useState, useRef } from "react";
import { Avatar } from "@material-tailwind/react";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProfileNavBar from "./ProfileNavBar";

const Account2 = () => {
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  // const {email, name, phone} = JSON.parse(localStorage.getItem("user"));

  const fileInputRef = useRef(null);
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
  return (
    <div className="flex">
      <ProfileNavBar />
      <div className="ml-[20rem] w-full">
        {" "}
        {/* margin to account for fixed sidebar width */}
        <section className="w-full max-w-3xl p-6">
          <div className="bg-white rounded-xl p-8">
            <h1 className="text-3xl font-bold mb-6">Account Info</h1>

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
                <div className="space-y-2">
                  <label className="block text-sm font-medium">Name</label>
                  <input
                    type="text"
                    defaultValue="John Doe"
                    className="w-full px-4 py-2 border-b focus:border-b-[rgb(0,0,122)] outline-none transition-all"
                  />
                </div>

                <div className="space-y-4">
                  <div className="space-y-2 relative">
                    <label className="block text-sm font-medium">
                      Phone Number
                    </label>
                    <div className="flex items-center border-b focus-within:border-b-[rgb(0,0,122)] transition-all">
                      <input
                        type="tel"
                        defaultValue="+254712345678"
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
                        defaultValue="tEg9L@example.com"
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
        </section>
      </div>
    </div>
  );
};

export default Account2;
