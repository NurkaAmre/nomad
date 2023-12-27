import { type SchemaTypeDefinition } from 'sanity'


export const placesSchema =  {
  name: 'places',
  title: 'Places',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Descriptive title for the picture',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      description: 'Upload the picture here',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Category of the picture (e.g., landscapes, beaches, cities, etc.)',
      options: {
        list: [ // Define the categories you want
          { title: 'Landscapes', value: 'landscapes' },
          { title: 'Beaches', value: 'beaches' },
          { title: 'Cities', value: 'cities' },
          // Add more categories as needed
        ],
      },
    },
  ],
};
