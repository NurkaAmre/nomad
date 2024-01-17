import { client } from "@/sanity/lib/client";
import CustomErrorComponent from "@/components/UI/CustomErrorComponent";
import TodoDetail from "../todo/[id]/page";

interface Place {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
}

type PropTypes = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const Search = async ({ searchParams }: PropTypes) => {
  const query = searchParams.s;
  let products: Place[] = [];

  try {
    products = await client.fetch(
      `*[_type == "places" && (category[]->title.current match "${query}*" || title match "${query}*" || details match "${query}*")]{
        "id": _id,
        title,
        "imagesURL": images[].asset -> url,
        description
      }`
    );
  } catch (error) {
    return <CustomErrorComponent message="Error fetching search results. Please try again later." />;
  }

  return (
    <main className="">
      <div className="">
        {products?.map((product: Place) => (
          <TodoDetail key={product.id} params={{ id: product.id }} />
        ))}
        {products?.length === 0 && <h2>No results found</h2>}
      </div>
    </main>
  );
};

export default Search;
