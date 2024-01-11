import { defineField } from "sanity";

const popularPlace = {
  name: 'popular',
  title: 'Popular',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the popular place',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'A brief description of the popular place',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'The photo of the popular place',
    },
  ]
}

export default popularPlace;
