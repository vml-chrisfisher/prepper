import styled from '@emotion/styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HelloForm from './hello';
import ContactTabsInterface from './interface';
import PartnershipForm from './partnership';
import RecipeForm from './recipe';
import RecipeFormContainer from './recipe/container';
import SuggestionForm from './suggestion';
import {
  getContactSelectedTab,
  } from '../../store/ducks/contact/selectors';

import {
  showHello,
  showPartnership,
  showRecipe,
  showSuggestion,
} from '../../store/ducks/contact/action'
import {
  CONTACT_ACTION_TYPES,
} from '../../store/ducks/contact/types'

const ContactTabs = (props: ContactTabsInterface) => {

  interface TabProps {
    isSelected: boolean
  }

  const dispatch = useDispatch()
  const selectedTab = useSelector(getContactSelectedTab)

  const onHelloClick = () => {
    dispatch(showHello())
  }

  const onRecipeClick = () => {
    dispatch(showRecipe())
  }

  const onSuggestionClick = () => {
    dispatch(showSuggestion())
  }

  const onPartnershipClick = () => {
    dispatch(showPartnership())
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
    color: ${props => {
      return props.isSelected ? '#f24e11' : '#333333'
    }};
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
          <HelloForm helloCopy={props.helloCopy} helloTab={props.helloTab} />
      </SubContainer>
      <SubContainer isSelected={selectedTab === CONTACT_ACTION_TYPES.SHOW_RECIPE}>
          <RecipeFormContainer recipeCopy={props.recipeCopy} recipeTab={props.recipeTab} />
      </SubContainer>
      <SubContainer isSelected={selectedTab === CONTACT_ACTION_TYPES.SHOW_SUGGESTION}>
        <SuggestionForm suggestionCopy={props.suggestionCopy} suggestionTab={props.suggestionTab} />
      </SubContainer>
      <SubContainer isSelected={selectedTab === CONTACT_ACTION_TYPES.SHOW_PARTNERSHIP}>
        <PartnershipForm partnershipCopy={props.partnershipCopy} partnershipTab={props.partnershipTab} />
      </SubContainer>
    </Container>
  )
}

export default ContactTabs
