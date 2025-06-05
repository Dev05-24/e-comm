import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../features/slices/cartSlice";
import { toast } from "react-toastify";

const ProductSectionItem = ({
  id,
  img,
  name,
  text,
  price,
  size,
  color,
  totalPrice,
}) => {
  const dispatch = useDispatch();
  const defaultSize = size[0];
  const defaultColor = color[0];
  return (
    <div>
      <Card className="w-80 h-[470px] bg-[#20718a] p-2 text-white shadow-md">
        <CardHeader floated={false} className="w-full rounded-2xl">
          <img
            src={img}
            alt={name}
            className="h-[200px] w-full object-cover rounded-2xl shadow-xl"
          />
        </CardHeader>
        <CardBody className="text-left">
          <Typography variant="h4" className="mb-3 text-white font-extrabold">
            {name}
          </Typography>
          <Typography color="" className="font-medium text-white text-sm mb-2" textGradient>
            {text.slice(0,100)}...
          </Typography>
          <div className="flex justify-between items-center pt-3">
            <Typography color="blue-gray" className="font-extrabold text-lg text-black" textGradient>
              Size left : <span className="text-white">{defaultSize}</span>
            </Typography>
            <Typography color="blue-gray" className="font-extrabold text-lg text-black" textGradient>
              Color :{" "}
              <span
                className="px-3 rounded-lg ml-3"
                style={{ backgroundColor: defaultColor }}
              ></span>
            </Typography>
          </div>
        </CardBody>
        <CardFooter className="pt-1">
          <Tooltip>
            <Button
              onClick={() => {
                dispatch(
                  addToCart({
                    id: id,
                    name: name,
                    img: img,
                    amount: 1,
                    text: text,
                    price: Number(price),
                    totalPrice: Number(totalPrice),
                    size: defaultSize,
                    color: defaultColor,
                  })
                )
                toast.success(`${name} added to cart`);
              }}
              ripple={true}
              className="p-2 bg-[#212222] text-white cursor-pointer hover:scale-110 duration-400 ease-in-out hover:bg-[#141414] text-sm"
            >
              Add to Cart
            </Button>
          </Tooltip>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ProductSectionItem;
