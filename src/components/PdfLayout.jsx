'use client'
import { Modal } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Margin, usePDF } from 'react-to-pdf';
import Loadercomp from './Loadercomp';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import html2canvas from 'html2canvas';

const PdfLayout = ({ currentModelRef, setPdfpopup }) => {
    const [loadingMessage, setLoadingMessage] = useState('')
    const [modelImg, setmodelImg] = useState(null)

    const { toPDF, targetRef } = usePDF({
        filename: "usepdf-example.pdf",
        page: { margin: Margin.SMALL },
    });

    const handleSavePdf = async () => {
        try {
            setLoadingMessage('Generating PDF for download')
            await toPDF();
        } finally {
            setPdfpopup(false)
            setLoadingMessage('')
        }
    };

    const GenerateImage = async (ImageRef) => {
        setLoadingMessage('Generating PDF preview')
        let screenshotDataUrl
        let currentdate = new Date();
        let timestamp = `${currentdate.getMinutes()}_${currentdate.getSeconds()}`;
        try {
            html2canvas(ImageRef, {
                scale: 1, // Increase the scale
                logging: true, // Enable logging for debugging
                dpi: 300, // Set a higher DPI
            }).then((canvas) => {
                // Convert the canvas to a data URL
                screenshotDataUrl = canvas.toDataURL('image/png');
                setmodelImg(screenshotDataUrl)
                setLoadingMessage('')
            });
        } catch (error) {
            console.error('Error generating PDF:', error);
        }
    };

    let SurfaceUsed = ({ src, name, price, brand }) => {
        <div className="flex">
            <div className=""></div>
        </div>
    }

    useEffect(() => {
        GenerateImage(currentModelRef)
    }, [])

    return (
        <>
            {loadingMessage && <Loadercomp message={loadingMessage} />}
            <Modal className="" show={true} size="6xl" onClose={() => setPdfpopup(false)}  >
                <Modal.Header className=" border-none p-0"></Modal.Header>
                <Modal.Body className=" mb-5">
                    <div className='' style={{ width: "100%" }} ref={targetRef}  >

                        <div className="w-full max-w-4xl mx-auto ">
                            <div className=" mb-1">
                                <Image src='./images/linhanlogo.png' alt="lianhin" height={100} width={100} className="w-32 h-7  md:h-10 md:w-44" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                            </div>

                            <div className=" max-w-4xl mx-auto " style={{ height: "550px" }}>
                                <img src={modelImg ? modelImg : "mkmm"} className='w-full h-full' alt="lianhin" srcSet="" />
                            </div>
                            <div className=" bg-red-400 max-w-4xl mx-auto mt-2">
                                <div className="flex">
                                    <div className="w-36 aspect-square">
                                        <img src='./images/Living_Room_Scene_1.jpg' className='w-full h-full' alt="" srcSet="" />

                                    </div>
                                    <div className="">
                                        <p>Name:aniket</p>
                                        <p>brand:aniket</p>
                                        <p>price:120</p>
                                    </div>
                                </div>
                            </div>


                        </div>





                        {/* <img src='./images/Living_Room_Scene_1.jpg' alt="" srcSet="" width={152} height={152} />
                        <img src={modelImg ? modelImg : "mkmm"} alt="" srcSet="" width={152} height={152} /> */}
                        <button type='button' onClick={handleSavePdf}>Download PDF</button>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PdfLayout