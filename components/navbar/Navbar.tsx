import { HomeIcon } from '@primer/octicons-react'
import Link from 'next/link'
import React from 'react'
import ActiveLink from '../active-link/ActiveLink'

const navItems = [
    { path: '/about', text: 'About' },
    { path: '/pricing', text: 'Pricing' },
    { path: '/contact', text: 'Contact' },
]

const Navbar = () => {
  return (
    <nav className='flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded'>
        
        <Link href={'/'} className='flex items-center'>
            <HomeIcon className='mr-2'/>
            <span>Home</span>
        </Link>
        

        <div className='flex flex-1'></div>
        
        {
            navItems.map( navItem => (
                <ActiveLink key={ navItem.text } { ...navItem }/>
                // <Link key={navItem.text} className='mr-2' href={ navItem.path }>{ navItem.text }</Link>
            ))
        }
        {/* <Link className='mr-2' href='/about'>About</Link>
        <Link className='mr-2' href='/pricing'>Pricing</Link>
        <Link className='mr-2' href='/contact'>Contact</Link> */}
    </nav>
  )
}

export default Navbar
