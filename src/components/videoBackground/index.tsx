import styled from '@emotion/styled'
import React from 'react'
import LazyLoad from 'react-lazy-load'
import { useSelector } from 'react-redux'
import { SIDEBAR_ANIMATION_STEPS } from '../../store/ducks/sidebar/animations/types'
import { AppState } from '../../store/rootReducer'
import VideoBackgroundProps from './interface'

const VideoBackground = (props: VideoBackgroundProps) => {
  interface MainContainerPositionProps {
    showProfile: string
  }

  const showHeaderProfile = useSelector((state: AppState) => {
    return state?.headerReducers?.showHeaderProfile
  })

  const VideoBackgroundContainer = styled.div<MainContainerPositionProps>`
    position: fixed;
    height: 100vh;
    overflow: hidden;
    top: 0;
    left: 0;
    width: ${props => {
      if (props.showProfile === SIDEBAR_ANIMATION_STEPS.DEFAULT || props.showProfile === SIDEBAR_ANIMATION_STEPS.HIDE) {
        return '100vw'
      }
      if (props.showProfile === SIDEBAR_ANIMATION_STEPS.SHOW) {
        return 'calc(100vw - 300px)'
      }
      return '100vw'
    }};
    transform: translateZ(0);
    transition: all 0.5s ease-out;
  `

  const HeroVideo = styled.video`
    position: absolute;
    z-index: 99;
    width: 100vw;
    height: auto;
    object-fit: fill;
  `

  const HeroVideoMobile = styled.video`
    position: absolute;
    z-index: 99;
    width: auto;
    height: 100vh;
    object-fit: fill;
  `

  const VideoOverlay = styled.div`
    &:before {
      content: '';
      position: absolute;
      z-index: 100;
      width: 100%;
      height: 100vh;
    }
  `
  return (
    <>
      <VideoBackgroundContainer showProfile={showHeaderProfile} className="hidden-sm">
        <HeroVideo
          src={props.videoPath}
          placeholder="//images.ctfassets.net/ce6fbxhy1t51/1vApipwsb7YV9oVqMRG6xz/9522c94bfd8535004f9b45d8560f2880/desktop_placeholde.jpg
"
          preload="true"
          autoPlay
          muted
          loop
          playsInline
        />
      </VideoBackgroundContainer>
      <VideoBackgroundContainer showProfile={showHeaderProfile} className="hidden-lg">
        <LazyLoad once offset={100}>
          <img
            alt="Knife and Fish Story"
            src="//images.ctfassets.net/ce6fbxhy1t51/whmhpuAWUCAtZmNtPm9co/d7e43e22c6b525d8947c188695ff2f67/mobile-placeholder.jpg"
          />
        </LazyLoad>
      </VideoBackgroundContainer>
    </>
  )
}

export default VideoBackground
