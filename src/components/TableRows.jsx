'use client'
import Link from 'next/link'
import { MdModeEditOutline } from 'react-icons/md'
import RemoveEmployee from './RemoveEmployee'


const TableRows = ({ intialInfo, limit }) => {
    // const [allInfo, setAllInfo] = useState(intialInfo)
    // const [page, setPage] = useState(1)
    // useEffect(() => {
    //     const fetchMoreData = async () => {
    //         try {
    //             let nextpage = page + 1
    //             setPage(nextpage)
    //             const response = await fetch(`https://api-generator.retool.com/pKJXiw/data?_page=${nextpage}&_limit=${limit}`, { cache: "no-store" });
    //             if (!response.ok) { throw new Error('Network response was not ok'); }
    //             const moreData = await response.json();
    //             setAllInfo((prevData) => [...prevData, ...moreData]); // Update state with the fetched data
    //         } catch (error) { console.error(error); }
    //     };

    //     fetchMoreData(); // Call the async function to fetch and handle the more data
    // }, [intialInfo]);




    return (
        <>
            {intialInfo?.map((row) =>
                <tr key={row.id} className=' border'>
                    <td className="p-3 text-center">{row.id}</td>
                    <td>{row.full_name}</td>
                    <td>{row.email}</td>
                    <td>{row.job_title}</td>
                    <td>{row.rating}</td>
                    <td>
                        <div className="flex justify-evenly gap-2 items-center">
                            <Link href={`/employees/${row.id}`} className=' p-1 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 w-fit'>
                                <MdModeEditOutline size={24} className='text-blue-700' />
                            </Link>
                            <RemoveEmployee id={row.id} />
                        </div>
                    </td>
                </tr>
            )}
        </>
    )
}

export default TableRows