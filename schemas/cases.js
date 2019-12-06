import { IoMdBriefcase } from 'react-icons/md'

export default {
  name: 'cases',
  title: 'Cases',
  type: 'document',
  icon: IoMdBriefcase,
  liveEdit: false,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image'
    }
  }
}
