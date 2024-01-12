'use client'
import { useEffect, useRef, useState } from 'react';
import { BsFillShareFill, BsFacebook, BsWhatsapp } from 'react-icons/bs'
import HoverBtn from '../HoverBtn'

const WhatsAppShareButton = ({ text, url }) => {
    const encodedUrl = encodeURIComponent(text);
    const encodedText = encodeURIComponent(`\n${url}`);
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodedUrl}${encodedText}`;
    return (<a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className='text-xs tex text-secondary px-1 flex gap-1 items-center'><BsWhatsapp size={17} className=' text-green-500' />WhatsApp</a>);
};

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
    const dropdownRef = useRef(null);
    let Imageshare = () => {
        alert("xjnsxn")
    }
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
            <div onClick={() => setIsOpen(!isOpen)}><HoverBtn><BsFillShareFill size={18} className=' text-primary-color' /></HoverBtn></div>
            {isOpen && (
                <ul className="absolute z-50 py-[6px] shadow-md transform translate-y-7 -translate-x-2/3 bg-white border border-primary-color rounded flex gap-1 flex-col">
                    <MenuItem><FacebookShareButton url='https://650a8bce34ff5b0af18cbd0e--prismatic-elf-09f091.netlify.app/kitchen' /></MenuItem>
                    <MenuItem>
                        <WhatsAppShareButton
                            url='https://650a8bce34ff5b0af18cbd0e--prismatic-elf-09f091.netlify.app/kitchen'
                            text='virtual 3d bathroom'
                        />
                    </MenuItem>
                    <p className='cursor-pointer ' onClick={() => Imageshare()}>upload image</p>
                </ul>
            )}
        </div>
    )
}

export default ShareDemo