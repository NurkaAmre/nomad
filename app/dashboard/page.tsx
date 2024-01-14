import Link from "next/link";
import Image from 'next/image'
import dummyImage from '@/public/images/Eagle_festival_two_days.jpg'
import {redirect} from 'next/navigation'
import { getServerSession } from "next-auth";
import nextAuthOptions from "@/lib/nextAuthOptions";
import { client } from "@/sanity/lib/client";
import CustomErrorComponent from "@/components/UI/CustomErrorComponent";

const fetchBookings = async(userId: string) => {
  const res = await client.fetch(`*[_type == "booking" && user._ref == $userId]{'id': _id, 'tour': tour->{ title, price, 'image': image.asset->url}, startDate, isConfirmed, tripDuration }`, {userId})
  return res;
}

const Dashboard =  async() => {
  const session = await getServerSession(nextAuthOptions)
  if (!session || !session.user || !session.user.id) {
    redirect(`/login?callback=/dashboard`)
  }

  let bookings;

  try {
    bookings = await fetchBookings(session.user.id)

  } catch (error: any) {
    return <CustomErrorComponent message="Something went wrong. Please try again later" />
  } 


  return <article className="p-10 pt-24 flex flex-col justify-center items-center gap-4">
    <h2 className="text-center text-2xl text-slate-400 font-bold">Your Bookings</h2>
      {bookings.length == 0? <p>No Booking found! Please book your trip now</p>: (<ul className="w-fit list-none text-white flex flex-col gap-2 p-4 rounded-lg">
      {bookings.map((booking: any) => {
        return <li className="w-full flex flex-row justify-between gap-3 items-center bg-slate-600 px-6 py-4 rounded-lg" key={booking.id}>
        <div className="flex-shrink-0">
          <Image width={120} height={120} src={booking.tour.image} alt={booking.tour.title} />
        </div>
        <h3 className="text-xl font-bold text-center">{booking.tour.title}</h3>
        <p className="flex flex-col gap-1 text-sm">
          <span>Price: {booking.tour.price}</span>
        <span>Status: {booking.isConfirmed? 'Approved': 'Pending'}</span>
        </p>
        <p className="flex flex-col gap-1 text-sm">
          <span>Starting Date: {booking.startDate}</span>
          <span>Trip Duration: {booking.tripDuration}</span>
        </p>
      </li>
      })}
    </ul>)}
  </article>

}

export default Dashboard;