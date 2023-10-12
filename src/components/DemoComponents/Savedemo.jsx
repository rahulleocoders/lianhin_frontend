'use client'
import { AiFillSave } from 'react-icons/ai'
import HoverBtn from '../HoverBtn'
import { useEffect, useRef, useState } from 'react'
import { MenuItem } from './ShareDemo'
import html2canvas from 'html2canvas'
import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { AiFillFileImage, AiFillFilePdf } from 'react-icons/ai'
import { useSelector } from 'react-redux'

const handleSaveImage = (ImageRef) => {
  if (ImageRef) {
    // if (ImageRef.current) {
    let currentdate = new Date()
    let timestamp = `${currentdate.getMinutes()}_${currentdate.getSeconds()}`
    html2canvas(ImageRef, {
      // html2canvas(ImageRef.current, {
      scale: 2, // Increase the scale
      logging: true, // Enable logging for debugging
      dpi: 300, // Set a higher DPI
    }).then((canvas) => {
      // Convert the canvas to a data URL
      const screenshotDataUrl = canvas.toDataURL('image/png');
      // Create a download link
      const link = document.createElement('a');
      link.href = screenshotDataUrl;
      link.download = `bathroom_${timestamp}.png`;
      // Trigger a click event to download the screenshot
      link.click();
    });
  }
};


const handleSavePdf = async (ImageRef) => {
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

      // Define the content of the PDF document
      const documentDefinition = {
        content: [
          'Hello, this bathroom created by lian hin 3D visualization Concept!',
          { text: 'try 3D word with lian hin', fontSize: 14 },
          { text: 'Up comming models', fontSize: 14 },
          {
            ul: [
              'bathroom 2',
              'kitchen',
              'living room',
            ],
          },
          {
            columns: [
              // // Column 1
              // 'This is some additional text.',
              // // Column 2 (with the image)
              { image: screenshotDataUrl, width: 500 },
            ],
            // columnGap: 10, // Adjust the gap between columns as needed
          },
        ],
      };

      // Create the PDF
      const pdfDoc = pdfMake.createPdf(documentDefinition);

      // Download the PDF
      pdfDoc.download(`example_${timestamp}.pdf`);
    });
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};


const Savedemo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const currentModelRef = useSelector((state) => state.CommonState?.currentModelRef);

  //  global click event listener to close the dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) { setIsOpen(false); }
    };
    if (isOpen) { document.addEventListener('click', handleClickOutside); }
    else { document.removeEventListener('click', handleClickOutside); }
    return () => { document.removeEventListener('click', handleClickOutside); };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}><HoverBtn><AiFillSave size={22} className=' text-primary-color' /></HoverBtn></div>
      {isOpen && (
        <ul className="absolute py-1 z-50 shadow-md transform translate-y-6 -translate-x-1/2 bg-white border border-primary-color rounded flex gap-1 flex-col">
          <MenuItem>
            <button onClick={() => handleSaveImage(currentModelRef)} type='button' className='text-xs tex text-secondary flex gap-1 items-center whitespace-nowrap px-1 cursor-pointer capitalize'><AiFillFileImage size={20} className=' text-primary-color' /> save image</button>
          </MenuItem>
          <MenuItem>
            <button onClick={() => handleSavePdf(currentModelRef)} type='button' className='text-xs tex text-secondary flex gap-1 items-center whitespace-nowrap px-1 cursor-pointer capitalize'><AiFillFilePdf size={20} className=' text-primary-color' /> save pdf</button>
          </MenuItem>
        </ul>
      )}
    </div>
  )
}

export default Savedemo