/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState, useEffect} from 'react'
import {useFormik} from 'formik'
import * as Yup from 'yup'
import clsx from 'clsx'
import {getUserByToken, register, resendOtp, verifyEmailOtp} from '../core/_requests'

import {useAuth} from '../core/Auth'
import {Link, useNavigate} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../../_metronic/helpers'
import {PasswordMeterComponent} from '../../../../_metronic/assets/ts/components'
import Modal from '../../modals/Modal'
import OtpInput from '../../modals/OtpInput'

const initialValues = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  changepassword: '',
  acceptTerms: false,
}

const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('First name is required'),
  email: Yup.string()
    .email('Wrong email format')
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Email is required'),
  lastname: Yup.string()
    .min(3, 'Minimum 3 symbols')
    .max(50, 'Maximum 50 symbols')
    .required('Last name is required'),
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
  acceptTerms: Yup.bool().required('You must accept the terms and conditions'),
})

export function Registration() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const {saveAuth, setCurrentUser} = useAuth()
  const [show1, setShow1] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showBtn, setShowBtn] = useState(false)
  // const [showFailure, setShowFailure] = useState(false)
  const [isValid, setIsValid] = useState(true)
  const [invalidMsg, setInvalidMsg] = useState('')
  const [email, setEmail] = useState('')
  const [otp, setOtp] = useState('')
  const toggle = () => {
    setShow1(!show1)
  }
  const otpData = (value: string) => setOtp(value)
  const submitOtp = async () => {
    debugger
    const verifyOtp = await verifyEmailOtp(Number(otp), email)
    if (verifyOtp.data) {
      setShow1(false)
      setShowSuccess(true)
    } else {
      setIsValid(false)
      setInvalidMsg(verifyOtp.data)
      setShowBtn(true)
    }
  }

  const ResendOtp = async () => {
    await resendOtp(email)
    setShowBtn(false)
  }

  const goToLogin = () => {
    navigate('/auth/login')
  }

  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: async (values, {setStatus, setSubmitting}) => {
      debugger
      setLoading(true)
      try {
        const {data: auth} = await register(
          values.email,
          values.firstname,
          values.lastname,
          values.password,
          values.changepassword
        )
        setEmail(values.email)
        saveAuth(auth)
        // const {data: user} = await getUserByToken(auth.api_token)
        // setCurrentUser(user)
        if (auth) {
          setShow1(true)
        }
      } catch (error) {
        debugger
        console.error(error)
        saveAuth(undefined)
        if (error instanceof Error) {
          setStatus(error.message)
        }
        setSubmitting(false)
        setLoading(false)
      }
    },
  })

  useEffect(() => {
    PasswordMeterComponent.bootstrap()
  }, [])

  return (
    <>
      <form
        className='form w-75  ml-65'
        noValidate
        id='kt_login_signup_form'
        onSubmit={formik.handleSubmit}
      >
        {/* begin::Heading */}
        <div className='text-center mb-5 mt-5'>
          <h1 className='text-theme mb-1'>Create an Account</h1>
          <div className='text-gray-400 fw-semibold fs-4'>
            Have an account?{' '}
            <Link to='/auth/login' className='text-theme-yellow fw-bold'>
              Forgot Password ?
            </Link>
          </div>
        </div>
        {/* begin::Heading */}

        {/* begin::Action */}
        <a href='#' className='btn  btn-flex flex-center bg-theme btn-lg w-100 mb-3'>
          <img
            alt='Logo'
            src={toAbsoluteUrl('/media/svg/brand-logos/google-icon.svg')}
            className='h-20px me-3'
          />
          Sign In with Google
        </a>
        {/* end::Action */}

        <div className='d-flex align-items-center mb-2'>
          <div className='border-bottom border-gray-300 mw-50 w-100'></div>
          <span className='fw-semibold text-gray-400 fs-7 mx-2'>OR</span>
          <div className='border-bottom border-gray-300 mw-50 w-100'></div>
        </div>

        {formik.status && (
          <div className='mb-lg-15 alert alert-danger'>
            <div className='alert-text font-weight-bold'>{formik.status}</div>
          </div>
        )}

        {/* begin::Form group Firstname */}
        <div className='row fv-row mb-2'>
          <div className='col-xl-6'>
            <label className='class="form-label fw-bold text-dark fs-6'>First name</label>
            <input
              placeholder='First name'
              type='text'
              autoComplete='off'
              {...formik.getFieldProps('firstname')}
              className={clsx(
                'form-control form-control-lg form-control-solid',
                {
                  'is-invalid': formik.touched.firstname && formik.errors.firstname,
                },
                {
                  'is-valid': formik.touched.firstname && !formik.errors.firstname,
                }
              )}
            />
            {formik.touched.firstname && formik.errors.firstname && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.firstname}</span>
                </div>
              </div>
            )}
          </div>
          <div className='col-xl-6'>
            <label className='class="form-label fw-bold text-dark fs-6'>Last Name</label>
            <input
              placeholder='Last name'
              type='text'
              autoComplete='off'
              {...formik.getFieldProps('lastname')}
              className={clsx(
                'form-control form-control-lg form-control-solid',
                {
                  'is-invalid': formik.touched.lastname && formik.errors.lastname,
                },
                {
                  'is-valid': formik.touched.lastname && !formik.errors.lastname,
                }
              )}
            />
            {formik.touched.lastname && formik.errors.lastname && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.lastname}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* end::Form group */}

        {/* begin::Form group Email */}
        <div className='fv-row mb-2'>
          <label className='form-label fw-bold text-dark fs-6'>Email</label>
          <input
            placeholder='Email'
            type='email'
            autoComplete='off'
            {...formik.getFieldProps('email')}
            className={clsx(
              'form-control form-control-lg form-control-solid',
              {'is-invalid': formik.touched.email && formik.errors.email},
              {
                'is-valid': formik.touched.email && !formik.errors.email,
              }
            )}
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
        <div className='fv-row mb-10'>
          <div className='form-check form-check-custom form-check-solid'>
            <input
              className='form-check-input'
              type='checkbox'
              id='kt_login_toc_agree'
              {...formik.getFieldProps('acceptTerms')}
            />
            <label
              className='form-check-label fw-semibold text-gray-700 fs-6'
              htmlFor='kt_login_toc_agree'
            >
              I Agree the{' '}
              <Link to='/auth/terms' className='text-theme-yellow fw-bold'>
                terms and conditions
              </Link>
              .
            </label>
            {formik.touched.acceptTerms && formik.errors.acceptTerms && (
              <div className='fv-plugins-message-container'>
                <div className='fv-help-block'>
                  <span role='alert'>{formik.errors.acceptTerms}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* end::Form group */}

        {/* begin::Form group */}
        <div className='text-center'>
          <button
            type='submit'
            id='kt_sign_up_submit'
            data-bs-toggle='modal'
            data-bs-target='#kt_modal_1'
            className='btn btn-lg  bg-theme w-100 mb-1'
            disabled={formik.isSubmitting || !formik.isValid || !formik.values.acceptTerms}
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

      <Modal
        show={show1}
        title='Enter OTP'
        close={toggle}
        ok='Submit'
        cancel='Cancel'
        content={<OtpInput value={otp} valueLength={6} onChange={otpData} />}
        submit={submitOtp}
        showBtn={showBtn}
        isValid={isValid}
        invalidMsg={invalidMsg}
        BtnMsg='Resend OTP'
        BtnClick={ResendOtp}
      />

      <Modal
        show={showSuccess}
        title='Success'
        close={toggle}
        ok='Ok'
        cancel=''
        content='User Registered'
        submit={goToLogin}
      />
    </>
  )
}
