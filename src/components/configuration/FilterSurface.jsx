'use client'
import { Backend_url, ColorPalettes, Surface_Finishing, Surface_Series, Surface_brand } from "@/local_data"
import { updateApiResponceSlice } from "@/redux/slices/ApiResponceSlice"
import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

let CheckboxFilter = ({ title, children }) => (
    <div className="">
        <p className=" capitalize bg-primary-color px-3 py-1 text-white">{title}</p>
        <div className="px-3 mt-1 max-h-24 overflow-y-scroll pe-1">{children}</div>
    </div>
)

const FilterSurface = () => {
    // const [btnState, setBtnState] = useState(false)
    // const [filetrdata, setFiletrdata] = useState({})
    const filterRef = useRef(null);
    const dispatch = useDispatch()
    const [filterOpen, setFilterOpen] = useState(false)
    const filterData = useSelector(state => state.apiResponce.filterData);

    // Function to fetch the data
    const fetchData = async () => {
        try {
            const urlsEndpoints = [`surface`, `brand`, `collection`, `series`, `color`];
            const responses = await Promise.all(
                urlsEndpoints.map(async (url) => {
                    // if (true) {
                        // console.log(url, "object", !(filterData[url].length > 0))
                        const res = await fetch(`${Backend_url}${url}/`, { cache: "no-store" });
                        if (!res.ok) { throw new Error(`Network response was not ok for ${url}`); }
                        const data = await res.json();
                        return { [url]: data?.message };
                    // }
                })
            );

            const responseData = responses.reduce((acc, response) => {
                return { ...acc, ...response };
            }, {});
            dispatch(updateApiResponceSlice({ filterData: responseData }));
            // setFiletrdata(responseData)
        } catch (error) { console.error('Error:', error); }
    };

    console.log("filterData", filterData)
    //  global click event listener to close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (filterRef.current && !filterRef.current.contains(event.target)) { setFilterOpen(false); }
        };
        if (filterOpen) { document.addEventListener('click', handleClickOutside); }
        else { document.removeEventListener('click', handleClickOutside); }
        return () => { document.removeEventListener('click', handleClickOutside); };
    }, [filterOpen]);
    useEffect(() => {
        console.log("akmzkmazkzkmm")
        fetchData()
    }, [])


    let FilterToggle = () => {
        return (
            <button disabled={false} onClick={() => setFilterOpen(pre => !pre)} className={`${false ? ' cursor-not-allowed' : ' cursor-pointer'} w-7 rounded aspect-square border border-secondary flex items-center justify-center`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-secondary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                </svg>
            </button>
        )
    }

    let LabeledCheckBox = ({ title, id, onChange }) => (
        <div className="flex items-center gap-3">
            <input type="checkbox" name="" onChange={onChange} id={`${id}${title}`} className="cursor-pointer outline-none focus:ring-transparent text-primary-color" />
            <label htmlFor={`${id}${title}`} className=" text-secondary cursor-pointer">{title}</label>
        </div>
    )

    return (
        <div className=' relative' ref={filterRef}>
            <FilterToggle />

            <div className={`${filterOpen ? 'flex' : 'hidden'} min-w-[260px] absolute top-0 left-[150%] md:-left-[1010%] py-4 bg-white border rounded drop-shadow-md  flex-col gap-2 max-h-[82vh] overflow-y-scroll hide-scrollbar z-[99999999999] select-none`}>
                <CheckboxFilter title='Brand' >
                    {filterData?.brand?.map((item) =>
                        <LabeledCheckBox
                            key={item.brand_name}
                            id={item.id} title={item.brand_name}
                            onChange={(e) => console.log(e.target.checked, e.target.id)}
                        />
                    )}
                </CheckboxFilter>

                <CheckboxFilter title='Surface Collection' >
                    {filterData?.collection?.map((item) =>
                        <LabeledCheckBox
                            key={item.collection_name}
                            id={item.id} title={item.collection_name}
                            onChange={(e) => console.log(e.target.checked, e.target.id)}
                        />
                    )}
                </CheckboxFilter>

                <CheckboxFilter title='Series/Effect' >
                    {filterData?.series?.map((item) =>
                        <LabeledCheckBox
                            key={item.series_name}
                            id={item.id} title={item.series_name}
                            onChange={(e) => console.log(e.target.checked, e.target.id)}
                        />
                    )}
                </CheckboxFilter>

                <CheckboxFilter title='Surface Finishing' >
                    {filterData?.surface?.map((item) =>
                        <LabeledCheckBox
                            key={item.surface_name}
                            id={item.id} title={item.surface_name}
                            onChange={(e) => console.log(e.target.checked, e.target.id)}
                        />
                    )}
                </CheckboxFilter>

                <CheckboxFilter title='Colors' >
                    {filterData?.color?.map((item) =>
                        <LabeledCheckBox
                            key={item.color_name}
                            id={item.id} title={item.color_name}
                            onChange={(e) => console.log(e.target.checked, e.target.id)}
                        />
                    )}
                </CheckboxFilter>

                {/* <CheckboxFilter title='Colors' >
                    {ColorPalettes?.map((tile) =>
                        <div key={`Colors${tile.color}`} className="flex items-start gap-3">
                            <input type="checkbox" name="" id={`Colors${tile.color}`} className="cursor-pointer outline-none focus:ring-transparent" />
                            <label htmlFor={`Colors${tile.color}`} className=" text-secondary cursor-pointer">{tile.name}</label>
                        </div>
                    )}
                </CheckboxFilter> */}
            </div>
        </div>
    )
}

export default FilterSurface