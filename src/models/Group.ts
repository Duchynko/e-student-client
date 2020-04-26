import User from './User'
import Class from './Class'
import Post from './Post'

export default interface Group {
  _id: string
  name: string
  code: string
  users: User['_id'][]
  classes: Class['_id'][]
  feed: Post['_id'][]
}
