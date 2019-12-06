export default {
    name: 'leftImageBlock',
    type: 'object',
    title: 'Left Image Block',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
        },
        {
            name: 'body',
            title: 'Body',
            type: 'blockContent'
        },
    ],
}