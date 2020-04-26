import User from './User'
import Class from './Class'

export default interface Student extends User {
  grades: [
    {
      class: Class['_id']
      grades: number[]
    },
  ]
}
