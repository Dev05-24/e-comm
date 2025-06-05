import React from 'react'
import { storeData } from '../../assets/data/dummData'
import ProductSectionItem from './ProductSectionItem'

const ProductSection = () => {
  return (
    <>
    <div>
      <div className='p-2 w-[50%] mx-auto rounded-md'>
        <h3 className='text-white text-center text-2xl transition ease-in-out duration-200 sm:text-2xl md:text-3xl lg:text-5xl m-4 font-extrabold'>SUMMER T-Shirt SALE 30%</h3>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center mx-auto gap-10 py-12 max-w-6xl'>
        {storeData.slice(0,6).map((product, index) => {
            return <div key={index}>
                <ProductSectionItem 
                    id={product.id} 
                    name={product.name}
                    img={product.img}
                    text={product.text}
                    price={product.price}
                    totalPrice={product.totalPrice}
                    size={product.size}
                    color={product.color}
                ></ProductSectionItem>
            </div>
        })}
      </div>
    </div>
    </>
  )
}

export default ProductSection
