import styled from '@emotion/styled'
import React from 'react'
import VideoBackgroundProps from './interface'

const VideoBackground = (props: VideoBackgroundProps) => (
  <VideoBackgroundContainer>
    <HeroVideo src={props.videoPath} preload="true" autoPlay muted loop playsInline />
    <VideoOverlay>
      <div></div>
    </VideoOverlay>
  </VideoBackgroundContainer>
)

const VideoBackgroundContainer = styled.div`
  position: fixed;
  height: 100vh;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100vw;
`

const HeroVideo = styled.video`
  position: absolute;
  z-index: 99;
  width: 100%;
  height: auto;
  object-fit: fill;
  @media (max-width: 767px) {
    height: 100%;
    width: auto;
  }
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

export default VideoBackground
