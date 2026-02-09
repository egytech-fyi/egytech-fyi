import { useState } from 'react'
import { Button } from 'antd'
import { FilterOutlined } from '@ant-design/icons'
import { FiltersDrawer, FiltersTags, StepCard, CustomInput } from '@components'
import { useGlobalState } from '@context'
import { POSITIONS_OPTIONS } from '@constants'
import { useGetStats } from '@services'
import { getPositionOptions } from '@utils'
import '@styles/MainFilters.styles.scss'

export const MainFilters = () => {
  const [open, setOpen] = useState<boolean>(false)

  const { state, dispatch } = useGlobalState()

  const positionsOptions = getPositionOptions(POSITIONS_OPTIONS)

  const { status } = useGetStats(
    { ...state },
    { enabled: Boolean(state.title) && Boolean(state.salary) },
  )

  return (
    <StepCard>
      <div className='filters-header'>
        <div>
          <div className='filters-title'>Step 1 — Role and salary</div>
          <div className='filters-subtitle'>
            Monthly net salary (base + bonus). Stored locally only. Results appear when enough data
            is available.
          </div>
        </div>
        {status !== 'idle' ? (
          <Button className='submit-button' icon={<FilterOutlined />} onClick={() => setOpen(true)}>
            Refine Filters
          </Button>
        ) : null}
      </div>
      <div className='inputs-container'>
        <div className='inputs-group'>
          <CustomInput
            mode='multiple'
            type='search'
            label='Role'
            options={positionsOptions}
            value={state.title}
            onSelect={(payload) => dispatch({ type: 'title', payload })}
            placeholder='Select your role'
          />
          <CustomInput
            label='Monthly Net Salary'
            type='number'
            actionable
            value={state.salary}
            onChange={(payload) => dispatch({ type: 'salary', payload })}
            onPressEnter={(e) => {
              const payload = Number((e.target as HTMLInputElement).value)
              dispatch({ type: 'salary', payload })
            }}
          />
        </div>
        <div className='filters-disclaimer'>
          * If you have an annual bonus, divide by 12 and add it to monthly base. Excludes equity
          and RSUs.
        </div>
      </div>
      <FiltersDrawer open={open} onClose={() => setOpen(false)} />
      <FiltersTags />
      {status !== 'idle' ? (
        <p className='disclaimer'>
          By default, we do not include relocated participants or participants working remotely for
          companies outside Egypt. Use Refine Filters to include them.
        </p>
      ) : null}
    </StepCard>
  )
}
