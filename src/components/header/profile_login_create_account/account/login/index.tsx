import styled from '@emotion/styled'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

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

  const onSubmit1 = values => {
    console.log('here', values)
    const { loginEmail, loginPassword } = values
    console.log(loginEmail, loginPassword)
  }
  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={onSubmit1}>
        <Form>
          <SearchInput id="loginEmail" name="loginEmail" type="email" placeholder="Email Address" />
          <SearchInput id="loginPassword" name="loginPassword" type="password" placeholder="Password" />
          <PrimaryButton type="submit">LOGIN</PrimaryButton>
        </Form>
      </Formik>
    </Container>
  )
}

export default Login
