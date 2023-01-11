import React, { ReactElement, useState } from 'react'

interface ModalProps {
    setIsHidden: (value: boolean) => void;
    children: ReactElement
}

export default function Modal({setIsHidden, children}: ModalProps) {
    return (
        <div 
            id="defaultModal" 
            tabIndex={-1} 
            className="fixed top-0 left-0 right-0 w-full p-1 sm:p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full bg-gray-500 bg-opacity-50"
            onClick={() => {setIsHidden(true)}}
        >
        <div className="relative w-full h-full md:h-auto sm:p-5 pt-1">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="p-2 space-y-2">
                    {children}
                </div>                
            </div>
        </div>
    </div>
    )
}

