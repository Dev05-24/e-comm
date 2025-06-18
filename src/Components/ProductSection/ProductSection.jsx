import React from 'react'
import { productData } from '../../assets/data/dummData'
import ProductSectionItem from './ProductSectionItem'

const ProductSection = () => {
  return (
    <>
    <div id="product-section">
      <div className='pt-9 w-[50%] sm:w-[50%] mx-auto rounded-md'>
        <h3 className='text-white text-center transition ease-in-out duration-200 text-3xl md:text-4xl lg:text-5xl mt-10 font-extrabold'>SUMMER T-Shirt SALE 30%</h3>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 justify-items-center mx-auto gap-10 py-10 max-w-6xl'>
        {productData.map((product, index) => {
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
