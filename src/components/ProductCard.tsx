"use client"

import { ProductType } from "@/types"
import Image from "next/image"

const ProductCard = ({product}: {product: ProductType}) => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* IMAGE */}
      <div className="className">
        <Image 
        src={product.images[ProductTypes]}
        alt={product.name}
        fill
        className="object-cover hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  )
}

export default ProductCard