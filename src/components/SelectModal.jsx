'use client'
import { Modal } from "flowbite-react"
import ModalCard from "./ModalCard"
import { Room_sence } from "@/local_data"
const SelectModal = ({ show, onClose }) => {
    return (
        <>
            <Modal className=" z-[99999999999]" show={show} size="6xl" onClose={onClose} >
                <Modal.Header className=" border-none p-6 pb-0"><span className=" text-primary-color text-3xl font-bold">Select Models</span></Modal.Header>
                <Modal.Body className=" mb-5">
                    <div className=" flex justify-between gap-2 flex-wrap ">{Room_sence?.map((card) => <ModalCard key={card.title} card={card} />)}</div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SelectModal