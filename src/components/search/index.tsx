import styled from '@emotion/styled'
import React, { PureComponent } from 'react'
import { SearchProps } from './interface'

class Search extends PureComponent<SearchProps> {
  constructor(props: SearchProps) {
    super(props)
  }

  render() {
    return <SearchContainer></SearchContainer>
  }
}

const SearchContainer = styled.div`
    background-color: rgba(0.5, 0.5, 0.5, 0.25)
    display: block;
    height: 100%;
    position: fixed;
    width: 100%;
    z-index: 9999;
  `
const SearchCLose = styled.button``

const SearchInput = styled.input``

const SearchSubmit = styled.button``

export default Search
