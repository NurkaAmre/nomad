import { client } from "@/sanity/lib/client";
import TodoDetail from "@/app/todo/[id]/page";

interface Place {
  id: string;
  title: string;
  image: string;
  description: string;
  category: string;
}

export default async function Search({ params }: { params: { query: string } }) {
  const query = params.query;
  const products = await client.fetch(
    `*[_type == "places" && (category[]->title.current match "${query}*" || title match "${query}*" || details match "${query}*")]{
      "id": _id,
      title,
      "imagesURL": images[].asset -> url,
      description
    }`
  );

  return (
    <main className="">
      <div className="">
        {products?.map((product: Place) => (
          <TodoDetail key={product.id} params={{ id: product.id }} />
        ))}
        {products?.length === 0 && (
          <h2>No results found</h2>
        )}
      </div>
    </main>
  );
}
