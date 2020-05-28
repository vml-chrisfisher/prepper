import { HEADER_ACTION_TYPES, NEWSLETTER_ACTION_TYPES } from './types'

export const fetch = () => ({
    type: HEADER_ACTION_TYPES.FETCH,
})

export const onFamilySelected = (id: string) => ({
    type: HEADER_ACTION_TYPES.FAMILY_SELECTED,
    familyId: id,
})

export const onCategorySelected = (id?: string) => ({
    type: HEADER_ACTION_TYPES.CATEGORY_SELECTED,
    categoryId: id,
})

export const onNewsletterReset = () => ({
    type: NEWSLETTER_ACTION_TYPES.RESET,
})

export const onNewsletterSubmit = (email: string) => ({
    type: NEWSLETTER_ACTION_TYPES.SUBMIT,
    email: email,
})
