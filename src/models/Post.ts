import Group from './Group'
import User from './User'

export default interface Post {
  _id: string
  title: string
  content: string
  date: Date
  author: User['_id']
  groups: Group['_id'][]
}
