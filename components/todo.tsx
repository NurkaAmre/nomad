import React from 'react'
import Image from 'next/image'
import art from '@/public/images/art.jpg'
import food from '@/public/images/food.jpg'
import festival from '@/public/images/festival.jpg'

const Todo = () => {
  return (
    <div className='pt-10'>
      <div className='flex flex-col text-white justify-center items-center'>
        <h2 className='text-center mb-3 text-4xl md:text-5xl font-abhaya'>To Do Things</h2>
        <ul className='grid grid-cols-2 gap-4 mx-4 md:gap-[5rem] md:py-[3rem]'>
          <li>
            <button className='rounded-full border-2 bg-[#6491C9] text-xl font-abhaya font-light px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Culture</button>
          </li>
          <li>
            <button className='rounded-full border-2 bg-[#6491C9] text-xl font-abhaya font-light px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Adventure</button>
          </li>
          <li>
            <button className='rounded-full border-2 bg-[#6491C9] text-xl font-abhaya font-light px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Nature</button>
          </li>
          <li>
            <button className='rounded-full border-2 bg-[#6491C9] text-xl font-abhaya font-light px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Relaxation</button>
          </li>
          <li>
            <button className='rounded-full border-2 bg-[#6491C9] text-xl font-abhaya font-light px-6 py-2 hover:bg-transparent hover:border-[#6491C9]'>Family</button>
          </li>
        </ul>
        <div className='flex md:flex-row flex-col justify-between gap-6 mx-4 my-4'>
          <div>
            <Image src={art} alt='art' width={400} />
            <div className='bg-slate-100 text-gray-800 font-abhaya text-center md:text-3xl py-4'>
              Arts & Culture
            </div>
          </div>
          <div>
            <Image src={food} alt='food' width={400} />
            <div className='bg-slate-100 text-gray-800 font-abhaya text-center md:text-3xl py-4'>
              Foods & Drink
            </div>
          </div>
          <div>
            <Image src={festival} alt='festival' width={400} />
            <div className='bg-slate-100 text-gray-800 font-abhaya text-center md:text-3xl py-4'>
              Festivals & Events
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Todo