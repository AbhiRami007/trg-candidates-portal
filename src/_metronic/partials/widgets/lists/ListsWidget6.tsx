/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget6: React.FC<Props> = ({className}) => {
  return (
    <div className='card card-xl-stretch mb-5 mb-xl-8'>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>Notifications</h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-0'>
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-warning rounded p-5 mb-7'>
          {/* begin::Icon */}
          <span className='svg-icon svg-icon-warning me-5'>
            <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className='d-flex'>
            <Link to='/applied-jobs' className='fw-bold text-theme-btn fs-6'>
              A new comment is added in your recent application
            </Link>
          </div>
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center bg-light-warning rounded p-5 mb-7'>
          {/* begin::Icon */}
          <span className='svg-icon svg-icon-warning me-5'>
            <KTSVG path='/media/icons/duotune/abstract/abs027.svg' className='svg-icon-1' />
          </span>
          {/* end::Icon */}
          {/* begin::Title */}
          <div className='d-flex'>
            <Link to='/applied-jobs' className='fw-bold text-theme-btn fs-6'>
              You have an invitation to apply for a job
            </Link>
          </div>
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget6}
