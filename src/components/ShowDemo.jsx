'use client'
import { useState } from 'react'
import SelectModal from './SelectModal'

const ShowDemo = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <button onClick={() => setShow(true)} className=" bg-primary-color hover:bg-blue-950 text-white py-2 rounded-3xl font-bold text-xl text-center" type="button">Let&apos;s Start Now !</button>
            <SelectModal show={show} onClose={() => setShow(false)} /></>
    )
}

export default ShowDemo