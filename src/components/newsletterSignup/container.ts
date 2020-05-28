import { connect } from 'react-redux'
import NewsletterSignup from '.'
import { onNewsletterSubmit } from '../../store/actions'

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
    onSubmit: (email: string) => {
      dispatch(onNewsletterSubmit(email))
    }
  }
}

const NewsletterContainer = connect(mapStateToProps, mapDispatchToProps)(NewsletterSignup)

export default NewsletterContainer