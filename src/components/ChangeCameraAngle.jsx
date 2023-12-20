'use client'

import { useState } from "react"

const ChangeCameraAngle = () => {
    const [camaeraAngle, SetCamaeraAngle] = useState(true)
    let AngleBtn = ({ active, onClick, path }) => {
        return (
            <button type="button" onClick={onClick} className={` ${active ? 'bg-primary-color' : "bg-transparent"}   py-1 px-2 md:px-4 md:py-3 rounded text-sm font-bold  capitalize font-arial`}> {/* {children} */}
                <div className={`${active ? 'bg-white' : 'bg-primary-color'} w-5 aspect-square `} style={path}></div>
            </button>
        )
    }
    return (
        <div className="border border-primary-color text-primary-color rounded font-arial">
            <AngleBtn
                active={camaeraAngle}
                path={{ clipPath: `polygon(0 0, 100% 0, 100% 31%, 39% 32%, 38% 100%, 0 100%, 0 38%)` }}
                onClick={() => { SetCamaeraAngle(true) }}
            />
            <AngleBtn
                active={!camaeraAngle}
                path={{ clipPath: `polygon(0 34%, 100% 33%, 100% 60%, 0 60%)` }}
                onClick={() => { SetCamaeraAngle(false) }}
            />

        </div>
    )
}

export default ChangeCameraAngle