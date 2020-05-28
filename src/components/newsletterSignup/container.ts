import NewsletterSignup from '.';
import { connect } from 'react-redux';
import { onNewsletterReset, onNewsletterSubmit } from '../../store/actions';

const mapStateToProps = (state: any) => {
  console.log("SHIZ: ", state)
  const { position } = state.visibilityFilter
  const { categories } = state.header
  const { categoryDetail } = state.header
  console.log("SHOOT: ", position)
  return {
    position,
    categories,
    categoryDetail
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSubmit: (email: string) => {
      dispatch(onNewsletterSubmit(email))
    },
    onReset: () => {
      console.log("RESET CALLED")
      dispatch(onNewsletterReset())
    }
  }
}

const NewsletterContainer = connect(mapStateToProps, mapDispatchToProps)(NewsletterSignup)

export default NewsletterContainer