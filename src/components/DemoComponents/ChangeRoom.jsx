'use client'
import { useState } from 'react'
import CommonBtn from '../CommonBtn'
import SelectModal from '../SelectModal'

const ChangeRoom = () => {
    const [show, setShow] = useState(false)
    return (
        <><CommonBtn label='kitchen' onClick={() => setShow(true)} />
            <SelectModal show={show} onClose={() => setShow(false)} /></>
    )
}

export default ChangeRoom