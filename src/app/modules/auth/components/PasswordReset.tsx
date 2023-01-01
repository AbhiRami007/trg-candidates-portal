import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link, Navigate, useParams} from 'react-router-dom'
import {useFormik} from 'formik'
import {requestPassword, resetPassword, updateAvatar, updateUser} from '../core/_requests'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {AUTH_LOCAL_STORAGE_KEY} from '../core/AuthHelpers'

const initialValues = {
  password: '',
  changepassword: '',
}

const forgotPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(3, 'Minimum 8 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Password is required'),
  changepassword: Yup.string()
    .required('Password confirmation is required')
    .when('password', {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref('password')], "Password and Confirm Password didn't match"),
    }),
})

export function PasswordReset() {
  const [afterDelay, setDelay] = useState(false)
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const {id}: any = useParams()
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      try {
        const {data: auth} = await updateUser(id, {password: values.password})
        if (auth) {
          setHasErrors(false)
          setTimeout(() => {
            setDelay(true)
          }, 1000)
        }
      } catch (error) {
        console.error(error)
        setStatus(error.response.data.message)
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  const notifySuccess = (message: string) => {
    toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    })
    setTimeout(() => {
      setDelay(true)
    }, 5000)
  }

  const notifyError = (message: string) => {
    toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  return (
    <>
      <form
        className='form w-75  ml-65'
        onSubmit={formik.handleSubmit}
        noValidate
        id='kt_login_signin_form'
      >
        {/* begin::Heading */}
        <div className='text-center mb-5'>
          <h1 className='text-theme mb-1'>Forgot Password?</h1>
          <div className='text-gray-400 fw-semibold fs-4'>
            Enter your email to reset your password
          </div>
        </div>
        {/* begin::Heading */}

        {hasErrors === true && (
          <div>
            <ToastContainer />
          </div>
        )}

        {hasErrors === false && (
          <>
            <div>
              <ToastContainer />
            </div>

            {afterDelay && <Navigate to='/auth/login' />}
          </>
        )}
        {/* begin::Form group Password */}
        <div className='mb-2 fv-row' data-kt-password-meter='true'>
          <div className='mb-1'>
            <label className='form-label fw-bold text-dark fs-6'>Password</label>
            <div className='position-relative mb-3'>
              <input
                type='password'
                placeholder='Password'
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
            {/* begin::Meter */}
            <div
              className='d-flex align-items-center mb-3'
              data-kt-password-meter-control='highlight'
            >
              <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
              <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
              <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2'></div>
              <div className='flex-grow-1 bg-secondary bg-active-success rounded h-5px'></div>
            </div>
            {/* end::Meter */}
          </div>
          <div className='text-muted'>
            Use 8 or more characters with a mix of letters, numbers & symbols.
          </div>
        </div>
        {/* end::Form group */}

        {/* begin::Form group Confirm password */}
        <div className='fv-row mb-5'>
          <label className='form-label fw-bold text-dark fs-6'>Confirm Password</label>
          <input
            type='password'
            placeholder='Password confirmation'
            autoComplete='off'
            {...formik.getFieldProps('changepassword')}
            className={clsx(
              'form-control form-control-lg form-control-solid',
              {
                'is-invalid': formik.touched.changepassword && formik.errors.changepassword,
              },
              {
                'is-valid': formik.touched.changepassword && !formik.errors.changepassword,
              }
            )}
          />
          {formik.touched.changepassword && formik.errors.changepassword && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.changepassword}</span>
              </div>
            </div>
          )}
        </div>
        {/* end::Form group */}

        {/* begin::Form group */}
        <div
          className='text-center'
          onClick={() => {
            hasErrors == true
              ? notifyError(' Sorry, looks like there are some errors detected, please try again.')
              : notifySuccess('Password reset email send. Please Check your email!')
          }}
        >
          <button
            type='submit'
            id='kt_password_reset_submit'
            className='btn btn-lg  bg-theme w-100 mb-1'
            disabled={formik.isSubmitting || !formik.isValid}
          >
            {!loading && <span className='indicator-label'>Submit</span>}
            {loading && (
              <span className='indicator-progress' style={{display: 'block'}}>
                Please wait...{' '}
                <span className='spinner-border spinner-border-sm align-middle ms-2'></span>
              </span>
            )}
          </button>

          <Link to='/auth/login'>
            <button
              type='button'
              id='kt_login_signup_form_cancel_button'
              className='btn btn-lg  bg-theme w-100 mb-1'
            >
              Cancel
            </button>
          </Link>
        </div>
        {/* end::Form group */}
      </form>
    </>
  )
}
