import Header from './Header'
import SidebarConfig from '@/components/configuration/SidebarConfig'
import UndoRedoRestart from './UndoRedoRestart'

const Demolayout = ({ children }) => {
    return (
        <div className='md:max-h-[100vh] md:overflow-hidden'>
            <Header />
            <section className="mx-auto">
                {/* <section className=" max-w-[1400px] mx-auto"> */}
                <div className=" flex relative flex-wrap-reverse md:flex-nowrap">
                    <SidebarConfig />
                    <div className="flex-1 aspect-square md:aspect-auto relative bg-slate-50">
                        {children}
                        <UndoRedoRestart />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Demolayout