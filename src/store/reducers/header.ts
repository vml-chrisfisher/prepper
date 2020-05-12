import { HeaderAction } from '../actions/interface'
import { HEADER_ACTION_TYPES } from '../actions/types'
import { products } from '../static/products'
import { ProductCategoryDetail } from './../../components/header/interface'

const header = (state: any = {}, action: HeaderAction) => {
  switch (action.type) {
    case HEADER_ACTION_TYPES.FETCH:
      const t = { ...state, data: products }
      console.log(t)
      return t
    case HEADER_ACTION_TYPES.FAMILY_SELECTED:
      const selectedProduct = products.filter(product => {
        return product.productId === action.familyId
      })[0]
      return { ...state, categories: selectedProduct.categories }
    case HEADER_ACTION_TYPES.CATEGORY_DETAILS_FETCHED:
      let selectedCategory: ProductCategoryDetail = {}
      console.log("ACTION: ", action)
      if (action.imagePath && action.copy) {
        selectedCategory = {
          imagePath: action.imagePath,
          copy: action.copy
        }
      }
      return { ...state, categoryDetail: selectedCategory }
    default:
      return state
  }
}

export default header