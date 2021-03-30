export interface Grocery {
  name: string
  quantity: string
}
export interface GroceryList {
  title: string
  groceries: Array<Grocery>
}

export interface Store {
  id: string
  name: string
  address: {}
}

export interface PreferredStore {
  rank: number
  store: Store
}
export interface GroceriesPreferences {
  preferredStores: Array<PreferredStore>
  closeStores: Array<Store>
  groceriesList: Array<GroceryList>
}
