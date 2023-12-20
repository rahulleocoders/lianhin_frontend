

import AddEmployee from '@/components/AddEmployee';
import TableRows from '@/components/TableRows';
import { page_limit } from '@/local_data';

async function getData() {
    const res = await fetch(process.env.BACKEND_URL,
        // const res = await fetch(`https://retoolapi.dev/pKJXiw/data`,
        // const res = await fetch(`https://api-generator.retool.com/pKJXiw/data?_page=1&_limit=${page_limit}`,
        { cache: "no-store" });
    if (!res.ok) { return notFound() }
    return res.json();
}

export const metadata = { title: 'kitchen', description: 'kitchen demo', }

const page = async () => {
    const data = await getData();
    return (
        <div className="max-w-screen-xl mx-auto ">
            <div className="flex justify-between items-center my-3">
                <p className=" text-2xl font-bold self-start">Employee Details</p>
                <AddEmployee />
            </div>
            <table className=" w-full">
                <thead>
                    <tr className=' border ' >
                        <th className='p-3  text-center'>Em. Id</th>
                        <th className=" text-left">fullName</th>
                        <th className=" text-left">Email</th>
                        <th className="  text-left">job title</th>
                        <th className="  text-left">rating</th>
                        <th className="  text-center">Action</th>
                    </tr>
                </thead>
                <tbody><TableRows intialInfo={data} limit={page_limit} /></tbody>
                {/* <tfoot> <tr> <td>Sum</td> <td>$180</td> </tr> </tfoot> */}
            </table>
        </div >
    )
}

export default page