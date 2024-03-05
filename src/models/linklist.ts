import type Link from "./link"

export default interface LinkList {
  title: string;
  color: string;
  icon: string;
  links: Link[];
}
