import { CustomTag } from '@components'
import { StateType, useGlobalState } from '@context'
import { fieldKeyMap, keyValueMap } from '@constants'
import '@styles/FilterTags.styles.scss'

type StateKey = keyof StateType

const colors = [
  '#1b7f6b',
  '#2f6f5f',
  '#3d5a57',
  '#d2a75f',
  '#9a6b2f',
  '#4c5f5b',
  '#6b7b76',
  '#1f4f46',
  '#c99347',
  '#2d3c39',
  '#7aa396',
  '#8a6a42',
]

export const FiltersTags = () => {
  const { state, dispatch } = useGlobalState()
  const blackListedStates = ['title', 'salary']

  const tags = Object.keys(state)
    .filter((key) => !blackListedStates.includes(key))
    .map((key, index) => {
      const value = state[key as StateKey]
      if (value) {
        return (
          <CustomTag
            key={key}
            closable
            onClose={() =>
              dispatch({
                type: key as never,
                payload: undefined,
              })
            }
            color={colors[index]}
            fieldKey={fieldKeyMap[key]}
            fieldValue={
              typeof value !== 'object' && typeof value !== 'boolean' && keyValueMap[value]
                ? keyValueMap[value]
                : value
            }
          />
        )
      }
    })
    .filter(Boolean)

  return <div className='filter-tags'>{tags}</div>
}
