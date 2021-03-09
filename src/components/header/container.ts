import { connect } from 'react-redux'
import { fetch, onShowHeaderProfile, onShowSearch } from '../../store/actions'
import { onCategorySelected, onFamilySelected } from './../../store/actions/index'
import Header from './header'

const mapStateToProps = (state: any) => {
  const { data } = state.header
  const { categories } = state.header
  const { categoryDetail } = state.header
  return {
    data,
    categories,
    categoryDetail,
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
    onShowHeaderProfile: () => {
      dispatch(onShowHeaderProfile())
    },
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer
