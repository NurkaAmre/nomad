import Image from "next/image";
import { GetPopularPlacesData } from "@/lib/GetPopularPlacesData";
import Link from "next/link";

const PopularPlaces = async () => {
  const popularPlaces = await GetPopularPlacesData();

  const popularPlacesContent = popularPlaces.map(
    (popularPlace: PopularPlacesType, index:number) => {

      // add different styles depending on the index and devices
      let itemClass = "col-span-1 row-span-1";
      if (index % 5 === 0 || index % 5 === 5) {
        if (index % 10 === 0) {
          itemClass = "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
        } else {
          itemClass = "col-span-2 row-span-2 md:col-span-1 md:row-span-1";
          
        }
      } else if (index % 10 === 7 ) {
        itemClass += " md:col-span-2 md:row-span-2";
      }
      
      return (
        <li key={popularPlace.id} className={`${itemClass}`}>
          <Link href={`/places/${popularPlace.id}`} className="block w-full h-full">
          <Image
            width={767}
            height={420}
            className="w-full h-full object-cover"
            src={popularPlace.image}
            alt={popularPlace.title}
          />
          </Link>
        </li>
      );
    }
  );

  return (
    <section className="py-10 px-4 md:px-6">
      <h2 className="text-[24px] md:text-4xl text-center my-2 mb-6">Popular Places</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto grid-flow-row-dense gap-4 p-0 list-none">{popularPlacesContent}</ul>
    </section>
  );
};

export default PopularPlaces;
