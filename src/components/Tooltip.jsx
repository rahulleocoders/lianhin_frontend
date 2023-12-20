const Tooltip = ({ title, children }) => {
    return (
        <div className="group flex relative  w-fit">
            <p className="">{children}</p>
            <span className="group-hover:opacity-100 transition-opacity bg-gray-800 px-1 text-sm text-gray-100 rounded-md absolute left-1/2 -translate-x-1/2 translate-y-8 opacity-0 m-4 mx-auto">{title}</span>
        </div>
    )
}
export default Tooltip