import { GetHeroSpotData } from "@/lib/GetHeroSpotData";

const Hero = async () => {
  const heroPlaces = await GetHeroSpotData();

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
    <section className="">
      <div className="relative">
        <ul className="flex flex-row overflow-hidden justify-center">
          {heroPlacesList}
        </ul>

        <div className='bg-[#2B2D4293] absolute top-[8rem] py-4 md:p-8 px-4 left-[6rem] '>
          <p className='font-abhaya font-bold text-white md:text-6xl text-3xl tracking-[0.3rem] text-right'>Travel Beyond<br /> <span className="font-semibold text-5xl md:text-7xl text-[#f1683a] ">Limits</span><br /> with Nomads.</p>
        </div>

      </div>
      <div className='flex flex-col justify-center items-center bg-blend-overlay my-2 mx-4 py-4 px-6 md:mx-[12rem] rounded-sm text-white font-abhaya'>
        <p className='md:text-3xl text-xl font-abhaya font-medium tracking-wider pb-3 md:px-[3rem] md:py-[2rem]'>
          Start your travel at an affordable price with Nomads.Contact us not below.
        </p>
        <button className='bg-[#6179ad] tracking-wide font-semibold px-4 py-2 md:text-2xl md:mb-5 hover:bg-[#93b7e3ec]'>
          Book Now
        </button>
      </div>

    </section>
  );
};

export default Hero;
