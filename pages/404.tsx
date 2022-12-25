import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function Custom404() {
    const router = useRouter()
    const [page, setPage] = useState('/')
    useEffect(() => setPage(router.asPath), [])

    return <div className="flex flex-col items-center justify-start">
                <Image src="/construction.svg" alt="me" width="576" height="480" loader={(loaderProps) => loaderProps.src}/>
                <h2 className='text-2xl font-semibold'>The page {page} is still under construction. Check it out later :D</h2>
            </div>
}