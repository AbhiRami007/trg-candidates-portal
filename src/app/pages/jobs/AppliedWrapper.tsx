import {FC} from 'react'
import {PageTitle} from '../../../_metronic/layout/core'
import {AppliedList} from './AppliedList'

const AppliedWrapper: FC = () => {
  return (
    <>
      <PageTitle breadcrumbs={[]}>Applied Jobs</PageTitle>
      <AppliedList />
    </>
  )
}

export default AppliedWrapper
