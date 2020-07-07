import styled from '@emotion/styled'
import React, { PureComponent } from 'react'
import { NewsletterProps } from './interface'

interface NewsletterPositionProps {
  stage: number
}

interface NewsletterState {
  email: string
}

class NewsletterSignup extends PureComponent<NewsletterProps, NewsletterState> {
  constructor(props: NewsletterProps) {
    super(props)
    this.state = {
      email: '',
    }
  }

  componentDidMount() {
    this.props.onReset()
  }

  handleSubmit() {
    console.log('submit')
    this.props.onSubmit(this.state.email)
  }

  render() {
    console.log(this.props)
    const position = this.props.position
    return (
      <NewsletterSignupContainer>
        <NewsletterSignupScroll stage={position}>
          <NewsletterSignupForm>
            <NewsletterSignupTitle className="white-text">Get our latest updates</NewsletterSignupTitle>
            <p>Sign up to our newsletter and get exclusive Seedlings news, updates and others.</p>
            <NewsletterSignupLabel>
              Email Address
              <NewsletterSignupInput
                type="email"
                onChange={event => this.setState({ email: event.target.value })}
                placeholder="seedlings@seedlings.com"
              />
            </NewsletterSignupLabel>

            <button
              onClick={e => {
                this.handleSubmit()
              }}
              className="primaryButton"
            >
              Sign up
            </button>
          </NewsletterSignupForm>
          <NewsletterSignupStatus>
            <NewsletterSignupLoader>
              <div className="lds-grid">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </div>
              <NewletterSignupStateText>Adding you to the list.</NewletterSignupStateText>
            </NewsletterSignupLoader>
          </NewsletterSignupStatus>
          <NewsletterSignupConfirmation>
            <NewsletterSignupLoader>
              <NewletterSignupStateIcon>
                <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 61.06 87.17">
                  <path
                    className="cls-1"
                    d="M76.4,78.53a13.8,13.8,0,0,0,4-8.38,31.57,31.57,0,0,0-4.32-19.24C70.7,42,64.57,36.73,56.78,34.32c-3-.91-6.08-1.94-9.26-3.05A9.17,9.17,0,0,1,42,26.62c-1.91-4.06-3.62-8.91-1.88-14.2a3.38,3.38,0,0,0,.14-.76l0-.32A.34.34,0,0,0,40.1,11a.34.34,0,0,0-.4.16c-1.52,2.78-2,5-1.57,7.21A63.67,63.67,0,0,0,40,26a9.56,9.56,0,0,0,5.57,6c1.86.78,3.79,1.44,5.66,2.08l2.27.78c5.79,2,10.53,3.94,14.41,8C75,50.3,78.53,57.69,79.11,66.16c.29,4.25-.71,7.65-3,10.4A17.9,17.9,0,0,1,73.31,79l-.78.61a3,3,0,0,1,.29-.72c.29-.59.6-1.17.91-1.75a23.26,23.26,0,0,0,1.82-3.92c3.52-10.86-.44-22.16-10.06-28.79a89.83,89.83,0,0,0-15-8.22c-7.69-3.39-12.18-9-13.35-16.79a37.11,37.11,0,0,1-.29-4.94c0-.78,0-1.56-.05-2.33,0-.13,0-.3,0-.46,0-.68,0-1.06-.33-1.15-.9-.23-1-.75-1.13-1.66a3.18,3.18,0,0,0-.49-1.55.33.33,0,0,0-.38-.12.32.32,0,0,0-.23.32c0,1.92.17,3.82.34,5.66l.13,1.37c.05.63.17,1.26.28,1.88a9.55,9.55,0,0,1,.15,3.9c-.26-.92-.45-1.86-.64-2.78l-.19-.9c-.21-1-.46-2.05-.71-3.07l-.32-1.32a.34.34,0,0,0-.41-.25l-.46.11a.34.34,0,0,0-.26.37l.62,5-3.1-9.82a.39.39,0,0,0-.19-.19.41.41,0,0,0-.29,0l-.38.12a.34.34,0,0,0-.22.41l1.6,6.1L25,6.56a.35.35,0,0,0-.47-.09l-.5.32a.35.35,0,0,0-.13.42,15.75,15.75,0,0,0,2,3.17,16.57,16.57,0,0,1,2.27,3.77l-2.35-1.74a.34.34,0,0,0-.48.47A30.18,30.18,0,0,0,28,16.08a23.57,23.57,0,0,1,3.17,4L29.11,18a.41.41,0,0,0-.53.05l-.31.31a.33.33,0,0,0,0,.46l2.89,3.47c-.91-.32-1.78-.69-2.63-1.05s-1.76-.76-2.66-1a6.2,6.2,0,0,0-6.27,1.42.34.34,0,0,0,.33.57,15.28,15.28,0,0,1,4.28-.83,6.49,6.49,0,0,1,3.3.92,25.23,25.23,0,0,1,3.61,2.31c.2.16.38.34.57.51l-.36.39L31,25.25v.14c-1-.28-1-.56-1.46-.85l-1-.57.54,1c.38.74.82,1.47,1.63,1.47a1.53,1.53,0,0,0,.4-.07,3.22,3.22,0,0,0,1.75,2.22,4.54,4.54,0,0,1,1.12.94l.25.3.91-.9c.22.33.44.66.64,1l.59.92a1.88,1.88,0,0,0,.22,2.35c.28.43.52.8.45,1.14a1.1,1.1,0,0,1-.14.12l0,0-.16-.18a5.58,5.58,0,0,1-.68-.92c-2.28-4.33-6.49-6.62-9.88-8.47a1.9,1.9,0,0,0-.89-.29c-.34,0-.79.18-1,1a.34.34,0,0,0,.21.38c3.94,1.57,6.13,3,7.21,4.61L30,29.85a.34.34,0,0,0-.39.08.32.32,0,0,0,0,.39A3.62,3.62,0,0,0,31,31.76c4.71,2.66,5.71,4.74,4.89,10.11-.27,1.76-.56,3.51-.85,5.26-.45,2.67-.91,5.43-1.27,8.16-.47,3.48-.85,7.49.47,11.2a59.39,59.39,0,0,0,3.82,8.06l.29.54c2.29,4.28,6.24,6.87,10,9.37l1,.67A11,11,0,0,0,58,87a21.69,21.69,0,0,1,3.42-.38l1.3-.09,0,.23c-.1.43-.18.78-.28,1.12s-.24.71-.4,1.16l-.26.74a.35.35,0,0,0,.14.4.35.35,0,0,0,.43-.06l.52-.55,2.38,3.87a.34.34,0,0,0,.29.16h.06a.34.34,0,0,0,.27-.28l.52-2.93a.34.34,0,0,0-.14-.35.37.37,0,0,0-.38,0l-.56.38a5.16,5.16,0,0,1-.53-3.83l1.55.52c-.07.8-.14,1.6-.21,2.42a.33.33,0,0,0,.15.32.36.36,0,0,0,.36,0c.37-.22.52-.25.51-.29a2.13,2.13,0,0,1,0,.44,1.22,1.22,0,0,0,.18.93.61.61,0,0,0,.44.19.33.33,0,0,0,.32-.2l1.1-2.33a8.54,8.54,0,0,1,1.22.58,5.09,5.09,0,0,0,2.34.78,3.08,3.08,0,0,0,.94-.15,1.31,1.31,0,0,0,.91-.68c.14-.41-.12-.78-.37-1.15a.3.3,0,0,0-.23-.14.29.29,0,0,0-.25.06,3.07,3.07,0,0,1-1,.59c-.17,0-.48-.51-.89-1.17a1.23,1.23,0,0,1,.19-.82.49.49,0,0,1,.2.07,2.84,2.84,0,0,0,1.36.37,3.92,3.92,0,0,0,2.28-1c1.59,0,1.76-1.27,1.89-2.17l0-.24,1.14-1.45a.34.34,0,0,0-.32-.55,3.6,3.6,0,0,1-3.67-1.38l.43-.45C75.7,79.28,76.05,78.9,76.4,78.53Zm-1.11,6.69a5.22,5.22,0,0,1-.66.06,1.24,1.24,0,0,1-1.27-.87l.58.1C74.69,84.63,75.09,84.72,75.29,85.22ZM64.17,71.34c-.94-1.63-1.92-3.3-2.81-5a81.18,81.18,0,0,0-12.57-18,20.48,20.48,0,0,1-3.66-5.86c9.78,6.17,18.85,20,19.66,29.94ZM47,68.62A23.22,23.22,0,0,1,42.34,56a58.76,58.76,0,0,1,.12-8.18c.06-1.11.13-2.22.17-3.32h.26c.08.43.17.86.27,1.3a22.6,22.6,0,0,1,.54,3.36A36,36,0,0,0,54.56,73.32c1.2,1.19,2.42,2.36,3.65,3.53s2.43,2.33,3.65,3.54l-3.78-2.06A36.66,36.66,0,0,1,47,68.62Zm1.24-17.89c7.2,7.45,11.91,16.69,16.36,25.75C55.76,69.08,51.21,59.07,48.28,50.73Zm-1.87.87c.88,1.85,1.71,3.59,2.4,5.37a55.38,55.38,0,0,0,15.66,22,4.06,4.06,0,0,1,.62.75,0,0,0,0,0,0,0c-8.39-4.29-19.44-17.35-19.41-29.59Zm2.86-8.31c-1.44-1.23-2.83-2.53-4-3.64a4.39,4.39,0,0,1-.58-.78,1,1,0,0,0-.08-.14l4.08,2.84c3.23,2.24,6.57,4.55,9.78,6.91A26.39,26.39,0,0,1,69.33,68a36.15,36.15,0,0,1-.23,6.81c-.06.59-.12,1.18-.17,1.77a6,6,0,0,1-.55,1.77c-.09.21-.18.42-.26.63H68c-.07-.34-.15-.68-.23-1a20.27,20.27,0,0,1-.51-2.67C66.06,63.12,60.17,52.64,49.27,43.29Zm21,36.59a3.14,3.14,0,0,1-.58.57l0,0c.07-.2.14-.4.22-.59a14.18,14.18,0,0,0,.72-2.32c2.18-11.61-.86-21.38-9-29A62,62,0,0,0,52,41.61l-1.54-1a35.74,35.74,0,0,1-11.58-11A11.42,11.42,0,0,1,38,27.7a1,1,0,0,1,0-.29l.15.19c.39.51.69.91.95,1.33a22.82,22.82,0,0,0,11.31,9.26,69.42,69.42,0,0,1,16.23,9.49C72.14,52,74.92,58,75.09,65.93,75.2,71.5,72.7,76.11,70.24,79.88ZM40.91,46.23c0,.87-.1,1.74-.16,2.6a47,47,0,0,0-.17,5.57,26.94,26.94,0,0,0,7,17.71,49.58,49.58,0,0,0,14.25,10.4,2.44,2.44,0,0,1,.75.53h-.12c-.56,0-1.13-.07-1.67-.15C55.3,82,50.3,79.26,45.54,74.52c-7.07-7-9.95-15.82-8.55-26,.41-3,.91-6.06,1.38-9,.18-1.07.35-2.15.52-3.23C40.9,39.55,41.05,43.13,40.91,46.23Zm29.83,37.2,1,1.07v0l-1-1.07ZM34.67,58.34a8.19,8.19,0,0,1,.3-1.62c1.3,7.57,4,13.29,8.28,17.94,5.32,5.7,10.83,8.93,17.24,10.08a11.42,11.42,0,0,1-10.77-1.26c-3.9-2.47-7.58-5-9.9-8.86C36.9,69.77,34.09,64.53,34.67,58.34ZM66.29,85.21c.24-.06.47-.1.64-.13a.73.73,0,0,1,.23.57,1.08,1.08,0,0,1-.42.63l-.63-1ZM69,84.33c.74.23.95.85,1.2,1.61A3.59,3.59,0,0,0,71,87.47c-.06.41-.17.5-.19.5a.52.52,0,0,1-.16-.06,3.5,3.5,0,0,1-1.24-1.61,6.11,6.11,0,0,1-.36-1.58Zm3.74-2.23L73.58,81l2.82,2.19c-.3,0-.61,0-.9,0A3.57,3.57,0,0,1,72.75,82.1ZM31.89,25.26l-.12.07v-.18ZM32,26l.07-.05-.17-.09.26-.33a19.45,19.45,0,0,1,2,2c.1.12.19.26.29.39Z"
                    transform="translate(-19.47 -6.41)"
                  />
                </svg>
              </NewletterSignupStateIcon>
              <NewletterSignupStateText>
                We&apos;re not crying because you joined. It was the onion.
              </NewletterSignupStateText>
            </NewsletterSignupLoader>
          </NewsletterSignupConfirmation>
        </NewsletterSignupScroll>
      </NewsletterSignupContainer>
    )
  }
}

