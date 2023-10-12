'use client'
const HoverBtn = ({ children }) => {
    return (<button type='button' className=' bg-white flex items-center justify-center p-2 rounded-full h-full hover:bg-primary-color hover:bg-opacity-20'>{children}</button>)
}
export default HoverBtn