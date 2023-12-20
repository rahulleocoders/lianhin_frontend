'use client'
import CommonBtn from "../CommonBtn"
import HoverBtn from "../HoverBtn"
import { BiRedo, BiUndo } from 'react-icons/bi'
import Tooltip from "../Tooltip"
import { useDispatch } from "react-redux"
import { ActionCreators } from "redux-undo"
import { usePathname } from "next/navigation"
import { resetbathroomSlice } from "@/redux/slices/BathroomSlice"
import { resetlivingroomSlice } from "@/redux/slices/LivingroomSlice"

const UndoRedoRestart = () => {
    const dispatch = useDispatch();
    const pathname = usePathname()
    let currentPage = pathname.split("/")[1]
    const handleUndo = () => { dispatch(ActionCreators.undo()); }
    const handleRedo = () => { dispatch(ActionCreators.redo()); };
    let ResetModel = () => {
        if (currentPage == "bathroom") { dispatch(resetbathroomSlice()); }
        if (currentPage == "living") { dispatch(resetlivingroomSlice()); }
    }

    return (
        <div className=" absolute bottom-7 right-8 flex gap-3">
            <Tooltip title='Undo' >
                <HoverBtn><BiUndo size={27} className="text-primary-color" onClick={handleUndo} /></HoverBtn>
            </Tooltip>
            <Tooltip title='Redo' >
                <HoverBtn><BiRedo size={27} className="text-primary-color" onClick={handleRedo} /></HoverBtn>
            </Tooltip>

            <CommonBtn label='reset' onClick={() => ResetModel()}></CommonBtn>
        </div>
    )
}

export default UndoRedoRestart