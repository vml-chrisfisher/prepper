import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const RegisterAccount = () => {
  interface TabProps {
    isSelected: boolean
  }

  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

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
    &::placeholder {
      color: #b4b2b2;
      font-size: 14px;
      font-weight: 300;
      font-family: 'Playfair Display:ital', serif;
    }
  `

  const Legal = styled.div`
    font-size: 10px;
    color: #333333;
    font-family: 'Roboto', sans-serif;
  `

  const CartContainer = styled.div``

  return (
    <Container>
      <SearchInput type="input" value={firstName} placeholder="First Name" />
      <SearchInput type="input" value={lastName} placeholder="Last Name" />
      <SearchInput type="email" value={email} placeholder="Email Address" />
      <SearchInput type="password" value={password} placeholder="Password" />
      <SearchInput type="password" value={confirmPassword} placeholder="Confirm Password" />
      <Legal>
        Your password must be at 10 character long, include one capital letter, one lowercase letter and at least one
        special character.
      </Legal>
    </Container>
  )
}

export default RegisterAccount
