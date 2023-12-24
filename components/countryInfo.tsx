import React from 'react'

const CountryInfo = () => {
  return (
    <section className='text-white pb-20'>
      <div className='md:px-[4rem] px-6 pt-5'>
        <h2 className='text-center mb-3 text-5xl md:text-6xl font-abhaya'>Mongolia</h2>
        <hr className='w-[180px] md:w-[720px] h-px mx-auto mt-2 mb-10 md:mb-2 bg-gray-500 border-0 rounded dark:bg-gray-700' />
        <p className='md:text-xl text-base my-10 font-aloe'>Discover Mongolia an unexplored paradise of vast landscapes and nomadic culture. As the world&apos;s least densely populated country, it offers a unique blend of Asian and European influences, from Soviet-era architecture to rich Buddhist traditions. Explore the extremes, from the Gobi Desert in the south to the Altai Mountains in the west, and the endless grasslands in the east. Don&apos;t miss the awe-inspiring 40-meter-tall Chinggis Khaan Statue, a testament to Mongolia&apos;s fascinating heritage. Experience an adventure like no other in this captivating land where nature and culture intertwine in mesmerizing ways.
        </p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10950425.714190695!2d101.96085300000001!3d47.927799!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3627050669aa6d4b%3A0xe0dd213937e6e096!2sMongolia!5e0!3m2!1sen!2skz!4v1689951282338!5m2!1sen!2skz" className='w-full h-96'></iframe>
    </section>
  )
}

export default CountryInfo