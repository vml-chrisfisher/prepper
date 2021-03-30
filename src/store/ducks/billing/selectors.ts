import {
  BillingInformation,
  BillingInformationAddress,
  BillingInformationCardInformation,
  BillingInformationContactInformation,
  CARD_TYPE,
} from './interface'

export const getBillingPreferencesData = (state: any) => state?.billing || ({} as BillingInformation)

export const getBillingPreferencesContact = (state: any): BillingInformationContactInformation => {
  return getBillingPreferencesData(state).contact
}

export const getBillingPreferencesFirstName = (state: any): string | undefined => {
  return getBillingPreferencesContact(state).firstName
}

export const getBillingPreferencesLastName = (state: any): string | undefined => {
  return getBillingPreferencesContact(state).lastName
}

export const getBillingPreferencesFullAddress = (state: any): BillingInformationAddress => {
  return getBillingPreferencesData(state).address
}

export const getBillingPreferencesAddress1 = (state: any): string | undefined => {
  return getBillingPreferencesFullAddress(state).address1
}

export const getBillingPreferencesAddress2 = (state: any): string | undefined => {
  return getBillingPreferencesFullAddress(state).address2
}

export const getBillingPreferencesCity = (state: any): string | undefined => {
  return getBillingPreferencesFullAddress(state).city
}

export const getBillingPreferencesState = (state: any): string | undefined => {
  return getBillingPreferencesFullAddress(state).state
}

export const getBillingPreferencesCountry = (state: any): string | undefined => {
  return getBillingPreferencesFullAddress(state).country
}

export const getBillingPreferencesCardInformation = (state: any): BillingInformationCardInformation => {
  return getBillingPreferencesData(state).cardInformation
}

export const getBillingPreferencesCardType = (state: any): CARD_TYPE | undefined => {
  return getBillingPreferencesCardInformation(state).cardType
}

export const getBillingPreferencesCardTypeImagePath = (state: any): string | undefined => {
  switch (getBillingPreferencesCardType(state)) {
    case CARD_TYPE.AMEX:
      return ''
    case CARD_TYPE.DISCOVER:
      return ''
    case CARD_TYPE.MASTERCARD:
      return ''
    case CARD_TYPE.VISA:
      return ''
    default:
      return undefined
  }
}

export const getBillingPreferencesCardNumber = (state: any): number | undefined => {
  return getBillingPreferencesCardInformation(state).cardNumber
}

export const getBillingPreferencesCardNumberLength = (state: any): number | undefined => {
  return getBillingPreferencesCardInformation(state).cardNumberLength
}

export const getBillingPreferencesExpirationDate = (state: any): Date | undefined => {
  return getBillingPreferencesCardInformation(state).expirationDate
}

export const getBillingPreferencesCCS = (state: any): number | undefined => {
  return getBillingPreferencesCardInformation(state).ccv
}
