import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Tooltip, Button } from "@material-tailwind/react";
import { addToCart } from "../../features/slices/cartSlice";
import { toast } from "react-toastify";
import Cart from "../Cart/Cart";
import { productData } from '../../assets/data/dummData'
import ProductSectionItem from '../ProductSection/ProductSectionItem'
import ProductSection from "../ProductSection/ProductSection";

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
    <div className="flex flex-col justify-center items-center min-h-screen gap-10 py-30 mb-4">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10">
        <img
          className="h-[250px] w-[300px] object-cover md:w-auto md:h-[450px] rounded-lg"
          src={product.img}
          alt={product.name}
        />

        <div className="mx-5 bg-white backdrop-blur-md text-white p-6 rounded-xl shadow-lg max-w-lg flex flex-col">
          <h3 className="text-lg md:text-2xl font-extrabold pb-3 text-[#212222]">{product.name}</h3>
          <p className="text-xl font-bold text-black  pb-3">15% OFF</p>
          <p className="md:text-lg pb-3 text-black">{product.text}</p>

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
              className="w-full p-2.5 rounded-lg bg-[#212222] dark:border-gray-600 text-sm"
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
              className="w-full p-2.5 rounded-lg bg-[#212222] dark:border-gray-600 text-sm"
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
              className="w-[50%] mx-auto bg-[#d4af37] hover:scale-110 transition-transform duration-300 ease-in-out cursor-pointer"
              onClick={handleAddToCart}
            >
              Add to cart
            </Button>
          </Tooltip>
        </div>
      </div>
      <ProductSection />

      {/* Cart Modal */}
      {open && <Cart openModal={open} setOpen={setOpen} />}
    </div>
  );
};

export default SingleProduct;
