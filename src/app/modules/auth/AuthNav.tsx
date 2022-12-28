/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/anchor-is-valid */
import clsx from 'clsx'
import {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {KTSVG, toAbsoluteUrl} from '../../../_metronic/helpers'
import {HeaderUserMenu, Search, ThemeModeSwitcher} from '../../../_metronic/partials'
import {AUTH_LOCAL_STORAGE_KEY} from './core/AuthHelpers'
const AuthNav = () => {
  const [user, setUser] = useState(localStorage.getItem(AUTH_LOCAL_STORAGE_KEY))
  const [dashBoardActive, setDashActive] = useState(true)
  const [jobsActive, setJobsActive] = useState(false)
  const [appliedActive, setAppliedActive] = useState(false)

  const toolbarButtonMarginClass = 'ms-1 ms-lg-3',
    toolbarButtonHeightClass =
      'btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40p',
    toolbarUserAvatarHeightClass = 'symbol-30px symbol-md-40px',
    toolbarButtonIconSizeClass = 'svg-icon-1'
  useEffect(() => {
    document.body.style.backgroundColor = 'none'
    setUser(localStorage.getItem(AUTH_LOCAL_STORAGE_KEY))
    return () => {}
  }, [localStorage.getItem('userData')])

  const changeActive = (e: any) => {
    debugger
    if (e.target.id == 'dashboard') {
      setDashActive(true)
      setAppliedActive(false)
      setJobsActive(false)
    } else if (e.target.id == 'jobs') {
      setDashActive(false)
      setAppliedActive(false)
      setJobsActive(true)
    } else if (e.target.id == 'applied') {
      setDashActive(false)
      setAppliedActive(true)
      setJobsActive(false)
    } else {
      setDashActive(false)
      setAppliedActive(false)
      setJobsActive(false)
    }
  }

  return (
    <>
      <nav
        id='navbar'
        style={{padding: '10px 20px 10px 20px'}}
        className='navbar navbar-expand-lg fixed-top navbar-light'
        aria-label='Main navigation'
      >
        <div className='container'>
          <a className='navbar-brand' href='https://www.therecruitsgroup.com'>
            <img
              style={{width: '227px'}}
              src='https://www.therecruitsgroup.com/images/63819c7f4169d.png'
              alt='the recruits group'
            />
          </a>
          <button
            className='navbar-toggler p-0 border-0'
            type='button'
            id='navbarSideCollapse'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='navbar-collapse offcanvas-collapse' id='navbarsExampleDefault'>
            <ul id='navbar-nav' className='navbar-nav ms-auto navbar-nav-scroll'>
              {user && (
                <>
                  <li className='nav-item'>
                    <Link
                      className={`nav-link ${dashBoardActive ? 'activeLink' : ''} `}
                      id='dashboard'
                      to='/dashboard'
                      onClick={changeActive}
                    >
                      Dashboard
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      className={`nav-link ${jobsActive ? 'activeLink' : ' '}  `}
                      id='jobs'
                      to='/jobs'
                      onClick={changeActive}
                    >
                      Jobs
                    </Link>
                  </li>
                  <li className='nav-item'>
                    <Link
                      className={`nav-link ${appliedActive ? 'activeLink' : ' '} `}
                      id='applied'
                      to='/applied-jobs'
                      onClick={changeActive}
                    >
                      Applied Jobs
                    </Link>
                  </li>
                  {/* Search */}
                  <div
                    className={clsx('d-flex align-items-stretch', toolbarButtonMarginClass)}
                    onClick={changeActive}
                  >
                    <Search />
                  </div>
                  {/* CHAT */}
                  <div
                    className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}
                    onClick={changeActive}
                  >
                    {/* begin::Menu wrapper */}
                    <div
                      className={clsx(
                        'btn btn-icon btn-active-light-primary btn-custom position-relative',
                        toolbarButtonHeightClass
                      )}
                      id='kt_drawer_chat_toggle'
                    >
                      <KTSVG
                        path='/media/icons/duotune/communication/com012.svg'
                        className={toolbarButtonIconSizeClass}
                      />

                      <span className='bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink'></span>
                    </div>
                    {/* end::Menu wrapper */}
                  </div>
                  {/* begin::Theme mode */}
                  <div
                    className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}
                    onClick={changeActive}
                  >
                    <ThemeModeSwitcher toggleBtnClass={toolbarButtonHeightClass} />
                  </div>
                  {/* end::Theme mode */}
                  {/* begin::User */}
                  <div
                    className={clsx('d-flex align-items-center', toolbarButtonMarginClass)}
                    id='kt_header_user_menu_toggle'
                    onClick={changeActive}
                  >
                    {/* begin::Toggle */}
                    {/* <div
                  className={clsx('cursor-pointer symbol ', toolbarUserAvatarHeightClass)}
                  data-kt-menu-trigger='click'
                  data-kt-menu-attach='parent'
                  data-kt-menu-placement='bottom-end'
                  data-kt-menu-flip='bottom'
                > */}
                    <label
                      htmlFor='avatar-img'
                      className={clsx(
                        'cursor-pointer symbol  nav-link',
                        toolbarUserAvatarHeightClass
                      )}
                      data-kt-menu-trigger='click'
                      data-kt-menu-attach='parent'
                      data-kt-menu-placement='bottom-end'
                      data-kt-menu-flip='bottom'
                    >
                      Abhirami P S{' '}
                      <img
                        id='avatar-img'
                        className='h-30px w-30px rounded'
                        src={toAbsoluteUrl('/media/avatars/300-2.jpg')}
                        alt='metronic'
                      />
                    </label>
                    {/* </div> */}
                    <HeaderUserMenu />
                    {/* end::Toggle */}
                  </div>
                </>
              )}
              {!user && (
                <li className='nav-item d-block d-md-none'>
                  <a
                    className='nav-link'
                    id='contact'
                    href='https://www.therecruitsgroup.com/contact'
                  >
                    Contact Us
                  </a>
                </li>
              )}
            </ul>
            {!user && (
              <span className='nav-item ctnBtn d-none d-md-block btnClass'>
                <a
                  className='btn-solid-lg-blue btn-solid-lg'
                  href='https://www.therecruitsgroup.com/contact'
                >
                  Contact us
                </a>
              </span>
            )}
          </div>
        </div>
      </nav>
    </>
  )
}

export {AuthNav}
