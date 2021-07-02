import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProfileNameFirstLetter, getUserId } from '../../../store/ducks/profile/selectors';
import ProfileIconProps from './interface';

const ProfileIcon = (props: ProfileIconProps) => {
    const { onClick, theme } = props
    const themeValue = props.theme
    const userId: string = useSelector(getUserId)
    const userFirstLetter = useSelector(getProfileNameFirstLetter)

    interface ThemeProps {
        theme: string
    }

    const ButtonContainer = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    `

    const NavigationItemProfileIcon = styled.svg<ThemeProps>`
    cursor: pointer;
    display: inline-block;
    fill: ${props => {
            return props.theme === 'white' ? '#FFFFFF' : '#464646'
        }};
    height: 20px;
    margin-right: 25px;
    margin-top: 20px;
    stroke: ${props => {
            return props.theme === 'white' ? '#FFFFFF' : '#464646'
        }};
    stroke-width: 0.5;
    stroke-miterlimit: 10;
    width: 20px;
    &:hover {
      fill: #f24e11;
      stroke: #f24e11;
      transition: fill 1s ease;
    }
  `
    const SVGProfileContainer = styled.svg`
        width: 30px;
        height: 30px;
        padding-top: 15px;
    `

    const SVGProfileCircle = styled.circle`
        fill: #CE2525;
    `

    const SVGProfileLetter = styled.text`
        fill:#FFFFFF;
        font-family:'PlayfairDisplay-Regular';
        font-size: 18px;
    `

    return (
        <ButtonContainer onClick={(event: React.MouseEvent) => {
            onClick(event)
        }}>
            {!userId && (<NavigationItemProfileIcon theme={themeValue}>
                <rect
                    x="8"
                    y="16.8"
                    transform="matrix(1.396295e-03 -1 1 1.396295e-03 -9.6291 25.7124)"
                    width="0.1"
                    height="1.8"
                />
                <path
                    d="M16,4c0-0.6-0.2-1.2-0.6-1.8c-0.3-0.4-0.7-0.7-1.1-1c-0.4-0.3-0.9-0.5-1.4-0.6c-1.1-0.3-2.1-0.2-2.9,0.4
	C9.8,0.8,9.6,0.6,9.4,0.5C8.9,0.2,8.4,0,7.8,0C7,0,6.3,0.1,5.6,0.4C5.3,0.6,5,0.7,4.8,1C3.7,1,2.7,1.2,1.9,1.7
	c-0.7,0.4-1.2,1-1.6,1.7C0.1,4,0,4.7,0,5.3c0,0.3,0.1,0.6,0.2,0.9c0.1,0.3,0.3,0.5,0.4,0.8C1,7.3,1.3,7.6,1.8,7.7
	C2,7.8,2.3,7.8,2.5,7.8c0.2,0,0.5,0,0.7-0.1c-0.2,0.7-0.4,1.3-0.6,2c-0.2,0.5-0.1,1.1,0.3,1.6l0,0c0,0.1,0.1,0.1,0.2,0.1h0
	c0,0,0,0,0,0l0,0.6H3c-0.3,0-0.5,0.2-0.7,0.5c-0.1,0.3-0.1,0.8,0,1.2c0.1,0.5,0.3,0.8,0.6,1c0.1,0.1,0.2,0.1,0.3,0.1
	c0,0,0.1,0,0.1,0c0.3,1.6,0.9,2.9,1.8,3.9c0.4,0.4,0.9,0.8,1.4,1C7,19.9,7.5,20,8.1,20s1-0.1,1.5-0.3c0.5-0.2,1-0.6,1.4-1
	c0.9-0.9,1.5-2.3,1.8-3.9c0,0,0.1,0,0.1,0c0.1,0,0.2,0,0.3-0.1c0.2-0.2,0.4-0.6,0.6-1c0.1-0.5,0.2-0.9,0-1.2
	c-0.1-0.3-0.3-0.5-0.7-0.5h-0.2l0-0.6c0,0,0,0,0,0h0c0.1,0,0.1,0,0.2-0.1l0,0c0.4-0.4,0.5-1,0.3-1.6c-0.2-0.6-0.4-1.2-0.5-1.8
	c0.2,0.1,0.4,0.2,0.6,0.2c0.1,0,0.1,0,0.2,0c0.2,0,0.4,0,0.5-0.1c0.5-0.1,0.9-0.4,1.3-0.8c0.3-0.3,0.5-0.7,0.5-1
	c0-0.4-0.1-0.7-0.3-1c0.1-0.1,0.1-0.2,0.2-0.3C15.9,4.6,16,4.3,16,4z M3,14.6c-0.4-0.4-0.8-1.5-0.6-2.1c0.1-0.3,0.3-0.4,0.6-0.4h0.2
	l0,0.4c0,0.8,0.1,1.5,0.2,2.2C3.3,14.8,3.1,14.7,3,14.6z M13.2,12.1L13.2,12.1c0.3,0,0.5,0.1,0.6,0.4c0.2,0.6-0.2,1.8-0.6,2.1
	c-0.1,0.1-0.3,0.1-0.4,0.1c0.1-0.7,0.2-1.4,0.2-2.2l0-0.4L13.2,12.1z M12.8,12.5c0,0.8-0.1,1.5-0.2,2.2c-0.5,3.1-2.3,5.2-4.6,5.2
	s-4-2-4.6-5.2c-0.1-0.7-0.2-1.4-0.2-2.2l0-1.2c0,0,0,0,0.1,0c0.2-0.3,0.8-0.5,1.7-0.6c0.8-0.1,1.9-0.2,3-0.2s2.1,0.1,3,0.2
	c0.9,0.2,1.5,0.4,1.7,0.6c0,0,0,0,0.1,0.1L12.8,12.5z M13.1,11.2L13.1,11.2c0,0-0.1,0.1-0.1,0.1h0c0,0-0.1,0-0.1-0.1
	c-0.1-0.1-0.3-0.3-0.7-0.4c-0.3-0.1-0.7-0.2-1.1-0.3c-0.8-0.1-1.9-0.2-3-0.2s-2.2,0.1-3,0.2c-0.4,0.1-0.8,0.2-1.1,0.3
	c-0.3,0.1-0.5,0.2-0.7,0.4c0,0-0.1,0.1-0.1,0.1h0c0,0-0.1,0-0.1-0.1l0,0c-0.4-0.4-0.5-1-0.3-1.5C3,9.1,3.2,8.4,3.4,7.7
	c0.2-0.8,0.2-1.5,0.2-2.2c0,0,0,0,0,0c0.1,0,0.2,0,0.2,0C4.4,5.4,5,5.1,5.4,4.6c0.3,0.2,0.6,0.4,1,0.5c0.3,0.1,0.7,0.1,1.1,0.1
	c0.3,0,0.6,0,0.9-0.1C9,5.1,9.6,4.8,10,4.5c0.1-0.1,0.2-0.2,0.3-0.3c0.4,0.6,0.9,1.1,1.6,1.2c0.2,0,0.4,0.1,0.6,0.1
	c0,0.7,0,1.4,0.2,2.2c0.2,0.7,0.4,1.3,0.6,1.9C13.5,10.2,13.4,10.8,13.1,11.2L13.1,11.2z M15.4,7.1c-0.3,0.4-0.8,0.7-1.2,0.8
	c-0.3,0.1-0.9,0.2-1.3-0.2c-0.2-0.8-0.3-1.5-0.2-2.1c0.5,0,1-0.2,1.5-0.4l0-0.1c-1.5,0.8-2.9,0.5-3.7-0.9c0.2-0.2,0.4-0.5,0.5-0.8
	l-0.1,0c-0.1,0.4-0.4,0.8-0.9,1.1C9.5,4.7,9,5,8.4,5.1c-1.1,0.2-2.6,0-3.3-1L5,4.1c0.1,0.2,0.2,0.3,0.4,0.4c-1,1-2.1,1.1-3.3,0.3
	L2,4.9c0.5,0.3,1,0.5,1.5,0.6c0.1,0.7,0,1.4-0.2,2.2c-1,0.3-1.9,0-2.5-0.7C0,6-0.1,4.6,0.4,3.4C1.1,2,2.7,1.1,4.7,1.1
	C4.4,1.3,4.2,1.6,4,1.9l0.1,0C4.8,0.6,6.5,0,7.7,0.1C9,0.2,10,0.8,10.4,1.7l0.1,0C10.3,1.5,10.2,1.2,10,1c1.7-1.1,4.1-0.3,5.3,1.2
	c0.9,1.2,0.8,2.5-0.3,3.5L15,5.8c0.2-0.2,0.4-0.4,0.5-0.6C16.1,5.8,15.8,6.6,15.4,7.1L15.4,7.1z"
                />
            </NavigationItemProfileIcon>)}
            {userId && (
                <SVGProfileContainer viewBox="0 0 30 30">
                    <g>
                    <SVGProfileCircle cx="15" cy="15" r="15"></SVGProfileCircle>
                    <SVGProfileLetter x="15" y="15" alignmentBaseline="middle" textAnchor="middle">{userFirstLetter}</SVGProfileLetter>
                    </g>
                </SVGProfileContainer>
            )}

        </ButtonContainer>
    )
}

export default ProfileIcon;