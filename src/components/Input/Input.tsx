import React from 'react'

interface IProps {
  type: string,
  name: string,
  placeholder?: string,
}

const Input = (props: IProps) => {
  const { type = 'text', name, placeholder } = props

  return (
    <input type={type} name={name} placeholder={placeholder} />
  )
}

export default Input
