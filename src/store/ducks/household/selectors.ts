import { Household, HouseholdMember, HouseholdMemberRole } from './interfaces';

export const getHouseholdData = (state: any): Household => state?.household || ({} as Household)

export const getHouseholdId = (state: any): string | undefined => {
  return getHouseholdData(state).id
}

export const getHouseholdName = (state: any): string | undefined => {
  return getHouseholdData(state).name
}

export const getHouseholdMember = (state: any): Array<HouseholdMember> | undefined => {
  return getHouseholdData(state).householdMembers
}