const NewsletterSignupTitle = styled.h3`
  color: #ffffff;
  font-size: 1.5em;
  padding-top: 30%;
`

const NewsletterSignupLabel = styled.label`
  color: #ffffff;
  font-family: 'Nunito', sans-serif;
  font-size: 0.75em;
  font-weight: 600;
  text-transform: uppercase;
`

const NewsletterSignupInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: none;
  border-bottom: solid 0.5px #ffffff;
  font-size: 1.15em;
  color: #ffffff;
  font-family: 'Nunito', sans-serif;
  margin-bottom: 20px;
  &:placeholder {
    color: #8d8b8b;
    font-size: 20px;
    font-weight: 300;
    font-style: italic;
    font-family: 'Nunito', sans-serif;
  }
`

const NewsletterSignupContainer = styled.div`
  background-color: #1b3414;
  height: 100%;
  overflow: hidden;
  padding-top: 175%;
  position: relative;
  width: 100%;
  @media (max-width: 767px) {
    height: 50%;
    padding-top: 400px;
  }
`

const NewsletterSignupScroll = styled.div<NewsletterPositionProps>`
  height: 300%;
  position: absolute;
  top: ${props => {
    return props.stage === 0 ? '0%' : props.stage === 1 ? '-100%' : '-200%'
  }};
  -webkit-transition: top 5s ease-out;
  -moz-transition: top 0.5s ease-out;
  -ms-transition: top 0.5s ease-out;
  -o-transition: top 0.5s ease-out;
  transition: top 0.5s ease-out;
`

const NewsletterSignupForm = styled.div`
  height: 33.33%;
  margin-left: 10%;
  width: 80%;
`
const NewsletterSignupStatus = styled.div`
  height: 33.33%;
  width: 100%;
`

const NewsletterSignupLoader = styled.div`
  padding-top: 75%;
`

const NewletterSignupStateText = styled.div`
  color: #ffffff;
  font-family: 'Nunito', sans-serif;
  font-size: 0.75rem;
  padding: 1rem 2rem;
  text-align: center;
`

const NewletterSignupStateIcon = styled.div`
  margin: 0 auto;
  width: 50px;
`

const NewsletterSignupConfirmation = styled.div`
  height: 33.33%;
  width: 100%;
`

export default NewsletterSignup
