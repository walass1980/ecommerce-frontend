"use client"

import { CartsItemType } from "@/types";
import { ArrowRight } from "lucide-react";
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

  const activeStep = parseInt(searchParams.get("step") || "1")
  return (
    <div className="flex flex-col gap-8 items-center justify-center mt-12">
      {/* TITLE */}
      <h1 className="text-2xl font-medium">You Shopping Cart</h1>
      {/* STEPS */}
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {steps.map(step => (
          <div 
           className={`flex items-center gap-2 border-b-2 pb-2 ${
            step.id === activeStep ? "border-gray-800" : "border-gray-200"
           }`} 
           key={step.id}>
            <div 
             className={`w-6 h-6 rounded-full text-white p-4 flex items-center justify-center ${
              step.id === activeStep ? "bg-gray-800" :"bg-gray-200"
             }`}
             >
              {step.id}
            </div>
            <p 
             className={`text-sm font-medium ${
              step.id === activeStep ? "text-gray-800" : "text-gray-200"
             }`}
             >
              {step.title}
            </p>
          </div>
        ))}
      </div>
      {/* STEPS & DETAILS */}
      <div className="w-full flex flex-row gap-16">
        {/* STEPS */}
        <div className="w-full lg:w-7/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">1</div>
        {/* DETAILS */}
        <div className="w-full lg:w-5/12 shadow-lg border-1 border-gray-100 p-8 rounded-lg flex flex-col gap-8">
         <h2 className="font-semibold">Cart Details</h2>
         <div className="flex flex-col gap-4">
          <div className="flex justify-between">
            <p className="text-gray-500">Subtotal</p>
            <p className="font-medium">
              $
              {cartItems.reduce(
                (acc, item) => acc + item.price * item.quantity,
                0
              ).toFixed(2)}
            </p>
          </div>
         </div>
         <button className="w-full bg-gray-700 hover:bg-gray-900 transition-all duration-300 text-white p-2 rounded-lg cursor-pointer flex items-center justify-center gap-2">
          Continue
          <ArrowRight className="w-3 h-3"/>
         </button>
        </div>
      </div>
    </div>
  )
}

export default CartPage