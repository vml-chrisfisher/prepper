import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileCard from '../profileCard'

const ProfileCardSlider = () => {
  interface SliderProps {
    position: number
  }

  const MainContainer = styled.div`
    width: 100%;
    overflow: hidden;
  `

  const Slider = styled.div<SliderProps>`
    display: flex;
    transform: ${props => {
      return 'translateX(' + props.position * -250 + 'px)'
    }};
    transition-property: transform;
    transition-durarion: 1s;
  `

  return (
    <MainContainer>
      <ProfileCard
        profileId="1234"
        avatarPath="https://i.pravatar.cc/50"
        description="<span style='color: #F24E11'>Kelly</span> is on the <span style='color: #F24E11'>KETO diet</span>.  She tends to <span style='color: #F24E11'>love seafood, eggs and okra</span>, while she <span style='color: #F24E11'>hates tomatoes and squash</span>."
      />
      <ProfileCard
        profileId="1234"
        avatarPath="https://i.pravatar.cc/50"
        description="<span style='color: #F24E11'>Kelly</span> is on the <span style='color: #F24E11'>KETO diet</span>.  She tends to <span style='color: #F24E11'>love seafood, eggs and okra</span>, while she <span style='color: #F24E11'>hates tomatoes and squash</span>."
      />
      <ProfileCard
        profileId="1234"
        avatarPath="https://i.pravatar.cc/50"
        description="<span style='color: #F24E11'>Kelly</span> is on the <span style='color: #F24E11'>KETO diet</span>.  She tends to <span style='color: #F24E11'>love seafood, eggs and okra</span>, while she <span style='color: #F24E11'>hates tomatoes and squash</span>."
      />
      <ProfileCard
        profileId="1234"
        avatarPath="https://i.pravatar.cc/50"
        description="<span style='color: #F24E11'>Kelly</span> is on the <span style='color: #F24E11'>KETO diet</span>.  She tends to <span style='color: #F24E11'>love seafood, eggs and okra</span>, while she <span style='color: #F24E11'>hates tomatoes and squash</span>."
      />
      <ProfileCard
        profileId="1234"
        avatarPath="https://i.pravatar.cc/50"
        description="<span style='color: #F24E11'>Kelly</span> is on the <span style='color: #F24E11'>KETO diet</span>.  She tends to <span style='color: #F24E11'>love seafood, eggs and okra</span>, while she <span style='color: #F24E11'>hates tomatoes and squash</span>."
      />
    </MainContainer>
  )
}

export default ProfileCardSlider
