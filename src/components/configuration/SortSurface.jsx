const SortSurface = () => {
    return (
        <div className="">
            <select className=" rounded-3xl py-1 border-secondary text-secondary active:ring-transparent focus:ring-transparent active:border-secondary focus:border-secondary text-xs">
                <option value="xsjnxj">Sort by: Price: Low to High</option>
                <option value="xsjnxj">Sort by: Price: High to Low</option>
                <option value="xsjnxj">Sort by: Newest</option>
                <option value="xsjnxj">Sort by: Most selling</option>
            </select>
        </div>
    )
}

export default SortSurface