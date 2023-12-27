import { SchemaTypeDefinition } from 'sanity'

export const placesSchema: SchemaTypeDefinition = {
  name: 'picture',
  title: 'Picture',
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
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the picture',
    },
  ],
};
