import styled from '@emotion/styled'
import React from 'react'
import { isBrowser, isMobile } from 'react-device-detect'
import LazyLoad from 'react-lazy-load'
import VideoBackgroundProps from '../videoBackground/interface'

const windowWidthHalf = typeof window !== 'undefined' ? window.innerWidth / 2 : 600

const VideoStoryBackground = (props: VideoBackgroundProps) => (
  <>
    {isBrowser && (
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
      </VideoBackgroundContainer>
    )}
    {isMobile && (
      <VideoBackgroundContainer className="hidden-lg">
        <LazyLoad once offset={100}>
          <img
            alt="Knife and Fish Story"
            src={`//images.ctfassets.net/ce6fbxhy1t51/whmhpuAWUCAtZmNtPm9co/d7e43e22c6b525d8947c188695ff2f67/mobile-placeholder.jpg?fm=webp&q=70&w=${Math.round(
              windowWidthHalf,
            )}&fit=fill`}
          />
        </LazyLoad>
      </VideoBackgroundContainer>
    )}
  </>
)

const VideoBackgroundContainer = styled.div`
  position: absolute;
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

export default VideoStoryBackground
