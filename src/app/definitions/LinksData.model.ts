export interface LinksData {
  mainLinks: LinkGroup[]
  communityLinks: LinkGroup[]
  creatorBlueprints: Link[]
}

export interface LinkGroup {
  text: string
  links: Link[]
}

export interface Link {
  url: string
  text: string
  caption?: string
}
