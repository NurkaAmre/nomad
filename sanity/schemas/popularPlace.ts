export default {
  name: 'popularPlace',
  title: 'Popular Places',
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
      name: 'photo',
      title: 'Photo',
      type: 'image',
      description: 'The photo of the popular place',
      options: {
        hotspot: true // Enables hotspot for image cropping if necessary
      },
    }
  ]
}
