/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import {Outlet, Route, Routes} from 'react-router-dom'
import {Registration} from './components/Registration'
import {ForgotPassword} from './components/ForgotPassword'
import {Login} from './components/Login'
import {AuthNav} from './AuthNav'
import {PasswordReset} from './components/PasswordReset'
import {toAbsoluteUrl} from '../../../_metronic/helpers/AssetHelpers'

const AuthLayout = () => {
  useEffect(() => {
    document.body.style.backgroundImage = 'none'
    return () => {}
  }, [])

  return (
    <>
      <AuthNav />
      <div
        className='body'
        // className='d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed h-100px'
      >
        {/* begin::Content */}
        {/* <div className='d-flex item' style={{border: '1px solid'}}>
          <div
            className='w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto mt-100'
            style={{border: '1px solid'}}
          >
            <Outlet />
            <div className='text-center mt-4'>
              <a href='#' className='text-center text-muted text-hover-primary px-2'>
                *Terms and Conditions
              </a>
            </div>
          </div>
          <div
            className=''
            style={{
              border: '1px solid',
              backgroundImage: `url(${toAbsoluteUrl('/media/illustrations/sketchy-1/14.png')})`,
            }}
          >
            demo{' '}
          </div>

        </div> */}

        <div className='flex  mb-4'>
          <div className='one'>
            <div className='w-lg-500px bg-body rounded shadow-sm p-10 p-lg-5 mx-auto mt-50'>
              <Outlet />
              <div className='text-center mt-4'>
                <a href='#' className='text-center text-muted text-hover-primary px-2'>
                  *Terms and Conditions
                </a>
              </div>
            </div>
          </div>

          {/* <div
            className='two'
            style={{backgroundImage: `url(${toAbsoluteUrl('/media/backgrounds/trg-bg-22.png')})`}}
          ></div> */}
          <div
            className='two'
            aria-hidden='true'
            style={{
              backgroundImage: `url(${toAbsoluteUrl('/media/backgrounds/trg-bg-2.png')})`,
            }}
          ></div>
          {/* <div className='two'></div> */}
        </div>

        {/* end::Content */}
      </div>
    </>
  )
}

const AuthPage = () => (
  <Routes>
    <Route element={<AuthLayout />}>
      <Route path='login' element={<Login />} />
      <Route path='registration' element={<Registration />} />
      <Route path='forgot-password' element={<ForgotPassword />} />
      <Route path='password-reset/:id' element={<PasswordReset />} />
      <Route index element={<Login />} />
    </Route>
  </Routes>
)

export {AuthPage}
