import { GroceriesPreferences, GroceryList, PreferredStore, Store } from './interfaces'

export const getGroceriesData = (state: any): GroceriesPreferences => state?.header || ({} as GroceriesPreferences)

export const getPreferredStores = (state: any): Array<PreferredStore> => {
  return getGroceriesData(state).preferredStores
}

export const getCloseStores = (state: any): Array<Store> => {
  return getGroceriesData(state).closeStores
}

export const getGroceries = (state: any): Array<GroceryList> => {
  return getGroceriesData(state).groceriesList
}
