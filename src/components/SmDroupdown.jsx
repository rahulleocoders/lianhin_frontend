'use client'
import  { useState } from 'react';

const SmDropdown = ({ label, options, onChange }) => {
    // const [selectedValue, setSelectedValue] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (value) => {
        // setSelectedValue(value);
        setIsOpen(false);
        if (onChange) { onChange(value); }
    };

    return (
        <div className="relative">
            <div onClick={() => setIsOpen(!isOpen)}>{label}</div>
            {isOpen && (
                <ul className="absolute py-3 shadow-md transform translate-y-6 bg-white border border-primary-color rounded">
                    {options.map((option, index) => (
                        <li key={index} className="px-3 hover:bg-gray-300 cursor-pointer"
                            onClick={() => handleOptionClick(option.value)}
                        >{option.label}</li>
                    ))}
                </ul>
            )}
            {/* {selectedValue && <div>Selected Value: {selectedValue}</div>} */}
        </div>
    );
};

export default SmDropdown;
