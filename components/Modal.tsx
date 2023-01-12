import React, { ReactElement, useEffect, useState } from 'react'

export enum ModalSize {
    "half" = "md:w-1/2",
    "full" = "w-full"
}
interface ModalProps {
    setIsHidden: (value: boolean) => void;
    children: ReactElement
    size?: ModalSize
    isCenteredVertically?: boolean
}

export default function Modal({
    setIsHidden, 
    children, 
    size=ModalSize.full, 
    isCenteredVertically=false
}: ModalProps) {
    const [opacity, setOpacity] = useState("opacity-0")

    useEffect(() => {setOpacity("opacity-100")}, [])
    return (
        <div 
            id="defaultModal" 
            tabIndex={-1} 
            className={`transition ease-in-out duration-300 ${opacity} fixed top-0 left-0 right-0 w-full p-1 sm:p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full bg-gray-500 bg-opacity-50`}
            onClick={() => {setIsHidden(true)}}
        >
        <div className={`transition ease-in-out duration-300 relative ${size} h-full md:h-auto sm:p-5 pt-1 mx-auto ${isCenteredVertically ? "md:translate-y-2/4 translate-y-1/4" : ""}`}>
            <div className="relative bg-white rounded-lg shadow">
                <div className="p-2 space-y-2">
                    {children}
                </div>                
            </div>
        </div>
    </div>
    )
}

