'use client'
import { useEffect, useMemo, useRef, useState } from "react";
import { FiSearch } from 'react-icons/fi'

const SearchableDropdown = ({ options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('')
    const [selectedOption, setSelectedOption] = useState(null);
    const dropdownRef = useRef(null);

    //  global click event listener to close the dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) { setIsOpen(false); }
        };
        if (isOpen) { document.addEventListener('click', handleClickOutside); }
        else { document.removeEventListener('click', handleClickOutside); }
        return () => { document.removeEventListener('click', handleClickOutside); };
    }, [isOpen]);

    // Filter the options based on the search term
    let filteredOptions = useMemo(() =>
        options.filter((option) => option.label.toLowerCase().includes(query.toLowerCase()))
        , [query]
    )

    // Handle option selection
    const handleOptionClick = (option) => { setSelectedOption(option); setIsOpen(false); setQuery(option.label) };

    return (
        <div className="pt-5 pb-3 relative " ref={dropdownRef}>
            <div className=" border  border-secondary w-full relative">
                {/* Search input */}
                <div className="flex items-center ">
                    <input type="text" placeholder="Search..."
                        className=" flex-1 text-secondary border-none active:ring-transparent focus:ring-transparent active:border-secondary focus:border-secondary"
                        value={query} onChange={(e) => setQuery(e.target.value)}
                        onClick={() => setIsOpen(pre => !pre)}
                    /><FiSearch size={20} className="text-secondary mr-1 cursor-pointer" />
                </div>

                {/* Options list */}
                {isOpen && <ul className=" absolute border drop-shadow-lg  border-t-0 w-full bg-white z-10">
                    {filteredOptions?.map((option) => (
                        <li key={option.label} className="cursor-pointer text-secondary hover:bg-gray-200 p-2"
                            onClick={() => handleOptionClick(option)}
                        > {option.label} </li>
                    ))}
                </ul>}
            </div>
        </div>
    )
}

export default SearchableDropdown