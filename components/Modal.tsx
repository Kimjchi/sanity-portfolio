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
            className="fixed top-0 left-0 right-0 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full bg-gray-500 bg-opacity-50"
            onClick={() => {setIsHidden(true)}}
        >
        <div className="relative w-full h-full md:h-auto p-5 pt-1">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="flex items-start justify-between p-1 border-b rounded-t dark:border-gray-600">
                    <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        <span className="sr-only">Close modal</span>
                    </button>
                </div>
                <div className="p-2 space-y-2">
                    {children}
                </div>                
            </div>
        </div>
    </div>
    )
}

