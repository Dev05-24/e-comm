import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import defaultLogo from "../../assets/images/default_user.jpg";
import Cart from "../Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { Avatar } from "@material-tailwind/react";
import { Tooltip, Button } from "@material-tailwind/react";
import { logout } from "../../features/slices/authSlice";
import { Link, useNavigate } from "react-router-dom";
import Main from "../Main/Main";

const Navbar = () => {
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const user = useSelector((state) => state.user.user);
  const { name, image } = user;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  return (
    <>
    <div className="fixed top-0 left-0 z-50 bg-[#0f172a] w-full shadow-md">
      {/* div for image and button for login wish list and shopping cart */}
      <div className="flex flex-col md:flex-row justify-evenly items-center px-4 gap-5 sm:gap-0">
        {/* for image */}
        <div className="flex items-center gap-3">
          <Link to="/">
          <img src={logo} alt="E-store logo" className="h-15" />
            {/* <h1 className="text-xl font-bold">Home</h1> */}
          </Link>
        </div>
        <div className="flex gap-6">
        <div>
          <a href="#product-section" className="text-xl font-bold text-white">Product</a>
        </div>
        <div className="flex gap-4">
            {/* shopping cart */}
            <div
              className="flex flex-row items-center cursor-pointer"
              onClick={handleOpen}
            >
              {totalAmount > 0 ? (
                <span className="rounded-full bg-gray-300 px-2 text-sm mr-1">
                  {totalAmount}
                </span>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="#20718a"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                  />
                </svg>
              )}
              <p className="text-lg font-bold ml-2 text-white">Bag</p>
              <div>
                {open && <Cart openModal={open} setOpen={setOpen}></Cart>}
              </div>
            </div>
          </div>
        </div>
        {/* for login and shopping cart */}
        <div className="flex items-center gap-5">
          
          {/* user logo */}
          <div className="flex flex-row items-center cursor-pointer pl-4">
              <Avatar
                src={image || defaultLogo}
                alt="Avatar"
                size="sm"
                className="mr-2 h-9 w-10 rounded-full object-cover"
              ></Avatar>
            <div onClick={() => dispatch(logout())} className="z-60">
              <Tooltip
                content="Click to sign out"
                placement="right"
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
                 className="bg-[#d4af37] text-white ml-2 px-4 py-2 rounded-lg shadow-lg z-60"
              >
                <p className="font-bold text-lg text-white">
                  {name.charAt("0").toUpperCase() + name.slice(1)}
                </p>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Navbar;
