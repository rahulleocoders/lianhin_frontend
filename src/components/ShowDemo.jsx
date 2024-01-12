'use client'
import { useState } from 'react'
import SelectModal from './SelectModal'
import { driver } from 'driver.js'
import Walkthrough from './Walkthrough'

const ShowDemo = () => {
    // const driverObj = driver({
    //     showProgress: true,
    //     steps: [
    //         {
    //             element: ".available-rooms .one-room:nth-child(1)",
    //             popover: {
    //                 className: "first-step-popover-class",
    //                 title: "Title on Popover living_room",
    //                 description: "Body of the popover",
    //                 position: "left",
    //                 side: "left", align: 'start'
    //             },
    //         },
    //     ]
    // });
    // driverObj.reset()
    const [show, setShow] = useState(false)
    return (
        <>
            <button id='let_start_now' onClick={() => { setShow(true); }} className=" bg-primary-color hover:bg-blue-950 text-white py-2 rounded-3xl font-bold text-xl text-center" type="button">Let&apos;s Start Now !</button>
            <SelectModal show={show} onClose={() => setShow(false)} />
            {show && <Walkthrough />}
        </>
    )
}

export default ShowDemo