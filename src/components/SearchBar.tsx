import { Search } from "lucide-react"

const SearchBar = () => {
  return (
    <div className=''>
        <Search className="w-4 h-4 text-gray-500"/>
        <input placeholder="Search..." className="text-sm outline-0" />
    </div>
  )
}

export default SearchBar