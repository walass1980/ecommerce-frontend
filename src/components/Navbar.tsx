import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
        {/* LEFT */}
        <Link href="/" className="flex item-center">
         <Image 
         src="/logo.png" 
         alt="TrendLama" 
         width={36} 
         height={36} 
         className="w-6 h-6 md:w-9"
         />
         <p className="text-md font-medium">
            TRENDWALASS
         </p>
        </Link>
        {/* RIGHT */}
    </nav>
  )
}

export default Navbar