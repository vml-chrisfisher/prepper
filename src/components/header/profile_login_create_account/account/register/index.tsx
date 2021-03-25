import styled from '@emotion/styled'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { createProfile } from '../../../../../store/ducks/profile/actions'
import { PROFILE_STEPS } from '../../../../../store/ducks/profile/types'

const RegisterAccount = () => {
  interface SliderProps {
    position: number
  }

  const dispatch = useDispatch()

  const sliderPosition = useSelector((state: AppState) => {
    const step = state?.loginReducer?.loginStep
    switch (step) {
      case PROFILE_STEPS.CREATE_PROFILE_DEFAULT:
        return 0
      case PROFILE_STEPS.CREATING_PROFILE:
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
    padding-top: 50px;
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

  const registerValidationSchema = Yup.object().shape({
    registerFirstName: Yup.string().required('Your first name is required'),
    registerLastName: Yup.string().required('Your last name is required'),
    registerEmail: Yup.string()
      .email('We need a valid email address')
      .required('Your email address is required.'),
    registerPassword: Yup.string()
      .min(8, 'Too short')
      .required('Required'),
    registerConfirmPassword: Yup.mixed().test('match', 'Password do not match', () => {
      const password = Yup.ref('registerPassword')
      const confirmPassword = Yup.ref('registerConfirmPassword')
      return password === confirmPassword
    }),
  })

  const onSubmit = (values: Values) => {
    const { registerFirstName, registerLastName, registerEmail, registerPassword } = values
    dispatch(
      createProfile({
        registerFirstName,
        registerLastName,
        registerEmail,
        registerPassword,
      }),
    )
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

  return (
    <Wrapper>
      <Slider position={sliderPosition}>
        <Container>
          <Formik initialValues={initialValues} validationSchema={registerValidationSchema} onSubmit={onSubmit}>
            {({ errors, touched }) => {
              return (
                <Form>
                  {errors.registerFirstName && touched.registerFirstName ? (
                    <FormError>{errors.registerFirstName}</FormError>
                  ) : (
                    <></>
                  )}
                  {errors.registerLastName && touched.registerLastName ? (
                    <FormError>{errors.registerLastName}</FormError>
                  ) : (
                    <></>
                  )}
                  {errors.registerEmail && touched.registerEmail ? (
                    <FormError>{errors.registerEmail}</FormError>
                  ) : (
                    <></>
                  )}
                  {errors.registerPassword && touched.registerPassword ? (
                    <FormError>{errors.registerPassword}</FormError>
                  ) : (
                    <></>
                  )}
                  {errors.registerConfirmPassword && touched.registerConfirmPassword ? (
                    <FormError>{errors.registerConfirmPassword}</FormError>
                  ) : (
                    <></>
                  )}
                  <FormInput id="registerFirstName" name="registerFirstName" type="input" placeholder="First Name" />
                  <FormInput id="registerLastName" name="registerLastName" type="input" placeholder="Last Name" />
                  <FormInput id="registerEmail" name="registerEmail" placeholder="Email Address" />
                  <FormInput id="registerPassword" name="registerPassword" placeholder="Password" />
                  <FormInput
                    id="registerConfirmPassword"
                    name="registerConfirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                  />
                  <Legal>
                    Your password must be at 10 character long, include one capital letter, one lowercase letter and at
                    least one special character.
                  </Legal>
                  <PrimaryButton type="submit">Create Account</PrimaryButton>
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
