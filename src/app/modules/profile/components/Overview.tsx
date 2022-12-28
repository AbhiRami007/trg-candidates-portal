import React, {useState} from 'react'
import {Link} from 'react-router-dom'

export function Overview() {
  const userInfo: any = localStorage.getItem('userData')
  const [user]: any = useState(JSON.parse(userInfo))
  return (
    <>
      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Profile Details</h3>
          </div>

          <Link to='/pages/profile/settings' className='btn btn-primary align-self-center'>
            Edit Profile
          </Link>
        </div>

        <div className='card-body p-9'>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Full Name</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>
                {user.first_name + ' ' + user.last_name}
              </span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Position</label>

            <div className='col-lg-8 fv-row'>
              <span className='fw-bold fs-6'>{user.position ? user.position : 'Not Updated'}</span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Address</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>
                {user.address ? user.address : 'Not Updated'}
              </span>
            </div>
          </div>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              Contact
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Phone number must be active'
              ></i>
            </label>

            <div className='col-lg-8 d-flex align-items-center'>
              <span className='fw-bolder fs-6 me-2'>{user.phone ? user.phone : 'Not Updated'}</span>

              {user.phone && user.phoneVerified ? (
                <span className='badge badge-success'>Verified</span>
              ) : (
                user.phone &&
                !user.phoneVerified && <span className='badge badge-danger'>Not Verified</span>
              )}
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Current Company</label>

            <div className='col-lg-8 fv-row'>
              <span className='fw-bold fs-6'>{user.company ? user.company : 'Not Updated'}</span>
            </div>
          </div>
          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Company Site</label>

            <div className='col-lg-8'>
              {user.company_url ? (
                <a href={user.company_url} className='fw-bold fs-6 text-dark text-hover-primary'>
                  {user.company_url}
                </a>
              ) : (
                <span className='fw-bolder fs-6 me-2'>Not Updated</span>
              )}
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>
              Country
              <i
                className='fas fa-exclamation-circle ms-1 fs-7'
                data-bs-toggle='tooltip'
                title='Country of origination'
              ></i>
            </label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>
                {user.country ? user.country : 'Not Updated'}
              </span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Language</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>
                {user.language ? user.language : 'Not Updated'}
              </span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Time Zone</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>
                {user.time_zone ? user.time_zone : 'Not Updated'}
              </span>
            </div>
          </div>

          <div className='row mb-7'>
            <label className='col-lg-4 fw-bold text-muted'>Currency</label>

            <div className='col-lg-8'>
              <span className='fw-bolder fs-6 text-dark'>
                {user.currency ? user.currency : 'Not Updated'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ChartsWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget1 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div>

      <div className='row gy-10 gx-xl-10'>
        <div className='col-xl-6'>
          <ListsWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>

        <div className='col-xl-6'>
          <TablesWidget5 className='card-xxl-stretch mb-5 mb-xl-10' />
        </div>
      </div> */}
    </>
  )
}
