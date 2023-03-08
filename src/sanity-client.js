import client from '@sanity/client'
const sanityClient = client({
      projectId: 'p0knt8tg',
      dataset: 'production',
      useCdn: true,
      apiVersion: '2021-03-25'
  
})

export default sanityClient
