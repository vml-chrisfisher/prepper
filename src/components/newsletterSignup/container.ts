import NewsletterSignup from '.'
import { connect } from 'react-redux'
import { onNewsletterReset, onNewsletterSubmit } from '../../store/actions'

const mapStateToProps = (state: any) => {
  const { position } = state.visibilityFilter
  const { categories } = state.header
  const { categoryDetail } = state.header
  return {
    position,
    categories,
    categoryDetail,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    onSubmit: (email: string) => {
      dispatch(onNewsletterSubmit(email))
    },
    onReset: () => {
      dispatch(onNewsletterReset())
    },
  }
}

const NewsletterContainer = connect(mapStateToProps, mapDispatchToProps)(NewsletterSignup)

export default NewsletterContainer
