import styled from 'styled-components'

export const UserFormContainer = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  height: 50vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  * {
    margin: 10px 0;
  }
`

export const UserInput = styled.input`
  padding: 10px 30px;
  width: 100%;
  color: grey;
  font-size: 1.3em;
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: white;
  background-color: transparent;
  letter-spacing: 1px;

  &:focus {
    outline-color: 0;
    outline-style: none;
    outline-width: 0;
  }
`
