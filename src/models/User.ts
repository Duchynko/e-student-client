import School from './School'
import Class from './Class'

export default interface User {
  _id: string
  firstName: string
  lastName: string
  username: string
  email: string
  password: string
  avatar: string
  birthday: Date
  classes: Class[]
  school: School['_id']
}
