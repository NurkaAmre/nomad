import React from 'react'
import { client } from '@/sanity/lib/client'
import PageNotFound from '@/components/UI/PageNotFound'
import Image from 'next/image'


type PropTypes =  {
  params: { id: string }
}

const TourDetail = async({params}: PropTypes) => {
  const tourId = params.id;
  if (!tourId)  return <PageNotFound />

  let tourDetails: TourItemType | undefined; // to see the type go to project_root~/types/types.d.ts

  try {
    tourDetails = await client.fetch(`*[_type == "tour" && _id =="${tourId}"][0]{"id": _id, title, description, longDescription, "image": image.asset->url, duration, location, price }`);

  } catch (error) {
    console.log('Error fetching tours:', error);
    return <PageNotFound />
  }

  if (!tourDetails) return <PageNotFound />;

  const { id, title, description, image, duration, longDescription, location, price } = tourDetails;

  return (
    <article id={id} className="pt-20 flex flex-col gap-4">
      <h1 className="text-center text-3xl p-4">{title}</h1>
      <h4 className="text-center p-4 font-abhaya">{description}</h4>
      <div className="relative w-full h-[300px] md:h-[800px]">
        <Image src={image} alt={title} fill={true} sizes={'1280px'} priority={true} />
      </div>
      <div className="p-4 md:p-6">
      <p className="">{longDescription}</p>
      <p>{duration}</p>
      <p>{location}</p>
      <p>{price}</p>
      </div>
    </article>
  )
}

export default TourDetail