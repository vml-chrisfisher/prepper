import styled from '@emotion/styled'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const RegisterAccount = () => {
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

  const Legal = styled.div`
    color: #333333;
    font-family: 'Roboto', sans-serif;
    font-size: 10px;
    padding-bottom: 30px;
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
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    text-transform: uppercase;
    width: 100%;
    &:hover {
      background-color: #ffffff;
      border: 1px solid #333333;
      color: #f24e11;
      transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    }
  `

  const CartContainer = styled.div``
  const initialValues = {
    registerFirstName: '',
    registerLastName: '',
    registerEmail: '',
    registerPassword: '',
    registerConfirmPassword: '',
  }

  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2))
  }

  return (
    <Container>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <SearchInput id="registerFirstName" name="registerFirstName" type="input" placeholder="First Name" />
          <SearchInput id="registerLastName" name="registerLastName" type="input" placeholder="Last Name" />
          <SearchInput id="registerEmail" name="registerEmail" placeholder="Email Address" />
          <SearchInput id="registerPassword" name="registerPassword" placeholder="Password" />
          <SearchInput
            id="registerConfirmPassword"
            name="registerConfirmPassword"
            type="password"
            placeholder="Confirm Password"
          />
          <Legal>
            Your password must be at 10 character long, include one capital letter, one lowercase letter and at least
            one special character.
          </Legal>
          <PrimaryButton>Create Account</PrimaryButton>
        </Form>
      </Formik>
    </Container>
  )
}

export default RegisterAccount
