import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { PureComponent } from 'react';
import { SearchResultProps } from './interface';

class SearchResult extends PureComponent<SearchResultProps> {
  constructor(props: SearchResultProps) {
    super(props)
  }

  render() {
    return (
      <SearchResultLink>
        <SearchResultTitle>{this.props.title}</SearchResultTitle>
        <SearchResultCopy>{this.props.copy}</SearchResultCopy>
      </SearchResultLink>
    )
  }
}

const SearchResultLink = styled.Link`
  display: block;
  width: 100%;
`

const SearchResultTitle = styled.div`
  padding-left: 5%;
  width: 90%;
`

const SearchResultCopy = styled.div`
  padding-left: 5%;
  width: 90%;
`

export default SearchResult
