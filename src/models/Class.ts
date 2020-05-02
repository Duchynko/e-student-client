import School from './School'
import Student from './Student'
import Teacher from './Teacher'
import Event from './Event'
import Task from './Task'

export default interface Class {
  _id: string
  school: School['_id']
  name: string
  schoolYear: string
  code: string
  students: Student[]
  teachers: Teacher[]
  events: Event[]
  tasks: Task[]
}
