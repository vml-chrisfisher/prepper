import styled from '@emotion/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showLogin, showRegister } from '../../../../store/ducks/sidebar/actions/actions'
import { AppState } from '../../../../store/rootReducer'
import Login from './login'
import Profile from './profile'
import RegisterAccount from './register'

const SidebarAccount = () => {
  interface TabProps {
    isSelected: boolean
  }

  interface SliderProps {
    position: number
  }

  const dispatch = useDispatch()

  const showLoginState = useSelector((state: AppState) => {
    return state.sidebarActionReducers.showLogin
  })
  const showRegisterState = useSelector((state: AppState) => {
    return state.sidebarActionReducers.showRegister
  })
  const showProfileState = useSelector((state: AppState) => {
    return state.sidebarActionReducers.showProfile
  })

  const isLoggedIn = useSelector((state: AppState) => {
    return state?.loginReducer?.userId ? 1 : 0
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
    padding-top: 20px;
  `

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
  const SliderContainer = styled.div`
    margin-top: 0px;
    width: calc(50%);
  `

  const CartContainer = styled.div``

  return (
    <>
      <Wrapper>
        <Slider position={isLoggedIn}>
          <SliderContainer>
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
            <SubContainer isSelected={showLoginState}>
              <Login />
            </SubContainer>
            <SubContainer isSelected={showRegisterState}>
              <RegisterAccount />
            </SubContainer>
          </SliderContainer>
          <SliderContainer>
            <Profile />
          </SliderContainer>
        </Slider>
      </Wrapper>
    </>
  )
}

export default SidebarAccount
