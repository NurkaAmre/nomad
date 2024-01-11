import React from 'react';
import { client } from '@/sanity/lib/client';
import PageNotFound from '@/components/UI/PageNotFound';
import Image from 'next/image';
import Link from 'next/link';

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
    <article id={id} className="flex flex-wrap justify-center min-h-screen">
      <div className="flex-1 w-full max-w-full relative">
        <div
          className="w-full h-full bg-cover bg-center relative filter shadow-xl"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="absolute inset-0 backdrop-blur-md opacity-80 md:w-1/2 rounded-l-2xl" />
          <div className="absolute top-0 left-0 md:w-1/2 h-full flex items-center justify-center text-white text-center">
            <div className="md:mx-20">
              <h1 className="md:text-5xl text-3xl md:mb-10 mt-20 font-poller font-semibold leading-9 md:mt-0 mx-4 text-shadow-lg">{title}</h1>
              <p className="text-sm md:text-lg px-4 mt-6 pb-12 text-shadow-sm">{description}</p>
               <Link className='bg-[#7097ea9b] md:text-lg font-bold py-2 px-4 md:px-6 md:py-4 uppercase mt-8 items-center hover:bg-[#61779ad]' href='/booking'>Book Now</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PlacesDetail;
