import User from './User'

export default interface Task {
  _id: string
  name: string
  deadline: Date
  author: User['_id']
}
