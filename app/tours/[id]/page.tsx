import React from 'react'
import { client } from '@/sanity/lib/client'
import PageNotFound from '@/components/UI/PageNotFound'
import Image from 'next/image'
import Link from 'next/link'


type PropTypes =  {
  params: { id: string }
}

const TourDetail = async({params}: PropTypes) => {
  const tourId = params.id;
  if (!tourId)  return <PageNotFound />

  let tourDetails: TourItemType | undefined; // to see the type go to project_root~/types/types.d.ts

  try {
    tourDetails = await client.fetch(`*[_type == "tour" && _id =="${tourId}"][0]{"id": _id, title, longDescription, "image": image.asset->url, duration, location, price }`);

  } catch (error) {
    console.log('Error fetching tours:', error);
    return <PageNotFound />
  }

  if (!tourDetails) return <PageNotFound />;

  const { id, title, description, image, duration, longDescription, location, price } = tourDetails;

  return (
    <article id={id} className="flex">
      <div className='md:flex-1'>
      <div className='relative h-full'>
        <Image src={image} layout="fill" objectFit="cover" alt={title} />
      </div>
    </div>
      <div className='md:flex-1 md:my-10 mt-20 mb-10 flex flex-col items-center justify-center' >
        <div className="flex flex-col px-10 justify-center ">
          <h1 className="text-center text-3xl pt-10">{title}</h1>
          <h4 className="text-center p-4 font-abhaya">{description}</h4>
          <p>{longDescription}</p>
          <div className='border border-gray-300 mt-6'>
            <div className='border-b border-gray-300 flex'>
              <p className='w-1/3 border-r border-gray-300 p-2'>Location</p>
              <p className='w-2/3 p-2'>{location}</p>
            </div>
            <div className='border-b border-gray-300 flex'>
              <p className='w-1/3 border-r border-gray-300 p-2'>Duration</p>
              <p className='w-2/3 p-2'>{duration}</p>
            </div>
            <div className='border-b border-gray-300 flex'>
              <p className='w-1/3 border-r border-gray-300 p-2'>Price</p>
              <p className='w-2/3 p-2'>{price}</p>
            </div>
          </div>
        </div> 
          <Link className='bg-[#7797de] md:text-lg font-bold py-2 px-4 mt-8 items-center hover:bg-[#61779ad] ' href='/booking'>Book Now</Link>
      </div>
    </article>
  )
}

export default TourDetail