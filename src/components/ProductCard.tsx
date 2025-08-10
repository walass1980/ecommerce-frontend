"use client"

import { ProductType } from "@/types"
import { ShoppingCart } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const ProductCard = ({product}: {product: ProductType}) => {
  const [productType, setProductType] = useState({
     size: product.sizes[0],
     color: product.colors[0]
  })
  
  return (
    <div className="shadow-lg rounded-lg overflow-hidden">
      {/* IMAGE */}
      <Link href={`/products/${product.id}`}>
       <div className="relative aspect-[2/3]">
         <Image 
         src={product.images[productType.color]}
         alt={product.name}
         fill
         className="object-cover hover:scale-105 transition-all duration-300"
        />
        </div>
      </Link>
      {/* PRODUCT DETAIL */}
      <div className="flex flex-col gap-4 p-4">
        <h1 className="font-medium">{product.name}</h1>
        <p className="">{product.shortDescription}</p>
        {/* SIZES */}
        <div className="flex flex-col gap-1">
          <span className="text-gray-500">Size</span>
          <select 
            name="size" 
            id="size"
            className="ring ring-gray-300 rounded-md px-2 py-1"
            >
              {product.sizes.map((size) => (
                <option key={size} value={size}>
                  {size.toUpperCase()}
                </option>
              ))}
            </select>
        </div>
        {/* COLORS */}
        <div className="flex flex-col gap-1">
          <span className="text-gray-500">Color</span>
          <div className="flex items-center gap-2">
            {product.colors.map((color) => (
              <div
              className={`cursor-pointer border-1 ${
                productType.color == color
                ? "border-gray-400"
                : "border-gray-200"
              } rounded-full p-[1.2]`}
              key={color}
              >
                <div
                 className="w-[14px] h-[14px] roiunded-full"
                 style={{ backgroundColor: color }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* PRICE AND ADD TO CART BUTTON */}
      <div className="flex items-center justify-between">
        <p className="font-medium">${product.price.toFixed(2)}</p>
        <button className="ring-1 ring-gray-200 shadow-lg rounded-md px-2 py-1 text-sm cursor-pointer hover:text-white hover:bg-black transition-all duration-300 flex items-center gap-2">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  )
}

export default ProductCard