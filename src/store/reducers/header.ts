import { HeaderAction } from '../actions/interface'
import { HEADER_ACTION_TYPES } from '../actions/types'
import { products } from '../static/products'
import { ProductCategoryDetail } from './../../components/header/interface'

const header = (state: any = {}, action: HeaderAction) => {
    let selectedCategory: ProductCategoryDetail = {}
    switch (action.type) {
        case HEADER_ACTION_TYPES.FETCH:
            return { ...state, data: products }
        case HEADER_ACTION_TYPES.FAMILY_SELECTED:
            return {
                ...state,
                categories: products.filter(product => {
                    return product.productId === action.familyId
                })[0].categories,
            }
        case HEADER_ACTION_TYPES.CATEGORY_DETAILS_FETCHED:
            if (action.imagePath && action.copy) {
                selectedCategory = {
                    imagePath: action.imagePath,
                    copy: action.copy,
                }
            }
            return { ...state, categoryDetail: selectedCategory }
        default:
            return state
    }
}

export default header
