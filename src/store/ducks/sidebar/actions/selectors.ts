import { getUserId } from '../../profile/selectors';

export const getSidebarActionsData = (state: any) => state?.sidebarActions || {}

export const getShowProfile = (state:any) => {
    return getSidebarActionsData(state).showProfile || getUserId(state) !== undefined
}
