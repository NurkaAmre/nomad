// schema.js
export default {
  name: 'tour',
  title: 'ToursMain',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image'
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string'
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'topic',
      title: 'Topic',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'Duration of the tour (e.g., 3 days, 1 week)',
    },
     {
      name: 'location',
      title: 'Location',
      type: 'string',
      description: 'Location of the tour',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the tour',
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'text',
      description: 'Long description of the tour',
    },
  ]
};
