import Search from '.'
import { connect } from 'react-redux'
import { onHideSearch } from '../../../store/ducks/header/actions'
import { onSearch } from '../../../store/ducks/search/actions'

const mapStateToProps = (state: any) => {
  const { showSearch } = state.header
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
