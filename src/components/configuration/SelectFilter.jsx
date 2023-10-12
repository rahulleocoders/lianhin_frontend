'use client'
import { Backend_url } from "@/local_data";
import { updateApiResponceSlice } from "@/redux/slices/ApiResponceSlice";
import { updateCommonStateSlice } from "@/redux/slices/CommonStateSlice";
import axios from "axios";
// import Image from "next/image";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const SelectFilter = () => {
    const dispatch = useDispatch()
    const filterData = useSelector(state => state.apiResponce.filterData);
    const CommonState = useSelector(state => state.CommonState);
    const abortController = new AbortController();
    const fetchData = async () => {
        try {
            const urlsEndpoints = [`surface`, `brand`, `collection`, `series`, `color`, 'profile'];
            const responses = await Promise.all(
                urlsEndpoints.map(async (url) => {
                    try {
                        // const response = await axios.get(`${Backend_url}${url}/`);
                        const response = await axios.get(`${Backend_url}/${url}/`, { signal: abortController.signal });
                        const data = response.data;
                        return { [url]: data?.message };
                    } catch (error) {
                        console.log("object", error)
                    }
                })
            );
            const responseData = responses.reduce((acc, response) => {
                return { ...acc, ...response };
            }, {});
            dispatch(updateApiResponceSlice({ filterData: responseData }));
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchData();
        return () => { abortController.abort(); };
    }, []);

    let UpdateFilter = (paramater, id) => {
        dispatch(updateCommonStateSlice({ 'SelctFilterData': { ...CommonState.SelctFilterData, [paramater]: id } }));
    }

    return (
        <div className="flex flex-col gap-3 mb-3">
            <select className="select" onChange={(e) => { UpdateFilter('brand', e.target.value) }}  >
                <option className=' hidden capitalize'> Select brand</option>
                {filterData?.brand?.map((item) => <option key={item.id + item.brand_name} value={item.id}>{item.brand_name}</option>)}
            </select>

            <select className="select" onChange={(e) => { UpdateFilter('collection', e.target.value) }}>
                <option className=' hidden capitalize'>Select Collection</option>
                {filterData?.collection?.map((item) => <option key={item.id + item.collection_name} value={item.id}>{item.collection_name}</option>)}
            </select>

            <select className="select" onChange={(e) => { UpdateFilter('series', e.target.value) }}>
                <option className=' hidden capitalize'>Select series</option>
                {filterData?.series?.map((item) => <option key={item.id + item.series_name} value={item.id}>{item.series_name}</option>)}
            </select>

            <select className="select" onChange={(e) => { UpdateFilter('color', e.target.value) }}>
                <option className=' hidden capitalize'>Select colors</option>
                {filterData?.color?.map((item) => <option key={item.id + item.color_name} value={item.id}>{item.color_name}</option>)}
            </select>

            <select className="select" onChange={(e) => { UpdateFilter('profile', e.target.value) }}>
                <option className=' hidden'>3D profiles</option>
                {filterData?.profile?.map((item) => <option key={item.id + item.profile_name} value={item.id}>
                    {item.profile_name}
                </option>)}
                {/* <option value="xsjnxj">Sort by: Price: Low to High</option>
                <option value="xsjnxj">Sort by: Price: High to Low</option>
                <option value="xsjnxj">Sort by: Newest</option>
                <option value="xsjnxj">Sort by: Most selling</option> */}
            </select>

        </div>
    )
}

export default SelectFilter