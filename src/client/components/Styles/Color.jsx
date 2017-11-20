import styled from 'styled-components'

export const ColorTable = styled.ul`
  list-style: none;
  height: auto;
  width: auto;

  & li {
    display: inline-block;
    margin: 1px;
  }
`

export const ColorCell = styled.div`
  position: relative;
  width: 25px;
  height: 25px;
  cursor: pointer;
  background-color: ${props => props.color};
  border: ${props => props.active && '3px solid rgba(255,255,255, 0.5)'};
`

