import { connect } from 'react-redux'
import {
  fetch,
  onCategorySelected,
  onFamilySelected,
  onShowHeaderProfile,
  onShowSearch,
} from './../../store/ducks/header/actions'
import Header from './header'

const mapStateToProps = (state: any) => {
  const { data } = state.headerReducers
  const { categories } = state.headerReducers
  const { categoryDetail } = state.headerReducers
  const { showHeaderProfile } = state.headerReducers
  return {
    data,
    categories,
    categoryDetail,
    showHeaderProfile,
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
    },
    onShowSearch: () => {
      dispatch(onShowSearch())
    },
    onShowProfile: () => {
      dispatch(onShowHeaderProfile())
    },
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
