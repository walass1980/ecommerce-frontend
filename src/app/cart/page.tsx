"use client"

import { CartsItemType } from "@/types";
import { useSearchParams, useRouter } from "next/navigation";



const steps = [
  {
    id: 1,
    title: "Shopping Cart",
  },
  {
    id: 2,
    title: "Shipping Addess",
  },
  {
    id: 3,
    title: "Payment Method",
  },
]

// TEMPORARY
 const cartItems: CartsItemType= [
   {
     id: 1,
     name: "Adidas CoreFit T-Shirt",
     shortDescription:
       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
     description:
       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
     price: 39.9,
     sizes: ["s", "m", "l", "xl", "xxl"],
     colors: ["gray", "purple", "green"],
     images: {
       gray: "/products/1g.png",
       purple: "/products/1p.png",
       green: "/products/1gr.png",
     },
     quantity: 1,
     selectedSize: "m",
     selectedColor: "gray",
   },
   {
     id: 2,
     name: "Puma Ultra Warm Zip",
     shortDescription:
       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
     description:
       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
     price: 59.9,
     sizes: ["s", "m", "l", "xl"],
     colors: ["gray", "green"],
     images: { gray: "/products/2g.png", green: "/products/2gr.png" },
     quantity: 1,
     selectedSize: "l",
     selectedColor: "gray",
   },
   {
     id: 3,
     name: "Nike Air Essentials Pullover",
     shortDescription:
       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
     description:
       "Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit. Lorem ipsum dolor sit amet consect adipisicing elit lorem ipsum dolor sit.",
     price: 69.9,
     sizes: ["s", "m", "l"],
     colors: ["green", "blue", "black"],
     images: {
       green: "/products/3gr.png",
       blue: "/products/3b.png",
       black: "/products/3bl.png",
     },
     quantity: 1,
     selectedSize: "l",
     selectedColor: "black",
   },
 ];

const CartPage = () => {
  const searchParams = useSearchParams()
  const router = useRouter()

  const activeSearch = parseInt(searchParams.get("step" || "1"))
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">You Shopping Cart</h1>
      {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map(step => (
          <div className="" key={step.id}>
            <div className="">{step.id}</div>
            <p>{step.title}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CartPage