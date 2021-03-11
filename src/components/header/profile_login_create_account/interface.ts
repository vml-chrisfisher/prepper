export interface ProfileLoginProps {
  showSearch?: boolean
  searchSuggestion?: string[]
  searchResults?: string[]
  onSearch: (searchTerm: string) => void
  onCloseSearch: () => void
}

export interface ProfileLoginState {
  currentSection: CURRENT_PROFILE_LOGIN_SECTION
  username: string
  password: string
}

export enum CURRENT_PROFILE_LOGIN_SECTION {
  PROFILE = 'PROFILE',
  CREATE_ACCOUNT = 'CREATE_ACCOUNT',
  LOGIN = 'LOGIN',
}
