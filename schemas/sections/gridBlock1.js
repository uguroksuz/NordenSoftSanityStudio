import grid from './grid';

export default {
    name: 'gridBlock1',
    type: 'object',
    title: 'Grid Block - 1',
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
            name: 'giridSection',
            type: 'array',
            title: 'sections',
            of: [ grid ]
        },
    ],
}
