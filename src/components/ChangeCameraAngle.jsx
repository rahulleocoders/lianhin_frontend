'use client'
const ChangeCameraAngle = () => {
    let AngleBtn = ({ active, children }) => {
        return (
            <button type="button" className={`text-primary-color ${active ? 'bg-primary-color' : "bg-transparent"} hover:bg-primary-color  py-1 px-2 md:px-4 md:py-3 rounded text-sm font-bold  capitalize font-arial`}>
                {children}
            </button>
        )
    }
    return (
        <div className="border border-primary-color text-primary-color rounded font-arial">
            <AngleBtn active={true} >
                <div className={`border-4 border-transparent border-t-white border-l-white w-5 aspect-square`}></div>
            </AngleBtn>
            <AngleBtn active={false} >
                <div className={`text-primary-color `}>-</div>
            </AngleBtn>

        </div>
    )
}

export default ChangeCameraAngle