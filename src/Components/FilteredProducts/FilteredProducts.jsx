import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";
import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Error from "../Error/Error";
import {
  filterProducts, filterGender, sortByPrice, filterByColor, filterBySize
} from '../../features/slices/productsSlice';

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  // console.log("products", products);
  // console.log("params", type);

  const genderButtons = ["male", "female"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ['S', 'M', 'L', 'XL'];
  const dispatch = useDispatch();

  return (
    <div className="">
      <div className="pt-10 px-15 flex flex-col justify-start">
        <div className="flex flex-col px-20">
          <h1 className="text-5xl text-center mb-10 text-yellow-500 font-extrabold">
            {type}
          </h1>
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 justify-between py-5">
            <div className="flex flex-wrap items-center gap-5 px-5 bg-red-200">
              {genderButtons.map((item, index) => {
                return (
                  <div key={index}>
                    <Button
                      size="lg"
                      variant="outlined"
                      color="yellow"
                      className="px-3 py-2 font-bold bg-yellow-400 text-lg border-none cursor-pointer text-black hover:scale-110 duration-300 ease-in-out"
                      onClick={() => dispatch(filterGender(item))}
                    >
                      {item}
                    </Button>
                  </div>
                );
              })}
              <Button
                size="lg"
                variant="outlined"
                color="yellow"
                className="px-3 py-2 font-bold bg-yellow-400 text-lg border-none cursor-pointer text-black hover:scale-110 duration-300 ease-in-out"
                onClick={() => dispatch(sortByPrice())}
              >
                High Price
              </Button>
              <Menu placement="bottom">
                <MenuHandler>
                  <Button
                    size="lg"
                    variant="outlined"
                    color="yellow"
                    className="px-3 py-2 font-bold bg-yellow-400 text-lg border-none cursor-pointer text-black hover:scale-110 duration-300 ease-in-out"
                  >
                    Select a color
                  </Button>
                </MenuHandler>
                <MenuList className="min-w-[8rem]">
                  {colorButtons.map((item, index) => {
                    return (
                      <MenuItem
                        style={{ color: item }}
                        key={index}
                        className="w-full text-[15px] font-semibold"
                        onClick={() => dispatch(filterByColor(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
              <Menu placement="bottom">
                <MenuHandler>
                  <Button
                    disabled={type === "Bags"}
                    size="lg"
                    variant="outlined"
                    color="yellow"
                    className="px-3 py-2 font-bold bg-yellow-400 text-lg border-none cursor-pointer text-black hover:scale-110 duration-300 ease-in-out"
                  >
                    Select a size
                  </Button>
                </MenuHandler>
                <MenuList className="min-w-[8rem]">
                  {sizeButtons.map((item, index) => {
                    return (
                      <MenuItem
                        key={index}
                        className="w-full text-[15px] font-semibold"
                        onClick={() => dispatch(filterBySize(item))}
                      >
                        {item}
                      </MenuItem>
                    );
                  })}
                </MenuList>
              </Menu>
            
            <div className="pr-1">
              <Button size="lg"
                variant="outlined"
                color="yellow"
                className="px-3 py-2 font-bold bg-yellow-400 text-lg border-none cursor-pointer text-black hover:scale-110 duration-300 ease-in-out"
                onClick={() => dispatch(filterProducts(type))}>Clear Filter</Button>
            </div>
            </div>
          </div>
        </div>
        {error ? (<Error></Error> 
        ) : ( 
         <div className="flex flex-wrap gap-20 items-start justify-center">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => {
              return (
                <div key={index} className="w-full md:w-1/3 lg:w-2/5">
                  <ProductCard
                    id={product.id}
                    name={product.name}
                    text={product.text}
                    img={product.img}
                    price={product.price}
                    color={product.color}
                  ></ProductCard>
                </div>
              );
            })}
        </div>
        )}
        {/* grid grid-cols-4 justify-items-center py-8 gap-12  */}
       
      </div>
    </div>
  );
};

export default FilteredProducts;
