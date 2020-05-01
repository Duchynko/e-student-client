import Post from './Post'

export default interface School {
  _id: string
  name: string
  address: string
  contact: [
    {
      type: string
      value: string
    },
  ]
  posts: Post[]
}
