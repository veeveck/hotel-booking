import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import{format} from 'date-fns'
import {useRouter} from 'next/dist/client/router'; 
import InfoCard from '../components/InfoCard';
import Map from '../components/Map'
function Search({searchResults}) {
    const router=useRouter();
    const {location,startDate,endDate,noOfGuests}=router.query;
    const formattedStartDate=format(new Date(startDate),"dd MMMM yy");
    const formattedEndDate=format(new Date(endDate),"dd MMMM yy");
    const range=`${formattedStartDate} to ${formattedEndDate}`;
    return (
        <div className="h-screen">
            <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`}/>
            <main className='flex'>
                <section className='flex-grow pt-14 px-6'>
                 <p className='text-m'>100 + stays from  {range} for {noOfGuests} guests</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Séjour à {location}</h1>
                   
                   <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
                       <p className='button'>Cancellation Flexibility</p>
                       <p className='button'>Type of Place</p>
                       <p className='button'>Price</p>
                       <p className='button'>Rooms and Beds</p>
                       <p className='button'>More filters</p>
                    </div>   
                    <div className='flex flex-col'>
                    {searchResults.map(item=>{
                       return <InfoCard key={item.img}
                        img={item.img} location={item.location}
                        title={item.title} description ={item.description}
                        price={item.price} total={item.total}/>
                    })}
                    </div>
                </section>  
                <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                    <Map searchResults={searchResults}/>
                </section>    
            </main>    
            <Footer/>
        </div>
    )
}

export default Search;

export async function getServerSideProps(){
      const searchResults= await fetch('https://jsonkeeper.com/b/5NPS').then(res=>res.json());

      return {
          props:{
              searchResults,
          }
      }
}