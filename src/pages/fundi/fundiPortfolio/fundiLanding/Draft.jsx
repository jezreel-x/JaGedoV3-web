import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import FundiNavBar from "./FundiNavBar";
import NavigationBar from "../../../../components/Navigation/NavigationBar";
import ChatBot from "../../../../pages/customer/customerPortal/ChatBot"

const today = new Date().toLocaleDateString();

function Draft() {
  return (
    <section className="container mx-auto mt-7">
        <NavigationBar/>
      <FundiNavBar />

      {/* Title */}
      {/* <h1 className="text-2xl font-semibold text-gray-500 mt-6 mb-2">My Drafts</h1> */}

      <div className="grid gap-6 max-w-4xl mx-auto">
        <ChatBot />
        {/* Past Requests */}
       

        {/* Orders */}
        <section className="px-4 shadow py-5 rounded-2xl mb-9 w-full">
          <h1 className="text-xl font-semibold text-gray-700">Orders</h1>
         
          <Link to="/fundi-portal/quote/builder">
            <div className="bg-white rounded-lg p-4 border border-gray-200 cursor-pointer shadow hover:shadow-lg transition-all my-5">
              <div className="grid grid-cols-4 gap-4 items-center mb-4">
                <span className="font-medium text-gray-800">FOO1</span>
                <span className="text-gray-600 font-medium">
                  Managed by Jagedo
                </span>
                <span className="text-gray-600 font-medium">
                  Req Date: {today}
                </span>
                <span className="text-[rgb(0,0,122)] font-medium justify-self-end">
                  Bid Invited
                </span>
              </div>
              <hr className="border-gray-200 my-3" />
              <div className="grid grid-cols-4 gap-2 items-center">
                <span className="text-gray-700 font-medium">Mason</span>
                <span className="text-gray-600 font-medium">
                  Location: Utawala, Nairobi
                </span>
                <span className="text-gray-600 font-medium">
                  Start Date: {today}
                </span>
                <div className="justify-self-end">
                  <FaEye className="text-gray-500 w-5 h-5 hover:text-[rgb(0,0,122)] transition-colors mr-2" />
                </div>
              </div>
            </div>
          </Link>
          <div className="flex justify-end mr-3">
            <button
              type="button"
              className="text-[rgb(0,0,122)] font-bold hover:underline"
            >
              View more
            </button>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Draft;
