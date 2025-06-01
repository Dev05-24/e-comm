import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { singleProduct } from "../../features/slices/productsSlice";

const ProductCard = ({ id, name, text, img, price, color}) => {

  const dispatch = useDispatch();
  const {type}= useParams();
  return (
    <Link to={`/filteredProducts/${type}/` + id}>
      <Card 
      onClick={() => dispatch(singleProduct(id))}
      className=" rounded-2xl bg-white shadow-md flex flex-col">
        <img
          src={img}
          alt="card-image"
          className="h-55 w-full object-cover rounded-t-2xl"
        />
      {/* <CardHeader className="relative h-80 p-2 mb-2">
      </CardHeader> */}
      <CardBody className="py-3">
        <Typography className="mb-1 text-xl font-bold text-gray-800">
          {name}
        </Typography>
        <Typography className="font-normal text-sm text-left text-slate-500 mb-2">
          {text.slice(0,80)+"..."}
        </Typography>
        <hr />
      </CardBody>
      <CardFooter className="flex items-center justify-between p-3">
         <Typography className="text-xl font-bold px-3 text-orange-300">
          {price}$
        </Typography>
         <Typography className="flex">
          {color?.map((color, index) => {
            return(
              <i 
                className="fas fa-map-marker-alt fa-sm p-2 rounded-full mr-3" 
                key={index}
                style={{backgroundColor: color}}></i>
            )
          })}
        </Typography>
      </CardFooter>
    </Card>
    </Link>
  )
}

export default ProductCard;
