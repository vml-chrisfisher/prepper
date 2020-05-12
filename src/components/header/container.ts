import { connect } from 'react-redux'
import { fetch } from '../../store/actions'
import { onCategorySelected, onFamilySelected } from './../../store/actions/index'
import Header from './header'

const mapStateToProps = (state: any) => {
  console.log(state)
  const { data } = state.header
  const { categories } = state.header
  const { categoryDetail } = state.header
  return {
    data,
    categories,
    categoryDetail
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onFetch: () => {
      dispatch(fetch())
    },
    onFamilySelected: (id: string) => {
      dispatch(onFamilySelected(id))
    },
    onCategorySelected: (id?: string) => {
      dispatch(onCategorySelected(id))
    }
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer