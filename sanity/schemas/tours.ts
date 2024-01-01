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
    }
  ]
};
