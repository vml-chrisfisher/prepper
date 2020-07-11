import styled from '@emotion/styled'
import React from 'react'
import VideoBackgroundProps from './interface'

const VideoBackground = (props: VideoBackgroundProps) => (
  <>
    <VideoBackgroundContainer className="hidden-sm">
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
      <VideoOverlay>
        <div></div>
      </VideoOverlay>
    </VideoBackgroundContainer>
    <VideoBackgroundContainer className="hidden-lg">
      <HeroVideo
        src={props.mobileVideoPath}
        placeholder="//images.ctfassets.net/ce6fbxhy1t51/whmhpuAWUCAtZmNtPm9co/d7e43e22c6b525d8947c188695ff2f67/mobile-placeholder.jpg"
        preload="true"
        autoPlay
        muted
        loop
        playsInline
      />
      <VideoOverlay>
        <div></div>
      </VideoOverlay>
    </VideoBackgroundContainer>
  </>
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
  width: auto;
  height: 100vh;
  object-fit: fill;
  @media (max-width: 767px) {
    height: 100vh;
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
