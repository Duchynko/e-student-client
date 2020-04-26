import Group from './Group'

export default interface Class {
  _id: string
  name: string
  schoolYear: string
  code: string
  group: Group['_id']
}
