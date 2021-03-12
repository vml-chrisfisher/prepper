import styled from '@emotion/styled'
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'

const Login = () => {
  const Container = styled.div`
    margin-left: 16px;
    margin-right: 16px;
    margin-tio: 40px;
  `

  const SearchInput = styled.input`
    width: 100%;
    height: 27px;
    background-color: transparent;
    border: none;
    border-bottom: solid 0.5px #333333;
    font-size: 14px;
    color: #333333;
    font-family: 'Playfair Display', serif;
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

  const onSubmit = (values: { loginEmail: string; loginPassword: string }) => {
    const { loginEmail, loginPassword } = values
  }
  return (
    <Container>
      <Formik initialValues={initialValues} validationSchema={loginValidationSchema} onSubmit={onSubmit}>
        {({ errors, touched }) => {
          console.log(errors)
          return (
            <Form>
              {errors.loginEmail && touched.loginEmail ? <FormError>{errors.loginEmail}</FormError> : <></>}
              {errors.loginPassword && touched.loginPassword ? <FormError>{errors.loginPassword}</FormError> : <></>}
              <SearchInput id="loginEmail" name="loginEmail" type="email" placeholder="Email Address" />
              <SearchInput
                id="loginPassword"
                name="loginPassword"
                autoComplete="current-password"
                type="password"
                placeholder="Password"
              />
              <PrimaryButton type="submit">LOGIN</PrimaryButton>
            </Form>
          )
        }}
      </Formik>
    </Container>
  )
}

export default Login
