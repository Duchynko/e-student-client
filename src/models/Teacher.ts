import User from './User'
import Class from './Class'

export default interface Teacher extends User {
  classes: Class['_id'][]
}
