import React from 'react';
import { client } from '@/sanity/lib/client';
import PageNotFound from '@/components/UI/PageNotFound';
import Link from 'next/link';

type PropTypes = {
  params: { id: string };
};

type TodoItemType = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const TodoDetail = async ({ params }: PropTypes) => {
  const todoId = params.id;
  if (!todoId) return <PageNotFound />;

  let todoDetails: TodoItemType | undefined;

  try {
    todoDetails = await client.fetch(
      `*[_type == "places" && _id =="${todoId}"][0]{"id": _id, title, description, "image": image.asset->url}`
    );
  } catch (error) {
    console.log('Error fetching todo details:', error);
    return <PageNotFound />;
  }

  if (!todoDetails) return <PageNotFound />;

  const { id, title, description, image } = todoDetails;

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
              <h1 className="md:text-5xl text-3xl md:mb-10 font-poller font-semibold leading-9 text-shadow-lg">{title}</h1>
              <p className="text-sm md:text-lg px-4 mt-6 pb-12 text-shadow-sm">{description}</p>
               <Link className='bg-[#7797de] md:text-lg font-bold py-2 px-4 md:px-6 md:py-4 uppercase mt-8 items-center hover:bg-[#61779ad] ' href='/booking'>Book Now</Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TodoDetail;
