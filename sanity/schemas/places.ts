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
      validation: Rule => Rule.required().min(5).error("Min 10 characters").max(255).error("Max 50 characters"),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Upload the picture here",
      validation: Rule => Rule.required(),
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
          { title: "Landscapes", value: "landscapes" },
          { title: "Beaches", value: "beaches" },
          { title: "Cities", value: "cities" },
          // Add more categories as needed
        ],
      },
      initialValue: "landscapes",
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Description of the picture",
      validation: Rule => Rule.required().min(50).error("Min 50 characters"),
    })
  ],
};

export default places;
