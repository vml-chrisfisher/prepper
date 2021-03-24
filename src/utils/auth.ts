export const isBrowser = typeof window !== 'undefined'

export const hasLoggedInBefore = () => {
  // if (!isBrowser) {
  //   return false;
  // }

  console.log('LOCAL STORAGE: ', localStorage.getItem('hasLoggedInBefore') === 'true')
  return localStorage.getItem('hasLoggedInBefore') === 'true'
}
