export default interface ArticleSecionInterface {
  bodyCopy: {
    childMarkdownRemark: {
      rawMarkdownBody: string
    }
  }
  images: ContentfulImage[]
  isTwoColumn: boolean
}

interface ContentfulImage {
  description: string
  file: {
    url: string
  }
}
