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
      <Card className="w-80 h-[500px] bg-white p-2">
        <CardHeader floated={false} className="w-full rounded-2xl">
          <img
            src={img}
            alt={name}
            className="h-[250px] w-full object-cover rounded-2xl"
          />
        </CardHeader>
        <CardBody className="text-left">
          <Typography variant="h4" className="mb-2 text-black font-bold">
            {name}
          </Typography>
          <Typography color="blue-gray" className="font-medium text-sm" textGradient>
            {text.slice(0,100)}...
          </Typography>
          <div className="flex justify-between items-center pt-2">
            <Typography color="blue-gray" className="font-bold" textGradient>
              Size left : <span className="text-sm">{defaultSize}</span>
            </Typography>
            <Typography color="blue-gray" className="font-bold" textGradient>
              Color :{" "}
              <span
                className="px-3 rounded-full ml-3 mt-2"
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
              className="p-2 bg-yellow-400 cursor-pointer hover:scale-110 duration-200 ease-in-out"
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
