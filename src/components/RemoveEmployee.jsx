'use client'
import { useRouter } from 'next/navigation';
import { BsTrash3 } from 'react-icons/bs'

const RemoveEmployee = ({ id }) => {
    const router = useRouter();
    const removeTopic = async () => {
        const confirmed = confirm("Are you sure?");
        if (confirmed) {
            const res = await fetch(`https://retoolapi.dev/pKJXiw/data/${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                router.refresh();
            }
        }
    };
    return (
        <button type='button' className=' p-1 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-600 w-fit'>
            <BsTrash3 size={18} className=' text-red-600'  //onClick={() => { console.log("object", id) }} 
                onClick={removeTopic}
            />
        </button>
    )
}

export default RemoveEmployee