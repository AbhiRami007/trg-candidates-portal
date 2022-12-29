import {useState} from 'react'
import * as Yup from 'yup'
import clsx from 'clsx'
import {Link, Navigate} from 'react-router-dom'
import {useFormik} from 'formik'
import {requestPassword} from '../core/_requests'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const initialValues = {
  email: 'admin@demo.com',
}

const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
})

export function ForgotPassword() {
  const [afterDelay, setDelay] = useState(false)
  const [loading, setLoading] = useState(false)
  const [hasErrors, setHasErrors] = useState<boolean | undefined>(undefined)
  const formik = useFormik({
    initialValues,
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, {setStatus, setSubmitting}) => {
      setLoading(true)
      setHasErrors(undefined)
      setTimeout(() => {
        requestPassword(values.email)
          .then(({data: {result}}) => {
            setHasErrors(false)
            setLoading(false)
          })
          .catch(() => {
            setHasErrors(true)
            setLoading(false)
            setSubmitting(false)
            setStatus('The login detail is incorrect')
          })
      }, 1000)
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
        {/* begin::Form group */}
        <div className='fv-row mb-10'>
          <label className='form-label fs-6 fw-bold text-dark'>Email</label>
          <input
            placeholder='Email'
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
          {formik.touched.email && formik.errors.email && (
            <div className='fv-plugins-message-container'>
              <div className='fv-help-block'>
                <span role='alert'>{formik.errors.email}</span>
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
