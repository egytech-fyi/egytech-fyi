import { useMemo } from 'react'
import { Histogram, Spline, StepCard, BaseComment } from '@components'
import { useGlobalState } from '@context'
import { transformBucketsData } from '@functions'
import { useGetStats } from '@services'

interface GraphCardProps {
  type: 'histogram' | 'spline'
}
export const GraphCard = ({ type }: GraphCardProps) => {
  const { state } = useGlobalState()

  const { data: selectedGenderData, status: selectedGenderStatus } = useGetStats(
    { ...state },
    {
      enabled: Boolean(state.title) && Boolean(state.salary) && Boolean(state.gender),
    },
  )

  const { data: maleGenderData } = useGetStats(
    { ...state, gender: 'male' },
    {
      enabled: Boolean(state.title) && Boolean(state.salary) && !(state.gender === 'male'),
    },
  )

  const { data: femaleGenderData } = useGetStats(
    { ...state, gender: 'female' },
    {
      enabled: Boolean(state.title) && Boolean(state.salary) && !(state.gender === 'female'),
    },
  )

  const histogramData = useMemo(() => {
    if (selectedGenderData?.buckets) {
      return transformBucketsData(selectedGenderData, state.salary)
    }
    return { transformedBuckets: [], salaryBucketIndex: -1 }
  }, [selectedGenderData, state.salary])

  const splineDataFemale = useMemo(() => {
    if (femaleGenderData?.buckets) {
      return transformBucketsData(femaleGenderData, state.salary, 'percentages')
    }
    return { transformedBuckets: [], salaryBucketIndex: -1 }
  }, [femaleGenderData, state.salary])

  const splineDataMale = useMemo(() => {
    if (maleGenderData?.buckets) {
      return transformBucketsData(maleGenderData, state.salary, 'percentages')
    }
    return { transformedBuckets: [], salaryBucketIndex: -1 }
  }, [maleGenderData, state.salary])

  if (selectedGenderStatus !== 'success') return null

  if (histogramData.transformedBuckets.length < 3) {
    return null
  }

  return (
    <StepCard>
      {type === 'histogram' ? (
        <StepCard>
          <Histogram
            data={histogramData.transformedBuckets}
            salaryBucketIndex={histogramData.salaryBucketIndex}
          />
          <p className='chart-caption'>
            Bars show how many participants fall into each salary band.
          </p>
          <div className='salary-comment-container'>
            <BaseComment>
              See the 2022{' '}
              <a
                href='https://lookerstudio.google.com/reporting/fc89c7a2-5dd9-4954-afc3-3ea7f3c7241a/page/DUS6C?s=qk7232SNGS4'
                target='_blank'>
                Salary Dashboard
              </a>{' '}
              to compare how the market shifted after devaluation.
            </BaseComment>
          </div>
        </StepCard>
      ) : null}
      {type === 'spline' ? (
        <StepCard>
          <Spline
            data={[
              {
                name: 'Female',
                data: splineDataFemale.transformedBuckets,
                className: !(state.gender === 'male') ? 'active' : 'inactive',
              },
              {
                name: 'Male',
                data: splineDataMale.transformedBuckets,
                className: !(state.gender === 'female') ? 'active' : 'inactive',
              },
            ]}
            salaryBucketIndex={histogramData.salaryBucketIndex}
          />
          <p className='chart-caption'>Lines show gender distributions across salary bands.</p>
          <div className='salary-comment-container'>
            <BaseComment>
              Read the 2022{' '}
              <a
                href='https://ranasamir.hashnode.dev/egypts-tech-scene-unequal-pay-in-the-tech-market'
                target='_blank'>
                Unequal Pay in the Tech Market
              </a>{' '}
              report and watch for the next update.
            </BaseComment>
          </div>
        </StepCard>
      ) : null}
    </StepCard>
  )
}
