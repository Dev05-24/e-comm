import React from 'react'
import { nextSlide, prevSlide, dotSlide } from '../../features/slices/SliderSlice'
import { useSelector, useDispatch } from 'react-redux';
import { sliderData } from '../../assets/data/dummData';

const Slider = () => {

  //importing the state then name(slider) then it's value
  const slideIndex = useSelector((state) => state.slider.value);
  console.log('slideIndex', slideIndex);

  const dispatch = useDispatch();

  return (
    <div className='relative pb-4'>
      <div>
        {sliderData.map((item) => {
          return(
            <div key={item.id} className={parseInt(item.id) === slideIndex ? "opacity-100 duration-700 ease-in-out scale-100" : "opacity-0 duration-700 ease-in-out scale-95"}>
              <div>
                {parseInt(item.id) === slideIndex && (
                  <img src={item.img} alt="" className='h-[600px] w-full object-cover'/>
                )}          
              </div>
              <div className='absolute top-40 mx-auto inset-x-1/4'>
                <p className='text-white font-inter text-4xl leading-none tracking-normal font-bold'>{parseInt(item.id) === slideIndex && item.text}</p>
              </div>
            </div>
          )
        })}
      </div>
      {/* for dot */}
      <div className='flex absolute bottom-14 gap-3 left-[45%]'>
        {sliderData.map((dot, index) => {
          return(
            <div key={dot.id} className={index === slideIndex ? "bg-black rounded-2xl p-3 cursor-pointer" : "bg-white rounded-2xl p-3 cursor-pointer"} 
            onClick={() => dispatch(dotSlide(index))}></div>
          )
        })}
      </div>
      {/* when this button got click then the dispatch hook will dispatch these reducer function and logic inside the slice got executed */}
      <div>
        <button className='absolute bg-white top-[50%] right-4 rounded-full p-2 hover:bg-green-300' onClick={() => dispatch(nextSlide(slideIndex + 1))}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        <button className='absolute bg-white top-[50%] left-4 rounded-full p-2 hover:bg-green-300' onClick={() => dispatch(prevSlide(slideIndex - 1))}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Slider
