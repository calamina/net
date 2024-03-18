export default interface Link {
  name: string
  url: string
  altName?: string
  alt?: { name: string; url: string }[]
  nsfw?: boolean
}
