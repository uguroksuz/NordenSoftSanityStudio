export default {
    name: 'rightImageBlock',
    type: 'object',
    title: 'Right Image Block',
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
