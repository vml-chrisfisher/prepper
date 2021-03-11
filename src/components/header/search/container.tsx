import Search from '.'
import { connect } from 'react-redux'
import { onHideSearch, onSearch } from '../../../store/actions/index'

const mapStateToProps = (state: any) => {
  const { showSearch } = state.visibilityFilter
  return {
    showSearch,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearch: (value: string) => {
      dispatch(onSearch(value))
    },
    onCloseSearch: () => {
      dispatch(onHideSearch())
    },
  }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)

export default SearchContainer
