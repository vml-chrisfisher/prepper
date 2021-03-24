import styled from '@emotion/styled'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SIDEBAR_ANIMATION_STEPS } from '../../store/actions/types'
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
    return state?.visibilityFilter?.showHeaderProfile
  })

  const Container = styled.div<MainContainerPositionProps>`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    background-color: #ffffff;
    animation: ${props => {
      if (props.showProfile === SIDEBAR_ANIMATION_STEPS.DEFAULT) {
        return ''
      }
      if (props.showProfile === SIDEBAR_ANIMATION_STEPS.SHOW) {
        return 'moveMovie 0.5s ease-out forwards '
      }
      if (props.showProfile === SIDEBAR_ANIMATION_STEPS.HIDE) {
        return 'moveMovieBack 0.5s ease-out forwards '
      }
      return ''
    }};
    background-color: #ffffff;
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
