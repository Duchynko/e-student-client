import User from './User'

export default interface Event {
  _id: string
  name: string
  date: Date
  content: string
  author: User['_id']
}
