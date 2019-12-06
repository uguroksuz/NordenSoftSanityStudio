import { MdSettings } from 'react-icons/md'

export default {
  name: 'siteExtra',
  title: 'Site Extra Settings',
  type: 'document',
  liveEdit: false,
  __experimental_actions: ['update', 'publish' /* 'create', 'delete' */],
  icon: MdSettings,
  fields: [
    {
      name: 'contactHeader',
      title: 'Contact Page Header',
      type: 'blockContent'
    },
    {
      name: 'facebook',
      title: 'Facebook',
      type: 'string'
    },
    {
      name: 'twitter',
      title: 'Twitter',
      type: 'string'
    },
    {
      name: 'whatsapp',
      title: 'Whatsapp',
      type: 'string'
    },
    {
      name: 'linkedin',
      title: 'Linkedin',
      type: 'string'
    },
    {
      name: 'email',
      title: 'E-Mail',
      type: 'string'
    },
    {
      name: 'footerLogo',
      title: 'Footer Logo',
      type: 'image'
    },
    {
      name: 'footerText',
      title: 'Footer Text',
      type: 'blockText'
    },
    {
      name: 'footerContactBlock',
      title: 'Footer Contact Block',
      type: 'blockContent'
    },
    {
      name: 'footerFindBlock',
      title: 'Footer Find Block',
      type: 'blockContent'
    },
    {
      name: 'contactFormButtonText',
      title: 'Contact Form Button Text',
      type: 'string'
    },
    {
      name: 'contactFormText',
      title: 'Contact Form Text',
      type: 'blockContent'
    },
    {
      name: 'contanctFormImage',
      title: 'Contact Form Image',
      type: 'image'
    },
  ]
}