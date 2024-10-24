import React from 'react'
import { useRouter } from 'next/router'
import { data } from '../../utils/data'

const ProductPage = () => {
    const router = useRouter() // es un hook de next, me va permitir a mi moverme entre rutas
    const {id} = router.query
    const product = data.products.find((product) => product.id === parseInt(id))
    if (!product) {
        return <div>Product not found</div>
    }
  return (
    <div>
        {`Product: id - ${id}`}
    </div>
  )
}

export default ProductPage