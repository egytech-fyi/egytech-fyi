import React, { useState } from 'react'

import '@styles/SharedComponents.styles.scss'

interface FloatLabelProps {
  label: string
  value: string | undefined
  placeholder?: string
  required?: boolean
  extraLeft?: boolean
  children?: React.ReactNode
}

export const FloatLabel = (props: FloatLabelProps) => {
  const [focus, setFocus] = useState(false)
  const { label, value, required, children } = props
  let placeholder = props.placeholder

  if (!props.placeholder) placeholder = label

  const isOccupied = focus || (value && value.length !== 0)

  const labelClass = isOccupied ? 'label as-label' : 'label as-placeholder'
  const extraLeft = props.extraLeft ? ' number' : ''

  const requiredMark = required ? <span className='text-danger'>*</span> : null

  return (
    <div className='float-label' onBlur={() => setFocus(false)} onFocus={() => setFocus(true)}>
      {children}
      <label className={labelClass + extraLeft}>
        <span className='content-span'>
          {isOccupied ? label : placeholder} {requiredMark}
          {isOccupied && <span className='hiding-span'></span>}
        </span>
      </label>
    </div>
  )
}
