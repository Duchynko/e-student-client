import User from './User'

export default interface Teacher extends User {
  roles: string[]
}
