import School from './School'

export default interface User {
  _id: string
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  avatar: string
  birthday: Date
  school: School['_id']
}
