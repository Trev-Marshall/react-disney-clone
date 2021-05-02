import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@material-ui/icons/Search';

function Search() {
  return (
    <Container>
      <SearchContainer>
        <SearchIcon style={{ fontSize: 40, color: '#d8dae4da' }} />
        <InputArea placeholder="Search" />
      </SearchContainer>
    </Container>
  )
}

export default Search

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  max-width: 100vw;
`
const SearchContainer = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  width: 60%;
  margin: 100px auto auto;
  background-color: #b0b2bd52;
  border-radius: 50px;
  align-items: center
`

const InputArea = styled.input`
  flex: 1;
  height: 50px;
  border: none;
  font-size: 30px;
  background-color: #ffffff00;
  border-bottom: 1px solid #ffffff57;
  margin-left: 5px;

  &:focus {
    outline: none;
    border-bottom: 2px solid #e4e5e6ad;
    color: #e4e5e6f6;
  }

`
