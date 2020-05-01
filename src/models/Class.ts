import School from './School'
import Student from './Student'
import Teacher from './Teacher'

export default interface Class {
  _id: string
  school: School['_id']
  name: string
  schoolYear: string
  code: string
  students: Student[]
  teachers: Teacher[]
}
