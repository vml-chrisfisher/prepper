export const isBrowser = typeof window !== 'undefined'

export const hasLoggedInBefore = () => {
  // if (!isBrowser) {
  //   return false;
  // }

  if (isBrowser) {
    return localStorage.getItem('hasLoggedInBefore') === 'true'
  }
}
