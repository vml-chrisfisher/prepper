export enum CARD_TYPE {
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD',
  DISCOVER = 'DISCOVER',
  AMEX = 'AMEX',
}

export interface BillingInformationContactInformation {
  firstName?: string
  lastName?: string
}

export interface BillingInformationAddress {
  address1?: string
  address2?: string
  city?: string
  state?: string
  zipCode?: string
  country?: string
}

export interface BillingInformationCardInformation {
  cardType?: CARD_TYPE
  cardTypeImagePath?: string
  cardNumber?: number
  cardNumberLength?: number
  expirationDate?: Date
  ccv?: number
}

export interface Billing {
  date: Date
}

export interface BillingInformation {
  contact: BillingInformationContactInformation
  address: BillingInformationAddress
  cardInformation: BillingInformationCardInformation
  nextBilling: Billing
  previousBillings: Array<Billing>
}
