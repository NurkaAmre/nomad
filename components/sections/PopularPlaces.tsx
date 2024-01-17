import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";
import CustomErrorComponent from "../UI/CustomErrorComponent";

interface Place {
  id: string;
  title: string;
  image: string;
  description: string;
}

// ... (imports)

interface Place {
  id: string;
  title: string;
  image: string;
  description: string;
}

  

const PopularPlaces: React.FC = async() => {
  let places: Place[];
  try {

     places = await client.fetch(`*[_type == "popular"]{
      "id": _id,
      title,
      "image": image.asset->url,
  }`);


  } catch (error:any){
    return <section className="w-full h-[5rem] relative" id="todo"><CustomErrorComponent isFixed={false} title="An Error occurred" message="Error fetching data" /></section>
    
  }

  const popularPlacesContent = places.map((popularPlace: Place, index: number) => {
  let itemClass = "col-span-1 row-span-1";

  if (index % 5 === 0 || index % 5 === 4) {
    if (index % 10 === 0) {
      itemClass = "col-span-2 row-span-2 md:col-span-2 md:row-span-2";
    } else {
      itemClass = "col-span-2 row-span-2 md:col-span-1 md:row-span-1";
    }
  } else if (index % 10 === 7) {
    itemClass += " md:col-span-2 md:row-span-2";
  }

  return (
    <li key={popularPlace.id} className={`${itemClass}`}>
      <Link href={`/popular/${popularPlace.id}`} className="block w-full h-full">
        {popularPlace.image ? (
          <Image
            width={767}
            height={420}
            className="w-full h-full object-cover"
            src={popularPlace.image}
            alt={popularPlace.title}
          />
        ) : (
          <div>Image not available</div>
        )}
      </Link>
    </li>
  );
});

  return (
    <section className="py-4 px-4 md:px-6" id="popularplace">
      <h2 className="text-[24px] md:text-4xl text-center my-2 mb-6 font-poller">Popular Places</h2>
      <ul className="grid grid-cols-2 md:grid-cols-4 grid-rows-auto grid-flow-row-dense gap-4 p-0 list-none">
        {popularPlacesContent}
      </ul>
    </section>
  );
};

export default PopularPlaces;
