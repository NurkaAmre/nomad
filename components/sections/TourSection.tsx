'use client'
import { useEffect, useState } from 'react';
import { client } from "@/sanity/lib/client";
import Tours from '@/components/NewTours';

const TourSection = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const tourData = await client.fetch('*[_type == "tour"]{ "id": _id, title, author, topic, description, "image": image.asset->url, duration, location, price }');
        setTours(tourData);
      } catch (error) {
        console.error('Error fetching tours:', error);
      }
    };

    fetchTours();
  }, []);

  return (
    <section className="mb-10">
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
