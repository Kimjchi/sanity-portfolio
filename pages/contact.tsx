import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function contact() {
  return (
    <div className='flex justify-center w-full flex-col'>
        <h1 className='text-6xl font-semibold text-center px-16 my-16 md:my-28'>Reach out, if you wanna talk or whatever.</h1>
        <div className='flex mx-auto flex-col md:flex-row space-y-5 space-x-10 items-center px-5'>
            <Link href={"https://www.instagram.com/kimjchi/"}>
                <a target="_blank" rel="noopener noreferrer" className="opacity-30 hover:opacity-100">
                    <Image src="/instagram.png" alt="instagram" width="261" height="261" loader={(loaderProps) => loaderProps.src}/>
                </a>
            </Link>
            <Link href={"https://twitter.com/kim_jerere"}>
                <a target="_blank" rel="noopener noreferrer" className="opacity-30 hover:opacity-100">
                    <Image src="/twitter.png" alt="instagram" width="261" height="261" loader={(loaderProps) => loaderProps.src}/>
                </a>
            </Link>
            <Link href={"https://www.facebook.com/jeremy.kim.503645"}>
                <a target="_blank" rel="noopener noreferrer" className="opacity-30 hover:opacity-100">
                    <Image src="/facebook.png" alt="instagram" width="261" height="261" loader={(loaderProps) => loaderProps.src}/>
                </a>
            </Link>
            <Link href={"https://www.linkedin.com/in/j%C3%A9r%C3%A9my-v-kim/"}>
                <a target="_blank" rel="noopener noreferrer" className="opacity-30 hover:opacity-100">
                    <Image src="/linkedin.png" alt="instagram" width="261" height="261" loader={(loaderProps) => loaderProps.src}/>
                </a>
            </Link>
            <Link href={"https://github.com/Kimjchi"}>
                <a target="_blank" rel="noopener noreferrer" className="opacity-30 hover:opacity-100">
                    <Image src="/github.png" alt="instagram" width="261" height="261" loader={(loaderProps) => loaderProps.src}/>
                </a>
            </Link>                    
        </div>
        <div className='mt-5 w-full text-center text-sm'>
            Icons made by <a className='underline text-blue-500' href="https://www.flaticon.com/authors/pixel-perfect" target="_blank" rel="noopener noreferrer">Pixel perfect </a> 
            from <a className='underline text-blue-500' href="https://www.flaticon.com/" target="_blank" rel="noopener noreferrer">www.flaticon.com</a>
        </div>
    </div>
  )
}
