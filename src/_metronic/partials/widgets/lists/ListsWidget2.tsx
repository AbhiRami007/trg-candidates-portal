/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Dropdown1} from '../../content/dropdown/Dropdown1'

type Props = {
  className: string
}

const ListsWidget2: React.FC<Props> = ({className}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0'>
        <h3 className='card-title fw-bold text-dark'>New Jobs</h3>
      </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body pt-2'>
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/books/1.png')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}

          <div className='flex-grow-1'>
            <Link to='/jobs' className='text-dark fw-bold text-hover-primary fs-6'>
              The Recruits Group
            </Link>
            <span className='text-muted d-block fw-semibold'>London</span>

            <span className='text-muted d-block fw-semibold'>Project Manager</span>
          </div>

          {/* end::Text */}
        </div>
        {/* end::Item */}
        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/books/1.png')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}

          <div className='flex-grow-1'>
            <Link to='/jobs' className='text-dark fw-bold text-hover-primary fs-6'>
              The Recruits Group
            </Link>
            <span className='text-muted d-block fw-semibold'>London</span>

            <span className='text-muted d-block fw-semibold'>Backend Developer</span>
          </div>

          {/* end::Text */}
        </div>
        {/* end::Item */}

        {/* begin::Item */}
        <div className='d-flex align-items-center mb-7'>
          {/* begin::Avatar */}
          <div className='symbol symbol-50px me-5'>
            <img src={toAbsoluteUrl('/media/books/1.png')} className='' alt='' />
          </div>
          {/* end::Avatar */}
          {/* begin::Text */}

          <div className='flex-grow-1'>
            <Link to='/jobs' className='text-dark fw-bold text-hover-primary fs-6'>
              The Recruits Group
            </Link>
            <span className='text-muted d-block fw-semibold'>London</span>

            <span className='text-muted d-block fw-semibold'>Business Analyst</span>
          </div>

          {/* end::Text */}
        </div>
        {/* end::Item */}
      </div>
      {/* end::Body */}
    </div>
  )
}

export {ListsWidget2}
