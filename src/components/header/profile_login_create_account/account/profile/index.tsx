import styled from '@emotion/styled'
import { Field } from 'formik'
import { Link } from 'gatsby'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HOUSEHOLD } from '../../../../../store/ducks/household/types'
import { onTryLogout } from '../../../../../store/ducks/login/actions'
import { onFetchProfile } from '../../../../../store/ducks/profile/actions'
import { PROFILE_STEPS } from '../../../../../store/ducks/profile/types'
import { AppState } from '../../../../../store/rootReducer'

const Profile = () => {
  interface SliderProps {
    position: number
  }

  const dispatch = useDispatch()

  const userId = useSelector((state: AppState) => {
    return state?.profile?.userId
  })

  const householdMembers = useSelector((state: AppState) => {
    return state?.household?.householdMembers
  })

  const householdMembersPronoun = useSelector((state: AppState) => {
    const length = state?.household?.householdMembers?.length
    switch (length) {
      case 1:
        return 'person'
      default:
        return 'people'
    }
  })

  const nextShipmentDate = useSelector((state: AppState) => {
    const expectedShipDateRaw: Date | undefined = state?.shipments?.nextShipment?.expectingChangesUntil
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
      return `${
        monthes[expectedShipDateRaw.getMonth()]
      } ${expectedShipDateRaw.getDate()}, ${expectedShipDateRaw.getFullYear()}`
    }
    return ''
  })

  const preferencesEmail = useSelector((state: AppState) => {
    return state?.emailPreferences?.emailAddress
  })

  const groceries = useSelector((state: AppState) => {
    if (state?.groceries?.groceriesList.length > 0) {
      return state?.groceries?.groceriesList[0]
    }
  })

  const groceriesPronoun = useSelector((state: AppState) => {
    const length = state?.groceries?.groceriesList[0]?.groceries?.length
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
    const nextBillingDateRaw = state?.billing?.nextBilling?.date
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
      return `${
        monthes[nextBillingDateRaw.getMonth()]
      } ${nextBillingDateRaw.getDate()}, ${nextBillingDateRaw.getFullYear()}`
    }
    return ''
  })

  useEffect(() => {
    if (userId) {
      dispatch(onFetchProfile(userId))
    }
  }, [userId])

  const sliderPosition = useSelector((state: AppState) => {
    const step = state?.household?.sidebarStep
    switch (step) {
      case HOUSEHOLD.TRY_FETCH_HOUSEHOLD:
      case HOUSEHOLD.FETCHING_HOUSEHOLD:
        return 0
      case HOUSEHOLD.FETCH_HOUSEHOLD_SUCCESS:
        return 1
      default:
        return 0
    }
  })

  const onSignOutClick = () => {
    dispatch(onTryLogout())
  }

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

  const PrimaryButtonLink = styled(props => <Link {...props} />)`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding-top: 3px;
    padding-bottom: 7px;
    margin-bottom: 29px;
    text-align: left;
    text-decoration: none;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    width: 100%;
    &:hover > div:nth-child(1) {
      background-color: #f4f2f2;
      transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    }
    &:hover > div:nth-child(2) {
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
    padding-left: 0px;
    user-select: none;
  `

  const CategoryLink = styled.div`
    color: #333333;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    font-weight: normal;
    padding-bottom: 0px;
    padding-left: 15px;
    letter-spacing: 0px;
    user-select: none;
  `

  const CategoryDetail = styled.div`
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #484848;
    font-weight: 500;
    letter-spacing: 0px;
  `

  const CategoryDetailLink = styled.div`
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #484848;
    font-weight: 500;
    letter-spacing: 0px;
    padding-left: 15px;
    padding-bottom: 6px;
    user-select: none;
    width: 100%;
  `

  const CategoryDetailHighlight = styled.div`
    display: inline-block;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    color: #f24e11;
    font-weight: 300;
    user-select: none;
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

  return (
    <Wrapper>
      <Slider position={sliderPosition}>
        <Container>
          <StatusSpinner src="/spinner.svg" />
          <Status>Loading your household.</Status>
        </Container>
        <Container>
          <PrimaryButtonLink to="/household">
            <CategoryLink>Household</CategoryLink>
            {householdMembers && (
              <CategoryDetailLink>
                {householdMembers?.length} {householdMembersPronoun} in your household.
              </CategoryDetailLink>
            )}
          </PrimaryButtonLink>
          {/* <PrimaryButton>
            <Category>Shipments</Category>
            {nextShipmentDate && (
              <>
                <CategoryDetail>Next Shipment: </CategoryDetail>
                <CategoryDetailHighlight>&nbsp; {nextShipmentDate}</CategoryDetailHighlight>
              </>
            )}
          </PrimaryButton>
          <PrimaryButton>
            <Category>Groceries</Category>
            {groceries && groceries.length && (
              <CategoryDetail>
                {groceries?.length}&nbsp;{groceriesPronoun} in your grocery list
              </CategoryDetail>
            )}
          </PrimaryButton> */}
          <PrimaryButtonLink to="household">
            <CategoryLink>Preferences</CategoryLink>
            {preferencesEmail && (
              <>
                <CategoryDetailLink>
                  Sending emails to:&nbsp; <CategoryDetailHighlight>{preferencesEmail}</CategoryDetailHighlight>
                </CategoryDetailLink>
              </>
            )}
          </PrimaryButtonLink>
          {/* <PrimaryButton>
            <Category>Billing</Category>
            {nextBillingDate && (
              <>
                <CategoryDetail>Next approximate billing date:&nbsp;</CategoryDetail>
                <CategoryDetailHighlight>{nextBillingDate}</CategoryDetailHighlight>
              </>
            )}
          </PrimaryButton> */}
          <PrimaryButton onClick={onSignOutClick}>
            <Category>Sign Out</Category>
          </PrimaryButton>
        </Container>
      </Slider>
    </Wrapper>
  )
}

export default Profile
