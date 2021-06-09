import styled from '@emotion/styled';
import {
  Field,
  Form,
  Formik,
  useField
  } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSubmitContactHello } from '../../../store/ducks/contact/action';
import { getHelloStep } from '../../../store/ducks/contact/selectors';
import HelloProps from './interface';

const HelloForm = (props: HelloProps) => {

  const dispatch = useDispatch()

  interface SliderProps {
    position: number
  }

  interface HelloValues {
    helloName: string
    helloEmail: string
    helloMessage: string
  }


  const helloSliderPosition = useSelector(getHelloStep)

  const onHelloSubmit = (values: HelloValues) => {
    const { helloName, helloEmail, helloMessage } = values
    dispatch(onSubmitContactHello({ helloName, helloEmail, helloMessage }))
  }

  const helloInitialValues = {
    helloName: '',
    helloEmail: '',
    helloMessage: '',
  }
  const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
  `

  const Slider = styled.div<SliderProps>`
    display: flex;
    height: 100%;
    width: 200%;
    transform: ${props => {
      return 'translateX(' + props.position * -50 + '%)'
    }};
    transition-property: transform;
    transition-durarion: 1s;
  `
  const SliderContainer = styled.div`
    margin-top: 40px;
    width: 100%;
    margin-left: 0px;
    margin-right: 0px;
    @media (max-width: 767px) {
      width: 100%;
      margin-left: 0px;
      margin-right: 0px;
    }
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
    padding-top: 23px;
    padding-bottom: 23px;
    margin-left: calc(100% - 310px);
    text-transform: uppercase;
    transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
    width: 300px;
    padding-top: 20px;
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

  const StatusSpinner = styled.img`
    width: 50px;
    margin: 0 auto;
    padding-top: 50px;
  `

  const Status = styled.div`
    color: #333333;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 100;
    text-align: center;
  `

  const SubContainerCopy = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    font-weight: 300;
    color: #333333;
    display: block;
    padding-top: 20px;
    @media (max-width: 767px) {
      font-size: 1.2rem;
    }
  `

  const FormInput = ({ ...props }) => {
    const [field, meta] = useField(props)
    return <input className="form--input" {...field} {...props} />
  }

  const FormTextArea = ({ ...props }) => {
    const [field, meta] = useField(props)
    return <textarea className="text-area" {...field} {...props} />
  }

  return (
    <>
      <SubContainerCopy>{props.helloCopy}</SubContainerCopy>
      <Wrapper>
        <Slider position={helloSliderPosition}>
          <SliderContainer>
            <Formik initialValues={helloInitialValues} onSubmit={onHelloSubmit}>
              {({ errors, touched }) => {
                return (
                  <Form>
                    <FormInput id="helloName" name="helloName" type="text" placeholder="Your name" />
                    <FormInput
                      id="helloEmail"
                      name="helloEmail"
                      autoComplete="email"
                      type="email"
                      placeholder="Your email"
                    />
                    <FormTextArea name="helloMessage" rows="6" placeholder="Your message" />
                    <PrimaryButton type="submit">SEND</PrimaryButton>
                  </Form>
                )
              }}
            </Formik>
          </SliderContainer>
          <SliderContainer>
            <StatusSpinner src="/spinner.svg" />
            <Status>Sending your message</Status>
          </SliderContainer>
        </Slider>
      </Wrapper>
    </>
  )
}

export default HelloForm