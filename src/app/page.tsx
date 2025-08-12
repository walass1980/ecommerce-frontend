import ProductList from "@/components/ProductList"
import Image from "next/image"

const Homepage = async ({
  searchParams
}: {
  searchParams: Promise<{ catagory: string }>
}) => {
  const category = (await searchParams).catagory
  return (
    <div className="">
      <div className="relative aspect-[3/1] mb-12">
       <Image src="/featured.png" alt="Featured Product" fill/>
      </div>
      <ProductList category={category}/>
    </div>
    
  )
}

export default Homepage 