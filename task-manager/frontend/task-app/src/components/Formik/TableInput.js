import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function TableInput (props) {
  const { label, name, ...rest } = props
  return (
    <div className=''>
      <Field className="form-control" id={name} name={name} {...rest} />
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default TableInput
