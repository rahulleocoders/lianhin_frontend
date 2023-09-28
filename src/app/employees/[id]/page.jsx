import EmployeeForm from "@/components/EmployeeForm"


async function getData(id) {
    const res = await fetch(`https://retoolapi.dev/pKJXiw/data/${id}`, {
        cache: "no-store"
    });
    if (!res.ok) { return notFound() }
    return res.json();
}

const page = async ({ params }) => {
    let id = params.id
    const data = await getData(id);
    return (
        <div className="max-w-screen-xl mx-auto">
            {data && <EmployeeForm data={data} methode='PUT'/>}
        </div>
    )
}

export default page