import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import { TemplateIcon } from '@heroicons/react/solid'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'
export default function Home({exploreData,cardsData}) {
  return (
    <div className="">
      <Head>
        <title>Viv Hotel Booking</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner/>   
      <main className='max-w-7xl mx-auto px-8 sm:px-16'>

        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explorer à Proximité!</h2>
          {/* Pull some data from server data endpoints*/}
          <div className='grid grid-cols-1 sm:grid-col-2 lg:grid-cols-3 xl:grid-cols-4'>
          {exploreData?.map((item)=>{
           return <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location}/>
          })}
          </div>
        </section>

        <section>
          <h2 className='text-4xl font-semibold py-8'>Vivez n'importe où</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 ml-3'>
          {cardsData?.map((item)=>(
            <MediumCard key={item.img} img={item.img} title={item.title}/>
          ))}
          </div>
        </section>  
         <LargeCard img="https://a0.muscache.com/im/pictures/2da67c1c-0c61-4629-8798-1d4de1ac9291.jpg?im_w=1440" 
         title='En plein air' description="Wishlists" buttonText="Être Inspiré"/>
      </main>  
      <Footer/>
    </div>
  )
}
export async function getStaticProps(){
  const exploreData = await fetch('https://jsonkeeper.com/b/4G1G').then(res=>res.json());
  
  const cardsData =await fetch('https://jsonkeeper.com/b/VHHT').then(res=>res.json())
  return{
    props:{
      exploreData,
      cardsData
    }
  }
}