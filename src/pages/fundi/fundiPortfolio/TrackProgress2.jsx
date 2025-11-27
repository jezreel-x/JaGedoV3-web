import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import BuilderPastJobTabs from "../../../pages/customer/customerLanding/BuilderPastJobTabs";
import NavigationBar from "../../../components/Navigation/NavigationBar";


const TrackProgress = () => {
  const onStep1 = () => console.log("Started");
  const onStep2 = () => console.log("Ongoing");
  const onComplete = () => console.log("Completed");

  return (
    <>
      <NavigationBar />
   < BuilderPastJobTabs />
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">Job Progress Tracker</h2>
          <p className="text-gray-600 mt-2">Monitor your job progress in real-time</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-8">
          <StepProgressBar
  startingStep={0}
  onSubmit={onComplete}
  stepClassName="text-green-700"
  activeStepClassName="font-bold text-green-800"
  progressBarClassName="bg-green-500"
  steps={[
    {
      label: "Start",
      name: "start",
      content: (
        <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-200">
          <div className="flex items-center justify-center mb-3">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-800 mb-2">Job Completed</h3>
          <p className="text-green-700">February 23 2025</p>
          <p className="text-green-600 text-sm">10:24 AM</p>
        </div>
      ),
      onClick: onStep1,
    },
    {
      label: "Stop",
      name: "stop",
      content: (
        <div className="bg-green-50 p-6 rounded-lg shadow-sm border border-green-200">
          <div className="flex items-center justify-center mb-3">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-green-800 mb-2">Expected Completion</h3>
          <p className="text-green-700">February 5, 2025</p>
          <p className="text-green-600 text-sm">10:24 AM</p>
          <div className="mt-3 inline-flex items-center px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
            Ongoing
          </div>
        </div>
      ),
      onClick: onStep2,
    },
  ]}
/>

        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 flex items-center justify-center mx-auto gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            Confirm Job Completion
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default TrackProgress;


// import "react-step-progress/dist/index.css";
// import StepProgressBar from "react-step-progress";

// const TrackProgress = () => {
//   const stepContent = (label, date) => (
//     <div className="text-center">
//       <p className="font-semibold text-blue-600">{label}</p>
//       <p className="text-gray-600">{date}</p>
//     </div>
//   );

//   return (
//     <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
//       <h2 className="font-bold text-lg mb-4">Progress Tracker</h2>

//       <StepProgressBar
//         startingStep={1}
//         steps={[
//           {
//             label: "Start",
//             name: "start",
//             content: stepContent("Start", "February 4, 2025 at 10:24 AM"),
//           },
//           // {
//           //   label: "Stop",
//           //   name: "stop",
//           //   content: stepContent("Stop", "February 5, 2025 at 10:24 AM"),
//           // },
//           {
//             label: "Ongoing",
//             name: "ongoing",
//             content: stepContent("Ongoing", ""),
//           },
//         ]}
//       />

//       <div className="flex justify-center mt-6">
//         <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">
//           Confirm Job Completed
//         </button>
//       </div>
//     </div>
//   );
// };

// export default TrackProgress;;



