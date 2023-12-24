import { GetTourData } from "@/lib/GetTourData";
import Tours from "@/components/NewTours";

const TourSection = async () => {
  const tourData = await GetTourData();
  return (
    <section className="pt-10">
      <h2 className="text-4xl py-4 text-center mb-4">Tour Section</h2>
      {tourData.length > 0 ? (
        <Tours tours={tourData} />
      ) : (
        <p className="text-red-500 text-lg p-4 text-center">
          No Tours Available Now
        </p>
      )}
    </section>
  );
};

export default TourSection;
