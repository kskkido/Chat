import styled from 'styled-components'

export const UserCard = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  height: 40vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid;

  * {
    margin: 10px 0;
  }
`

export const UserFormContainer = styled.form`
  display: flex;
  flex-direction: column;
`
