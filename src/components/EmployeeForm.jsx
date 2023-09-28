'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"

let InputFileld = ({ label, type, id, className, placeholder, value, setEmpInfo }) => {
    return (
        <div className="flex-1 min-w-[200px] ">
            <label htmlFor={id} className="block capitalize mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
            <input type={type} id={id} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => setEmpInfo((prev) => ({ ...prev, [e.target.id]: e.target.value }))} value={value} placeholder={placeholder} required />
        </div>
    )
}

// let SelectOpt = ({ label, id, options, setEmpInfo, value }) => {
//     return (
//         <div className="flex-1 min-w-[200px] ">
//             <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white capitalize">{label}</label>
//             <select id={id} defaultValue={value}
//                 onChange={(e) => setEmpInfo((prev) => ({ ...prev, [e.target.id]: +(e.target.value) }))}
//                 className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             >
//                 {/* <option selected="">Choose a country</option> */}
//                 {options?.map((opt) => <option key={opt.lable} value={opt.value}>{opt.lable}</option>)}
//             </select>
//         </div>

//     )
// }

const EmployeeForm = ({ data, methode, setOpenModal }) => {
    const router = useRouter();
    const [empInfo, setEmpInfo] = useState(data ? data : { rating: "⭐️⭐️⭐️" })

    let FromSubmit = async () => {
        try {
            if (methode == "PUT") {
                const res = await fetch(`https://retoolapi.dev/pKJXiw/data/${empInfo.id}`, {
                    method: "PUT",
                    headers: { "Content-type": "application/json", },
                    body: JSON.stringify(empInfo),
                });
                if (!res.ok) { throw new Error("Failed to update topic"); }
                router.refresh();
                router.push("/employees");
            }
            if (methode == "POST") {
                const res = await fetch(`https://retoolapi.dev/pKJXiw/data`, {
                    method: "POST",
                    headers: { "Content-type": "application/json", },
                    body: JSON.stringify(empInfo),
                });
                if (!res.ok) { throw new Error("Failed to update topic"); }
                router.refresh();
                setEmpInfo({ rating: "⭐️⭐️⭐️" })
                setOpenModal(false)
            }
        } catch (error) { console.log(error); }
    }
    return (
        <>
            <div className=" flex items-center p-4 h-full flex-col gap-2" >
                <p className=" text-2xl font-bold self-start">Add Employee Details</p>
                <div className="w-full">
                    <InputFileld label='full Name' type='text' id='full_name' placeholder="John does" className=''
                        value={empInfo?.full_name ? empInfo?.full_name : ""} setEmpInfo={setEmpInfo} />
                </div>
                <div className="w-full">
                    <InputFileld label='email' type='email' id='email'
                        placeholder="example@email.com" className=''
                        value={empInfo?.email ? empInfo?.email : ""}
                        setEmpInfo={setEmpInfo}
                    />
                </div>
                <div className="flex w-full gap-4 flex-wrap">
                    <InputFileld label='job title' type='text' id='job_title' className=''
                        placeholder="sales intern"
                        value={empInfo?.job_title ? empInfo?.job_title : ""}
                        setEmpInfo={setEmpInfo}
                    />
                    {/* <SelectOpt label='rating' id='rating' options={RatingOptionArr}
                        value={empInfo?.rating}
                        setEmpInfo={setEmpInfo}
                    /> */}

                </div>
                <button type="button" className="py-2.5 mt-3 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 self-start" onClick={FromSubmit} >Save</button>
            </div>
        </>
    )
}
export default EmployeeForm