'use client'
import { ColorPalettes, Surface_Finishing, Surface_Series, Surface_brand, Surface_models } from "@/local_data"
import { useEffect, useRef, useState } from "react"

let CheckboxFilter = ({ title, children }) => (
    <div className="">
        <p className=" capitalize bg-primary-color px-3 py-1 text-white">{title}</p>
        <div className="px-3 mt-1 max-h-24 overflow-y-scroll pe-1">{children}</div>
    </div>
)

const FilterSurface = () => {
    // const [btnState, setBtnState] = useState(false)
    const [filterOpen, setFilterOpen] = useState(false)
    const filterRef = useRef(null);

    //  global click event listener to close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) { setFilterOpen(false); }
        };
        if (filterOpen) { document.addEventListener('click', handleClickOutside); }
        else { document.removeEventListener('click', handleClickOutside); }
        return () => { document.removeEventListener('click', handleClickOutside); };
    }, [filterOpen]);

    let FilterToggle = () => {
        return (
            <button disabled={false} onClick={() => setFilterOpen(pre => !pre)} className={`${false ? ' cursor-not-allowed' : ' cursor-pointer'} w-7 rounded aspect-square border border-secondary flex items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
            </button>
        )
    }

    return (
        <div className=' relative' ref={filterRef}>
            <FilterToggle />

            <div className={`${filterOpen ? 'flex' : 'hidden'} min-w-[260px] absolute top-0 left-[150%] md:-left-[1010%] py-4 bg-white border rounded drop-shadow-md  flex-col gap-2 max-h-[82vh] overflow-y-scroll hide-scrollbar z-[99999999999] select-none`}>
                <CheckboxFilter title='Brand' >
                    {Surface_brand?.map((tile) =>
                        <div key={`Brand${tile}`} className="flex items-start gap-3">
                            <input type="checkbox" name="" id={`Brand${tile}`} className="cursor-pointer outline-none focus:ring-transparent" />
                            <label htmlFor={`Brand${tile}`} className=" text-secondary cursor-pointer">{tile}</label>
                        </div>
                    )}
                </CheckboxFilter>

                <CheckboxFilter title='Surface Collection' >
                    {Surface_brand?.map((tile) =>
                        <div key={`Tile-Collection${tile}`} className="flex items-start gap-3">
                            <input type="checkbox" name="" id={`Tile-Collection${tile}`} className="cursor-pointer outline-none focus:ring-transparent" />
                            <label htmlFor={`Tile-Collection${tile}`} className=" text-secondary cursor-pointer">{tile}</label>
                        </div>
                    )}
                </CheckboxFilter>

                <CheckboxFilter title='Series/Effect' >
                    {Surface_Series?.map((tile) =>
                        <div key={`Tile-Collection${tile}`} className="flex items-start gap-3">
                            <input type="checkbox" name="" id={`Tile-Collection${tile}`} className="cursor-pointer outline-none focus:ring-transparent" />
                            <label htmlFor={`Tile-Collection${tile}`} className=" text-secondary cursor-pointer">{tile}</label>
                        </div>
                    )}
                </CheckboxFilter>

                <CheckboxFilter title='Models' >
                    {Surface_models?.map((tile) =>
                        <div key={`Tile-Collection${tile}`} className="flex items-start gap-3">
                            <input type="checkbox" name="" id={`Tile-Collection${tile}`} className="cursor-pointer outline-none focus:ring-transparent" />
                            <label htmlFor={`Tile-Collection${tile}`} className=" text-secondary cursor-pointer">{tile}</label>
                        </div>
                    )}
                </CheckboxFilter>

                <CheckboxFilter title='Finishing' >
                    {Surface_Finishing?.map((tile) =>
                        <div key={`Tile-Collection${tile}`} className="flex items-start gap-3">
                            <input type="checkbox" name="" id={`Tile-Collection${tile}`} className="cursor-pointer outline-none focus:ring-transparent" />
                            <label htmlFor={`Tile-Collection${tile}`} className=" text-secondary cursor-pointer">{tile}</label>
                        </div>
                    )}
                </CheckboxFilter>

                <CheckboxFilter title='Colors' >
                    {ColorPalettes?.map((tile) =>
                        <div key={`Colors${tile.color}`} className="flex items-start gap-3">
                            <input type="checkbox" name="" id={`Colors${tile.color}`} className="cursor-pointer outline-none focus:ring-transparent" />
                            <label htmlFor={`Colors${tile.color}`} className=" text-secondary cursor-pointer">{tile.name}</label>
                        </div>
                    )}
                </CheckboxFilter>
            </div>
        </div>
    )
}

export default FilterSurface