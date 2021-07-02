import styled from '@emotion/styled';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Yup from 'yup';
import { onSubmitLogin } from '../../../../../store/ducks/login/actions';
import { LOGIN_STEPS } from '../../../../../store/ducks/login/types';
import { AppState } from '../../../../../store/rootReducer';

const Login = () => {
  interface SliderProps {
    position: number
  }

  const dispatch = useDispatch()

  const sliderPosition = useSelector((state: AppState) => {
    const step = state?.login?.loginStep
    switch (step) {
      case LOGIN_STEPS.DEFAULT:
        return 0
      case LOGIN_STEPS.LOGGING_IN:
        return 1
      case LOGIN_STEPS.LOGIN_FAILURE:
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

  interface Values {
    loginEmail: string
    loginPassword: string
  }
  const initialValues = {
    loginEmail: '',
    loginPassword: '',
  }

  const loginValidationSchema = Yup.object().shape({
    loginEmail: Yup.string()
      .email('We need a valid email address to even to start to think about logging you in.')
      .required('Email required'),
    loginPassword: Yup.string().required('We need your password.'),
  })

  const onSubmit = (values: Values) => {
    const { loginEmail, loginPassword } = values
    dispatch(
      onSubmitLogin({
        username: loginEmail,
        password: loginPassword,
      }),
    )
  }
  return (
    <Wrapper>
      <Slider position={sliderPosition}>
        <Container>
          <Formik initialValues={initialValues} onSubmit={onSubmit}>
            {({ errors, touched }) => {
              console.log(errors)
              return (
                <Form>
                  {errors.loginEmail && touched.loginEmail ? <FormError>{errors.loginEmail}</FormError> : <></>}
                  {errors.loginPassword && touched.loginPassword ? (
                    <FormError>{errors.loginPassword}</FormError>
                  ) : (
                    <></>
                  )}
                  <FormInput id="loginEmail" autoComplete="username" name="loginEmail" type="email" placeholder="Email Address" />
                  <FormInput
                    id="loginPassword"
                    name="loginPassword"
                    autoComplete="current-password"
                    type="password"
                    placeholder="Password"
                    suggested="current-password"
                  />
                  <PrimaryButton type="submit">LOGIN</PrimaryButton>
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

export default Login
