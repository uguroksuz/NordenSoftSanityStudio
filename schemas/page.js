import * as sections from './sections'

export default {
  name: 'page',
  title: 'Page',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */ ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'sections',
      type: 'array',
      title: 'sections',
      of: [
        ...Object.values(sections).map(({ name, title }) => ({
          type: name,
          title: `${title}`
        }))
      ]
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent'
    },
  ]
}