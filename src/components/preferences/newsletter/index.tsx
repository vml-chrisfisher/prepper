import styled from '@emotion/styled'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  onTryUpdateArticleEmailPreferences,
  onTryUpdateRecipeEmailPreferences,
  onTryUpdateRoundupEmailPreferences,
} from '../../../store/ducks/emailPreferences/actions'
import { EmailPreferences } from '../../../store/ducks/emailPreferences/interfaces'
import { EMAIL_SEND_FREQUENCY } from '../../../store/ducks/emailPreferences/types'
import { getHouseholdId } from '../../../store/ducks/household/selectors'
import { getUserId } from '../../../store/ducks/profile/selectors'

const HouseholdNewsletterPreferences = (props: EmailPreferences) => {
  const Title = styled.h2`
    display: block;
    font-size: 14px;
    font-weight: 300;
    font-family: 'Playfair Display', serif;
    letter-spacing: -1px;
  `

  const dispatch = useDispatch()

  const householdId = useSelector(getHouseholdId)
  const userId = useSelector(getUserId)

  const onRecipesChange = (field: any, form: any, name: string, value: string) => {
    let nextValue
    if (field?.value?.includes(value)) {
      nextValue = field.value.filter((value: string) => value !== value)
    } else {
      nextValue = field.value.concat(value)
    }
    form.setFieldValue(name, nextValue)
    dispatch(onTryUpdateRecipeEmailPreferences({ preference: nextValue, householdId: householdId, userId: userId }))
  }

  const onArticlesChange = (field: any, form: any, name: string, value: string) => {
    let nextValue
    if (field?.value?.includes(value)) {
      nextValue = field.value.filter((value: string) => value !== value)
    } else {
      nextValue = field.value.concat(value)
    }
    form.setFieldValue(name, nextValue)
    dispatch(onTryUpdateArticleEmailPreferences({ preference: nextValue, householdId: householdId, userId: userId }))
  }

  const onRoundChange = (field: any, form: any, name: string, value: string) => {
    let nextValue
    if (field?.value?.includes(value)) {
      nextValue = field.value.filter((value: string) => value !== value)
    } else {
      nextValue = field.value.concat(value)
    }
    form.setFieldValue(name, nextValue)
    dispatch(onTryUpdateRoundupEmailPreferences({ preference: nextValue, householdId: householdId, userId: userId }))
  }

  const Checkbox = (props: {
    name: string
    label: string
    value: string
    onChangeCall: (field: any, form: any, name: string, value: string) => void
  }) => {
    return (
      <Field name={props.name}>
        {({ field, form }) => (
          <label className="input-container">
            <input
              type="checkbox"
              {...props}
              checked={field?.value?.includes(props.value)}
              onChange={() => {
                props.onChangeCall(field, form, props.name, props.value)
              }}
            />
            {props.label}
            <span className="checkmark"></span>
          </label>
        )}
      </Field>
    )
  }

  return (
    <div className="row">
      <div className="col12"></div>
      <div className="col12">
        <div className="col4">
          <Title>Recipes</Title>
          <Formik
            initialValues={{
              recipeFrequency: [EMAIL_SEND_FREQUENCY.WEEKLY],
            }}
            onSubmit={values => alert(JSON.stringify(values, null, 2))}
          >
            {formik => (
              <div>
                <div>
                  <Checkbox
                    name="recipeFrequency"
                    label="Daily"
                    onChangeCall={onRecipesChange}
                    value={EMAIL_SEND_FREQUENCY.DAILY}
                  />
                  <Checkbox
                    name="recipeFrequency"
                    label="Weekly"
                    onChangeCall={onRecipesChange}
                    value={EMAIL_SEND_FREQUENCY.WEEKLY}
                  />
                </div>
                <pre>{JSON.stringify(formik.values, null, 2)}</pre>
              </div>
            )}
          </Formik>
        </div>
        <div className="col4">
          <Title>Articles</Title>
          <Formik
            initialValues={{
              articleFrequency: [EMAIL_SEND_FREQUENCY.WEEKLY],
            }}
            onSubmit={values => alert(JSON.stringify(values, null, 2))}
          >
            {formik => (
              <div>
                <div>
                  <Checkbox
                    name="articleFrequency"
                    label="Daily"
                    onChangeCall={onArticlesChange}
                    value={EMAIL_SEND_FREQUENCY.DAILY}
                  />
                  <Checkbox
                    name="articleFrequency"
                    label="Weekly"
                    onChangeCall={onArticlesChange}
                    value={EMAIL_SEND_FREQUENCY.WEEKLY}
                  />
                </div>
                <pre>{JSON.stringify(formik.values, null, 2)}</pre>
              </div>
            )}
          </Formik>
        </div>
        <div className="col4">
          <Title>Roundups</Title>
          <Formik
            initialValues={{
              roundupFrequency: [EMAIL_SEND_FREQUENCY.MONTHLY],
            }}
            onSubmit={values => alert(JSON.stringify(values, null, 2))}
          >
            {formik => (
              <div>
                <div>
                  <Checkbox
                    name="roundupFrequency"
                    label="Monthly"
                    onChangeCall={onRoundChange}
                    value={EMAIL_SEND_FREQUENCY.MONTHLY}
                  />
                </div>
                <pre>{JSON.stringify(formik.values, null, 2)}</pre>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default HouseholdNewsletterPreferences
