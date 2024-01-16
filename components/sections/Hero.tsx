'use client';
import Link from 'next/link';
import { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const aboutContainer = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const heroPlaces = [
  { id: 1, name: "Spot1", image: "/images/e1.jpg" },
  { id: 2, name: "Spot2", image: "/images/h5.jpg" },
  { id: 3, name: "Spot3", image: "/images/h1.jpg" },
  { id: 4, name: "Spot4", image: "/images/h2.jpg" },
  { id: 5, name: "Spot5", image: "/images/ch1.jpg" }
]

const Hero = () => {
  const myRef = useRef<HTMLDivElement>(null);
  const inView = useInView(myRef);
  const myController = useAnimation();
  useEffect(() => {
    if (inView) {
      myController.start('visible');
    }
  }, [inView, myController]);

  const heroPlacesList = heroPlaces.map((heroPlace: HeroType) => (
    <li key={heroPlace.id} className="flex-1">
      <img
        className="min-w-[767px] md:min-w-[100%] w-[100%] max-w-[100%] h-[530px] md:h-[550px] object-contain md:object-cover"
        src={heroPlace.image}
        alt={heroPlace.name}
      />
    </li>
  ));

  return (
    <section className="" id="hero">
      <div className="relative">
        <ul className="flex flex-row overflow-hidden justify-center">
          {heroPlacesList}
        </ul>

        <motion.div
          className="bg-[#2B2D4293] rounded-md font-abril absolute top-[8rem] py-4 md:p-8 px-4 left-[6rem]"
          variants={aboutContainer}
          initial="hidden"
          animate={myController}
          transition={{ duration: 0.5, delay: 0.2 }}
          ref={myRef}
        >
          <motion.div
            className="flex-1 bg-black/50 border border-sky-950 p-4 rounded-lg flex flex-col justify-between"
            variants={item}
          >
            <p className="font-bold text-white md:text-6xl text-3xl tracking-[0.3rem] text-right">
              Travel Beyond
              <br />{' '}
              <span className="font-bold text-5xl md:text-7xl tracking-widest text-[#f1683a] ">
                Limits
              </span>
              <br /> with Nomads.
            </p>
          </motion.div>
        </motion.div>
      </div>
      <div className="flex flex-col justify-center items-center bg-blend-overlay my-2 mx-4 py-4 px-6 md:mx-[12rem] rounded-sm text-white">
        <p className="md:text-3xl text-xl font-medium -tracking-wide pb-3 md:px-[3rem] md:py-[2rem]">
          Start your travel at an affordable price with Nomads.Contact us not
          below.
        </p>
        <Link
          className="bg-[#6179ad] tracking-wide font-semibold uppercase px-4 py-2 md:text-2xl md:mb-5 hover:bg-[#93b7e3ec]"
          href="/booking"
        >
          Book Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
