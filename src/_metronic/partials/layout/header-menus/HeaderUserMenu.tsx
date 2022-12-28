/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'
import {Link} from 'react-router-dom'
import {useAuth} from '../../../../app/modules/auth'
import {Languages} from './Languages'
import {toAbsoluteUrl} from '../../../helpers'

const HeaderUserMenu: FC = () => {
  const {currentUser, logout} = useAuth()
  return (
    <div
      className='menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg menu-state-primary fw-semibold py-4 fs-6 w-275px'
      data-kt-menu='true'
    >
      <div className='menu-item px-3'>
        <div className='menu-content d-flex align-items-center px-3'>
          <div className='symbol symbol-50px me-5'>
            <img alt='Logo' src={toAbsoluteUrl('/media/avatars/300-2.jpg')} />
          </div>

          <div className='d-flex flex-column'>
            <div className='fw-bold d-flex align-items-center fs-5'>
              {currentUser?.first_name} {currentUser?.last_name}
              <span className='badge badge-light-success fw-bold fs-8 px-2 py-1 ms-2'>Pro</span>
            </div>
            <a href='#' className='fw-semibold text-muted text-hover-primary fs-7'>
              {currentUser?.email}
            </a>
          </div>
        </div>
      </div>

      <div className='separator my-2'></div>

      <div className='menu-item px-5'>
        <Link to={'/pages/profile/overview'} className='menu-link px-5'>
          My Profile
        </Link>
      </div>

      <div className='menu-item px-5'>
        <Link to={'/pages/profile/projects'} className='menu-link px-5'>
          <span className='menu-text'>My Projects</span>
          <span className='menu-badge'>
            <span className='badge badge-light-danger badge-circle fw-bold fs-7'>3</span>
          </span>
        </Link>
      </div>

      <div className='menu-item px-5'>
        <Link to={'/pages/profile/documents'} className='menu-link px-5'>
          <span className='menu-text'>My Documents</span>
          <span className='menu-badge'>
            <span className='badge badge-light-danger badge-circle fw-bold fs-7'>3</span>
          </span>
        </Link>
      </div>

      <div className='menu-item px-5'>
        <div className='menu-content px-3'>
          <label className='form-check form-switch form-check-custom form-check-solid'>
            <input
              className='form-check-input w-30px h-20px'
              type='checkbox'
              value='1'
              checked
              name='notifications'
            />
            <span className='form-check-label text-muted fs-7'>Notifications</span>
          </label>
        </div>
      </div>

      <div className='separator my-2'></div>

      <Languages />

      <div className='menu-item px-5 my-1'>
        <Link to='/pages/profile/settings' className='menu-link px-5'>
          Account Settings
        </Link>
      </div>

      <div className='menu-item px-5'>
        <a onClick={logout} className='menu-link px-5'>
          Sign Out
        </a>
      </div>
    </div>
  )
}

export {HeaderUserMenu}
