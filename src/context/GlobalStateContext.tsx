import React, { createContext, useReducer, ReactNode } from 'react'
import { initialState } from '@constants'
import { RequestType } from '@types'

export type StateType = RequestType & { salary?: number }

export type FiltersPayload = Partial<Omit<RequestType, 'title'>>

export type ActionType =
  | { type: 'business_focus'; payload: string | undefined }
  | { type: 'business_line'; payload: string | undefined }
  | { type: 'business_market'; payload: string | undefined }
  | { type: 'business_size'; payload: string | undefined }
  | { type: 'cs_degree'; payload: string | undefined }
  | { type: 'gender'; payload: string | undefined }
  | { type: 'include_relocated'; payload: boolean | undefined }
  | { type: 'include_remote_abroad'; payload: boolean | undefined }
  | { type: 'level'; payload: string | undefined }
  | { type: 'title'; payload: string[] | undefined }
  | { type: 'programming_language'; payload: string | undefined }
  | { type: 'salary'; payload: number | undefined }
  | {
      type: 'filters'
      payload: FiltersPayload
    }

function reducer(state: StateType, action: ActionType): StateType {
  if (action.type === 'filters') {
    const filteredObject = Object.fromEntries(
      Object.entries(action.payload).filter(([key, value]) => key && value),
    )
    return { ...state, ...filteredObject }
  } else {
    return { ...state, [action.type]: action.payload }
  }
}

export const GlobalStateContext = createContext<
  { state: StateType; dispatch: React.Dispatch<ActionType> } | undefined
>(undefined)

export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  )
}
