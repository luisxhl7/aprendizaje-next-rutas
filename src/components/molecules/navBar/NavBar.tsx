import { ActiveLink } from '@/components/atoms/active-link'
import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'

const navItems = [
    {path: '/about', text: 'About'}, 
    {path: '/pricing', text: 'Pricing'},
    {path: '/contact', text: 'Contact'},
]

export const NavBar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        <Link href='/' className='flex items-center'>
            <HomeIcon size={16} className='mr-2'/>
            <span>Home</span>
        </Link>

        <div className='flex flex-1'></div>

        {
            navItems.map( item => (
                <ActiveLink 
                    key={item.path}
                    path={item.path} 
                    text={item.text} 
                />
            ))
        }

    </nav>
  )
}
