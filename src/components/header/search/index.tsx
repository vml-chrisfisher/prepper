import styled from '@emotion/styled'
import React, { PureComponent } from 'react'
import { SearchProps, SearchState } from './interface'

class Search extends PureComponent<SearchProps, SearchState> {
  constructor(props: SearchProps) {
    super(props)

    this.state = {
      searchTerm: '',
    }
  }

  onCloseClick() {
    if (this.props.onCloseSearch) {
      this.props.onCloseSearch()
    }
  }

  onHandleSubmit(event: React.KeyboardEvent) {
    if (event.key === 'Enter') {
      this.props.onSearch(this.state.searchTerm)
    }
  }

  render() {
    return (
      <>
        {this.props.showSearch && (
          <SearchDivContainer>
            <SearchClose
              onClick={() => {
                this.onCloseClick()
              }}
            ></SearchClose>
            <Col4Full></Col4Full>
            <Col4Full>
              <SearchInputWrapper>
                <SearchInput
                  type="input"
                  value={this.state.searchTerm}
                  onChange={event => this.setState({ searchTerm: event.target.value })}
                  onKeyUp={event => this.onHandleSubmit(event)}
                  placeholder="What are you hungry for?"
                />
              </SearchInputWrapper>
            </Col4Full>
          </SearchDivContainer>
        )}
      </>
    )
  }
}

const SearchDivContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.9);
  display: block;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 9999;
`
const SearchClose = styled.button`
  background-color: transparent;
  background-image: url(/close.svg);
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  width: 50px;
  height: 50px;
  position: absolute;
  right: 10px;
  top: 10px;
`

const Col4Full = styled.div`
  display: inline-block;
  height: 100%;
  width: 33%;
  padding: 0;
`

const SearchInputWrapper = styled.div`
  height: 100%;
  padding-top: calc(50% - 25px);
`

const SearchInput = styled.input`
  width: 100%;
  height: 50px;
  background-color: transparent;
  border: none;
  border-bottom: solid 0.5px #333333;
  font-size: 36px;
  color: #333333;
  font-family: 'Playfair Display', serif;
  font-style: italic;
  margin: auto 0;
  padding-bottom: 20px;
  &::placeholder {
    color: #b4b2b2;
    font-size: 36px;
    font-weight: 300;
    font-style: italic;
    font-family: 'Playfair Display:ital', serif;
  }
`

const SearchSubmit = styled.button``

export default Search
