import React from 'react'
import Image from 'next/image'
import {SearchIcon,UsersIcon, GlobeAltIcon, MenuIcon} from '@heroicons/react/solid'
const Header = () => {
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 '>
            <div className='relative flex items-center h-12 cursor-pointer my-auto'>
                <Image layout='fill'
                 src='https://1000logos.net/wp-content/uploads/2018/04/symbol-Vlone.jpg' 
                 objectFit="contain" objectPosition="left"  className='rounded'/>
            </div>
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input type='text' placeholder='Commencer votre recherche' className='text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent w-80 outline-none'/>
                <SearchIcon className ='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
            </div>
            <div className='flex items-center justify-end space-x-4 text-gray-500'> 
                <p className='hidden md:inline cursor-pointer' >Devenir hôte!</p>
                <GlobeAltIcon className='h-6'/>
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                  <MenuIcon className='h-6'/>
                  <UsersIcon className='h-6'/>
                </div>
            </div>
        </header>
    )
}


export default Header
