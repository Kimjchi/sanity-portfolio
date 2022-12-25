export default {
    name: 'drawing',
    title: 'Drawing',
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
  