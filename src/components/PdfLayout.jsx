'use client'
import { Modal } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Margin, usePDF } from 'react-to-pdf';
import Loadercomp from './Loadercomp';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import html2canvas from 'html2canvas';
import CommonBtn from './CommonBtn';

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
        return (
            <div className="max-w-sm rounded overflow-hidden shadow-xl bg-slate-200">
                <img className="w-full"
                    src="./images/Living_Room_Scene_1.jpg"
                    alt="Sunset in the mountains"
                />
                <div className="px-6 py-2">
                    <div className="font-bold text-xl ">The Coldest Sunset</div>
                    <p className="font-medium text-base capitalize">name: snccjnjc </p>
                    <p className="font-medium text-base capitalize">price: 123 </p>
                </div>
            </div>
        )
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
                    <div className="relative">
                        <div className='' style={{ width: "100%" }} ref={targetRef}  >

                            <div className="w-full max-w-4xl mx-auto ">
                                <div className=" mb-1 flr">
                                    <img src='./images/linhanlogo.png' alt="lianhin" height={100} width={100} className="w-32 h-7  md:h-10 md:w-44" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
                                </div>

                                <div className=" max-w-4xl mx-auto " style={{ height: "550px" }}>
                                    <img src={modelImg ? modelImg : "mkmm"} className='w-full h-full' alt="lianhin" srcSet="" />
                                </div>
                                <div className="  max-w-4xl mx-auto mt-2 flex gap-4">
                                    <SurfaceUsed />
                                    <SurfaceUsed />
                                    <SurfaceUsed />
                                </div>
                            </div>

                            {/* <img src='./images/Living_Room_Scene_1.jpg' alt="" srcSet="" width={152} height={152} />
                        <img src={modelImg ? modelImg : "mkmm"} alt="" srcSet="" width={152} height={152} /> */}
                        </div>

                        <div className="max-w-4xl mx-auto flex justify-end mt-4">
                            <CommonBtn label={'Download PDF'} onClick={() => handleSavePdf()} />
                        </div>

                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default PdfLayout