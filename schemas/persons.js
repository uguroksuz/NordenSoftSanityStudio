export default {
  type: 'object',
  name: 'persons',
  title: 'Persons',
  fields: [
    {
      name: 'members',
      title: 'Members',
      type: 'array',
      of: [{ type: 'contactPerson' }]
    },
  ]
}