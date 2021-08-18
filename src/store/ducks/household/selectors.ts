import { Household, HouseholdMember } from './interfaces'
import { HOUSEHOLD } from './types'

export const getHouseholdData = (state: any) => state?.household || {}

export const getHouseholdId = (state: any): string | undefined => {
  return getHouseholdData(state).id
}

export const getHouseholdName = (state: any): string | undefined => {
  return getHouseholdData(state).name
}

export const getHouseholdMember = (state: any): Array<HouseholdMember> | undefined => {
  return getHouseholdData(state).householdMembers
}

export const getSidebarStep = (state: any): HOUSEHOLD => {
  return getHouseholdData(state).sidebarStep
}
