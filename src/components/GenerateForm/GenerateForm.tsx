import React from 'react'
import { renderToString } from 'react-dom/server'
import Input from './../Input'
import Select from './../Select'

interface IField {
  type: string,
  name: string,
  label?: string,
  required?: boolean,
  params: object,
}

interface IPropsGenerateForm {
  fields: Array<IField>,
  color?: string,
}

const Components = {
  input: Input,
  select: Select,
  // Checkbox: Checkbox,
} as any

const generateStyles = (themeColor?: string) => `
  .Form {
    --main-color: ${themeColor || 'aqua'};
    display: flex;
    flex-direction: column;
    padding: 10px;
    border: 1px solid #222;
  }
  .WrapperField {
    margin: 5px 0;
  }
  .WrapperField__Label {}
  .WrapperField__Component {}
  .Form__Button {
    background-color: var(--main-color);
  }
`

const GenerateForm = (props: IPropsGenerateForm) => {
  const { fields, color = '#ffe000' } = props
  const Component = () => (
    <form className="Form">
      {fields.map((field) => {
        const fieldProps = {
          key: field.name,
          name: field.name,
          ...field.params,
        } as any
        if (field.required) fieldProps.required = true
        return (
          <div className="WrapperField">
            <div className='WrapperField__Label'>
              <label>{field.label}</label>
            </div>
            <div className='WrapperField__Component'>
              {React.createElement(Components[field.type], fieldProps)}
            </div>
          </div>
        )
      })}
      <button
        type="submit"
        className="Form__Button"
      >save</button>
    </form>
  )

  return renderToString(
    <>
      <style>
        {generateStyles(color)}
      </style>
      <Component />
    </>
  )
}

export default GenerateForm
