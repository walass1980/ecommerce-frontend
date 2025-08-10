"use client"

import { ProductType } from "@/types"
import Image from "next/image"
import { useState } from "react"

const ProductCard = ({product}: {product: ProductType}) => {
  const [productType, setProductType] = useState({
     size: product.sizes[0],
     color: product.colors[0]
  })
  
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* IMAGE */}
      <div className="relative aspect-[2/3]">
        <Image 
        src={product.images[productType.color]}
        alt={product.name}
        fill
        className="object-cover hover:scale-105 transition-all duration-300"
        />
      </div>
    </div>
  )
}

export default ProductCard