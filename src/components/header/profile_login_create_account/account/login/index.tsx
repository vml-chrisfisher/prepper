import styled from '@emotion/styled'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Login = () => {
  interface TabProps {
    isSelected: boolean
  }

  const dispatch = useDispatch()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

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

  const CartContainer = styled.div``

  return (
    <Container>
      <SearchInput type="email" value={email} placeholder="Email Address" />
      <SearchInput type="password" value={password} placeholder="Password" />
    </Container>
  )
}

export default Login
