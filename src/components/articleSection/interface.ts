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
    file: {
        url: string
    }
}
