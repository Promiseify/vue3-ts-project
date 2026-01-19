export interface MenuItem {
  path: string
  label: string
  name?: string
  url?: string
  icon?: string
  children?: MenuItem[]
}