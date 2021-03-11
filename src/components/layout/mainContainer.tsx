import styled from '@emotion/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

interface Props {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  children?: any
  id?: string
  /* eslint-enable  @typescript-eslint/no-explicit-any */
}

const MainContainer = ({ children, id }: Props) => {
  interface MainContainerPositionProps {
    showProfile: boolean
  }

  const dispatch = useDispatch()
  const showHeaderProfile = useSelector(state => {
    return state.visibilityFilter.showHeaderProfile
  })

  const Container = styled.div<MainContainerPositionProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    transform: ${props => (props.showProfile ? 'translateX(-300px)' : 'translateX(0)')};
    background-color: #ffffff;
    z-index: 2;
  `
  return (
    <Container id={id} showProfile={showHeaderProfile}>
      {children}
    </Container>
  )
}

export default MainContainer
