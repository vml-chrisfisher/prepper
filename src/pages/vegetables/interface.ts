export interface VegetablesProps {
    location: Location
    data: VegetablesData
}

export interface VegetablesData {
    site: VegetablesSite
}

export interface VegetablesSite {
    siteMetaData: VegetablesSiteMetaData
}

export interface VegetablesSiteMetaData {
    title: string
}

export interface AllContentfulVegetable {
    edges: VegetablesEdge[]
}

export interface VegetablesEdge {
    node: VegetablesNode
}

export interface VegetablesNode {
    bannerImage: VegetablesBannerImage
    parentVegetable: {
        name: string
    }
    slug: string
    title: string
}

export interface VegetablesBannerImage {
    file: VegetablesBannerImageFile
    title: string
}

export interface VegetablesBannerImageFile {
    url: string
}
