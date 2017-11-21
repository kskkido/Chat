import styled from 'styled-components'

const CONTAINER_HEIGHT = '96vh'
const CONTAINER_WIDTH = '99vw'

export const ChatContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  height: ${CONTAINER_HEIGHT};
  width: ${CONTAINER_WIDTH};
  display: flex;
  flex-direction: row;
  border: 1px solid;
  transform: translate(-50%, -50%);
`

export const ChatLeft = styled.section`
  flex: 1;
  height: ${CONTAINER_HEIGHT};
  border-width: 0 1px 0 0;
`

export const ChatRight = styled.section`
  flex: 3;
  height: ${CONTAINER_HEIGHT};
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const ChatHeader = styled.div`
  padding: 10px 12px;
  height: 40px;
  width: 100%;
  border-width: 0 0 1px 0;
`

export const ChatMessagesContainer = styled.div`
  position: relative;
  padding: 10px;
  flex: 3;
  width: 100%;
  border-width: 0 0 1px 0;
  overflow-y: scroll;
`

export const ChatMessageContainer = styled.div`
  margin: 20px 0;
  height: auto;
  display: flex;
  align-items: flex-end;
`

export const ChatMessageBody = styled.div`
  width: 70%;
  padding: 10px;
`

export const ChatMessageBodySender = styled.div`
  margin-left: 11px;
  margin-bottom: 3px;
`

export const ChatMessageBodyContent = styled.div`
  position: relative;
  padding: 10px;
  max-width: 500px;
  background-color: #E0E0E0;
  border-radius: 10px;
`

export const ChatMessageBodyTime = styled.div`
  padding-right: 10px;
  width: 30%;
  text-align: right;
`

export const ChatMessageText = styled.span`
  display: block;
  color: ${props => props.color};

  &:before {
    content: "\00a0";
  }
`

export const ChatUsersContainer = styled.div`
  position: relative;
  padding: 10px;
  height: 95%;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

export const ChatUserContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-width: 0 0 1px 0;

  & * {
    margin 2px 0;
  }
`

export const ChatUserButton = styled.button`
  padding: 5px 10px;
  border-radius: 5px;
`


export const ChatInputContainer = styled.div`
  position: relative;
  padding: 10px;
  width: 100%;
`

export const ChatInputForm = styled.form`
  width: inherit;
  display: flex;
  align-items: flex-start;

  & button {
    align-self: flex-end;
  }
`

export const ChatInputTextArea = styled.textarea`
  position: relative;
  padding: 8px;
  height: 150px;
  width: 90%;
  font-size: 1em;
  resize: none;
  overflow-y: scroll;

  &:focus {
    outline-color: 0;
    outline-style: none;
    outline-width: 0;
  }
`
