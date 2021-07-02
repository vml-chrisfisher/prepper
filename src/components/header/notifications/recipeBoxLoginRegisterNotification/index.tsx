import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';

const RecipesboxLoginRegisterNotification = () => {
    interface NotificationProps {
        show: boolean;
        fadeIn: boolean
    }

    const [shouldShow, setShouldShow] = useState(false)
    const [fadeIn, setFadeIn] = useState(false)

    useEffect(() => {
        setShouldShow(true)
            setTimeout(() => {
                setFadeIn(true)
            }, 500)
        console.log("THERE")
        return () => {
            setFadeIn(false)
            setTimeout(() => {
                setShouldShow(false)
            }, 500)
        }
    }, [])

    const Container = styled.div<NotificationProps>`
        display: ${props => {
            return props.show ? 'block' : 'block'
        }};
        opacity: ${props => {
            return props.fadeIn ? '1' : '0'
        }};
        width: 300px;
        -webkit-transition: opacity 2.5s ease-out;
        -moz-transition: opacity 2.5s ease-out;
        -o-transition: opacity 2.5s ease-out;
        transition: opacity 2.5s ease-out;
        padding-right: 10px;
    `

    const BodyContainer = styled.div`
        background-color: #FFFFFF;
        padding: 20px;
    `

    const Triangle = styled.div`
        position: relative;
        box-sizing: border-box;
        background: #fff;
        border: 3px solid #fafafa;
        box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
        &::after{
          z-index: -10;
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          margin-left: 0;
          bottom: 0;
          top: -9px;
          right: 12px;
          box-sizing: border-box;
          
          border: 5px solid #fff;
          border-color: transparent transparent transparent transparent;
          
          transform-origin: 0 0;
          transform: rotate(45deg);
          
          box-shadow: 3px 3px 3px 3px rgba(0, 0, 0, 0.2);
        }
        &::before{
          z-index: 10;
          content: "";
          position: absolute;
          width: 0;
          height: 0;
          margin-left: 0;
          bottom: 0;
          top: -9px;
          right:5px;
          box-sizing: border-box;
          
          border: 10px solid black;
          border-color: #FFFFFF transparent #fff #fff;
          
          transform-origin: 0 0;
          transform: rotate(45deg);
        }
    `

    const Copy = styled.div`
    color: #464646;
    font-family: 'Roboto', sans-serif;
    font-size: .75em;
    font-weight: 100;
    line-height: 2.5em;
    `

    const Caret = styled.svg`
    fill: #333333;
    margin-left: 263px;
    width: 22px;
    height: 11px;
    `

    return (
        <Container show={shouldShow} fadeIn={fadeIn}>
            <Triangle>
            <BodyContainer>
                <Copy>
                    In order to save this recipe to your recipe box, we need to be able to remember who you are.  Please either login or create a <b>FREE</b> account, and we will handle the rest.
                </Copy>
            </BodyContainer>
            </Triangle>
        </Container>
    )
}

export default RecipesboxLoginRegisterNotification