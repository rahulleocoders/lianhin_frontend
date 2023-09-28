'use client'
import CommonBtn from "../CommonBtn"
import HoverBtn from "../HoverBtn"
import { BiRedo, BiUndo } from 'react-icons/bi'
import Tooltip from "../Tooltip"

const UndoRedoRestart = () => {
    return (
        <div className=" absolute bottom-7 left-8 flex gap-3">
            <Tooltip title='Undo' >
                <HoverBtn><BiUndo size={27} className="text-primary-color" /></HoverBtn>
            </Tooltip>
            <Tooltip title='Redo' >
                <HoverBtn><BiRedo size={27} className="text-primary-color" /></HoverBtn>
            </Tooltip>

            <CommonBtn label='reset' onClick={() => console.log('object')}></CommonBtn>
        </div>
    )
}

export default UndoRedoRestart