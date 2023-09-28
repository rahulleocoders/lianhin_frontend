'use client'
import { useState } from "react"

const FilterSurface = () => {
    const [btnState, setBtnState] = useState(false)
    const [filterOpen, setFilterOpen] = useState(false)

    return (
        <div className=' relative'>
            <button disabled={btnState} onClick={() => setFilterOpen(pre => !pre)} className={`${btnState ? ' cursor-not-allowed' : ' cursor-pointer'} w-7 rounded aspect-square border border-secondary flex items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
            </button>

            <div className={`${filterOpen ? 'flex' : 'hidden'} min-w-[260px] absolute top-0 left-[150%] md:-left-[1010%] py-4 bg-white border rounded drop-shadow-md  flex-col gap-2 z-10`}>
                <div className="">
                    <p className=" capitalize bg-primary-color px-3 py-1 text-white">Tile Collection</p>
                    <div className="px-3 mt-1">
                        {["Sintered", 'Quartz', 'Granite']?.map((tile) =>
                            <div key={tile} className="flex items-center gap-3">
                                <input type="checkbox" name="" id={tile} className="cursor-pointer outline-none focus:ring-transparent" />
                                <label htmlFor={tile} className=" text-secondary cursor-pointer">{tile}</label>
                            </div>
                        )}
                    </div>
                </div>
                <div className="">
                    <p className=" capitalize bg-primary-color px-3 py-1 text-white">Tile Collection</p>
                    <div className="px-3 mt-1">
                        {["Sintered", 'Quartz', 'Granite']?.map((tile) =>
                            <div key={`abd${tile}`} className="flex items-center gap-3">
                                <input type="checkbox" name="" id={tile} className="cursor-pointer outline-none focus:ring-transparent" />
                                <label htmlFor={tile} className=" text-secondary cursor-pointer">{tile}</label>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterSurface