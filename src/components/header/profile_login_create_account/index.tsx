import styled from '@emotion/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showSidebarAccount, showSidebarCart } from '../../../store/actions'
import { HEADER_ACTION_TYPES } from '../../../store/actions/types'
import SidebarAccount from './account'

const Sidebar = () => {
  interface TabProps {
    isSelected: boolean
  }

  const dispatch = useDispatch()

  const showAccount = useSelector(state => {
    console.log(state)
    return state.sidebar.showAccount
  })
  const showCart = useSelector(state => {
    return state.sidebar.showCart
  })

  const onAccountClick = () => {
    dispatch(showSidebarAccount())
  }
  const onCartClick = () => {
    console.log('here')
    dispatch(showSidebarCart())
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
    <Container>
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
