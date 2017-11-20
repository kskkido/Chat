/* eslint-disable import/prefer-default-export */
import styled, { css } from 'styled-components'

export const Global = css`
  body {
    background-color: white;
    color: black;
    font-family: 'Roboto', sans-serif;
    font-family: 'Open Sans', sans-serif;
    font-size: 1.2em;
    letter-spacing: 1px;

    section {
      margin: 0;
      padding: 0;

    }

    div {
      margin: 0;
      padding: 0;
      word-wrap: break-word;
    }

    a {
      text-decoration: none;
      font-size: 20px;
      color: black;
    }

    h1 {
      font-size: 3em;
    }

    input {
      autofocus
    }

    button {
      font-size: 0.8em;
      cursor: pointer;

      &:focus {
        outline-color: 0;
        outline-style: none;
        outline-width: 0;
      }
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      border: 0px black solid;
    }
  }
`

export const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
`

export const AppButton = styled.button`
  margin: 10px 5px;
  padding: 15px 25px;
  border-radius: 10px;
`

export const AppError = styled.span`
  color: red;
`

export const AppOverlay = styled.div`
  position: fixed;
  height: 110vh;
  width: 110vw;
  opacity: 0.7;
  background-color: black;
  z-index: -1;
`

export const AppSubText = styled.span`
  font-size: 0.8em;
  color: grey;
`
