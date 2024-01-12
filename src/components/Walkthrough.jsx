'use client'
import { useEffect } from "react";
import { driver } from "driver.js";
// import "driver.js/dist/driver.css";

const Walkthrough = () => {
    const driverObj = driver({
        showProgress: true,
        steps: [
            // {
            //     element: ".second-step",
            //     popover: {
            //         className: "first-step-popover-class",
            //         title: "Title on Popover",
            //         description: "Body of the popover",
            //         position: "left",
            //     },
            // },
            // {
            //     element: ".third-step",
            //     popover: {
            //         className: "first-step-popover-class",
            //         title: "Title on Popover",
            //         description: "Body of the popover",
            //         position: "left",
            //     },
            // },
            // {
            //     element: ".fourth-step",
            //     popover: {
            //         className: "first-step-popover-class",
            //         title: "Title on Popover",
            //         description: "Body of the popover",
            //         position: "left",
            //     },
            // },
            {
                element: ".available-rooms .one-room:nth-child(1)",
                popover: {
                    className: "first-step-popover-class",
                    title: "Title on Popover living_room",
                    description: "Body of the popover",
                    position: "left",
                    side: "left", align: 'start'
                },
            },
        ]
    });
    useEffect(() => {


        // driverObj.drive();
    }, [])
    return (
        <>
            {/* <div className="App-2">
            <h1 className="first-step">Driver.js</h1>
            <h2>Click the button to see some magic happen!</h2>
            <div className="btn">Don't try me!</div>
            <p className="paragraph">hehe</p>
            <p className="paragraph">hehe</p>
            <p className="paragraph">hehe</p>
            <div className="btn second-step">Don't try me!</div>
            <div className="btn third-step">Don't try me!</div>
            <div className="btn fourth-step">Don't try me!</div>
        </div> */}

        </>
    )
}

export default Walkthrough