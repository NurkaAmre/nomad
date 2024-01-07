import { defineField } from "sanity";

const places = {
  name: "places",
  title: "Places",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      description: "Descriptive title for the picture",
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Upload the picture here",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      description:
        "Category of the picture (e.g., landscapes, beaches, cities, etc.)",
      options: {
        list: [
          // Define the categories you want
          { title: "Festival", value: "festival" },
          { title: "Art & Culture", value: "artculture" },
          { title: "Foods & Drink", value: "foodsdrink" },
          { title: "Adventure", value: "adventure" },
          { title: "Nature", value: "nature" },
          { title: "Monastery", value: "monastery" },
          // Add more categories as needed
        ],
      },
      initialValue: "Festival",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Description of the picture",
    })
  ],
};

export default places;
