import {client} from '@/sanity/lib/client'

const fetchTodoByCategory = async (category: string) => {
    const todoData: Place[] = await client.fetch(`*[_type == "places" && category == "${category}"]{
      "id": _id,
      title,
      "image": image.asset->url,
      description,
      category
    }`);

    return todoData;
};