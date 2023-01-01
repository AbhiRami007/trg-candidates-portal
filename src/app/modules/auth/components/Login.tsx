/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useFormik} from 'formik'
import {getUserByToken, getUserProfile, login} from '../core/_requests'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {useAuth} from '../core/Auth'
// import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {getUserById} from '../../apps/user-management/users-list/core/_requests'

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  password: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
})

const initialValues = {
  email: '',
  password: '',
}

/*
  Formik+YUP+Typescript:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
  https://medium.com/@maurice.de.beijer/yup-validation-and-typescript-and-formik-6c342578a20e
*/

export function Login() {
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await login(values.email, values.password)
        saveAuth(auth)
        const {data: user} = await getUserByToken(auth.api_token)
        if (user) {
          if (user.avatar) {
            const {data: profile} = await getUserProfile(values.email, user.avatar)
            console.log(profile)
          }
          localStorage.setItem('userData', JSON.stringify(auth))
          setCurrentUser(user)
        }
      } catch (error) {
        console.error(error)
        saveAuth(undefined)
        setStatus('Login details are incorrect')
        setSubmitting(false)
        setLoading(false)
      }
    },
  })
  // const notifySuccess = (message: string) => {
  //   toast.success(message, {
  //     position: toast.POSITION.TOP_RIGHT,
  //   })
  // }

  // const notifyError = (message: string) => {
  //   toast.error(message, {
  //     position: toast.POSITION.TOP_RIGHT,
  //   })
  // }

  return (
    <form
      className='form w-75  ml-65'
      onSubmit={formik.handleSubmit}
      noValidate
      id='kt_login_signin_form'
    >
      {/* begin::Heading */}
      <div className='text-center mb-5'>
        <h1 className='text-theme mb-1'>Sign In</h1>
        <div className='text-gray-400 fw-semibold fs-4'>
          New Here?{' '}
          <Link to='/auth/registration' className='text-theme-yellow fw-bold'>
            Create an Account
          </Link>
        </div>
      </div>
      {/* begin::Heading */}

      {/* {formik.status && formik.errors && (
        <div>
          <ToastContainer />
        </div>
      )} */}

      {formik.status && (
        <div className='mb-lg-15 alert alert-danger'>
          <div className='alert-text font-weight-bold'>{formik.status}</div>
        </div>
      )}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <label className='form-label fs-6 fw-bold text-dark'>Email</label>
        <input
          placeholder='Enter Email'
          {...formik.getFieldProps('email')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {'is-invalid': formik.touched.email && formik.errors.email},
            {
              'is-valid': formik.touched.email && !formik.errors.email,
            }
          )}
          type='email'
          name='email'
          autoComplete='off'
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.email}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Form group */}
      <div className='fv-row mb-10'>
        <div className='d-flex justify-content-between mt-n5'>
          <div className='d-flex flex-stack mb-2'>
            {/* begin::Label */}
            <label className='form-label fw-bold text-dark fs-6 mb-0'>Password</label>
            {/* end::Label */}
            {/* begin::Link */}
            <Link
              to='/auth/forgot-password'
              className='text-theme-yellow fs-6 fw-bold'
              style={{marginLeft: '5px'}}
            >
              Forgot Password ?
            </Link>
            {/* end::Link */}
          </div>
        </div>
        <input
          type='password'
          placeholder='Enter Password'
          autoComplete='off'
          {...formik.getFieldProps('password')}
          className={clsx(
            'form-control form-control-lg form-control-solid',
            {
              'is-invalid': formik.touched.password && formik.errors.password,
            },

            {
              'is-valid': formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className='fv-plugins-message-container'>
            <div className='fv-help-block'>
              <span role='alert'>{formik.errors.password}</span>
            </div>
          </div>
        )}
      </div>
      {/* end::Form group */}

      {/* begin::Action */}
      <div
        className='text-center'
        // onClick={() => {
        //   formik.status && formik.errors
        //     ? notifyError(formik.status)
        //     : formik.status && !formik.errors && notifySuccess(formik.status)
        // }}
      >
        <button
          type='submit'
          id='kt_sign_in_submit'
          className='btn btn-lg  bg-theme w-100 mb-3'
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className=' indicator-label'>Continue</span>}
          {loading && (
            <span className='indicator-progress' style={{display: 'block'}}>
              Please wait...
              <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
            </span>
          )}
        </button>

        {/* begin::Separator */}
        <div className='text-center text-muted text-uppercase fw-bold mb-3 '>or</div>
        {/* end::Separator */}

        {/* begin::Google link */}
        <a href='#' className='btn  btn-flex flex-center bg-theme btn-lg w-100 mb-1'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
            className='h-20px me-3'
          />
          Continue with Google
        </a>
        {/* end::Google link */}

        {/* begin::Google link */}
        <a href='#' className='btn btn-flex flex-center bg-theme  w-100 mb-1'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/facebook-4.svg')}
            className='h-20px me-3'
          />
          Continue with Facebook
        </a>
        {/* end::Google link */}

        {/* begin::Google link */}
        <a href='#' className='btn  btn-flex flex-center bg-theme btn-lg w-100 mb-1'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/apple-black.svg')}
            className='h-20px me-3'
          />
          Continue with Apple
        </a>
        {/* end::Google link */}
      </div>
      {/* end::Action */}
    </form>
  )
}
