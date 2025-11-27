import { useState, useEffect, createElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
} from "@material-tailwind/react";

import {
  UserCircleIcon,
  Cog6ToothIcon,
  LockClosedIcon,
  PowerIcon,
  ChevronDownIcon,
  Bars2Icon,
  Square3Stack3DIcon,
} from "@heroicons/react/24/solid";

import woman1 from "../../assets/woman1.jpg";
import { NotificationDrawer } from "./NotificationDrawer";

// Profile menu items
const profileMenuItems = [
  { label: "My Profile", icon: UserCircleIcon },
  { label: "Settings", icon: Cog6ToothIcon },
  { label: "Security", icon: LockClosedIcon },
  { label: "Sign Out", icon: PowerIcon },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const closeMenu = () => setIsMenuOpen(false);

  const handleProfileClick = () => {
    closeMenu();

    if (location.pathname.startsWith("/fundi-portal")) {
      navigate("/fundi-portal/account-info");
    } else if (location.pathname.startsWith("/professional-portal")) {
      navigate("/professionalPortal/account-info");
    } else if (location.pathname.startsWith("/hardware-portal")) {
      navigate("/hardwarePortal/account-info");
    } else if (location.pathname.startsWith("/contractor-portal")) {
      navigate("/contractorPortal/account-info");
    } else if (location.pathname.startsWith("/customer")) {
      navigate("/customer/manage-account");
    } else {
      console.warn("Unknown portal, cannot navigate to account info.");
    }
  };

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-3 rounded-full mb-2 pl-1 lg:ml-auto"
        >
          <Typography className="ml-2 cursor-pointer py-1.5 font-medium text-black">
            <Avatar
              variant="circular"
              size="sm"
              alt="profile"
              className="border border-gray-900 ms-2 h-7 rounded-full"
              src={woman1}
            />
          </Typography>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 text-black transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="z-20 p-1">
        {profileMenuItems.map(({ label, icon }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;

          return (
            <MenuItem
              key={label}
              onClick={() => {
                if (label === "My Profile") {
                  handleProfileClick();
                } else if (label === "Sign Out") {
                  localStorage.clear();
                  navigate("/");
                } else {
                  closeMenu();
                }
              }}
              className={`flex items-center gap-2 rounded ${
                isLastItem ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10" : ""
              }`}
            >
              {createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

// Notification dropdown
const navListMenuItems = [
  {
    title: "New User Signup",
    description: "A new user just signed up.",
    icon: UserCircleIcon,
  },
  {
    title: "System Update",
    description: "The system was updated successfully.",
    icon: Cog6ToothIcon,
  },
  {
    title: "Security Alert",
    description: "Suspicious login attempt detected.",
    icon: LockClosedIcon,
  },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderItems = navListMenuItems.map(({ title, description }) => (
    <a href="#" key={title}>
      <MenuItem>
        <Typography variant="small" color="gray" className="font-normal">
          {description}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography variant="" className="font-normal top-2 border">
            <NotificationDrawer />
          </Typography>
        </MenuHandler>
        <MenuList className="overflow-visible z-20">
          <ul className="col-span-4 flex flex-col gap-1">{renderItems}</ul>
        </MenuList>
      </Menu>
      <MenuItem className="flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden">
        <Square3Stack3DIcon className="text-blue-900 h-[18px] w-[18px]" />
      </MenuItem>
    </>
  );
}

function NavList() {
  return (
    <ul className="mt-2 mb-12 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
    </ul>
  );
}

// Admin navbar
function AdminNavigationBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) setIsNavOpen(false);
    });
  }, []);

  return (
    <Navbar className="z-20 mx-auto flex items-center justify-between fixed top-0 left-0 h-20 shadow-md bg-white w-full px-4 lg:rounded-none">

      <div className="flex-1 text-blue-900">
        <Typography as="div" className="font-medium text-lg text-blue-gray-900 ">
          <img
            src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75"
            alt="logo"
            className="w-60"
          />
        </Typography>
      </div>

      <div className="flex items-center gap-2">
        <div className="hidden lg:block">
          <NavList />
        </div>
        <ProfileMenu />
        <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-2 lg:hidden text-blue-900"
        >
          <Bars2Icon className="h-6 w-6 text-blue-900" />
        </IconButton>
      </div>

      <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
        <Collapse open={isNavOpen} className="overflow-scroll mt-2">
          <NavList />
        </Collapse>
      </div>
    </Navbar>
  );
}

export default AdminNavigationBar;
