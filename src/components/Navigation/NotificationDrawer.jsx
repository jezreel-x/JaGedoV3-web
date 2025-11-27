import { useState, Fragment, useCallback } from "react";
import {
  Dialog,
  Transition,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import {
  BellAlertIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { Typography } from "@material-tailwind/react";

export function NotificationDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen] = useState(false);

  const closeDrawer = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  function openDrawer() {
    setIsOpen(true);
  }

  return (
    <>
      <Typography as="div" variant="small" className="font-normal">
        <button 
        type="button"
          className="hidden lg:flex mb-1.5 mr-3 items-center gap-2 font-medium text-blue-gray-900 lg:rounded-full cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            openDrawer();
          }}
        >
          <BellAlertIcon className="h-[18px] w-[18px] text-blue-900" />
          <ChevronDownIcon
            strokeWidth={2}
            className={`h-3 w-3 text-blue-900 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
          />
        </button>
      </Typography>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeDrawer}>
          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                <TransitionChild
                  as={Fragment}
                  enter="transform transition ease-in-out duration-300"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transform transition ease-in-out duration-300"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <DialogPanel className="w-screen max-w-md bg-white shadow-xl p-4">
                    <div className="flex items-center justify-between mb-6">
                      <DialogTitle className="text-lg font-semibold text-gray-900">
                        Notifications
                      </DialogTitle>
                      <button
                        type="button"
                        onClick={closeDrawer}
                        className="text-gray-600 hover:text-gray-900"
                      >
                        <XMarkIcon className="h-5 w-5" />
                      </button>
                    </div>
                    <div className="space-y-4">
                      <p className="text-gray-700 text-sm">
                        Stay updated with the latest alerts and messages.
                      </p>
                      <div className="flex flex-col space-y-3">
                        <div className="p-3 bg-gray-100 rounded-md text-sm text-gray-800">
                          🔔 You have a new message from John Doe.
                        </div>
                        <div className="p-3 bg-gray-100 rounded-md text-sm text-gray-800">
                          📢 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          Architecto quae illo dolor maxime quaerat doloribus aut provident.
                          Libero, perspiciatis enim fugiat suscipit cupiditate modi nesciunt
                          similique hic aliquam, labore id?
                        </div>
                      </div>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
