import styled from '@emotion/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SIDEBAR_ANIMATION_STEPS } from '../../store/ducks/sidebar/animations/types'
import { AppState } from '../../store/rootReducer'

interface Props {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  children?: any
  id?: string
  /* eslint-enable  @typescript-eslint/no-explicit-any */
}

const MainContainer = ({ children, id }: Props) => {
  interface MainContainerPositionProps {
    showProfile: string
  }

  const dispatch = useDispatch()
  const showHeaderProfile = useSelector((state: AppState) => {
    return state?.headerReducers?.showHeaderProfile
  })

  const Container = styled.div<MainContainerPositionProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: ${props => {
      if (props.showProfile === SIDEBAR_ANIMATION_STEPS.DEFAULT || props.showProfile === SIDEBAR_ANIMATION_STEPS.HIDE) {
        return '0px'
      }
      if (props.showProfile === SIDEBAR_ANIMATION_STEPS.SHOW) {
        return '-300px'
      }
    }};
    background-color: #ffffff;
    transition: all 0.5s ease-out;
    -webkit-backface-visibility: hidden;
    z-index: 2;
  `
  return (
    <Container id={id} showProfile={showHeaderProfile}>
      {children}
    </Container>
  )
}

export default MainContainer
