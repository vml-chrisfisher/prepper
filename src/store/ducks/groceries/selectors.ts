export const getGroceriesData = (state: any) => state?.header || {}

export const getGroceries = (state: any) => {
  return getGroceriesData(state).groceries
}
