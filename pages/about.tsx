import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function about() {
  return (
    <div className='justify-center w-full container mx-auto'>
        <h1 className='text-6xl font-semibold text-center px-16 my-16 md:my-28'>I like trains and smile a lot.</h1>
        <div className='justify-center px-2'>
            <Image src="/queen.jpeg" alt="instagram" width="1600" height="1063" loader={(loaderProps) => loaderProps.src}/>
            <span className='text-xs text-gray-400'>How I think I look</span>
        </div>
        <h3 className='text-xl font-semibold text-center my-8'>Jérémy Kim</h3>
        <p className='my-8 px-16'>
        I'm a French Full Stack Developer graduated from an engineering school and back in Paris. After interning 6 months at Smartly.io, I decided to continue my job there as this place is full of extraordinary people. I don't know if this is the right way for me but I want to keep going and give it a shot.<br/>
        <br/>
        In between work, I like to balance between watching movies, reading books and trying creative projects. I also try to add some sport here and there. I would like to be a more creative person but I'm lazy as hell (which makes me a good programmer).<br/>
        <br/>
        I coded this website in one day to motivate me and (kinda) learn vue js. Now, there is a place where I can dump my drawings, writings and future comics. Knowing that people can see this stuff is a good motivation to move my lazy bum. Be it bad or very bad, I will put (most of) all my work here.<br/>
        <br/>
        Thanks for reading this. Please reach out if you wanna talk.
        </p>
        <Link href={'/contact'}>
            <div className='border rounded-lg mt-10 mb-28 text-center w-32 px-5 py-2 hover:bg-gray-100 cursor-pointer mx-auto'>LET'S TALK</div>
        </Link>
        
    </div>
  )
}