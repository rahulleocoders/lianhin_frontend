'use client'
const ModalCardCameraPos = () => {
    let SmallBtn = ({ icon }) => {
        return (
            <button type="button" onClick={e => handleClick(e)} className="flex justify-center items-center bg-white bg-opacity-50 text-primary-color font-bold text-base cursor-pointer rounded w-8 aspect-square" ><p>{icon}</p></button>
        )
    }
    const handleClick = e => {
        e.preventDefault();
        return console.log("It works");
    };

    return (
        <div className="absolute top-1 right-1 flex gap-1">
            <SmallBtn icon='-' />
            <SmallBtn icon='+' />
        </div>
    )
}

export default ModalCardCameraPos