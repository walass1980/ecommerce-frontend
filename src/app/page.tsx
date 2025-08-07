import Image from "next/image"

const Homepage = () => {
  return (
    <div className="relative aspect-[3/1] mb-12">
      <Image src="/featured.png" alt="Featured Product" fill/>
    </div>
  )
}

export default Homepage 