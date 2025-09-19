import React from 'react'
import clothes1 from "../../assets/images/card-1.jpg";
import clothes2 from "../../assets/images/image-2.avif";
import clothes3 from "../../assets/images/clothes3.jpeg"
import { filterProducts } from '../../features/slices/productsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const NavigateButtons = () => {
    const buttons = [
        "Hoodies", "Dresses", "Suits", "Shoes", "T-Shirts", "Jeans", "Jackets", "Bags"];
        const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center justify-center h-[90vh]'>
      <div className='flex flex-wrap justify-center md:gap-12 gap-2 py-3 px-1 md:mt-10 mb-4 w-[70%]'>
        {buttons.map((button, index) =>{
            return(
                <div key={index}>
                  <Link to={"/filteredProducts/" + button}>
                    <button onClick={() => dispatch(filterProducts(button))} className='shadow-lg bg-white/20
                     rounded-lg p-3 font-bold text-green-950 text-sm hover:scale-125 duration-300 ease-in-out cursor-pointer'
                     >{button}</button>
                  </Link>
                </div>
            )
        })}
      </div>
      <hr className='w-[70%] ml-[15%] mb-4'/>
      {/* sales bar */}
      <div className='w-[70%] text-green-950 text-5xl py-3 mx-auto text-center font-extrabold '>
        <h3>SALES UP TO <span className='text-white'>50%</span></h3>
      </div>
        {/* clothes image */}
      <div className='flex flex-col lg:flex-row items-center justify-center py-4 px-6 md:px-25 gap-8'>
        <img src={clothes1} alt="clothes.img" className='h-[400px] w-full lg:w-[30%] rounded-md object-cover'/>

      <img src={clothes3} alt="clothes.img" className='h-[400px] w-full lg:w-[30%] rounded-md object-cover'/>

        <img src={clothes2} alt="clothes.img" className='h-[400px] rounded-md w-full lg:w-[30%] object-cover'/>
      </div>
    </div>
  )
}

export default NavigateButtons;
