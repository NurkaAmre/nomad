import Link from "next/link";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import nextAuthOptions from "@/lib/nextAuthOptions";
import { client } from "@/sanity/lib/client";
import CustomErrorComponent from "@/components/UI/CustomErrorComponent";
import './dashboard.css'

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
    <article className="min-h-screen flex justify-center items-center transition duration-500">
      {bookings.length == 0 ? (
        <p>No Booking found! Please book your trip now</p>
      ) : (
        <div className="">
          {bookings.map((booking: any) => {
            return (
              <div
                className="container"
                key={booking.id}
              >
                <div className="box" data-color="clr1">
                <div className="imgBx">
                  <Image src={booking.tour.image} layout="fill" className="img" alt="Pattern" />
                </div>
                  
                    <span className="absolute top-2 right-4">
                  {booking.isConfirmed ? (
                    <div className="icon flex justify-center w-6 h-6 rounded-full bg-green-400 text-defaultBackground"></div>
                  ) : (
                    <div className="icon flex justify-center w-6 h-6 rounded-full bg-orange-500 text-defaultBackground"></div>
                  )}
                </span>
              <div className="glass">
                <h4 className="text-white font-bold font-abhaya tracking-[5px] md:mt-[1.5rem] text-base text-animation">
               Tour Of Nomads
                </h4>
                <h3 className="text-3xl text-[#f1683a] font-bold tracking-wider font-abhaya">
                  {booking.tour.title}
                </h3>

                <div className='flex flex-col justify-center mt-4'>
                  <div className='flex justify-around'>
                    <p className='font-poller'>Price</p>
                    <p className=''>${booking.tour.price}</p>
                  </div>
                  <div className='flex gap-4'>
                    <p className='font-poller'>Trip Duration</p>
                    <p className=''>{booking.tripDuration}days</p>
                  </div>
                </div>
                <p className="text-end text-slate-200 mt-6 text-sm">
                  <span>{booking.startDate}</span>
                </p>
                </div>
               </div> 
              </div>
            );
          })}
        </div>
      )}
    </article>
  );
};

export default Dashboard; 