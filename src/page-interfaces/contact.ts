export interface ContactEdge {
  node: ContactNode
}

export interface ContactNode {
  heroImage: HeroImage
  title: RichText
  copy: RichText
  helloTabName: string
  helloCopy: RichText
  recipeTabName: string
  recipeCopy: RichText
  suggestionTabName: string
  suggestionCopy: RichText
  partnershipTabName: string
  partnershipCopy: RichText
}

export interface HeroImage {
  file: HeroImageFile
}

export interface HeroImageFile {
  url: string
}

export interface RichText {
  content: Array<ContextArray>
}

export interface ContextArray {
  content: Array<ValueInterface>
}

export interface ValueInterface {
  value: string
}
