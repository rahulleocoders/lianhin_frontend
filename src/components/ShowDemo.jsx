'use client'
import { useRef, useState } from 'react'
import SelectModal from './SelectModal'
import { driver } from 'driver.js'
import { StartWalkthrough } from './WelcomPopup'
// import Walkthrough from './Walkthrough'


const ShowDemo = () => {
    const [show, setShow] = useState(false)
    const driverObjRef = useRef(null);

    const Select_room_Walkthrough = () => {
        driverObjRef.current = driver({
            showProgress: true,
            steps: [
                {
                    element: ".available-rooms .one-room:nth-child(1)",
                    popover: {
                        className: "first-step-popover-class",
                        title: "Choose a Room",
                        description: "Select the room you'd like to view in 3D visualization.",
                        position: "left",
                        side: "left",
                        align: 'start'
                    },
                },
            ]
        });

        driverObjRef.current.drive();
    };

    return (
        <>
            <button id='let_start_now' onClick={() => {
                setShow(true);
                StartWalkthrough.destroy()
                setTimeout(() => Select_room_Walkthrough(), 30);
            }}
                className=" bg-primary-color hover:bg-blue-950 text-white py-2 rounded-3xl font-bold text-xl text-center" type="button">Let&apos;s Start Now !</button>
            <SelectModal show={show} onClose={() => setShow(false)}
                onClick={() => { if (driverObjRef.current) { driverObjRef.current.destroy(); } }} />
        </>
    )
}

export default ShowDemo