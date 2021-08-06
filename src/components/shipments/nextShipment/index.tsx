import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProfileCardProps from './interface'

const NextShipment = () => {
  const MainContainer = styled.div`
    width: 100%;
  `

  const Title = styled.h2`
    display: block;
    font-size: 14px;
    font-weight: 300;
    font-family: 'Playfair Display', serif;
    letter-spacing: -1px;
  `

  const Description = styled.span`
    color: #333333;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 100;
    display: inline-block;
  `

  const OrderNumber = styled.span`
    color: #333333;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 100;
    display: inline-block;
  `

  const ChangesUntil = styled.span`
    color: #333333;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 700;
    display: inline-block;
    padding-right: 10px;
  `

  const ChangesUntilDate = styled.span`
    color: #f24e11;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 100;
    display: inline-block;
  `

  const Button = styled.button`
    width: 25px;
    height: 25px;
    background-color: transparent;
    border: none;
    display: block;
  `

  const ButtonIcon = styled.path`
    stroke: #9f9f9f;
    fill: #ffffff;
    stroke-wdith: 0.25;
  `
  return (
    <MainContainer>
      <Title>Next Shipment</Title>
      <div className="row">
        <div className="col6">
          <div className="col8">
            <Description>Weekly Shipment for February 24, 2021</Description>
          </div>
          <div className="col4">
            <OrderNumber>12349-90</OrderNumber>
          </div>
        </div>
        <div className="col6">
          <ChangesUntil>Excepting changes until: </ChangesUntil>
          <ChangesUntilDate>February 22, 2021</ChangesUntilDate>
          <Button>
            <svg style={{ width: '25px', height: '25px' }}>
              <ButtonIcon
                d="M12.75,0.25c-6.92,0-12.5,5.58-12.5,12.5s5.58,12.5,12.5,12.5s12.5-5.58,12.5-12.5S19.67,0.25,12.75,0.25
	L12.75,0.25z M5.64,9.17c-0.25-0.28-0.42-0.61-0.42-1c0-0.39,0.17-0.72,0.42-1l1.53-1.53c0.28-0.28,0.61-0.42,1-0.42
	c0.39,0,0.72,0.17,1,0.42l1.06,1.06l-3.5,3.53L5.64,9.17z M14.31,17.69c-0.11-0.03-0.22-0.11-0.31-0.19l-6.78-6.78l1.97-1.97
	l7.31,7.33l-1.22,1.22l1.81,0.5c0.06,0,0.08,0.03,0.11,0.08l0.69-0.69c-0.03-0.03-0.06-0.06-0.08-0.08l-0.5-1.81l-0.22,0.22
	L9.75,8.17l0.97-0.97l6.81,6.78c0.08,0.08,0.14,0.19,0.19,0.31l1.31,4.69L14.31,17.69z"
              />
            </svg>
          </Button>
        </div>
      </div>
    </MainContainer>
  )
}

export default NextShipment
