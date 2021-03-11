interface Action {
  type: string
}

const initialState = {
  isDarkMode: false,
  showSearch: false,
  showHeaderProfile: false,
  showAccount: true,
  showCart: false,
}

const headerUI = (state = initialState) => {
  return state
}

export default headerUI
