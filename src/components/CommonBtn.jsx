'use client'

const CommonBtn = ({ label, onClick }) => {
    return (
        <button type="button" className=" bg-white border border-primary-color text-primary-color hover:bg-primary-color py-1 px-2 md:px-6 md:py-3 hover:text-white rounded text-sm font-bold  capitalize font-arial"
            onClick={onClick}
        >{label}</button>
    )
}

export default CommonBtn