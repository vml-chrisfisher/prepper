import styled from '@emotion/styled'
import { Field, Form, Formik, FormikHelpers, useField, useFormikContext } from 'formik'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { onSubmitLogin } from '../../../../../store/ducks/login/actions'
import { LOGIN_STEPS } from '../../../../../store/ducks/login/types'
import { onFetchProfile } from '../../../../../store/ducks/profile/actions'
import { PROFILE_STEPS } from '../../../../../store/ducks/profile/types'
import { AppState } from '../../../../../store/rootReducer'

const Profile = (props: { userId?: string }) => {
  interface SliderProps {
    position: number
  }

  const dispatch = useDispatch()

  const userId = useSelector((state: AppState) => {
    if (state?.profileReducer?.userId) {
      console.log('PROFILE USERSELECTOR: ', state)
    }

    return state?.profileReducer?.userId
  })

  const householdMembers = useSelector((state: AppState) => {
    return state?.profileReducer?.householdMembers
  })

  const householdMembersPronoun = useSelector((state: AppState) => {
    const length = state?.profileReducer?.householdMembers.length
    switch (length) {
      case 1:
        return 'person'
      case 0:
      case undefined:
      case null:
        return ''
      default:
        return 'people'
    }
  })

  const nextShipmentDate = useSelector((state: AppState) => {
    console.log(state)
    const expectedShipDateRaw: Date = state?.profileReducer?.shipments?.next?.expectedShipDate
    if (expectedShipDateRaw) {
      const monthes = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      const month = expectedShipDateRaw.getMonth()
      return `${
        monthes[expectedShipDateRaw.getMonth()]
      } ${expectedShipDateRaw.getDate()}, ${expectedShipDateRaw.getFullYear()}`
    }
    return ''
  })

  const preferencesEmail = useSelector((state: AppState) => {
    return state?.profileReducer?.emailPreferences?.email
  })

  const groceries = useSelector((state: AppState) => {
    return state?.profileReducer?.groceries
  })

  const groceriesPronoun = useSelector((state: AppState) => {
    const length = state?.profileReducer?.groceries.length
    switch (length) {
      case 1:
        return 'item'
      case 0:
        return 'items'
      case undefined:
      case null:
        return ''
      default:
        return 'items'
    }
  })

  const nextBillingDate = useSelector((state: AppState) => {
    const nextBillingDateRaw = state?.profileReducer?.billingInformation?.nextBilling
    if (nextBillingDateRaw) {
      const monthes = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ]
      const month = nextBillingDateRaw.getMonth()
      return `${
        monthes[nextBillingDateRaw.getMonth()]
      } ${nextBillingDateRaw.getDate()}, ${nextBillingDateRaw.getFullYear()}`
    }
    return ''
  })

  useEffect(() => {
    if (userId) {
      console.log('IN COMPONENT USER ID: ', userId)
      dispatch(onFetchProfile(userId))
    }
  }, [userId])

  const sliderPosition = useSelector((state: AppState) => {
    const step = state?.profileReducer?.profileStep
    switch (step) {
      case PROFILE_STEPS.LOADING:
        return 0
      case PROFILE_STEPS.UPDATING:
        return 0
      case PROFILE_STEPS.LOADING_SUCCESS:
        return 1
      case PROFILE_STEPS.UPDATING_SUCCESS:
        return 1
      default:
        return 0
    }
  })

  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
  `

  const Slider = styled.div<SliderProps>`
    display: flex;
    height: 100%;
    width: 200%;
    transform: ${props => {
      return 'translateX(' + props.position * -50 + '%)'
    }};
    transition-property: transform;
    transition-durarion: 1s;
  `
  const Container = styled.div`
    margin-top: 0px;
    width: 50%;
  `

  const FormInput = ({ ...props }) => {
    return <Field className="form--input" {...props} />
  }

  const PrimaryButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding-top: 3px;
    padding-bottom: 7px;
    margin-bottom: 29px;
    text-align: left;
    padding-left: 15px;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    width: 100%;
    &:hover {
      background-color: #f4f2f2;
      transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    }
  `

  const Category = styled.div`
    color: #333333;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: normal;
    padding-bottom: 0px;
    letter-spacing: 0px;
  `

  const CategoryDetail = styled.div`
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #484848;
    font-weight: 500;
    letter-spacing: 0px;
  `

  const CategoryDetailHighlight = styled.div`
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #f24e11;
    font-weight: 300;
  `

  const StatusSpinner = styled.img`
    width: 50px;
    margin: 0 auto;
    padding-top: 50px;
  `

  const Status = styled.div`
    color: #333333;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 100;
    text-align: center;
  `

  interface Values {
    loginEmail: string
    loginPassword: string
  }
  const initialValues = {
    loginEmail: '',
    loginPassword: '',
  }
  return (
    <Wrapper>
      <Slider position={sliderPosition}>
        <Container>
          <StatusSpinner src="/spinner.svg" />
          <Status>Loading your household.</Status>
        </Container>
        <Container>
          <PrimaryButton>
            <Category>Household</Category>
            <CategoryDetail>
              {householdMembers.length} {householdMembersPronoun} in your household.
            </CategoryDetail>
          </PrimaryButton>
          <PrimaryButton>
            <Category>Shipments</Category>
            <CategoryDetail>Next Shipment: </CategoryDetail>
            <CategoryDetailHighlight>&nbsp; {nextShipmentDate}</CategoryDetailHighlight>
          </PrimaryButton>
          <PrimaryButton>
            <Category>Groceries</Category>
            <CategoryDetail>
              {groceries.length}&nbsp;{groceriesPronoun} in your grocery list
            </CategoryDetail>
          </PrimaryButton>
          <PrimaryButton>
            <Category>Preferences</Category>
            <CategoryDetail>Sending emails to:&nbsp;</CategoryDetail>
            <CategoryDetailHighlight>{preferencesEmail}</CategoryDetailHighlight>
          </PrimaryButton>
          <PrimaryButton>
            <Category>Billing</Category>
            <CategoryDetail>Next approximate billing date:&nbsp;</CategoryDetail>
            <CategoryDetailHighlight>{nextBillingDate}</CategoryDetailHighlight>
          </PrimaryButton>
          <PrimaryButton>
            <Category>Sign Out</Category>
          </PrimaryButton>
        </Container>
      </Slider>
    </Wrapper>
  )
}

export default Profile
