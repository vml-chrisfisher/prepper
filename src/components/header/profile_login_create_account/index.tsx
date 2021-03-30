import styled from '@emotion/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { HEADER_ACTION_TYPES } from '../../../store/ducks/header/types'
import { showSidebarAccount, showSidebarCart } from '../../../store/ducks/sidebar/actions/actions'
import { SIDEBAR_ANIMATION_STEPS } from '../../../store/ducks/sidebar/animations/types'
import { AppState } from '../../../store/rootReducer'
import SidebarAccount from './account'

const Sidebar = () => {
  interface TabProps {
    isSelected: boolean
  }

  interface MainContainerPositionProps {
    showProfile: string
  }

  const dispatch = useDispatch()

  const showHeaderProfile = useSelector((state: AppState) => {
    return state?.header?.showHeaderProfile
  })

  const showAccount = useSelector((state: AppState) => {
    return state.sidebar.showAccount
  })
  const showCart = useSelector((state: AppState) => {
    return state.sidebar.showCart
  })

  const onAccountClick = () => {
    dispatch(showSidebarAccount())
  }
  const onCartClick = () => {
    dispatch(showSidebarCart())
  }

  const Container = styled.div<MainContainerPositionProps>`
    position: fixed;
    width: 300px;
    height: 100%;
    top: 0;
    right: ${props => {
      if (props.showProfile === SIDEBAR_ANIMATION_STEPS.PROFILE_CREATION) {
        return '-300px'
      }
      return '0px'
    }};
    transition: all 1s ease-out;
    background-color: #ffffff;
    z-index: 1;
  `

  const SidebarClose = styled.button`
    background-color: transparent;
    background-image: url(/close.svg);
    background-repeat: no-repeat;
    border: none;
    cursor: pointer;
    width: 50px;
    height: 50px;
    margin-left: 10px;
    margin-top: 10px;
  `

  const TabContainer = styled.div`
    padding-left: 40px;
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

  const CartContainer = styled.div``

  return (
    <Container showProfile={showHeaderProfile}>
      <SidebarClose onClick={() => dispatch({ type: HEADER_ACTION_TYPES.HIDE_PROFILE_LOGIN })} />
      <TabContainer>
        <Tab isSelected={showAccount} onClick={() => onAccountClick()}>
          Account
        </Tab>
        <Tab isSelected={showCart} onClick={() => onCartClick()}>
          Cart
        </Tab>
      </TabContainer>
      <SubContainer isSelected={showAccount}>
        <SidebarAccount></SidebarAccount>
      </SubContainer>
      <SubContainer isSelected={showCart}>Cart</SubContainer>
    </Container>
  )
}

export default Sidebar
