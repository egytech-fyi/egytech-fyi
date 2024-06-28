import '@styles/RoundedTag.scss'

interface RoundedTagProps {
  tagName: string
}

export const RoundedTag = ({ tagName }: RoundedTagProps) => {
  return (
    <div color='blue' className='rounded-tag'>
      {tagName}
    </div>
  )
}
