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
    <article
      id={id}
      className="min-h-screen pt-[4.5rem] overflow-hidden bg-cover bg-center grid grid-cols-2 px-4 md:px-0"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="flex-1 w-full max-w-full relative col-span-full md:col-span-1 md:col-start-2 md:col-end-auto py-6 backdrop-blur-md">
        <div className="md:mx-20">
          <h1 className="md:text-5xl text-3xl md:mb-10 mt-20 font-poller font-semibold leading-9 md:mt-0 mx-4 text-shadow-lg pt-4">
            {title}
          </h1>
          <p className="text-sm md:text-lg px-4 mt-6 pb-12 text-shadow-sm">
            {description}
          </p>
          <Link
            className="bg-[#7097ea9b] md:text-lg font-bold py-2 px-4 md:px-6 md:py-4 uppercase my-8 items-center hover:bg-[#61779ad] block w-fit mx-auto"
            href="/booking"
          >
            Book Now
          </Link>
        </div>
      </div>
    </article>
  );
};

export default TodoDetail;
