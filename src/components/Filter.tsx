import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useReducer } from "react"

const Filter = () => {
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()
  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
        <span>Srted by:</span>
        <select 
         name="sort" 
         id="sort"
         className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm"
         >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
         </select>
    </div>
  )
}

export default Filter