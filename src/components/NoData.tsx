import { CryingCat } from '@assets'
import '@styles/NoData.styles.scss'

export const NoData = () => {
  return (
    <div className='no-data-container'>
      <img className='cat-img' alt='no data' src={CryingCat} />
      <span className='text'>
        Your filter settings are too specific and do not match enough participants in the Egyptian
        Tech Scene survey to produce meaningful insights. Please broaden your filter selection to
        view more data.
      </span>
    </div>
  )
}
