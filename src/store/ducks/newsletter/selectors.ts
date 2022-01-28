export const getNewsletterData = (state: any) => state?.newsletter || {}

export const getNewsletterLinkId = (state: any): string | undefined => {
  return getNewsletterData(state).linkId
}
