'use client'

import { useState } from "react"
import CustumModel, { ModalBody, ModalHeader } from "./CustumModel"
import EmployeeForm from "./EmployeeForm"

const AddEmployee = () => {
    const [openModal, setOpenModal] = useState(false)
    return (
        <>
            <button type="button" className=' px-4 py-2 rounded-md border-none outline-none bg-slate-700 text-white'
                onClick={() => setOpenModal(pre => !pre)}
            >Add Employee</button>


            <CustumModel className=' max-w-xl' show={openModal} >
                <ModalHeader onClose={() => setOpenModal(pre => { return !pre })}>Welcome to website</ModalHeader>
                <ModalBody>
                    <div className="">
                        <EmployeeForm data={false} methode='POST' setOpenModal={setOpenModal} />
                    </div>
                </ModalBody>
            </CustumModel>
        </>
    )
}

export default AddEmployee