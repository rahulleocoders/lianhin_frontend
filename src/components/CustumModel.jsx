'use client'
import { AiOutlineClose } from "react-icons/ai";

// ModalHeader component with props
const ModalHeader = ({ children, onClose }) => {
    return (
        <div className="flex justify-between items-center mb-3">
            <p className="text-xl text-black font-semibold">{children}</p>
            <button
                type="button"
                className="text-gray-900 bg-transparent  hover:bg-gray-200 hover:text-gray-950 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={onClose}
            ><AiOutlineClose className="font-semibold" /></button>
        </div>
    );
};

const ModalBody = ({ children }) => { return (<div className="max-h-[80vh] h-full overflow-y-scroll">{children}</div>) }

const CustumModel = ({ size, show, children, className }) => {
    return (
        <div className={`${show ? 'block' : 'hidden'} fixed top-0 left-0 right-0 z-50 w-full h-screen p-4 bg-gray-100 bg-opacity-50 overflow-hidden flex justify-center items-center`}>
            <div className={`${className} relative p-5 bg-white rounded-lg shadow dark:bg-gray-700 w-full UpAnimation`} >{children}</div>
        </div>
    );
}
export { ModalHeader, ModalBody };
export default CustumModel