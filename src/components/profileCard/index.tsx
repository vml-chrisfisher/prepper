import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileCardProps from './interface'

const ProfileCard = (props: ProfileCardProps) => {
  const { profileId, avatarPath, description } = props

  const dispatch = useDispatch()

  const Container = styled.div`
    width: 25%;
    display: inline-block;
  `

  const ImageContainer = styled.div`
    width: 50px;
    padding-bottom: 20px;
    padding-top: 20px;
  `

  const Avatar = styled.img`
    clip-path: circle(25px at center);
  `

  const Sentence = styled.span`
    font-size: 12px;
    padding-left: 7px;
    width: 100%;
    display: block;
    font-size: 14px;
    font-weight: 300;
    font-family: 'Playfair Display', serif;
    letter-spacing: -1px;
    line-height: 28px;
    width: 250px;
  `

  const Highlight = styled.span`
    color: #ff0000;
  `

  const ButtonContainer = styled.div`
    width: 100%;
    margin: 0 auto;
    padding-bottom: 20px;
    padding-top: 20px;
  `

  const Button = styled.button`
    width: 25px;
    height: 25px;
    background-color: transparent;
    border: none;
    display: block;
    margin: 0 auto;
  `

  const ButtonIcon = styled.path`
    stroke: #9f9f9f;
    fill: #ffffff;
    stroke-wdith: 0.25;
  `

  return (
    <Container>
      <ImageContainer>
        <Avatar src={avatarPath} />
      </ImageContainer>
      <Sentence dangerouslySetInnerHTML={{ __html: description }}></Sentence>
      <ButtonContainer>
        <Button>
          <svg>
            <ButtonIcon
              d="M12.75,0.25c-6.92,0-12.5,5.58-12.5,12.5s5.58,12.5,12.5,12.5s12.5-5.58,12.5-12.5S19.67,0.25,12.75,0.25
	L12.75,0.25z M5.64,9.17c-0.25-0.28-0.42-0.61-0.42-1c0-0.39,0.17-0.72,0.42-1l1.53-1.53c0.28-0.28,0.61-0.42,1-0.42
	c0.39,0,0.72,0.17,1,0.42l1.06,1.06l-3.5,3.53L5.64,9.17z M14.31,17.69c-0.11-0.03-0.22-0.11-0.31-0.19l-6.78-6.78l1.97-1.97
	l7.31,7.33l-1.22,1.22l1.81,0.5c0.06,0,0.08,0.03,0.11,0.08l0.69-0.69c-0.03-0.03-0.06-0.06-0.08-0.08l-0.5-1.81l-0.22,0.22
	L9.75,8.17l0.97-0.97l6.81,6.78c0.08,0.08,0.14,0.19,0.19,0.31l1.31,4.69L14.31,17.69z"
            ></ButtonIcon>
          </svg>
        </Button>
      </ButtonContainer>
    </Container>
  )
}

export default ProfileCard
