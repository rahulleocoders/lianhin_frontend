'use client'
import { updateCommonStateSlice } from "@/redux/slices/CommonStateSlice";
import { useDispatch } from "react-redux";

const SortSurface = () => {
    const dispatch = useDispatch()
    let ChangeSorting = (e) => {
        console.log("object", e.target.value)
        dispatch(updateCommonStateSlice({ sortingParameter: e.target.value }));
    }

    return (
        <div id="sort_surface" className="w-full">
            {/* <select className="w-full rounded-3xl py-2 border-secondary text-secondary active:ring-transparent focus:ring-transparent active:border-secondary focus:border-secondary text-xs"> */}
            <select className="select"
                onChange={(e) => { ChangeSorting(e) }}
            >
                <option className="hidden">Sort by:</option>
                <option value="sort=&is_most_popular=&is_new=true">Sort by: Newest tiles</option>
                <option value="sort=&is_most_popular=true&is_new=">Sort by: Popular tiles</option>
                <option value="sort=asc&is_most_popular=&is_new=">Sort by: Pricing - low to high</option>
                <option value="sort=desc&is_most_popular=&is_new=">Sort by: Pricing - high to low</option>
            </select>
        </div>
    )
}

export default SortSurface