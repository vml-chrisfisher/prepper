import { HOUSEHOLD } from './types';

export const onTryFetchHousehold = (payload:any) => ({
    type: HOUSEHOLD.TRY_FETCH_HOUSEHOLD,
    payload
})

export const onTryCreateHousehold = (payload: any) => ({
    type: HOUSEHOLD.TRY_CREATE_NEW_HOUSEHOLD,
    payload
})