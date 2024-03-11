import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Textarea (props) {
  const { label, name, ...rest } = props
  return (
    <div className=''>
      <label htmlFor={name}>{label}</label>
      <Field className="form-control" as='textarea' id={name} name={name}  {...rest}  />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Textarea
