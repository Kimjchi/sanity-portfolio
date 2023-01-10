import Link from 'next/link'
import React, { useState } from 'react'

import { slide as Menu } from 'react-burger-menu'
import { Section } from '../pages/_app';

interface BurgerMenuProps {
    sections: Section[]
}

export default function BurgerMenu({sections}: BurgerMenuProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <Menu right width={ 250 } isOpen={isOpen} onStateChange={(state) => setIsOpen(state.isOpen)}>
        {sections.map(section => (
            <Link href={section.url} key={section.url}><span className="hover:text-gray-700 hover:cursor-pointer" onClick={() => setIsOpen(false)}>{section.title}</span></Link>
        ))}
    </Menu>
  );
}

