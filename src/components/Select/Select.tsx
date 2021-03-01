import React from 'react'

type OptionType = {
  text: string,
  value: string,
}

interface IProps {
  name: string,
  options: Array<OptionType>,
}

const Select = (props: IProps) => {
  const { options, name } = props

  return (
    <select name={name}>
      {options.map((field: OptionType) => {
        return (
          <option value={field.value}>{field.text}</option>
        )
      })}
    </select>
  )
}

export default Select
