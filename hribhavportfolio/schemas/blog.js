export const blog = {
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          name: 'image',
          title: 'Image',
          type: 'image'
        }
      ]
    },
    {
      name: 'link',
      title: 'Link',
      type: 'string',
    },
    {
      name: 'cards',
      title: 'Cards',
      type: 'array',
      of: [
        {
          name: 'card',
          title: 'Card',
          type: 'object',
          fields: [
            {
              name: 'heading',
              title: 'Heading',
              type: 'string',
            },
            {
              name: 'content',
              title: 'Content',
              type: 'string'
            }
          ]
        }
      ]
    }
  ]
}
