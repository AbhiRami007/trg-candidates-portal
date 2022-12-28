import {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {JobsListing} from '../jobs/JobsListing'

const BuilderPageWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Jobs</PageTitle>
      <JobsListing />
    </>
  )
}

export default BuilderPageWrapper
