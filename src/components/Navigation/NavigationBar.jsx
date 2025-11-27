import { useState, useEffect, createElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { X } from "lucide-react";

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
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
  LockClosedIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";

import { FaShoppingCart } from "react-icons/fa";
import woman1 from "../../assets/woman1.jpg";

import { NotificationDrawer } from "./NotificationDrawer";

// profile menu component
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
  },
  {
    label: "Settings",
    icon: Cog6ToothIcon,
  },
  {
    label: "Security",
    icon: LockClosedIcon,
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const location = useLocation();
  const navigate = useNavigate();

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
          className="flex items-center gap-1 cursor-pointer rounded-full mb-2"
        >
          <Typography className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-black">
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
      <MenuList className="p-1 z-30">
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

// nav list menu
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
        <MenuList className="overflow-visible z-30">
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
  const location = useLocation();
  const navigate = useNavigate();

  const [cartCount, setCartCount] = useState(0);
  const [isPath, setIsPath] = useState(location.pathname);

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    updateCartCount();
    window.addEventListener("storage", updateCartCount);
    return () => window.removeEventListener("storage", updateCartCount);
  }, []);

  useEffect(() => {
    setIsPath(location.pathname);
  }, [location.pathname]);

  const handleCartClick = () => {
    if (isPath.startsWith("/customer")) {
      navigate("/customer/hardware/cart");
    } else if (isPath.startsWith("/customer/machinery")) {
      navigate("/customer/machinery/cart");
    }
  };

  const handleReceiptsClick = () => {
    navigate("/customer/receipts");
  };

  const handleSalesClick = () => {
    navigate("/sales", { state: { from: isPath } });
  };

  const isCustomersRoute = location.pathname.startsWith("/customer");

  const navListItems = [
    {
      label: isCustomersRoute ? "Receipts" : "Sales",
      icon: CubeTransparentIcon,
      onClick: isCustomersRoute ? handleReceiptsClick : handleSalesClick,
    },
    {
      label: "Help",
      icon: CodeBracketSquareIcon,
      onClick: undefined,
    },
  ];

  // push cart item if on a customer route
  if (isCustomersRoute) {
    navListItems.push({
      label: "Cart",
      icon: FaShoppingCart,
      onClick: handleCartClick,
    });
  }

  return (
    <ul className="my-3 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      <NavListMenu />
      {navListItems.map(({ label, icon, onClick }) => (
        <Typography
          key={label}
          variant="small"
          color="gray"
          className="font-medium text-blue-blue-900"
        >
          {label === "Cart" ? (
            <MenuItem
              onClick={cartCount === 0 ? undefined : onClick}
              className={`flex relative items-center gap-2 lg:rounded-full ${
                cartCount === 0
                  ? "cursor-not-allowed text-gray-500"
                  : "text-blue-900 cursor-pointer"
              }`}
            >
              {createElement(icon, { className: "h-[18px] w-[18px]" })}
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-2">
                  {cartCount}
                </span>
              )}
              <span className="text-gray-900">{label}</span>
            </MenuItem>
          ) : (
            <MenuItem
              onClick={onClick}
              className="flex items-center gap-2 text-blue-900 lg:rounded-full"
            >
              {createElement(icon, { className: "h-[18px] w-[18px]" })}
              <span className="text-gray-900">{label}</span>
            </MenuItem>
          )}
        </Typography>
      ))}
    </ul>
  );
}



function NavigationBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    window.addEventListener("resize", () => window.innerWidth >= 960 && setIsNavOpen(false));
  }, []);

  return (
    <Navbar className="flex items-center justify-between z-20 fixed top-0 left-0 h-20 shadow-md bg-white w-full rounded-none ">
      <div className="text-blue-900">
        <Typography as="div" className="font-medium text-lg text-blue-gray-900 ">
          <img
            src="https://uat.jagedo.co.ke/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJapageologo.d832cf02.png&w=3840&q=75"
            alt="logo"
            className="w-32 md:w-64 lg:w-72 h-auto"
          />
        </Typography>
      </div>

      <div className="flex items-center gap-2 lg:gap-6">
        <div className="hidden lg:block">
          <NavList />
        </div>
        <ProfileMenu />
        {/* <IconButton
          size="sm"
          color="blue-gray"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-2 align-middle border lg:hidden text-blue-900"
        >
          <Bars2Icon className="h-6 w-6 text-blue-900" />
        </IconButton> */}
            
          <div className="sm:hidden">
            <button className="hover:cursor-pointer" type="button" onClick={toggleIsNavOpen}>
              {isNavOpen ? <X size={28} color="black" /> : 
              <IconButton
                size="sm"
                color="blue-gray"
                variant="text"
                // onClick={toggleIsNavOpen}
                className="ml-2 align-middle border lg:hidden text-blue-900"
              >
              <Bars2Icon className="h-6 w-6 text-blue-900" />
              </IconButton>}
            </button>
          </div> 
            
      </div>

      <div className="absolute top-full left-0 w-full bg-white shadow-md lg:hidden">
        <Collapse open={isNavOpen} className="overflow-scroll mt-2">
          <NavList />
        </Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;

