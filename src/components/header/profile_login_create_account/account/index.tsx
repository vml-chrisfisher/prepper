import styled from '@emotion/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showLogin, showRegister } from '../../../../store/actions'
import { HEADER_ACTION_TYPES } from '../../../store/actions/types'
import { ProfileLoginProps } from './interface'
import RegisterAccount from './register'

const SidebarAccount = () => {
  interface TabProps {
    isSelected: boolean
  }

  const dispatch = useDispatch()

  const showLoginState = useSelector(state => {
    return state.sidebar.showLogin
  })
  const showRegisterState = useSelector(state => {
    return state.sidebar.showRegister
  })
  const showProfileState = useSelector(state => {
    return state.sidebar.showProfile
  })

  const onLoginClick = () => {
    dispatch(showLogin())
  }
  const onRegisterClick = () => {
    dispatch(showRegister())
  }

  const Container = styled.div`
    position: absolute;
    width: 300px;
    height: 100%;
    top: 0;
    right: 0;
    background-color: #ffffff;
    z-index: 1;
  `

  const TabContainer = styled.div`
    padding-left: 10px;
    display: inline-block;
  `

  const Tab = styled.button<TabProps>`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding-right: 20px;
    padding-top: 17px;
    font-weight: ${props => {
      return props.isSelected ? '500' : '100'
    }};
    color: #333333;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    &:hover {
      color: #f24e11;
      transition: color 1s ease;
    }
  `

  const SubContainer = styled.div<TabProps>`
    display: ${props => {
      return props.isSelected ? 'block' : 'none'
    }};
    padding-top: 60px;
  `

  const CartContainer = styled.div``

  return (
    <>
      <TabContainer>
        <Tab
          onClick={() => {
            onLoginClick()
          }}
          isSelected={showLoginState}
        >
          Login
        </Tab>
        <Tab
          onClick={() => {
            onRegisterClick()
          }}
          isSelected={showRegisterState}
        >
          Register
        </Tab>
      </TabContainer>
      <SubContainer isSelected={showLoginState}>Login</SubContainer>
      <SubContainer isSelected={showRegisterState}>
        <RegisterAccount />
      </SubContainer>
      <SubContainer isSelected={showProfileState}>Account</SubContainer>
    </>
  )
}

export default SidebarAccount
