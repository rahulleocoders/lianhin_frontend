const SortSurface = () => {
    return (
        <div className="w-full">
            <select className="w-full rounded-3xl py-2 border-secondary text-secondary active:ring-transparent focus:ring-transparent active:border-secondary focus:border-secondary text-xs">
                <option value="xsjnxj">Sort by: Newest tiles</option>
                <option value="xsjnxj">Sort by: Popular tiles</option>
                <option value="xsjnxj">Sort by: Pricing - low to high</option>
                <option value="xsjnxj">Sort by: Pricing - high to low</option>
            </select>
        </div>
    )
}

export default SortSurface