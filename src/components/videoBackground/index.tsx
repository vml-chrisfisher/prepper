import React from 'react'
import VideoBackgroundProps from './interface'
import styled from '@emotion/styled'

const VideoBackground = (props: VideoBackgroundProps) => (
    <VideoBackgroundContainer>
        <HeroVideo src={props.videoPath} preload="true" autoPlay muted loop />
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
    min-width: 100%;
    min-height: 100%;
`

const VideoOverlay = styled.div`
    &:before {
        content: '';
        position: absolute;
        z-index: 100;
        width: 100%;
        height: 100vh;
        background-color: rgba(51, 51, 51, 0.69);
    }
`

export default VideoBackground
