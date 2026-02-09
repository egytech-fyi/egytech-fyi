import { CryingCat } from '@assets'
import '@styles/NoData.styles.scss'

export const NoData = () => {
  return (
    <div className='no-data-container'>
      <img className='cat-img' src={CryingCat} />
      <span className='text'>
        Your filters are too specific and do not match enough participants to show reliable
        insights. Try removing one or two filters.
      </span>
    </div>
  )
}
