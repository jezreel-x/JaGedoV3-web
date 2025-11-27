import { useEffect, useState, createElement } from "react";
import { Link } from "react-router-dom";
import {
    Navbar,
    MobileNav,
    Typography,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    Avatar,
    IconButton,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    ChevronDownIcon,
    Cog6ToothIcon,
    LifebuoyIcon,
    PowerIcon,
    Bars2Icon,
    ShoppingCartIcon,
} from "@heroicons/react/24/solid";

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
        label: "Help",
        icon: LifebuoyIcon,
    },
    {
        label: "Sign Out",
        icon: PowerIcon,
    },
];

function ProfileMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="User Profile"
                        className="border border-gray-200 p-0.5 h-10 w-10 rounded-full"
                        src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform  text-[rgb(0,0,122)] ${isMenuOpen ? "rotate-180" : ""
                            }`}
                    />
                </Button>
            </MenuHandler>
            <MenuList className="p-1">
                {profileMenuItems.map(({ label, icon }, key) => {
                    const isLastItem = key === profileMenuItems.length - 1;
                    return (
                        <MenuItem
                            key={label}
                            onClick={() => setIsMenuOpen(false)}
                            className={`flex items-center gap-2 rounded transition-colors ${isLastItem
                                    ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                                    : "hover:bg-gray-100"
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

export function ShopAppCart() {
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setIsNavOpen(false)
        );
    }, []);

    return (
        <Navbar className="mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6">
            <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 ml-2 cursor-pointer py-1.5 font-medium text-xl flex items-center gap-2"
                >
                    <img
                        src="/logo.png"
                        alt="Store Logo"
                        className="h-8 w-auto text-black"
                    />
                    Store Name
                </Typography>

                <div className="hidden lg:flex items-center gap-4">
                    <Link to="/hardware_shop/hardware-products/cement/cement-detail/cart">
                        <Button
                            variant="text"
                            className="flex items-center gap-2 rounded-full"
                            color="blue-gray"
                        >
                            <ShoppingCartIcon className="h-5 w-5 text-[rgb(0,0,122)]" />
                            <span className="bg-red-500 text-white rounded-full px-2 py-0.5 text-xs">
                                3
                            </span>
                        </Button>
                    </Link>


                    <Button
                        variant="text"
                        className="flex items-center gap-2"
                        color="blue-gray"
                    >
                        <LifebuoyIcon className="h-5 w-5 text-[rgb(0,0,122)]" />
                        <span className="text-[rgb(0,0,122)]">Help</span>
                    </Button>

                    <ProfileMenu />
                </div>

                <IconButton
                    size="sm"
                    color="blue-gray"
                    variant="text"
                    onClick={() => setIsNavOpen(!isNavOpen)}
                    className="ml-auto mr-2 lg:hidden"
                >
                    <Bars2Icon className="h-6 w-6" />
                </IconButton>
            </div>

            <MobileNav open={isNavOpen} className="lg:hidden">
                <div className="flex flex-col gap-4 p-4">
                    <Button
                        variant="text"
                        className="flex items-center gap-2 justify-center"
                        fullWidth
                    >
                        <ShoppingCartIcon className="h-5 w-5" />
                        <span>Cart (3)</span>
                    </Button>
                    <Button
                        variant="text"
                        className="flex items-center gap-2 justify-center"
                        fullWidth
                    >
                        <LifebuoyIcon className="h-5 w-5" />
                        <span>Help</span>
                    </Button>
                </div>
            </MobileNav>
        </Navbar>
    );
}

export default ShopAppCart;