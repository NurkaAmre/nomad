import { client } from "@/sanity/lib/client";
import Tours from '@/components/NewTours';
import CustomErrorComponent from "../UI/CustomErrorComponent";

const TourSection = async() => {
  let tours
  try {

   tours = await client.fetch('*[_type == "tour"]{ "id": _id, title, author, topic, description, "image": image.asset->url, duration, location, price }');


  } catch (error:any){
    return <section className="w-full h-[5rem] relative" id="todo"><CustomErrorComponent isFixed={false} title="An Error occurred" message="Error fetching data" /></section>
    
  }


  return (
    <section id="toursection" className="mb-10">
      {tours.length > 0 ? (
        <Tours tours={tours} />
      ) : (
        <p className="text-red-500 text-lg p-4 text-center">
          No Tours Available Now
        </p>
      )}
    </section>
  );
};

export default TourSection;
