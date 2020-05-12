import HeaderContainer from '../../components/header/container';
import { ProductCategory, ProductFamily } from '../../components/header/interface';
import { HeaderAction } from '../actions/interface';
import { HEADER_ACTION_TYPES } from '../actions/types';
import { products } from '../static/products';

const header = (state: any = {}, action: HeaderAction) => {
    switch (action.type) {
      case HEADER_ACTION_TYPES.FETCH:
        const t = {...state, data: products}
        console.log(t)
        return t
      case HEADER_ACTION_TYPES.FAMILY_SELECTED:
        const selectedProduct = products.filter(product => {
          return product.productId === action.familyId
        })[0]
        return {...state, categories: selectedProduct.categories}
      case HEADER_ACTION_TYPES.CATEGORY_SELECTED:
        const selectedCategory = state.categories.filter((category: ProductCategory) => {
          return category.productId = action.familyId
        })[0]
        return {...state, categoryDetail: selectedCategory}
      default:
        return state
    }
  }
  
  export default header