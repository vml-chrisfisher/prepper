interface Action {
  type: string
}

const initialState = {
  isDarkMode: false,
}

const headerUI = (state = initialState, action: { type: string }) => {
  return state
}

export default headerUI