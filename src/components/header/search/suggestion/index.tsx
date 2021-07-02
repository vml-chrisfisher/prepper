import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { PureComponent } from 'react';
import { SearchSuggestionProps } from './interface';

class SearchSuggestion extends PureComponent<SearchSuggestionProps> {
  constructor(props: SearchSuggestionProps) {
    super(props)
  }

  render() {
    return <SearchSuggestionLink>{this.props.suggestion}</SearchSuggestionLink>
  }
}

const SearchSuggestionLink = styled.Link`
  display: block;
  width: 100%;
`

export default SearchSuggestion
