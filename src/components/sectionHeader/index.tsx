import styled from '@emotion/styled'
import React from 'react'
import { SectionHeaderProps } from './interface'

const SectionHeader = (props: SectionHeaderProps) => {
  const Wrapper = styled.div`
    display: flex;
    width: 50%;
    padding-top: 20px;
    padding-bottom: 20px;
  `

  const Title = styled.div`
    display: flex;
    font-family: 'Playfair Display', serif;
    font-size: 18px;
    vertical-align: bottom;
    min-width: 33%;
    padding-right: 10px;
    align-self: flex-end;
  `

  const Description = styled.div`
    display: flex;
    font-size: 12px;
    font-weight: 100;
    font-family: 'Roboto', sans-serif;
    align-self: flex-start;
  `
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
    </Wrapper>
  )
}

export default SectionHeader
