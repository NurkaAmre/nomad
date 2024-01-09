import React from 'react';
import { client } from '@/sanity/lib/client';
import PageNotFound from '@/components/UI/PageNotFound';
import Image from 'next/image';

type PropTypes = {
  params: { id: string };
};

type PopularType = {
  id: string;
  title: string;
  description: string;
  image:  string;
  };
 

const PlacesDetail = async ({ params }: PropTypes) => {
  const placeId = params.id;
  if (!placeId) return <PageNotFound />;

  let placeDetails: PopularType | undefined;

  try {
    placeDetails = await client.fetch(
      `*[_type == "popular" && _id =="${placeId}"][0]{"id": _id, title, description, "image": image.asset->url}`
    );
  } catch (error) {
    console.log('Error fetching todo details:', error);
    return <PageNotFound />;
  }

  if (!placeDetails) return <PageNotFound />;

  const { id, title, description, image } = placeDetails;

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
        </div> 
      </div>
    </article>
  );
};

export default PlacesDetail;
