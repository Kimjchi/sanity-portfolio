export default {
    name: 'photo',
    title: 'Photo',
    type: 'document',
    fields: [
      {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
    ],

  }
  