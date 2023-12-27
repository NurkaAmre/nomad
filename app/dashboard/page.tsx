import { client } from "@/sanity/lib/client";

const Dashboard = async () => {
  // fetch all user data from sanity
  const data =  await client.fetch(`*[_type == "user"]`);
  console.log(data);

  return <div>Dashboard</div>;

}

export default Dashboard;