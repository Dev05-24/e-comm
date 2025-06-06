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
      <Card className="w-80 bg-[#20718] text-white p-2 rounded-2xl" style={{ boxShadow: '0 0 18px 1px #1e9ac0' }}>
        <div className="flex flex-col gap-3">
        <CardHeader floated={false} className="w-full p-0 m-0 bg-[#212222]">
          <img
            src={img}
            alt={name}
            className="h-[200px] w-full rounded-2xl object-cover shadow-xl"
          />
        </CardHeader>
        <CardBody className="text-left flex flex-col">
          <Typography variant="h4" className="mb-3 font-extrabold">
            {name}
          </Typography>
          <div className="flex justify-between items-center pt-3">
            <Typography color="blue-gray" className="font-extrabold text-lg" textGradient>
              Size left : <span className="text-white">{defaultSize}</span>
            </Typography>
            <Typography color="blue-gray" className="font-extrabold text-lg" textGradient>
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
              className="px-3 bg-[#1e9ac0] cursor-pointer hover:scale-115 duration-400 ease-in-out text-sm font-extrabold"
            >
              Add to Cart
            </Button>
          </Tooltip>
        </CardFooter>
        </div>
      </Card>
    </div>
  );
};

export default ProductSectionItem;
