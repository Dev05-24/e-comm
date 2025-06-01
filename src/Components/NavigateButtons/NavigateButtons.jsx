import React from 'react'
import clothes from "../../assets/images/clothes.jpg";
import { filterProducts } from '../../features/slices/productsSlice';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

const NavigateButtons = () => {
    const buttons = [
        "Hoodies", "Dresses", "Suits", "Shoes", "T-Shirts", "Jeans", "Jackets", "Bags"];
        const dispatch = useDispatch();

  return (
    <div>
      <div className='flex flex-wrap items-center justify-center gap-8 py-3'>
        {buttons.map((button, index) =>{
            return(
                <div key={index}>
                  <Link to={"/filteredProducts/" + button}>
                    <button onClick={() => dispatch(filterProducts(button))} className=' rounded-lg p-3 font-bold bg-yellow-400 text-sm hover:scale-110 duration-500 ease-in-out hover:bg-yellow-300 cursor-pointer'>{button}</button>
                  </Link>
                </div>
            )
        })}
      </div>
      <hr className='w-[70%] ml-[15%] mb-4'/>
      {/* sales bar */}
      <div className='w-[55%] text-yellow-400 text-4xl py-3 mx-auto text-center font-extrabold '>
        <h3>SALES UP TO 50%</h3>
      </div>
        {/* clothes image */}
      <div className='flex items-center justify-center py-4'>
        <img src={clothes} alt="clothes.img" className='h-[500px] w-[70%] rounded-md shadow-lg shadow-gray-600'/>
      </div>
    </div>
  )
}

export default NavigateButtons;
