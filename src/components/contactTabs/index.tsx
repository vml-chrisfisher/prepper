import styled from '@emotion/styled'
import { Field, Form, Formik, useField } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import { RecipeUploadStatus } from '../../store/ducks/contact/initialState'
import { getUploadedFilesBucketName } from '../../store/ducks/contact/selectors'
import { AppState } from '../../store/rootReducer'
import DropZone from '../dropzone'
import ContactTabsInterface from './interface'

import {
  onSubmitContactHello,
  onSubmitContactPartnership,
  onSubmitContactRecipe,
  onSubmitContactSuggestion,
  showHello,
  showPartnership,
  showRecipe,
  showSuggestion,
} from '../../store/ducks/contact/action'
import {
  CONTACT_ACTION_TYPES,
  CONTACT_HELLO_STEPS,
  CONTACT_PARTNERSHIP_STEPS,
  CONTACT_RECIPE_STEPS,
  CONTACT_SUGGESTION_STEPS,
} from '../../store/ducks/contact/types'

const ContactTabs = (props: ContactTabsInterface) => {
  interface SliderProps {
    position: number
  }

  interface TabProps {
    isSelected: boolean
  }

  interface MainContainerPositionProps {
    showProfile: string
  }

  const dispatch = useDispatch()

  const helloSliderPosition = useSelector((state: AppState) => {
    const step = state?.contact.helloStep
    switch (step) {
      case CONTACT_HELLO_STEPS.DEFAULT:
      case CONTACT_HELLO_STEPS.HELLO_RESET:
      case CONTACT_HELLO_STEPS.HELLO_SUBMIT_FAILURE:
        return 0
      case CONTACT_HELLO_STEPS.SUBMITTING_HELLO:
        return 1
      case CONTACT_HELLO_STEPS.HELLO_SUBMIT_SUCCESS:
        return 0
      default:
        return 0
    }
  })

  const recipeSliderPosition = useSelector((state: AppState) => {
    const step = state?.contact.recipeStep
    switch (step) {
      case CONTACT_RECIPE_STEPS.DEFAULT:
      case CONTACT_RECIPE_STEPS.RECIPE_RESET:
      case CONTACT_RECIPE_STEPS.RECIPE_SUBMIT_FAILURE:
        return 0
      case CONTACT_RECIPE_STEPS.SUBMITTING_RECIPE:
        return 1
      case CONTACT_RECIPE_STEPS.RECIPE_SUBMIT_SUCCESS:
        return 0
      default:
        return 0
    }
  })

  const suggestionSliderPosition = useSelector((state: AppState) => {
    const step = state?.contact.suggestionStep
    switch (step) {
      case CONTACT_SUGGESTION_STEPS.DEFAULT:
      case CONTACT_SUGGESTION_STEPS.SUGGESTION_RESET:
      case CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_FAILURE:
        return 0
      case CONTACT_SUGGESTION_STEPS.SUBMITTING_SUGGESTION:
        return 1
      case CONTACT_SUGGESTION_STEPS.SUGGESTION_SUBMIT_SUCCESS:
        return 0
      default:
        return 0
    }
  })

  const partnershipSliderPosition = useSelector((state: AppState) => {
    const step = state?.contact.partnershipStep
    switch (step) {
      case CONTACT_PARTNERSHIP_STEPS.DEFAULT:
      case CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_RESET:
      case CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_SUBMIT_FAILURE:
        return 0
      case CONTACT_PARTNERSHIP_STEPS.SUBMITTING_PARTNERSHIP:
        return 1
      case CONTACT_PARTNERSHIP_STEPS.PARTNERSHIP_SUBMIT_SUCCESS:
        return 0
      default:
        return 0
    }
  })

  const uploadedFilesBucketNames = useSelector((state: AppState) => {
    return state?.contact.recipesUploaded.map((item: RecipeUploadStatus) => {
      return item.bucketLocation
    })
  })

  const selectedTab = useSelector((state: AppState) => {
    return state.contact.contactTabShowing
  })

  const onHelloClick = () => {
    dispatch(showHello())
  }

  const onHelloSubmit = (values: HelloValues) => {
    const { helloName, helloEmail, helloMessage } = values
    dispatch(onSubmitContactHello({ helloName, helloEmail, helloMessage }))
  }

  const onRecipeClick = () => {
    dispatch(showRecipe())
  }

  const onRecipeSubmit = (values: RecipeValues) => {
    const { recipeName, recipeEmail, recipeMessage } = values
    // const uploadedFiles = useSelector(getUploadedFilesBucketName)
    dispatch(onSubmitContactRecipe({ recipeName, recipeEmail, recipeMessage, uploadedFilesBucketNames }))
  }

  const onSuggestionClick = () => {
    dispatch(showSuggestion())
  }

  const onSuggestionSubmit = (values: SuggestionValues) => {
    const { suggestionName, suggestionEmail, suggestionMessage } = values
    dispatch(onSubmitContactSuggestion({ suggestionName, suggestionEmail, suggestionMessage }))
  }

  const onPartnershipClick = () => {
    dispatch(showPartnership())
  }

  const onPartnershipSubmit = (values: PartnershipValue) => {
    const { partnershipName, partnershipCompany, partnershipEmail, partnershipPhone, partnershipMessage } = values
    dispatch(
      onSubmitContactPartnership({
        partnershipName,
        partnershipCompany,
        partnershipEmail,
        partnershipPhone,
        partnershipMessage,
      }),
    )
  }

  const Container = styled.div`
    display: inline-block;
    width: 50%;
    height: 100%;
    transition: all 1s ease-out;
    background-color: #ffffff;
    padding-top: 100px;
    @media (max-width: 767px) {
      width: 100%;
    }
  `

  const TabContainer = styled.div`
    padding-left: 40px;
    display: inline-block;
  `

  const Tab = styled.button<TabProps>`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding-right: 20px;
    padding-top: 17px;
    font-weight: ${props => {
      return props.isSelected ? '500' : '100'
    }};
    color: #333333;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    &:hover {
      color: #f24e11;
      transition: color 1s ease;
    }
  `

  const SubContainer = styled.div<TabProps>`
    display: ${props => {
      return props.isSelected ? 'block' : 'none'
    }};
    padding-top: 20px;
    padding-left: 40px;
    width: calc(100% - 80px);
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
    return <Field className="form--input" {...props} />
  }

  const FormTextArea = ({ ...props }) => {
    const [field, meta] = useField(props)
    return <textarea className="text-area" {...field} {...props} />
  }

  const FormError = styled.div`
    color: #f24e11;
    font-family: 'Roboto', sans-serif;
    font-size: 12px;
    padding-top: 15px;
    padding-bottom: 15px;
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

  interface HelloValues {
    helloName: string
    helloEmail: string
    helloMessage: string
  }
  const helloInitialValues = {
    helloName: '',
    helloEmail: '',
    helloMessage: '',
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
    uploadedFiles: [''],
  }

  interface SuggestionValues {
    suggestionName: string
    suggestionEmail: string
    suggestionMessage: string
  }

  const suggestionInitialValues = {
    suggestionName: '',
    suggestionEmail: '',
    suggestionMessage: '',
  }

  interface PartnershipValue {
    partnershipName: string
    partnershipCompany: string
    partnershipEmail: string
    partnershipPhone: string
    partnershipMessage: string
  }

  const partnershipInitialValues = {
    partnershipName: '',
    partnershipCompany: '',
    partnershipEmail: '',
    partnershipPhone: '',
    partnershipMessage: '',
  }

  const loginValidationSchema = Yup.object().shape({
    loginEmail: Yup.string()
      .email('We need a valid email address to even to start to think about logging you in.')
      .required('Email required'),
    loginPassword: Yup.string().required('We need your password.'),
  })

  return (
    <Container>
      <TabContainer>
        <Tab isSelected={selectedTab === CONTACT_ACTION_TYPES.SHOW_HELLO} onClick={() => onHelloClick()}>
          {props.helloTab}
        </Tab>
        <Tab isSelected={selectedTab === CONTACT_ACTION_TYPES.SHOW_RECIPE} onClick={() => onRecipeClick()}>
          {props.recipeTab}
        </Tab>
        <Tab isSelected={selectedTab === CONTACT_ACTION_TYPES.SHOW_SUGGESTION} onClick={() => onSuggestionClick()}>
          {props.suggestionTab}
        </Tab>
        <Tab isSelected={selectedTab === CONTACT_ACTION_TYPES.SHOW_PARTNERSHIP} onClick={() => onPartnershipClick()}>
          {props.partnershipTab}
        </Tab>
      </TabContainer>
      <SubContainer isSelected={selectedTab === CONTACT_ACTION_TYPES.SHOW_HELLO}>
        <SubContainerCopy>{props.helloCopy}</SubContainerCopy>
        <Wrapper>
          <Slider position={helloSliderPosition}>
            <SliderContainer>
              <Formik initialValues={helloInitialValues} onSubmit={onHelloSubmit}>
                {({ errors, touched }) => {
                  return (
                    <Form>
                      <FormInput id="helloName" name="hellloName" type="text" placeholder="Your name" />
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
      </SubContainer>
      <SubContainer isSelected={selectedTab === CONTACT_ACTION_TYPES.SHOW_RECIPE}>
        <SubContainerCopy>{props.recipeCopy}</SubContainerCopy>
        <Wrapper>
          <Slider position={recipeSliderPosition}>
            <SliderContainer>
              <Formik initialValues={recipeInitialValues} onSubmit={onRecipeSubmit}>
                {({ errors, touched }) => {
                  return (
                    <Form>
                      <FormInput id="recipeName" name="recipeName" type="text" placeholder="Your name" />
                      <FormInput
                        id="recipeEmail"
                        name="recipeEmail"
                        autoComplete="email"
                        type="email"
                        placeholder="Your email"
                      />
                      <FormTextArea name="recipeMessage" rows="6" placeholder="A short story about your recipe." />
                      <DropZone></DropZone>
                      <PrimaryButton type="submit">TRY THIS RECIPE</PrimaryButton>
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
      </SubContainer>
      <SubContainer isSelected={selectedTab === CONTACT_ACTION_TYPES.SHOW_SUGGESTION}>
        <SubContainerCopy>{props.suggestionCopy}</SubContainerCopy>
        <Wrapper>
          <Slider position={suggestionSliderPosition}>
            <SliderContainer>
              <Formik initialValues={suggestionInitialValues} onSubmit={onSuggestionSubmit}>
                {({ errors, touched }) => {
                  return (
                    <Form>
                      <FormInput id="suggestionName" name="suggestionName" type="text" placeholder="Your name" />
                      <FormInput
                        id="suggestionEmail"
                        name="suggestionEmail"
                        autoComplete="email"
                        type="email"
                        placeholder="Your email"
                      />
                      <FormTextArea
                        name="suggestionMessage"
                        rows="6"
                        placeholder="What's your suggestion we should listen to."
                      />
                      <PrimaryButton type="submit">LISTEN TO THIS</PrimaryButton>
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
      </SubContainer>
      <SubContainer isSelected={selectedTab === CONTACT_ACTION_TYPES.SHOW_PARTNERSHIP}>
        <SubContainerCopy>{props.partnershipCopy}</SubContainerCopy>
        <Wrapper>
          <Slider position={partnershipSliderPosition}>
            <SliderContainer>
              <Formik initialValues={partnershipInitialValues} onSubmit={onPartnershipSubmit}>
                {({ errors, touched }) => {
                  return (
                    <Form>
                      <FormInput id="partnershipName" name="partnershipName" type="text" placeholder="Your name" />
                      <FormInput
                        id="partnershipCompany"
                        name="partnershipCompany"
                        type="text"
                        placeholder="Your company"
                      />
                      <FormInput
                        id="partnershipCompany"
                        name="partnershipCompany"
                        type="tel"
                        placeholder="Your phone number"
                      />
                      <FormInput
                        id="partnershipEmail"
                        name="partnershipEmail"
                        autoComplete="email"
                        type="email"
                        placeholder="Your email"
                      />
                      <FormTextArea
                        name="partnershipMessage"
                        rows="6"
                        placeholder="Let us know how we can partner up."
                      />
                      <PrimaryButton type="submit">LET&apos;S TALK</PrimaryButton>
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
      </SubContainer>
    </Container>
  )
}

export default ContactTabs
