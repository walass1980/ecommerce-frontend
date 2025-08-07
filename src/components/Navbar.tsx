import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="w-full flex items-center justify-between">
        {/* LEFT */}
        <Link href="/" className="flex items-center">
         <Image 
         src="/logo.png" 
         alt="TrendLama" 
         width={36} 
         height={36} 
         className="w-6 h-6 md:w-9"
         />
         <p className="text-md font-medium tracking-wider">
            TRENDWALASS
         </p>
        </Link>
        {/* RIGHT */}
        <div className="">right</div>
    </nav>
  )
}

export default Navbar