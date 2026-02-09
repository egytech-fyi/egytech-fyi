import { useState } from 'react'
import { Checkbox, InputNumber, InputNumberProps, Select, Space, Typography } from 'antd'
import type { CheckboxProps, SelectProps } from 'antd'
import Icon from '@ant-design/icons'
import { CustomButton, FloatLabel } from '@components'
import '@styles/FormComponents.styles.scss'

interface CommonProps {
  show?: boolean
  label: string
  clearValue?: () => void
}

interface CustomInputNumberProps extends CommonProps, Omit<InputNumberProps, 'onChange'> {
  type: 'number'
  actionable?: boolean
  inputLabel1?: string
  onChange?: (value: number) => void
  placeholder?: string
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => void
  value?: number | undefined
}
interface CustomSearchInputProps extends CommonProps, Omit<SelectProps, 'onChange' | 'onSelect'> {
  type: 'search'
  onSelect?: SelectProps['onChange']
}
interface CustomSelectInputProps extends CommonProps, Omit<SelectProps, 'onChange' | 'onSelect'> {
  type: 'select'
  onSelect?: SelectProps['onChange']
}
interface CustomCheckBoxInput extends CommonProps, CheckboxProps {
  type: 'checkbox'
}

type CustomInputProps =
  | CustomInputNumberProps
  | CustomSearchInputProps
  | CustomSelectInputProps
  | CustomCheckBoxInput

export const CustomInput = (props: CustomInputProps) => {
  switch (props.type) {
    case 'number':
      return <CustomNumberInput {...props} />
    case 'search':
      return <CustomSearchInput {...props} />
    case 'select':
      return <CustomSelectInput {...props} />
    case 'checkbox':
      return <CustomCheckBoxInput {...props} />
    default:
      return null
  }
}

const CustomNumberInput: React.FC<CustomInputNumberProps> = ({
  actionable = false,
  onChange,
  label,
  placeholder,
  show = true,
  inputLabel1 = 'EGP',
  onPressEnter,
  value,
  clearValue,
}: CustomInputNumberProps) => {
  const [number, setNumber] = useState<number | undefined>(value)
  if (!show) return null

  const handleCompare = () => {
    onChange?.(number ?? 0)
  }

  return (
    <div className='number-input-wrap'>
      <FloatLabel
        label={label}
        placeholder={placeholder as string}
        value={number !== undefined ? `${number}` : undefined}
        extraLeft
        clearValue={
          clearValue
            ? () => {
                clearValue?.()
                setNumber(undefined)
              }
            : undefined
        }
      >
        <InputNumber<number>
          className='input number-input'
          addonBefore={<span style={{ paddingInline: '10px' }}>{inputLabel1}</span>}
          value={number}
          inputMode='tel'
          pattern='[0-9]*'
          onChange={(value) => {
            setNumber(value ?? undefined)
            !actionable && onChange?.(value as number)
          }}
          status={number === 0 || (number && number < 0) ? 'error' : ''}
          onPressEnter={(e) => {
            onPressEnter?.(e)
            handleCompare()
          }}
        />
      </FloatLabel>
      {actionable ? (
        <CustomButton
          type='primary'
          className='compare-button'
          disabled={number ? number <= 0 : false}
          onClick={handleCompare}
        >
          <Typography.Text strong>💸 Compare</Typography.Text>
        </CustomButton>
      ) : null}
    </div>
  )
}
const CustomSearchInput = ({
  options,
  onSelect,
  label,
  placeholder,
  value,
  show = true,
  clearValue,
  ...props
}: CustomSearchInputProps) => {
  if (!show) return null

  return (
    <FloatLabel
      label={label}
      placeholder={placeholder as string}
      value={value}
      clearValue={clearValue}
    >
      <Select
        className='search-input'
        showSearch
        filterOption={(input, option) =>
          ((option?.label as string).toLocaleLowerCase() ?? '').includes(input.toLocaleLowerCase())
        }
        onChange={onSelect}
        options={options}
        optionRender={(option) => (
          <Space direction='horizontal'>
            <Icon component={option.data.icon} />
            <span style={{ whiteSpace: 'normal' }}>{option.label}</span>
          </Space>
        )}
        value={value}
        {...props}
      />
    </FloatLabel>
  )
}

const CustomSelectInput = ({
  options,
  onSelect,
  placeholder,
  label,
  value,
  show = true,
  clearValue,
  ...props
}: CustomSelectInputProps) => {
  if (!show) return null

  return (
    <FloatLabel
      label={label}
      placeholder={placeholder as string}
      value={value}
      clearValue={clearValue}
    >
      <Select
        className='select-input'
        onChange={onSelect}
        options={options}
        value={value}
        {...props}
      />
    </FloatLabel>
  )
}
const CustomCheckBoxInput = ({ label, onChange, show = true, ...props }: CustomCheckBoxInput) => {
  if (!show) return null

  return (
    <Checkbox onChange={onChange} {...props}>
      {label}
    </Checkbox>
  )
}
