'use client'
import { useState } from 'react'
import CommonBtn from '../CommonBtn'
import SelectModal from '../SelectModal'
import { usePathname } from 'next/navigation'

const ChangeRoom = () => {
    const [show, setShow] = useState(false)
    const pathname = usePathname()
    let currentPage = pathname.split("/")[1]
    return (
        <><CommonBtn label={currentPage} onClick={() => setShow(true)} />
            <SelectModal show={show} onClose={() => setShow(false)} /></>
    )
}

export default ChangeRoom