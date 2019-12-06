export default {
    name: 'homeSlideBlock',
    type: 'object',
    title: 'Home Slide Block',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string'
      },
      {
        name: 'body',
        title: 'Body',
        type: 'blockContent'
      },
      {
        name: 'imageSections',
        type: 'array',
        title: 'Top Images Sections',
        of: [{
            type: 'image',
            title: 'image',
          }
        ]
      },
      {
        name: 'slideImageSections',
        type: 'array',
        title: 'Slide Images Sections',
        of: [{
            type: 'image',
            title: 'image',
          }
        ]
      },
    ],
  }
  