import Link from 'next/link'
import React from 'react'
import { Section } from '../pages/_app'

interface NavigationBarProps {
 section1: Section[];
 section2: Section[];
}

export default function NavigationBar({section1, section2}: NavigationBarProps) {
  return (
    <div className='md:container m-auto py-16 flex justify-between relative w-5/6'>
      <div className='items-center space-x-6 text-gray-500 hidden sm:flex'>
        {
          section1.map(
            section => 
            <Link href={section.url} key={section.url}><span className="hover:text-gray-700 hover:cursor-pointer">{section.title}</span></Link>
          )
        }
      </div>     
      <h1 className='text-4xl font-semibold absolute left-2/4 -translate-x-2/4 -translate-y-1/4'>KIM</h1>  
      <div className='items-center space-x-6 text-gray-500 hidden sm:flex'>
        {
          section2.map(
            section => 
            <Link href={section.url} key={section.url}><span className="hover:text-gray-700 hover:cursor-pointer">{section.title}</span></Link>
          )
        }
      </div>   
    </div>
  )
}