import Link from "next/link";
import Image from "next/image";
import dummyImage from "@/public/images/Eagle_festival_two_days.jpg";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import nextAuthOptions from "@/lib/nextAuthOptions";
import { client } from "@/sanity/lib/client";
import CustomErrorComponent from "@/components/UI/CustomErrorComponent";

const fetchBookings = async (userId: string) => {
  const res = await client.fetch(
    `*[_type == "booking" && user._ref == $userId]{'id': _id, 'tour': tour->{ title, price, 'image': image.asset->url}, startDate, isConfirmed, tripDuration }`,
    { userId }
  );
  return res;
};

const Dashboard = async () => {
  const session = await getServerSession(nextAuthOptions);
  if (!session || !session.user || !session.user.id) {
    redirect(`/login?callback=/dashboard`);
  }

  let bookings;

  try {
    bookings = await fetchBookings(session.user.id);
  } catch (error: any) {
    return (
      <CustomErrorComponent message="Something went wrong. Please try again later" />
    );
  }

  return (
    <article className="p-10 pt-24 flex flex-row justify-center items-center">
      {bookings.length == 0 ? (
        <p>No Booking found! Please book your trip now</p>
      ) : (
        <div className="">
          {bookings.map((booking: any) => {
            const backgroundImageStyle = {
              backgroundImage: `url(${booking.tour.image})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            };

            return (
              <div
                className="min-h-[300px] relative min-w-[250px] border-4 border-solid border-c flex flex-col gap-3 items-center px-2 py-2 rounded-[10px] shadow-inner opacity-90"
                style={backgroundImageStyle}
                key={booking.id}
              >
                <span className="absolute top-2 right-4">
                  {booking.isConfirmed ? (
                    <div className="icon flex justify-center w-6 h-6 rounded-full bg-green-500 text-defaultBackground"></div>
                  ) : (
                    <div className="icon flex justify-center w-6 h-6 rounded-full bg-orange-500 text-defaultBackground"></div>
                  )}
                </span>
                <h4 className="text-white font-bold font-abhaya tracking-[5px] md:mt-[1.5rem] text-base text-animation">
               Tour Of Nomads
             </h4>
                <h3 className="text-3xl text-[#f1683a] font-bold tracking-wider font-abhaya">
                  {booking.tour.title}
                </h3>
                <div className='border border-gray-300 mt-6'>
            <div className='border-b border-gray-300 flex'>
              <p className='w-1/2 border-r border-gray-300 text-cyan-400 font-bold p-2'>Price</p>
              <p className='w-2/3 p-2'>{booking.tour.price}$</p>
            </div>
            <div className='border-b border-gray-300 flex'>
              <p className='w-1/2 border-r border-gray-300 pr-6'>Trip Duration</p>
              <p className='w-2/3 p-2'>{booking.tripDuration}</p>
            </div>
          </div>

                {/* <div className="border-t border-solid border-c w-full mt-3"></div> */}
                <p className="text-end text-slate-200  text-sm">
                  <span>{booking.startDate}</span>
                </p>
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
};

export default Dashboard;