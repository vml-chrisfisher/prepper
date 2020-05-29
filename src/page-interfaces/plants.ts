export interface PlantsProps {
  location: Location
  data: PlantsData
}

export interface PlantsData {
  site: PlantsSite
}

export interface PlantsSite {
  siteMetaData: PlantsSiteMetaData
}

export interface PlantsSiteMetaData {
  title: string
}

export interface AllContentfulPlants {
  edges: PlantsEdge[]
}

export interface PlantsEdge {
  node: PlantsNode
}

export interface PlantsNode {
  bannerImage: PlantsBannerImage
  parentVegetable: PlantsParentVegetable
  slug: string
  title: string
}

export interface PlantsBannerImage {
  file: PlantsBannerImageFile
  title: string
}

export interface PlantsBannerImageFile {
  url: string
}

export interface PlantsParentVegetable {
  name: string
}
