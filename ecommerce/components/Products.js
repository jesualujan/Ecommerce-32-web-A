import React from 'react'
import {data} from '../utils/data'
import { Image } from '@chakra-ui/react'
// import Image from 'next/image'

const Products = () => {
  return (
    <div>
      {data.products.map((products) => (
        <Image 
        key={products._id}
        src={`/images${products.image}`}
        alt={products.title}
        width={230}
        height={230}
        style={{objectFit: "cover"}}
        />
      ))}
    </div>
  )
}

export default Products