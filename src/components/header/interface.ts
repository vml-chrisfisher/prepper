export enum HeaderTheme {
  LIGHT = 'white',
  DARK = 'dark',
}

export enum HeaderMenuType {
  PLANTS = 'plants',
  ARTICLES = 'articles',
  RECIPES = 'recipes',
}

export interface HeaderProps {
  theme: HeaderTheme
  isUp?: boolean
  data?: ProductFamily[]
  categories?: ProductCategory[]
  categoryDetail?: ProductCategoryDetail
  onFetch?: () => void
  onFamilySelected?: (id: string) => void
  onCategorySelected?: (id?: string) => void
  onShowSearch?: () => void
  onShowProfile?: () => void
}

export interface HeaderState {
  menuUp: boolean
  menuType: HeaderMenuType
  headerParent?: HTMLElement
}

export interface ProductFamily {
  productId: string
  name: string
  categories: ProductCategory[]
}

export interface ProductCategory {
  productId: string
  name: string
  varieties: ProductVariety[]
}

export interface ProductCategoryDetail {
  imagePath?: string
  copy?: string
}

export interface ProductVariety {
  productId: string
  name: string
  offerings: ProductOffering[]
}

export interface ProductOffering {
  type: string
  offerings: Product[]
}

export interface Product {
  productId: string
  quantity: number
  price: number
}
