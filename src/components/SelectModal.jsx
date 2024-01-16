'use client'
import { Modal } from "flowbite-react"
import ModalCard from "./ModalCard"
import { Room_sence } from "@/local_data"
const SelectModal = ({ show, onClose, onClick }) => {
    return (
        <>
            <Modal className=" z-[99999999]" show={show} size="6xl" onClose={onClose}
             onClick={onClick}
            >
                <Modal.Header className=" border-none p-6 pb-0"><span className=" text-primary-color text-3xl font-bold capitalize">Choose Your Space</span></Modal.Header>
                <Modal.Body className=" mb-5">
                    <div className="available-rooms flex gap-2 flex-wrap ">{Room_sence?.map((card) => <ModalCard key={card.title} card={card} />)}</div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default SelectModal