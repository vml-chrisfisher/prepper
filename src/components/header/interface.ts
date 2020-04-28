
export enum HeaderTheme {
  LIGHT = "white",
  DARK = "dark"
}

export enum HeaderMenuType {
  PLANTS = 'plants',
  ARTICLES = 'articles',
  RECIPES = 'recipes'
}

export interface HeaderProps {
  theme: HeaderTheme
}

export interface HeaderState {
  menuUp: boolean,
  menuType: HeaderMenuType
}

