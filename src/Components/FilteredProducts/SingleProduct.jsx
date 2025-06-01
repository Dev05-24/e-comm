import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../features/slices/cartSlice";
import { toast } from "react-toastify";
import Cart from "../Cart/Cart";

const SingleProduct = () => {
  const allProducts = useSelector((state) => state.products.singleProduct);
  const totalAmount = useSelector((state) => state.cart.totalAmount);
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useMemo(() => {
    return allProducts.find((p) => p.id === id);
  }, [allProducts, id]);

  const [size, setSize] = useState(product?.size?.[0] || "");
  const [color, setColor] = useState(product?.color?.[0] || "");
  const [open, setOpen] = useState(false);

  const handleAddToCart = () => {
    if (!product) return;

    dispatch(
      addToCart({
        item: product.id,
        name: product.name,
        size,
        img: product.img,
        text: product.text,
        color,
        price: product.price,
        amount: 1,
        totalPrice: product.price,
      })
    );
    toast.success(`${product.name} added to cart`);
  };

  if (!product) return <p className="text-center text-white">Product not found</p>;

  return (
    <div className="flex flex-col justify-center items-center min-h-screen gap-10 p-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          className="h-[250px] w-[300px] object-cover md:w-auto md:h-[450px] rounded-lg"
          src={product.img}
          alt={product.name}
        />

        <div className="mx-5 bg-white/10 backdrop-blur-md text-white p-6 rounded-xl shadow-lg max-w-lg">
          <h3 className="text-lg md:text-2xl font-bold pb-3">{product.name}</h3>
          <p className="text-xl font-semibold text-orange-400 pb-3">15% OFF</p>
          <p className="md:text-lg pb-3">{product.text}</p>

          {/* Size Picker */}
          <div className="pb-4">
            <label
              htmlFor="size"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Pick a Size
            </label>
            <select
              id="size"
              name="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full p-2.5 rounded-lg dark:bg-gray-700 dark:border-gray-600 text-sm"
            >
              {product.size.map((sz, index) => (
                <option key={index} value={sz}>
                  {sz}
                </option>
              ))}
            </select>
          </div>

          {/* Color Picker */}
          <div className="pb-4">
            <label
              htmlFor="color"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Pick a Color
            </label>
            <select
              id="color"
              name="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="w-full p-2.5 rounded-lg dark:bg-gray-700 dark:border-gray-600 text-sm"
            >
              {product.color.map((clr, index) => (
                <option key={index} value={clr}>
                  {clr}
                </option>
              ))}
            </select>
          </div>

          {/* Add to Cart Button */}
          <Tooltip>
            <Button
              className="w-full bg-yellow-600 hover:scale-105 transition-transform duration-300"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </Tooltip>
        </div>
      </div>

      {/* Cart Icon / Bag Button */}
      <div
        className="flex flex-row items-center cursor-pointer bg-yellow-600 px-4 py-2 rounded-2xl"
        onClick={() => setOpen(true)}
      >
        {totalAmount > 0 ? (
          <span className="rounded-full bg-gray-300 px-2 text-sm mr-2">{totalAmount}</span>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="#000"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
        )}
        <p className="text-lg font-bold ml-2">Bag</p>
      </div>

      {/* Cart Modal */}
      {open && <Cart openModal={open} setOpen={setOpen} />}
    </div>
  );
};

export default SingleProduct;
