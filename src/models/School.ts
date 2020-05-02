import Post from './Post'
import Student from './Student'
import Teacher from './Teacher'
import Class from './Class'

export default interface School {
  _id: string
  name: string
  address: string
  contact: any
  students: Student[]
  teachers: Teacher[]
  classes: Class[]
  events: Event[]
  posts: Post[]
}
