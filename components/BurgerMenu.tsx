import Link from 'next/link'
import React from 'react'

import { slide as Menu } from 'react-burger-menu'
import { Section } from '../pages/_app';

interface BurgerMenuProps {
    sections: Section[]
}

export default function BurgerMenu({sections}: BurgerMenuProps) {
  return (
    <Menu right>
        {sections.map(section => (
            <Link href={section.url} key={section.url}><span className="hover:text-gray-700 hover:cursor-pointer">{section.title}</span></Link>
        ))}
    </Menu>
  );
}

