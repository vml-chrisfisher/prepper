import { HouseholdMember } from './interfaces'
import { HOUSEHOLD } from './types'

export default {
  id: undefined,
  name: undefined,
  householdMembers: new Array<HouseholdMember>(),
  sidebarStep: HOUSEHOLD,
}
