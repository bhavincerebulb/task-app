import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'

function Select (props) {
  const { label, name, options, ...rest } = props
  return (
    <div className=''>
      <label htmlFor={name}>{label}</label>
      <Field className="form-control" as='select' id={name} name={name} {...rest}>
        {options.map((option, index) => {
          return (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

export default Select
