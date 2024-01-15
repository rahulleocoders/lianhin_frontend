'use client'
import { useEffect, useRef, useState } from 'react';
import { BsFillShareFill, BsFacebook, BsWhatsapp } from 'react-icons/bs'
import HoverBtn from '../HoverBtn'
import { useSelector } from 'react-redux';
import html2canvas from 'html2canvas';
import { Backend_url } from '@/local_data';
import axios from 'axios';
import { dataURItoBlob } from './Savedemo';
import Loadercomp from '../Loadercomp';


const handleSaveImage = async (currentModelRef, setLoadingMessage) => {
    if (currentModelRef) {
        let currentdate = new Date();
        let timestamp = `${currentdate.getMinutes()}_${currentdate.getSeconds()}`;

        try {
            const canvas = await html2canvas(currentModelRef, {
                scale: 2,
                logging: true,
                dpi: 300,
            });

            const screenshotDataUrl = canvas.toDataURL('image/png');
            const blob = dataURItoBlob(screenshotDataUrl);

            const formData = new FormData();
            formData.append('image', new File([blob], `living${timestamp}.png`, { type: 'image/png', lastModified: Date.now() }));

            const uploadApiEndpoint = `${Backend_url}/share_image/`;

            const response = await axios.post(uploadApiEndpoint, formData);
            console.log('Image uploaded successfully:', `${Backend_url}${response.data.message.image}`);
            return `${Backend_url}${response.data.message.image}`;
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error; // Rethrow the error for further handling if needed
        } finally { // Ensure setLoadingMessage is cleared even in case of an error
        }
    }
};

// const WhatsAppShareButton = ({ text, url }) => {
//     const encodedUrl = encodeURIComponent(`\n${url}`);
//     const encodedText = encodeURIComponent(`\n${text}`);
//     const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}${encodedUrl}`;
//     return (<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className='text-xs tex text-secondary px-1 flex gap-1 items-center'><BsWhatsapp size={17} className=' text-green-500' />WhatsApp</a>);
// };

const FacebookShareButton = ({ url }) => {
    let fblink = `https://www.facebook.com/share.php?u=${url}`
    return (
        <a href={fblink} className=' text-xs tex text-secondary flex gap-1 items-center whitespace-nowrap px-1 cursor-pointer capitalize' target="_blank">
            <BsFacebook size={17} className=' text-primary-color' />Facebook
        </a>
    );
};

export const MenuItem = ({ children }) => { return (<li className='px-2 hover:bg-secondary py-1  hover:bg-opacity-25' >{children}</li>) }

const ShareDemo = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState('')
    const dropdownRef = useRef(null);
    const currentModelRef = useSelector((state) => state.CommonState?.currentModelRef);

    const Shere_on_whatsapp = async () => {
        setLoadingMessage("Generating link to share")
        try {
            const shere_img_url = await handleSaveImage(currentModelRef, setLoadingMessage);
            const encodedUrl = encodeURIComponent(`\n${shere_img_url}`);
            const encodedText = encodeURIComponent(`\n${'3d room '}`);
            const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}${encodedUrl}`;
            const link = document.createElement('a');
            link.href = whatsappUrl;
            link.target = '_blank';
            setLoadingMessage("")
            link.click();

        } catch (error) {
            console.error('Error in Shere_on_whatsapp:', error);
        }
    };

    const Shere_on_fb = async () => {
        setLoadingMessage("Generating link to share")
        try {
            const shere_img_url = await handleSaveImage(currentModelRef, setLoadingMessage);
            // const encodedUrl = encodeURIComponent(`\n${shere_img_url}`);
            // const encodedText = encodeURIComponent(`\n${'3d room '}`);
            // const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedText}${encodedUrl}`;
            const link = document.createElement('a');
            link.href = `https://www.facebook.com/share.php?u=${shere_img_url}`;
            link.target = '_blank';
            setLoadingMessage("")
            link.click();

        } catch (error) {
            console.error('Error in Shere_on_fb:', error);
        }
    };

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
        <>
            {loadingMessage && <Loadercomp message={loadingMessage} />}
            <div className="relative" ref={dropdownRef}>
                <div onClick={() => setIsOpen(!isOpen)}><HoverBtn><BsFillShareFill size={18} className=' text-primary-color' /></HoverBtn></div>
                {isOpen && (
                    <ul className="absolute z-50 py-[6px] shadow-md transform translate-y-7 -translate-x-2/3 bg-white border border-primary-color rounded flex gap-1 flex-col">
                        {/* <MenuItem><FacebookShareButton url='https://650a8bce34ff5b0af18cbd0e--prismatic-elf-09f091.netlify.app/kitchen' /></MenuItem> */}
                        {/* <MenuItem>
                            <WhatsAppShareButton
                                url='https://650a8bce34ff5b0af18cbd0e--prismatic-elf-09f091.netlify.app/kitchen'
                                text='virtual 3d bathroom'
                            />
                        </MenuItem> */}


                        <MenuItem>
                            <p onClick={() => { Shere_on_fb() }} className='text-xs tex text-secondary px-1 flex gap-1 items-center cursor-pointer'>
                            <BsFacebook size={17} className=' text-primary-color' />Facebook
                            </p>
                        </MenuItem>
                        <MenuItem>
                            <p onClick={() => { Shere_on_whatsapp() }} className='text-xs tex text-secondary px-1 flex gap-1 items-center cursor-pointer'>
                                <BsWhatsapp size={17} className=' text-green-500' />WhatsApp</p>
                        </MenuItem>
                    </ul>
                )
                }
            </div >
        </>
    )
}

export default ShareDemo