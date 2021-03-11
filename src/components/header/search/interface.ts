export interface SearchProps {
  showSearch?: boolean
  searchSuggestion?: string[]
  searchResults?: string[]
  onSearch: (searchTerm: string) => void
  onCloseSearch: () => void
}

export interface SearchState {
  searchTerm: string
}
