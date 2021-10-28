import React from 'react'
import Image from 'next/image'
import {SearchIcon,UsersIcon,UserCircleIcon, GlobeAltIcon, MenuIcon} from '@heroicons/react/solid';
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {useRouter} from 'next/dist/client/router'; 
const Header = ({placeholder}) => {
    const [searchInput,setSearchInput]=useState("");
    const [startDate,setStartDate]=useState(new Date());
    const [endDate,setEndDate]=useState(new Date());

    const handleSelect=(ranges)=>{setStartDate(ranges.selection.startDate);setEndDate(ranges.selection.endDate);}
    const selectionRange={
        startDate:startDate,
        endDate:endDate,
        key:'selection'
    }
    const resetInput=()=>{
        setSearchInput("");
    }
    const[noOfGuests, setNoOfGuests]=useState(1);
    const router=useRouter();
    const search=()=>{
         router.push({
             pathname:"/search",
             query:{
                 location:searchInput,
                 startDate:startDate.toISOString(),
                 endDate:endDate.toISOString(),
                 noOfGuests,
             }
         });
    }
    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 '>
            <div onClick={()=> router.push("/")}className='relative flex items-center h-12 cursor-pointer my-auto'>
                <Image layout='fill'
                 src='https://1000logos.net/wp-content/uploads/2018/04/symbol-Vlone.jpg' 
                 objectFit="contain" objectPosition="left"  className='rounded'/>
            </div>
            <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
                <input type='text' placeholder={placeholder || 'Commencer votre recherche'} 
                value={searchInput} onChange={(e)=>setSearchInput(e.target.value)}className='text-sm text-gray-600 placeholder-gray-400 flex-grow pl-5 bg-transparent w-80 outline-none'/>
                <SearchIcon className ='hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2'/>
            </div>
            <div className='flex items-center justify-end space-x-4 text-gray-500'> 
                <p className='hidden md:inline cursor-pointer' >Devenir hôte!</p>
                <GlobeAltIcon className='h-6'/>
                <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
                  <MenuIcon className='h-6'/>
                  <UserCircleIcon className='h-6'/>
                </div>
            </div>
            {searchInput && (<div className="flex flex-col col-span-3 mx-auto">
            <DateRangePicker 
            ranges={[selectionRange]} 
            minDate={new Date()} 
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}/>
            <div className="flex items-center border-b mb-4">
                <h2 className="text-2xl flex-grow font-semibold">Nombre d'invités</h2>
                <UsersIcon className="h-5"/>
                <input value={noOfGuests} type="number" className="w-12 pl-2 text-lg outline-none text-red-400"
                onChange={e=>setNoOfGuests(e.target.value)} min={1}/>
            </div>
         
            <div className="flex">
                <button onClick={resetInput} className="flex-grow text-gray-500">Cancel</button>
                <button onClick={search} className="flex-grow text-red-400">Search</button>
            </div>   
          </div>
            )}
        </header>
    )
}


export default Header
