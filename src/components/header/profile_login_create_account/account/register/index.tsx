import styled from '@emotion/styled';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { EmailPreferences } from '../../../../../store/ducks/emailPreferences/interfaces';
import { EMAIL_SEND_FREQUENCY } from '../../../../../store/ducks/emailPreferences/types';
import { onTryCreateHousehold, onTryFetchHousehold } from '../../../../../store/ducks/household/actions';
import { Household, HOUSEHOLD_MEMBER_ROLE, HouseholdMember } from '../../../../../store/ducks/household/interfaces';
import { onTryCreateNewProfile } from '../../../../../store/ducks/profile/actions';
import { ProfileSubmit } from '../../../../../store/ducks/profile/interface';
import { PROFILE, PROFILE_STEPS } from '../../../../../store/ducks/profile/types';
import { AppState } from '../../../../../store/rootReducer';

const RegisterAccount = () => {
  interface SliderProps {
    position: number
  }

  const dispatch = useDispatch()

  const sliderPosition = useSelector((state: AppState) => {
    const step = state?.profile?.profileStep
    switch (step) {
      case PROFILE_STEPS.CREATE_PROFILE_DEFAULT:
        return 0
      case PROFILE.CREATING_NEW_PROFILE:
      case PROFILE.TRY_CREATE_NEW_PROFILE:
        return 1
      case PROFILE_STEPS.CREATE_PROFILE_FAILURE:
        return 0
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
    margin-left: 16px;
    margin-right: 16px;
    margin-top: 40px;
    width: calc(50% - 32px);
  `

  const FormInput = ({ ...props }) => {
    return <Field className="form--input" {...props} />
  }

  const FormError = styled.div`
    color: #f24e11;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    padding-top: 15px;
    padding-bottom: 15px;
  `

  const PrimaryButton = styled.button`
    background-color: #f24e11;
    border: 1px solid transparent;
    color: #ffffff;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    height: 60px;
    letter-spacing: 3px;
    padding-top: 23px;
    padding-bottom: 23px;
    text-transform: uppercase;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    width: 100%;
    &:hover {
      background-color: #ffffff;
      border: 1px solid #333333;
      color: #f24e11;
      transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    }
  `

  const StatusSpinner = styled.img`
    width: 50px;
    margin: 0 auto;
  `

  const Status = styled.div`
    color: #333333;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 100;
    text-align: center;
  `

  const SearchInput = styled.input`
    width: calc(100% - 20px);
    height: 27px;
    background-color: transparent;
    border: none;
    border-bottom: solid 0.5px #333333;
    font-size: 14px;
    color: #333333;
    font-family: 'Roboto', sans-serif;
    margin: auto 0;
    margin-bottom: 30px;
    padding-bottom: 5px;
    &::placeholder {
      color: #b4b2b2;
      font-size: 14px;
      font-weight: 300;
      font-family: 'Playfair Display', serif;
    }
  `

  const Legal = styled.div`
    color: #333333;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    padding-bottom: 30px;
  `

  const LegalSubmitting = styled.div`
    color: #333333;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    padding-bottom: 0px;
  `

  const createHousehold = (firstName: string, lastName: string, email: string, userId: string, passwordLength: number) => {
    const household: Household = {} as Household
    household.name = lastName;

    const emailPreferences: EmailPreferences = {} as EmailPreferences
    emailPreferences.recipes = EMAIL_SEND_FREQUENCY.DAILY
    emailPreferences.articles = EMAIL_SEND_FREQUENCY.DAILY
    emailPreferences.roundups = EMAIL_SEND_FREQUENCY.MONTHLY
    emailPreferences.emailAddress = email
    household.emailPreferences = emailPreferences

    const member: HouseholdMember = {} as HouseholdMember
    member.emailAddress = email
    member.id = userId
    member.firstName = firstName
    member.lastNamse = lastName
    member.passwordLength = passwordLength
    member.role = HOUSEHOLD_MEMBER_ROLE.FAMILY_OWNER
    household.householdMembers = [member]

    return household
  }

  const onSubmit = async (values: Values, { setSubmitting }) => {

    const { registerFirstName, registerLastName, registerEmail, registerPassword } = values
    console.log("submit")
    setSubmitting(true)
    try {
      const response = await dispatch(
        onTryCreateNewProfile(
          {
            registerFirstName,
            registerLastName,
            registerEmail,
            registerPassword,
          }
        ),
      )
      console.log("YOU: ", response)
      const { firstName, lastName, email, userId } = response.data
      const household = createHousehold(firstName, lastName, email, userId, registerPassword.length)
      console.log("IN COMPONENT: ", household)
      dispatch(onTryCreateHousehold(household))

    }
    catch (error) {
      console.log(error)
    }

  }

  interface Values {
    registerFirstName: string
    registerLastName: string
    registerEmail: string
    registerPassword: string
    registerConfirmPassword: string
  }

  const initialValues = {
    registerFirstName: '',
    registerLastName: '',
    registerEmail: '',
    registerPassword: '',
    registerConfirmPassword: '',
  }

  const t: Yup.StringSchema

  const registerValidationSchema = Yup.object().shape({
    registerFirstName: Yup.string()
      .required('First name is required'),
    registerLastName: Yup.string()
      .required('Last name is required'),
    registerEmail: Yup.string()
      .email('We need a valid email address to even to start to think about logging you in.')
      .required('Email required'),
    registerPassword: Yup.string()
      .matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, 'Your password must be at 8 character long, include one capital letter, one lowercase letter and atleast one special character.')
      .required('We need your password.'),
    registerConfirmPassword: Yup.string()
      .oneOf([Yup.ref('registerPassword'), null], 'Passwords do not match')
      .required('Confirm password is required.')
  })

  return (
    <Wrapper>
      <Slider position={sliderPosition}>
        <Container>
          <Formik initialValues={initialValues} validationSchema={registerValidationSchema} onSubmit={onSubmit}>
            {(form) => {
              console.log(form)
              return (
                <Form onSubmit={(e) => {
                  console.log(e)
                  e.stopPropagation()
                  e.preventDefault()
                  form.setSubmitting(false)
                  form.handleSubmit()
                }}>
                  {form.errors.registerFirstName && form.touched.registerFirstName ? (
                    <FormError>{form.errors.registerFirstName}</FormError>
                  ) : (
                    <></>
                  )}
                  {form.errors.registerLastName && form.touched.registerLastName ? (
                    <FormError>{form.errors.registerLastName}</FormError>
                  ) : (
                    <></>
                  )}
                  {form.errors && form.errors.registerEmail && form.touched.registerEmail ? (
                    <FormError>{form.errors.registerEmail}</FormError>
                  ) : (
                    <></>
                  )}
                  {form.errors && form.errors.registerPassword && form.touched.registerPassword ? (
                    <FormError>{form.errors.registerPassword}</FormError>
                  ) : (
                    <></>
                  )}
                  {form.errors && form.errors.registerConfirmPassword && form.touched.registerConfirmPassword ? (
                    <FormError>{form.errors.registerConfirmPassword}</FormError>
                  ) : (
                    <></>
                  )}
                  <FormInput id="registerFirstName" autoComplete="given-name" name="registerFirstName" type="input" placeholder="First Name" />
                  <FormInput id="registerLastName" autoComplete="family-name" name="registerLastName" type="input" placeholder="Last Name" />
                  <FormInput id="registerEmail" autoComplete="email" name="registerEmail" placeholder="Email Address" />
                  <FormInput id="registerPassword" type="password" autoComplete="off" name="registerPassword" placeholder="Password" />
                  <FormInput
                    id="registerConfirmPassword"
                    name="registerConfirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    autoComplete="off"
                  />
                  {!form.isSubmitting && <Legal>
                    Your password must be at 8 character long, include one capital letter, one lowercase letter and at
                    least one special character.
                  </Legal>}
                  {form.isSubmitting && <LegalSubmitting>
                    Your password must be at 8 character long, include one capital letter, one lowercase letter and at
                    least one special character.
                  </LegalSubmitting>}

                  {!form.isSubmitting && <PrimaryButton type="submit">Create Account</PrimaryButton>}
                  {form.isSubmitting && <div>
                    <StatusSpinner src="/spinner.svg" />
                    <Status>Creating your account.</Status>
                  </div>}
                </Form>
              )
            }}
          </Formik>
        </Container>
        <Container>
          <StatusSpinner src="/spinner.svg" />
          <Status>Seeing if we know you.</Status>
        </Container>
      </Slider>
    </Wrapper>
  )
}

export default RegisterAccount
