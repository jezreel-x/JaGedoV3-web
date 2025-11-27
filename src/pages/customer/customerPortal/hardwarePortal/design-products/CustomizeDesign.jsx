import { useState, Fragment } from "react";
import { Dialog, DialogPanel, DialogTitle, Transition } from "@headlessui/react";
import FileUploader from "../../forms/FileUpload";

export function CustomizeDesign() {
  const [open, setOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      {/* Open Modal Button */}
      <button type="button"
        onClick={() => setOpen(true)}
        className="flex-1 px-8 py-4 rounded-xl cursor-pointer border-2 border-[rgb(0,0,112)] text-[rgb(0,0,112)] font-semibold hover:bg-[rgb(0,0,112)] hover:text-white transition-colors"
      >
        Customize
      </button>

      {/* Modal using Headless UI */}
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-50 rounded-lg" onClose={() => setOpen(false)}>
          {/* Background Overlay */}
          <div className="fixed inset-0 bg-black/50" />

          {/* Modal Content */}
          <div className="fixed inset-0 flex items-center justify-center p-4 boder-3">
            <DialogPanel className="bg-white w-full sm:w-[90%] h-11/12 my-8 p-6 rounded-lg shadow-lg border-3 overflow-y-auto">
              {/* Modal Header */}
              <DialogTitle className="text-lg font-bold text-gray-800">
                Propose Changes
              </DialogTitle>

              {/* Modal Body */}
              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <div className="flex flex-col w-full sm:w-1/2 sm:h-4/5">
                  <label htmlFor="description" className="text-gray-800 font-semibold mb-2">
                    Description:
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={8}
                    className="w-full px-4 py-2 border-2 border-gray-500 focus:outline-none rounded-md focus:ring-2 focus:ring-blue-600 resize-none"
                    placeholder="Describe your request..."
                  />
                </div>
                <div className="flex flex-col border-2 border-gray-500 w-full sm:w-1/2 h-4/5 mt-8 justify-center items-center rounded-md">
                  <FileUploader />
                </div>
              </div>

              {/* Agreement Checkbox */}
              <div className="flex justify-center items-center my-4">
                <label className="flex items-center text-sm text-gray-700 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                    className="mr-2 h-3 w-3 cursor-pointer" 
                  />
                  <span className="underline font-semibold hover:text-[rgb(0,0,122)]">
                    I agree to Fundi Agreement
                  </span>
                </label>
              </div>

              {/* Modal Footer Buttons */}
              <div className="flex justify-end gap-4 mt-6">
                <button 
                  type="button"
                  onClick={() => setOpen(false)}
                  className="px-4 py-2 text-red-600 bg-white border-2 border-red-600 rounded-md hover:bg-red-600 hover:text-white cursor-pointer"
                >
                  Close
                </button>
                <button 
                  disabled={!isChecked}
                  type='button'
                  onClick={() => setOpen(false)}
                  className={`px-4 py-2 rounded-md hover:bg-blue-200
                    ${isChecked ? "bg-[rgb(0,0,112)] text-white hover:text-gray-700 cursor-pointer" : "bg-gray-200 text-gray-700 cursor-not-allowed"}`}
                >
                  Submit
                </button>
              </div>
            </DialogPanel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
