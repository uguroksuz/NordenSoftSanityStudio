import Page from 'react-icons/lib/md/web'
import * as sections from '../sections'

const sharedSections = {
  type: 'object',
  name: 'sharedSection',
  fields: [
    {
      name: 'referencedSection',
      type: 'reference',
      to: Object.values(sections).map(({ name, title }) => ({
        type: `shared.${name}`,
        title
      }))
    }
  ],
  preview: {
    select: {
      title: 'referencedSection.title',
      subtitle: 'referencedSection._type'
    }
  }
}

export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  icon: Page,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'sections',
      type: 'array',
      title: 'sections',
      of: [
        ...Object.values(sections).map(({ name, title }) => ({
          type: name,
          title: `Custom ${title}`
        })),
        sharedSections
      ]
    },
    {
      name: 'featuredImage',
      type: 'illustration'
    }
  ]
}
