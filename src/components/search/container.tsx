import Search from '.'
import { connect } from 'react-redux'
import { onSearch } from './../../store/actions/index'

const mapStateToProps = (state: any) => {
  const { data } = state.header
  return {
    data,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSearch: (value: string) => {
      dispatch(onSearch(value))
    },
  }
}

const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search)

export default SearchContainer
