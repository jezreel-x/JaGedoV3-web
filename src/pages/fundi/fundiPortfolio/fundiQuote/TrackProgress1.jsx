import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import PropTypes from "prop-types";
import ActiveFundiNav from "./ActiveFundiNav";

// Step Content Component
const StepContent = ({ icon, title, date, time, status, statusColor }) => {
  // Handle Background Color
  let bgColor = "bg-[rgb(0,0,122)]"; // Default color

  if (statusColor.includes("gray")) {
    bgColor = "bg-gray-500";
  } else if (statusColor.includes("yellow")) {
    bgColor = "bg-yellow-500";
  } else if (statusColor.includes("green")) {
    bgColor = "bg-green-500";
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-center mb-3">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{date}</p>
      <p className="text-gray-500 text-sm">{time}</p>
      {status && (
        <div className={`mt-3 inline-flex items-center px-3 py-1 ${statusColor} rounded-full text-sm font-medium`}>
          <span className={`w-2 h-2 rounded-full mr-2 ${bgColor}`} />
          {status}
        </div>
      )}
    </div>
  );
};

StepContent.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  status: PropTypes.string,
  statusColor: PropTypes.string.isRequired,
};

// Main Component
const TrackProgress = () => {
  // Step Event Handlers
  const onAwarded = () => console.log("Awarded");
  const onStart = () => console.log("Started");
  const onComplete = () => console.log("Completed");
  const onReview = () => console.log("Under Review");

  return (

    <>
    <section className="container mx-auto mt-12 px-4">
        <ActiveFundiNav />
        {/* Title */}
        <h1 className="text-2xl font-semibold text-gray-500 mt-6 mb-4">Job Specifications</h1>
      </section>
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Project Progress Tracker</h2>
          <p className="text-gray-600 mt-2">Track your project milestones in real-time</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <StepProgressBar
            startingStep={0}
            steps={[
              {
                label: "Awarded",
                name: "awarded",
                content: (
                  <StepContent
                    icon={<svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>}
                    title="Project Awarded"
                    date="February 1, 2025"
                    time="09:00 AM"
                    status="Awarded"
                    statusColor="bg-gray-100 text-gray-800"
                  />
                ),
                onClick: onAwarded,
              },
              {
                label: "Started",
                name: "start",
                content: (
                  <StepContent
                    icon={<svg className="w-8 h-8 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>}
                    title="Project Started"
                    date="February 4, 2025"
                    time="10:24 AM"
                    status="In Progress"
                    statusColor="bg-yellow-100 text-yellow-800"
                  />
                ),
                onClick: onStart,
              },
              {
                label: "Completed",
                name: "complete",
                content: (
                  <StepContent
                    icon={<svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>}
                    title="Project Completed"
                    date="February 15, 2025"
                    time="16:30 PM"
                    status="Completed"
                    statusColor="bg-green-100 text-green-800"
                  />
                ),
                onClick: onComplete,
              },
              {
                label: "Review",
                name: "review",
                content: (
                  <StepContent
                    icon={<svg className="w-8 h-8 text-[rgb(0,0,122)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>}
                    title="Final Review"
                    date="February 20, 2025"
                    time="14:00 PM"
                    status="Pending Review"
                    statusColor="bg-[rgba(0,0,122,0.1)] text-[rgb(0,0,122)]"
                  />
                ),
                onClick: onReview,
              },
            ]}
          />
        </div>

        {/* Update Button */}
        <div className="text-center">
          <button type="button" className="px-8 py-3 bg-[rgb(0,0,122)] text-white rounded-lg shadow-md hover:opacity-90 transition-all duration-300 flex items-center justify-center mx-auto gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Update Progress
          </button>
        </div>
      </div>
    </div>
    </>
    
  );
};

export default TrackProgress;
