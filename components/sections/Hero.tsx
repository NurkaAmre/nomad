import { GetHeroSpotData } from "@/lib/GetHeroSpotData";

const Hero = async () => {
  const heroPlaces = await GetHeroSpotData();

  const heroPlacesList = heroPlaces.map((heroPlace: HeroType) => (
    <li key={heroPlace.id} className="flex-1">
      <img
        className="min-w-[500px] md:min-w-[100%] w-[100%] max-w-[100%] h-[350px] object-fill"
        src={heroPlace.image}
        alt={heroPlace.name}
      />
    </li>
  ));

  return (
    <section className="pt-28 md:pt-20 px-6 static">
      <div className="relative">
        <h2 className="absolute w-fit bg-black/50 text-white/95 p-6 text-3xl font-abril z-50 left-6 md:left-28 bottom-6 mx-auto">
          Travel Beyond <br /> Limits <br /> with Nomads.
        </h2>
        <ul className="flex flex-row overflow-hidden justify-center">
          {heroPlacesList}
        </ul>
      </div>
      <div className="m-6 p-6 bg-[#47485B] w-full md:w-[80%] max-w-[100%] mx-auto rounded-[5px] flex flex-col justify-center items-center text-center">
        <p className="my-4 font-abhaya text-xl text-left">
          Start your travel at an affordable price with Nomads.
          <br /> Contact us not below.
        </p>
        <button className="bg-[#6491C9] text-white px-4 py-2 font-abhaya font-extrabold my-2">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
