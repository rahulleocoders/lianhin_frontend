
import SearchableDropdown from './SearchableDropdown'
import SelectFilter from './SelectFilter'
import SelectMaterial from './SelectMaterial'

const SidebarConfig = () => {

    return (
        <div className=' border flex-1 md:max-w-[350px] h-[calc(100vh-67px)]'>
            {/* <SidebarTop /> */}
            <div className="px-3">
                <SearchableDropdown options={[{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }, { label: 'Option 3', value: 'option3' },{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }, { label: 'Option 3', value: 'option3' },]} />
                <SelectFilter />
                <SelectMaterial />
            </div>
        </div>
    )
}

export default SidebarConfig