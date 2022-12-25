export default {
    name: 'project',
    title: 'Project',
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
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        title: 'Link',
        name: 'href',
        type: 'url',
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
      {
        name: 'publishedAt',
        title: 'Published at',
        type: 'datetime',
      },
    ],

  }
  