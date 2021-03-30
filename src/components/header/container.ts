import { connect } from 'react-redux'
import Header from './header'
import {
  fetch,
  onCategorySelected,
  onFamilySelected,
  onShowHeaderProfile,
  onShowSearch,
} from './../../store/ducks/header/actions'

const mapStateToProps = (state: any) => {
  const { data } = state.header
  const { categories } = state.header
  const { categoryDetail } = state.header
  const { showHeaderProfile } = state.header
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
