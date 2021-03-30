import { Household, HouseholdMember, HouseholdMemberRole } from './interfaces'

export const getHouseholdData = (state: any): Household => state?.household || ({} as Household)

export const getHoldhouseId = (state: any): string | undefined => {
  return getHouseholdData(state).id
}

export const getHouseholdName = (state: any): string | undefined => {
  return getHouseholdData(state).name
}

export const getHouseholdMember = (state: any): Array<HouseholdMember> => {
  return getHouseholdData(state).householdMembers
}
