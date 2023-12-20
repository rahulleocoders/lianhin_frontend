import FilterSurface from "./FilterSurface"
import SortSurface from "./SortSurface"

const SidebarTop = () => {
    return (
        <div className="py-7 px-5 border-b border-secondary flex justify-between items-center">
            <FilterSurface />
            <SortSurface />
        </div>
    )
}

export default SidebarTop