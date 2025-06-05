import React from 'react'
import { Alert } from "@material-tailwind/react";

const Error = () => {
  return (
    <div className='flex justify-center items-center'>
      <div className=''>
        <Alert className='font-bold text-2xl'>Sorry !!! no products match your filter search.... Clear the filter and try again</Alert>
      </div>
    </div>
  )
}

export default Error
