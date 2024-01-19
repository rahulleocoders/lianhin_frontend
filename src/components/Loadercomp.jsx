
const Loadercomp = ({ message }) => {
    return (
        <div className="flex justify-center items-center min-h-screen fixed top-0 left-0 w-full bg-white bg-opacity-80 flex-col gap-4  z-[999999999999]"
        
        >
            {/* <div className="rounded-md h-12 w-12 border-4 border-t-4  duration-700 border-blue-500 animate-spin "></div> */}
            <div className="border-gray-300 h-20 w-20 animate-spin duration-700 rounded-full border-8 border-t-primary-color" />

            <p className="text-2xl text-primary-color capitaliz font-bold capitalize">please wailt...</p>
            <p className="text-2xl text-primary-color capitaliz font-bold capitalize">{message}</p>
        </div>

    )
}

export default Loadercomp