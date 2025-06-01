import { Button, Tooltip } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../features/slices/cartSlice";

const Cart = ({ openModal, setOpen }) => {
  if (!openModal) return null; // don't render if modal is closed
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  // Prevent closing when clicking inside modal content
  const stopPropagation = (e) => e.stopPropagation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openModal]);
  return (
    <div className="">
      {cart.length > 0 ? (
        <div
          tabIndex={-1}
          aria-hidden={!openModal}
          className="fixed inset-0 z-50 flex justify-center items-center bg-white/10 backdrop-blur-sm"
          onClick={() => setOpen(false)} // clicking outside modal closes it
        >
          <div
            className="relative p-4 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-sm dark:bg-gray-700"
            onClick={stopPropagation} // stop closing when clicking inside modal
          >
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b rounded-t border-gray-200 dark:border-gray-600">
              <h3 className="text-3xl font-bold text-yellow-500">
                Shopping Cart
              </h3>
              <p className="text-xl font-bold text-yellow-500">
                Grand Total :{" "}
                <span className="text-white font-semibold"> {totalPrice}$</span>
              </p>
              <button
                type="button"
                className="text-gray-400 bg-transparent cursor-pointer hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setOpen(false)}
                aria-label="Close modal"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-4 space-y-4 flex flex-col justify-center items-start">
              {cart.map((item, index) => {
                return (
                  <div key={index} className="w-full">
                    <div className="flex flex-col md:flex-row justify-around px-2 py-4">
                      <div className="p-2 flex items-start gap-2">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="h-[160px] w-[125px] object-cover rounded-2xl"
                        />
                        <div>
                          <div className="flex flex-col items-start">
                            <h4 className="text-xl text-yellow-500 font-bold">
                              {item.name}
                            </h4>
                          </div>
                          <div className="max-w-xs">
                            <p className="text-sm text-white">{item.text}</p>
                          </div>
                        </div>
                      </div>
                      <div className="p-2 flex flex-col items-start justify-around text-yellow-500">
                        <p className="font-bold">
                          Selected Size :{" "}
                          <span className="text-sm text-white font-semibold">
                            {item.size}
                          </span>
                        </p>
                        <p className="font-bold">
                          Selected Color :{" "}
                          <span
                            className="rounded-full text-white px-2 ml-2 text-sm font-semibold"
                            style={{ backgroundColor: item.color }}
                          ></span>
                        </p>
                        <p className="font-bold">
                          Quantity :{" "}
                          <span className=" ml-2 text-sm text-white font-semibold">
                            {item.amount}
                          </span>
                        </p>
                        <p className="font-bold">
                          Single Item Price :{" "}
                          <span className=" ml-2 text-sm text-white font-semibold">
                            {item.price}$
                          </span>
                        </p>
                        <p className="font-bold">
                          Total Item Price :{" "}
                          <span className=" ml-2 text-sm text-white font-semibold">
                            {item.totalPrice}$
                          </span>
                        </p>
                        <div>
                          <Tooltip>
                            <Button
                              onClick={() => dispatch(removeFromCart(item))}
                              className="text-white text-sm bg-yellow-600 p-2 mt-3 font-bold cursor-pointer hover:bg-yellow-500 hover:scale-105 duration-300 ease-in-out"
                            >
                              Remove
                            </Button>
                          </Tooltip>
                        </div>
                      </div>
                    </div>
                    <hr className="text-white" />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div
          tabIndex={-1}
          aria-hidden={!openModal}
          className="fixed inset-0 z-50 flex justify-center items-center bg-white/10 backdrop-blur-sm"
          onClick={() => setOpen(false)} // clicking outside modal closes it
        >
          <div
            className="relative p-4 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-sm dark:bg-gray-700  "
            onClick={stopPropagation} // stop closing when clicking inside modal
          >
            {/* Modal header */}
            <div className="flex items-center justify-between p-4 border-b rounded-t border-gray-200 dark:border-gray-600">
              <h3 className="text-3xl font-bold text-yellow-500">
                Shopping Cart
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => setOpen(false)}
                aria-label="Close modal"
              >
                <svg
                  className="w-3 h-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>

            {/* Modal body */}
            <div className="p-4 space-y-4">
              <h1 className="text-xl font-semibold text-white">
                Your bag is empty
              </h1>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                Add some products
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
