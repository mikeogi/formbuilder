import React, { useState, useMemo } from 'react';
import styl from 'styled-components'
import './App.css';
import GenerateForm from './components/GenerateForm/GenerateForm'

const Right = styl.div`
  width: 70%;
  height: 100%;
`

const Left = styl.div`
  width: 30%;
`

const Container = styl.div`
  display: flex;
  flex-direction: column;
`

const Editor = styl(Container)`
  flex-direction: row;
  height: 80vh;
`

const Frame = styl.iframe`
  height: 100%;
`

const CopyButton = styl.button`
  width: 100px;
  height: 40px;
`

const mockFields = [
  {
    name: 'name',
    type: 'input',
    label: 'You name',
    required: true,
    params: {
      type: 'text',
      placeholder: 'Jon CJ',
    },
  },
  {
    name: 'car',
    type: 'select',
    label: 'You car',
    params: {
      options: [
        { value: '1', text: 'Ford' },
        { value: '2', text: 'Camry' },
        { value: '3', text: 'BMW' },
        { value: '4', text: 'Koji' },
      ]
    },
  },
  {
    name: 'age',
    type: 'input',
    label: 'Age',
    params: {
      type: 'number',
      placeholder: 'age',
    },
  },
]

function App() {
  const [fields, setFields] = useState(mockFields)
  const [color, setColor] = useState('#ffe000')

  const formString = useMemo(() => {
    return GenerateForm({ fields, color })
  }, [fields, color])

  const onClickCopyButton = async () => {
    await navigator.clipboard.writeText(formString)
  }

  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value)
  }

  return (
    <Container className="App">
      <Editor>
        <Left>
          <input onChange={onChangeColor} type="color" value={color} />
          <CopyButton type="button" onClick={onClickCopyButton}>copy code</CopyButton>
        </Left>
        <Right>
          <Frame srcDoc={formString} />
        </Right>
      </Editor>
    </Container>
  );
}

export default App;
