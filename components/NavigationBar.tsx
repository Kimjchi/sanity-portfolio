import Link from 'next/link'
import React from 'react'

export default function NavigationBar() {
  const section1 = [
    { title: "Gallery", url: "/" },
    { title: "Drawings", url: "/drawings" },
    { title: "Writings", url: "/writings" },
  ]
  const section2 = [
    { title: "Projects", url: "/projects" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "contact" },
  ]
  return (
    <div className='container m-auto py-10 flex justify-between relative'>
      <div className='flex items-center space-x-6 text-gray-500'>
        {
          section1.map(
            section => 
            <Link href={section.url} key={section.url}><span className="hover:text-gray-700 hover:cursor-pointer">{section.title}</span></Link>
          )
        }
      </div>     
      <h1 className='text-4xl font-semibold absolute left-2/4 -translate-x-2/4 -translate-y-1/4'>KIM</h1>  
      <div className='flex items-center space-x-6 text-gray-500'>
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