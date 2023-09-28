import SearchableDropdown from './SearchableDropdown'
import SelectMaterial from './SelectMaterial'
import SidebarTop from './SidebarTop'

const SidebarConfig = () => {
    return (
        <div className=' border flex-1 md:max-w-[300px] h-[calc(100vh-67px)]'>
            <SidebarTop />
            <div className="px-3">
                <SearchableDropdown options={[{ label: 'Option 1', value: 'option1' }, { label: 'Option 2', value: 'option2' }, { label: 'Option 3', value: 'option3' },]} />
                <SelectMaterial />
            </div>
        </div>
    )
}

export default SidebarConfig