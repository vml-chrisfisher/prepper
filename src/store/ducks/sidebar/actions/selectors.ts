import { getUserId } from '../../profile/selectors';

export const getSidebarActionsData = (state: any) => state?.sidebarActions || {}

export const getShowProfile = (state:any) => {
    console.log(getSidebarActionsData(state).showProfile)
    console.log(getUserId(state) !== undefined)
    return getSidebarActionsData(state).showProfile || getUserId(state) !== undefined
}
