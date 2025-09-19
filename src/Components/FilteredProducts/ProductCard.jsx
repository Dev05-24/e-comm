import {
  Card,
  CardBody,
  CardFooter,
  Typography,
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
      // style={{ boxShadow: '0 0 20px 1px white' }}
      className="rounded-2xl bg-gradient-to-tl from-green-800 to-yellow-100 text-white shadow-md flex flex-col mb-10 transition-all transform hover:scale-105 duration-400 ease-in-out p-2">
        <img
          src={img}
          alt="card-image"
          className="h-55 w-full object-cover rounded-t-2xl"
        />
      <CardBody className="py-3">
        <Typography className="mb-2 text-2xl font-extrabold">
          {name}
        </Typography>
        <Typography className="font-semibold text-sm text-left mb-2">
          {text.slice(0,80)+"..."}
        </Typography>
        <hr />
      </CardBody>
      <CardFooter className="flex items-center justify-between p-3">
         <Typography className="text-xl font-bold px-3">
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
