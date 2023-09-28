import React from 'react'
import Header from './Header'
// import SidebarConfig from '../configuration/SidebarConfig'
import SidebarConfig from '@/components/configuration/SidebarConfig'
import UndoRedoRestart from './UndoRedoRestart'
// @/components/DemoComponents/Demolayout

const Demolayout = ({ children }) => {
    return (<>
        <Header />
        <section className="mx-auto">
            {/* <section className=" max-w-[1400px] mx-auto"> */}
            <div className=" flex relative flex-wrap md:flex-nowrap">
                <div className="flex-1 aspect-square md:aspect-auto relative bg-slate-50">
                    {children}
                    <UndoRedoRestart />
                </div>
                <SidebarConfig />
            </div>
        </section>
    </>
    )
}

export default Demolayout