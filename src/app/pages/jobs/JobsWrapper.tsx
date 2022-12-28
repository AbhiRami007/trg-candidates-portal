import {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {JobsListing} from './JobsListing'

const JobsWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Jobs</PageTitle>
      <JobsListing />
    </>
  )
}

export default JobsWrapper
