
const Loadercomp = ({ message }) => {
    return (
        <div className="flex justify-center items-center min-h-screen fixed top-0 left-0 w-full bg-white bg-opacity-80 flex-col gap-4 z-10">
            <div class="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin "></div>
            <p>xsjcjbcbj{message}</p>
        </div>

    )
}

export default Loadercomp