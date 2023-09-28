'use client'
import { useState } from 'react'
import SelectModal from './SelectModal'

const ShowDemo = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <button onClick={() => setShow(true)} className=" bg-primary-color hover:bg-blue-950 text-white py-2 rounded-3xl font-bold text-base text-center" type="button">Demo Project</button>
            <SelectModal show={show} onClose={() => setShow(false)} /></>
    )
}

export default ShowDemo