import React, {useEffect, useState} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../../_metronic/helpers'
import {AUTH_LOCAL_STORAGE_KEY} from '../../auth'
import {getUserDataById} from '../../auth/core/_requests'

export const Overview = () => {
  debugger
  const navigate = useNavigate()
  const [user, setUser]: any = useState()
  useEffect(() => {
    const getUser = async () => {
      try {
        let userData: any = localStorage.getItem(AUTH_LOCAL_STORAGE_KEY)
        const id = JSON.parse(userData).userId
        userData = await getUserDataById(id)
        if (userData.data) {
          setUser(userData.data)
        } else {
          navigate('/auth/login')
        }
      } catch (e) {
        console.log(e)
      }
    }
    getUser()
  }, [])

  return (
    <>
      <div className='d-flex flex-wrap flex-stack mb-6'>
        <h3 className='fw-bold my-2'>Profile Overview</h3>

        <div className='d-flex flex-wrap my-2'>
          <div className='me-4'></div>
          <a
            href='#'
            className='btn btn-primary btn-sm'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_create_project'
          >
            Edit Profile
          </a>
        </div>
      </div>
      <div className='card mb-2 mb-xl-5' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>About Me</h3>
          </div>
        </div>

        {user && (
          <div className='card-body p-9'>
            {/* <div className='row mb-7'>
              <div className='col-lg-8'> */}
            <span className='fw-bold fs-6 text-muted'>
              It is a long established fact that a reader will be distracted by the readable content
              of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
              more-or-less normal distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </span>
            {/* </div>
            </div> */}
          </div>
        )}
      </div>

      <div className='card mb-5 mb-xl-10' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Profile Details</h3>
          </div>

          {/* <Link to='/pages/profile/settings' className='btn btn-primary align-self-center'>
            Edit Profile
          </Link> */}
        </div>

        {user && (
          <div className='card-body p-9'>
            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>Full Name</label>

              <div className='col-lg-8'>
                <span className='fw-bolder fs-6 text-dark'>
                  {user.data.first_name + ' ' + user.data.last_name}
                </span>
              </div>
            </div>

            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>Position</label>

              <div className='col-lg-8 fv-row'>
                <span className='fw-bold fs-6 text-dark'>
                  {user.data.position ? user.data.position : 'Not Updated'}
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
                <span className='fw-bolder fs-6 me-2 text-dark'>
                  {user.data.phone ? user.data.phone : 'Not Updated'}
                </span>

                {user.data.phone && user.data.phoneVerified ? (
                  <span className='badge badge-success'>Verified</span>
                ) : (
                  user.data.phone &&
                  !user.data.phoneVerified && (
                    <span className='badge badge-danger'>Not Verified</span>
                  )
                )}
              </div>
            </div>

            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>Current Company</label>

              <div className='col-lg-8 fv-row'>
                <span className='fw-bold fs-6 text-dark'>
                  {user.data.company ? user.data.company : 'Not Updated'}
                </span>
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
                  {user.data.country ? user.data.country : 'Not Updated'}
                </span>
              </div>
            </div>

            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>Language</label>

              <div className='col-lg-8'>
                <span className='fw-bolder fs-6 text-dark'>
                  {user.data.language ? user.data.language : 'Not Updated'}
                </span>
              </div>
            </div>

            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>Time Zone</label>

              <div className='col-lg-8'>
                <span className='fw-bolder fs-6 text-dark'>
                  {user.data.time_zone ? user.data.time_zone : 'Not Updated'}
                </span>
              </div>
            </div>

            <div className='row mb-7'>
              <label className='col-lg-4 fw-bold text-muted'>Currency</label>

              <div className='col-lg-8'>
                <span className='fw-bolder fs-6 text-dark'>
                  {user.data.currency ? user.data.currency : 'Not Updated'}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className='card mb-2 mb-xl-5' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Experience</h3>
          </div>
        </div>

        {user && (
          <>
            <div className='card card-bordered'>
              <div className='card-header justify-content-end ribbon ribbon-start'>
                <div className='ribbon-label bg-primary'>2022 - Present</div>
                <div className='card-title d-block'>
                  The Recruits Group
                  <span className='text-muted d-block'>London, UK</span>
                </div>
              </div>

              <div className='card-body'>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
                <div>
                  <br />

                  <span className='fw-bold pt-4'>Skills: </span>
                  <span>Python, </span>
                  <span>Python, </span>
                  <span>Python, </span>
                </div>
              </div>
            </div>

            <div className='card card-bordered'>
              <div className='card-header justify-content-end ribbon ribbon-start'>
                <div className='ribbon-label bg-primary'>2022 - Present</div>
                <div className='card-title d-block'>
                  The Recruits Group
                  <span className='text-muted d-block'>London, UK</span>
                </div>
              </div>

              <div className='card-body'>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
                <div>
                  <br />

                  <span className='fw-bold pt-4'>Skills: </span>
                  <span>Python, </span>
                  <span>Python, </span>
                  <span>Python, </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className='card mb-2 mb-xl-5' id='kt_profile_details_view'>
        <div className='card-header cursor-pointer'>
          <div className='card-title m-0'>
            <h3 className='fw-bolder m-0'>Education</h3>
          </div>
        </div>

        {user && (
          <>
            <div className='card card-bordered'>
              <div className='card-header justify-content-end ribbon ribbon-start'>
                <div className='ribbon-label text-theme'>2018 - 2020</div>
                <div className='card-title d-block'>
                  College of Engineering, Trivandrum
                  <span className='text-muted d-block'>Thiruvananthapuram, Kerala</span>
                </div>
              </div>

              <div className='card-body'>
                <span className='text-muted d-block'>Master Of Computer Application</span>
                <div>
                  <span className='fw-bold pt-4'>Grade: </span>
                  <span>A</span>
                </div>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
              </div>
            </div>

            <div className='card card-bordered'>
              <div className='card-header justify-content-end ribbon ribbon-start'>
                <div className='ribbon-label text-theme'>2022 - Present</div>
                <div className='card-title d-block'>
                  The Recruits Group
                  <span className='text-muted d-block'>London, UK</span>
                </div>
              </div>

              <div className='card-body'>
                It is a long established fact that a reader will be distracted by the readable
                content of a page when looking at its layout. The point of using Lorem Ipsum is that
                it has a more-or-less normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English.
                <div>
                  <br />

                  <span className='fw-bold pt-4'>Skills: </span>
                  <span>Python, </span>
                  <span>Python, </span>
                  <span>Python, </span>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
