import { GetHeroSpotData } from "@/lib/GetHeroSpotData";

const Hero = async () => {
  const heroPlaces = await GetHeroSpotData();

  const heroPlacesList = heroPlaces.map((heroPlace: HeroType) => (
    <li key={heroPlace.id} className="flex-1">
      <img
        className="min-w-[767px] md:min-w-[100%] w-[100%] max-w-[100%] h-[420px] md:h-[350px] object-fill"
        src={heroPlace.image}
        alt={heroPlace.name}
      />
    </li>
  ));

  return (
    <section className="pt-28 md:pt-20 static">
      <div className="relative">
        <ul className="flex flex-row overflow-hidden justify-center">
          {heroPlacesList}
        </ul>

        <div className="absolute z-50 left-0 right-0 top-0 bottom-0 flex justify-center items-center ">
          <h2 className="md:absolute bg-black/50 text-white/95 text-3xl font-abril w-fit p-6 left-6 md:left-28 bottom-6 mx-auto">
            Travel Beyond <br /> Limits <br /> with Nomads.
          </h2>
        </div>

      </div>
      <div className="m-6 p-6 bg-transparent md:bg-[#47485B] w-full md:w-[80%] max-w-[100%] mx-auto rounded-[5px] flex flex-col justify-center items-center text-center static overflow-hidden">
        <p className="rounded-[5px] my-4 p-4 font-abhaya text-xl text-left bg-[#47485B] md:bg-transparent">
          Start your travel at an affordable price with Nomads.
          <br /> Contact us not below.
        </p>
        <button className="bg-[#6491C9] text-white px-4 py-2 font-abhaya font-extrabold">
          Book Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
