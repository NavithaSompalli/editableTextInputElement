import {Component} from 'react'

import './App.css'

import styled from 'styled-components'

export const AppContainer = styled.div`
  background-color: #f5d0fe;
  min-height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color:  #000000;
  font-family:"Roboto"
  font-size:30px;
  font-weight:bold;
  text-align:center;
`

export const CardContainer = styled.div`
  background-color: #ffffff;
  width: 40%;
  height: 300px;
  padding: 20px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const InputElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`

export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: 1px solid #000000;
  border-radius: 5px;
  color: #323f4b;
  font-family: 'Roboto';
`
export const CustomButton = styled.button`
  background-color: #d946ef;
  border: none;
  outline: none;
  color: #ffffff;
  width: 100px;
  border-radius: 5px;
  font-family:"Roboto"
  font-size:20px;
  font-weight:bold;
  height:30px;
  margin-left:20px;
`
export const Paragraph = styled.p`
font-family:"Roboto"
  font-size:20px;
  margin-top:5px;
  color:#323f4b;
`

// Replace your code here
class App extends Component {
  state = {
    isSave: false,
    textInputValue: '',
  }

  onClickSaveButton = () => {
    this.setState(prevState => ({isSave: !prevState.isSave}))
  }

  inputTextValue = event => {
    this.setState({textInputValue: event.target.value})
  }

  render() {
    const {isSave, textInputValue} = this.state
    console.log(textInputValue)

    const btnText = isSave ? 'Edit' : 'Save'

    const renderInputElement = isSave ? (
      <Paragraph>{textInputValue}</Paragraph>
    ) : (
      <Input
        type="text"
        value={textInputValue}
        onChange={this.inputTextValue}
      />
    )

    return (
      <AppContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputElementContainer>
            {renderInputElement}
            <CustomButton type="button" onClick={this.onClickSaveButton}>
              {btnText}
            </CustomButton>
          </InputElementContainer>
        </CardContainer>
      </AppContainer>
    )
  }
}

export default App
