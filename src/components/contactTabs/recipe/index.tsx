import styled from '@emotion/styled';
import {
    Field,
    Form,
    Formik,
    useField
    } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSubmitContactRecipe } from '../../../store/ducks/contact/action';
import { getRecipeStep, getUploadedFilesBucketNames, getUploadedRecipeBucketNames } from '../../../store/ducks/contact/selectors';
import Text from '../../common/inputs/text';
import TextArea from '../../common/inputs/textarea';
import DropZone from '../../dropzone';
import DropZoneContainer from '../../dropzone/container';
import RecipeProps from './interface';

const RecipeForm = (props: RecipeProps) => {
    const dispatch = useDispatch()

    interface SliderProps {
        position: number
    }

    const recipeSliderPosition = useSelector(getRecipeStep)

    const onRecipeSubmit = (values: RecipeValues) => {
        const { recipeName, recipeEmail, recipeMessage } = values
        dispatch(onSubmitContactRecipe({ recipeName, recipeEmail, recipeMessage }))
    }

    interface RecipeValues {
        recipeName: string
        recipeEmail: string
        recipeMessage: string
    }
    const recipeInitialValues = {
        recipeName: '',
        recipeEmail: '',
        recipeMessage: '',
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
            <SubContainerCopy>{props.recipeCopy}</SubContainerCopy>
            <Wrapper>
                <Slider position={recipeSliderPosition}>
                    <SliderContainer>
                        <Formik initialValues={recipeInitialValues} onSubmit={onRecipeSubmit}>
                            {() => {
                                return (
                                    <>
                                        <Form>
                                            <div>
                                                <FormInput id="recipeName" name="recipeName" type="text" placeholder="Your name" />
                                                <FormInput id="recipeEmail" name="recipeEmail" type="text" placeholder="Your email" />
                                                <FormTextArea id="recipeMessage" name="recipeMessage" rows="6" placeholder="A short story about your recipe." />
                                            </div>
                                            <DropZoneContainer />
                                            <PrimaryButton type="submit">TRY THIS RECIPE</PrimaryButton>
                                        </Form>
                                    </>
                                )
                            }}
                        </Formik>

                    </SliderContainer>
                    <SliderContainer>
                        <StatusSpinner src="/spinner.svg" />
                        <Status>Sending your good eats, to us.</Status>
                    </SliderContainer>
                </Slider>
            </Wrapper>
        </>
    )
}

export default RecipeForm