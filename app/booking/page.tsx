import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from 'next/navigation';
import BookingForm from "@/components/BookingForm";
import { client } from "@/sanity/lib/client";
import CustomErrorComponent from "@/components/UI/CustomErrorComponent";

type PropTypes = {
  searchParams: { [key: string]: string | string[] | undefined },
};

const Booking = async({searchParams}: PropTypes) => {
  const tripID = searchParams.trip_id;

  // check if user is logged in
  const session = await getServerSession(authOptions)
  if (!session || !session.user || !session.user.id) {
    redirect(`/login?callback=/booking${tripID ? `?trip_id=${tripID}` : ""}`)
  }


  let trips = [];

  try {
    const res = await client.fetch(`*[_type == "tour"]{"id": _id, "name": title}`)
    trips = res;
  } catch (error) {
    return <CustomErrorComponent message="No trip is Active Now. Please try later." />
  }

  if (trips.length === 0) {
    return <CustomErrorComponent message="No trip is Active Now. Please try later." />
  }

  if (tripID && !trips.findIndex((trip:any) => trip.id === tripID)) {
    return <CustomErrorComponent message="The trip you want to book is not available now. Please try again" />
  }

  return <BookingForm trip_id={tripID? String(tripID) : undefined} user_id={session.user.id} trips={trips}   />
}

export default Booking;