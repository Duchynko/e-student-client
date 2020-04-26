import Group from './Group'

export default interface School {
  _id: string
  name: string
  address: string
  contact: any
  group: Group['_id']
  groups: Group['_id'][]
}
