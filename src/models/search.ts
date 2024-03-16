export default interface Search {
  name: string, 
  url: string, 
  query: string, 
  option?: {
    name: string, 
    value: string
  }
}
