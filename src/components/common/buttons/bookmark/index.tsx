import styled from '@emotion/styled';
import { Form, Formik, useField } from 'formik';
import React from 'react';
import BookmarkProps from './interface';

const Bookmark = (props: BookmarkProps) => {
  const { isSelected, onClick, selectedCaption, unselectedCaption } = props

  interface RibbonProps {
    isSelected: boolean
  }

  const Container = styled.div`
    cursor: pointer;
    width: 15px;
    display: inline-block;
    padding-right: 15px;
    & > svg > g > polygon:nth-of-type(1) {
      fill: #ffffff;
      -webkit-transition: all 0.5s;
      -moz-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
    }
    &:hover > svg > g > polygon:nth-of-type(1) {
      fill: #f24e11;
      -webkit-transition: all 1s;
      -moz-transition: all 0.5s;
      -o-transition: all 0.5s;
      transition: all 0.5s;
    }
  `
  const Ribbon = styled.polygon<RibbonProps>`
    fill: ${props => {
      return props.isSelected ? '#FFFFFF' : '#f24e11'
    }};
    stroke: #464646;
    strokemiterlimit: 10;
  `

  const Star = styled.polygon`
    fill: #ffffff;
    stroke: #464646;
    strokemiterlimit: 10;
  `

  const PrimaryButton = styled.button`
    background-color: #f24e11;
    border: 1px solid transparent;
    color: #ffffff;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    height: 60px;
    letter-spacing: 3px;
    margin-bottom: 100px;
    padding-top: 18px;
    padding-bottom: 23px;
    margin-left: calc(100% - 310px);
    text-transform: uppercase;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    width: 300px;
    & .caption {
      padding-top: 5px;
      display: inline-block;
    }
    &:hover {
      background-color: #ffffff;
      border: 1px solid #333333;
      color: #f24e11;
      transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    }
    @media (max-width: 767px) {
      width: 100%;
      margin-left: 0px;
    }
  `

  const SecondaryButton = styled.button`
    background-color: #ffffff;
    border: 1px solid #333333;
    color: ##333333;
    cursor: pointer;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    height: 60px;
    letter-spacing: 3px;
    margin-bottom: 100px;
    padding-top: 18px;
    padding-bottom: 23px;
    margin-left: calc(100% - 310px);
    text-transform: uppercase;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    width: 300px;
    & .caption {
      padding-top: 5px;
      display: inline-block;
    }
    &:hover {
      background-color: #ffffff;
      border: 1px solid #333333;
      color: #f24e11;
      transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    }
    @media (max-width: 767px) {
      width: 100%;
      margin-left: 0px;
    }
  `
  return (
    <>
      {!isSelected && (
        <PrimaryButton onClick={onClick}>
          <Container>
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 26 43.14">
              <g>
                <Ribbon
                  isSelected={isSelected}
                  id="Ribbon"
                  points="0.5 0.5 25.5 0.5 25.5 42.07 13 31.65 0.5 42.07 0.5 0.5 0.5 0.5"
                />
                <Star points="10.69 15.69 13 11.47 14.94 15.4 19.28 16.03 16.14 19.09 16.88 23.41 13 21.37 9.12 23.41 9.86 19.09 6.72 16.03 11.06 15.4" />
              </g>
            </svg>
          </Container>
          <div className="caption">{unselectedCaption}</div>
        </PrimaryButton>
      )}

      {isSelected && (
        <SecondaryButton onClick={onClick}>
          <Container>
            <svg version="1.1" x="0px" y="0px" viewBox="0 0 26 43.14">
              <g>
                <Ribbon
                  isSelected={isSelected}
                  id="Ribbon"
                  points="0.5 0.5 25.5 0.5 25.5 42.07 13 31.65 0.5 42.07 0.5 0.5 0.5 0.5"
                />
                <Star points="10.69 15.69 13 11.47 14.94 15.4 19.28 16.03 16.14 19.09 16.88 23.41 13 21.37 9.12 23.41 9.86 19.09 6.72 16.03 11.06 15.4" />
              </g>
            </svg>
          </Container>
          <div className="caption">{selectedCaption}</div>
        </SecondaryButton>
      )}
    </>
  )
}

export default Bookmark
