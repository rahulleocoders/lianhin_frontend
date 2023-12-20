'use client'
import { Modal } from "flowbite-react"
import { useState } from "react"
const WelcomPopup = () => {
    const [open, setOpen] = useState(true)
    return (
        <Modal className=" " show={open} size="lg" onClose={() => setOpen(false)} >
            <Modal.Header className=" border-none pb-0">
            </Modal.Header>
            <Modal.Body className=" pt-0">
                <div className="max-w-sm mx-auto  flex flex-col gap-3">
                    <p className=" text-primary-color text-center text-3xl font-bold">Welcome to 3D models ready to view!</p>
                    <p className=" text-secondary text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been.</p>
                </div>
            </Modal.Body>
        </Modal>
    )
}

export default WelcomPopup