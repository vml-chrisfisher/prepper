import { connect } from 'react-redux';
import { fetch } from '../../store/actions';
import Header from './header';

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
    }
  }
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderContainer