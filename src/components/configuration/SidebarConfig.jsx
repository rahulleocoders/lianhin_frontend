// 'use client'
import { useSelector } from 'react-redux';
import SearchableDropdown from './SearchableDropdown'
import SelectFilter from './SelectFilter'
import SelectMaterial from './SelectMaterial'
import SelectColor from './SelectColor';

const SidebarConfig = () => {
    // const SelectFilterRef = useRef()
    const CommonState = useSelector(state => state.CommonState);
    let Is_wall_selected = CommonState?.Is_wall_selected

    return (
        <div className=' border flex-1 md:max-w-[350px] h-[calc(100vh-67px)]'>
            {/* <SidebarTop /> */}
            <div className="px-3">
                <div className={`${Is_wall_selected ? "pointer-events-none opacity-50" : ""}`}>
                    <SearchableDropdown
                        // options={[]}
                        options={[{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }, { label: 'Option 3', value: 'option3' }, { label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }, { label: 'Option 3', value: 'option3' },]}
                    />
                    <SelectFilter
                    // ref={SelectFilterRef}
                    />
                </div>
                {/* <SelectMaterial // SelectFilterRef={SelectFilterRef} 
                /> */}
                {Is_wall_selected ?
                    <SelectColor />
                    :
                    <SelectMaterial />
                }
            </div>




            {/* {Is_wall_selected ?
                <SelectMaterial />
                :
                <div className="px-3">
                    <SearchableDropdown
                        options={[{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }, { label: 'Option 3', value: 'option3' }, { label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }, { label: 'Option 3', value: 'option3' },]}
                    />
                    <SelectFilter
                    // ref={SelectFilterRef}
                    />
                    <SelectMaterial
                    // SelectFilterRef={SelectFilterRef} 
                    />
                </div>
            } */}
        </div>
    )
}

export default SidebarConfig